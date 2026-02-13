
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Thermometer, Wind, Battery, Zap, ShieldCheck, Wrench, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServiceCard, ServiceColor } from '../components/ServiceCard';
import { useTranslations } from '../i18n/useTranslations';

import DocumentTitle from '../components/shared/DocumentTitle';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslations('about');

    return (
        <div className="min-h-screen bg-slate-50">
            <DocumentTitle
                title={t('hero.title')}
                description={t('hero.description')}
            // canonical="/about"
            />
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-60 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2874&auto=format&fit=crop"
                        alt="Geneva Landscape Energy"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            {t('hero.description')}
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group"
                        >
                            {t('hero.cta')}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4 block">{t('mission.badge')}</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-8">
                        {t('mission.title')}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {t('mission.p1')}
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {t('mission.p2')}
                    </p>
                </div>
            </section>

            {/* 5 Pillars Section */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                            {t('pillars.title')}
                        </h2>
                        <p className="text-slate-500">{t('pillars.subtitle')}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            {
                                icon: Thermometer,
                                title: t('pillars.items.heatPump.title'),
                                description: t('pillars.items.heatPump.description'),
                                color: "orange" as ServiceColor
                            },
                            {
                                icon: Sun,
                                title: t('pillars.items.solar.title'),
                                description: t('pillars.items.solar.description'),
                                color: "yellow" as ServiceColor
                            },
                            {
                                icon: Wind,
                                title: t('pillars.items.hvac.title'),
                                description: t('pillars.items.hvac.description'),
                                color: "blue" as ServiceColor
                            },
                            {
                                icon: Battery,
                                title: t('pillars.items.battery.title'),
                                description: t('pillars.items.battery.description'),
                                color: "emerald" as ServiceColor
                            },
                            {
                                icon: Zap,
                                title: t('pillars.items.charging.title'),
                                description: t('pillars.items.charging.description'),
                                color: "indigo" as ServiceColor
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-full"
                            >
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    color={service.color}
                                    delay={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-6 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-4 block">{t('whyUs.badge')}</span>
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                                {t('whyUs.title')}
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                {t('whyUs.description')}
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <Wrench size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{t('whyUs.items.certified.title')}</h4>
                                        <p className="text-slate-400 text-sm">{t('whyUs.items.certified.description')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{t('whyUs.items.localSupport.title')}</h4>
                                        <p className="text-slate-400 text-sm">{t('whyUs.items.localSupport.description')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{t('whyUs.items.trustedTech.title')}</h4>
                                        <p className="text-slate-400 text-sm">{t('whyUs.items.trustedTech.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/img/panneau_installation.webp"
                                    alt="Installation de Panneaux Solaires"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 left-4 right-4 md:left-auto md:right-auto md:-left-6 bg-white p-6 rounded-xl shadow-xl md:max-w-xs text-slate-900">
                                <p className="font-display font-bold text-3xl text-emerald-600 mb-1">{t('whyUs.stat.value')}</p>
                                <p className="text-sm font-medium">{t('whyUs.stat.label')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-emerald-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                        {t('cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
                        >
                            {t('cta.button')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
