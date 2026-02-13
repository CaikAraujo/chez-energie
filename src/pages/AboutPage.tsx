
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Thermometer, Wind, Battery, Zap, ShieldCheck, Wrench, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServiceCard, ServiceColor } from '../components/ServiceCard';

import DocumentTitle from '../components/shared/DocumentTitle';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50">
            <DocumentTitle
                title="À Propos de Nous"
                description="Découvrez Chez Énergie, votre partenaire local à Genève pour l'installation experte de systèmes énergétiques durables."
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
                            Énergie Propre.<br />
                            <span className="text-emerald-400">Économie Réelle.</span><br />
                            Futur Garanti.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            Chez Energie est votre partenaire à Genève pour une transition énergétique intelligente.
                            Nous allions technologie de pointe et expertise locale pour valoriser votre bien et réduire votre facture énergétique.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group"
                        >
                            Demander un Diagnostic Gratuit
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4 block">Notre Mission</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-8">
                        L'Autosuffisance qui Respecte la Planète et votre Portefeuille
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        Chez Energie est née avec un objectif clair : rendre les maisons et entreprises de Genève et sa région autosuffisantes.
                        Nous croyons que l'énergie du futur est décentralisée, propre et, surtout, économique.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Nous ne vendons pas seulement des équipements ; nous offrons la liberté énergétique et un confort thermique de haut standing.
                    </p>
                </div>
            </section>

            {/* 5 Pillars Section */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                            Nos 5 Piliers de Solutions
                        </h2>
                        <p className="text-slate-500">Technologies intégrées pour une efficacité maximale.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            {
                                icon: Thermometer,
                                title: "Pompes à Chaleur",
                                description: "Remplacez les vieilles chaudières par une efficacité maximale. Chauffez votre maison en extrayant l'énergie thermique de l'air, réduisant drastiquement les coûts.",
                                color: "orange" as ServiceColor
                            },
                            {
                                icon: Sun,
                                title: "Panneaux Solaires",
                                description: "Transformez votre toit en un actif financier. Produisez votre propre électricité propre et protégez-vous contre l'augmentation des tarifs.",
                                color: "yellow" as ServiceColor
                            },
                            {
                                icon: Wind,
                                title: "Climatisation",
                                description: "Confort absolu en toutes saisons. Systèmes silencieux et intelligents garantissant la température parfaite, été comme hiver.",
                                color: "blue" as ServiceColor
                            },
                            {
                                icon: Battery,
                                title: "Batteries et Stockage",
                                description: "Utilisez le soleil même la nuit. Stockez l'excès de production solaire pour garantir l'autonomie et la sécurité contre les pannes de réseau.",
                                color: "emerald" as ServiceColor
                            },
                            {
                                icon: Zap,
                                title: "Points de Recharge",
                                description: "La station-service est votre garage. Chargeurs rapides et intelligents intégrés à votre système solaire pour une mobilité à coût nul.",
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
                            <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-4 block">Ce qui nous différencie</span>
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                                Pourquoi Chez Energie ?
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Dans un marché complexe, nous apportons simplicité et confiance. Notre approche est technique, transparente et axée sur le long terme.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <Wrench size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Installation Professionnelle Certifiée</h4>
                                        <p className="text-slate-400 text-sm">Techniciens qualifiés suivant rigoureusement les normes suisses de sécurité et de qualité.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Support Technique Local</h4>
                                        <p className="text-slate-400 text-sm">Nous sommes à Genève. Notre support est proche, rapide et parle votre langue.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Technologie de Confiance</h4>
                                        <p className="text-slate-400 text-sm">Nous travaillons uniquement avec des marques leaders mondiales pour garantir durabilité et performance.</p>
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
                                <p className="font-display font-bold text-3xl text-emerald-600 mb-1">100%</p>
                                <p className="text-sm font-medium">Engagement envers la satisfaction et la qualité technique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-emerald-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                        Prêt pour l'avenir de l'énergie ?
                    </h2>
                    <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                        Ne remettez pas à plus tard les économies que vous pouvez réaliser dès aujourd'hui. Parlez à nos experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
                        >
                            Devis Gratuit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
