
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Thermometer, Wind, Battery, Zap, ShieldCheck, Wrench, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServiceCard, ServiceColor } from '../components/ServiceCard';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50">
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
                            Energia Limpa.<br />
                            <span className="text-emerald-400">Economia Real.</span><br />
                            Futuro Garantido.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                            A Chez Energie é a sua parceira em Genebra para uma transição energética inteligente.
                            Unimos tecnologia de ponta e expertise local para valorizar seu imóvel e reduzir sua conta de energia.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group"
                        >
                            Solicitar Diagnóstico Gratuito
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase mb-4 block">Nossa Missão</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-8">
                        Autossuficiência que Respeita o Planeta e o Seu Bolso
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        A Chez Energie nasceu com um propósito claro: tornar casas e empresas em Genebra e região autossuficientes.
                        Acreditamos que a energia do futuro é descentralizada, limpa e, acima de tudo, econômica.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Não vendemos apenas equipamentos; entregamos liberdade energética e conforto térmico de alto padrão.
                    </p>
                </div>
            </section>

            {/* 5 Pillars Section */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                            Nossos 5 Pilares de Soluções
                        </h2>
                        <p className="text-slate-500">Tecnologias integradas para máxima eficiência.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            {
                                icon: Thermometer,
                                title: "Bombas de Calor",
                                description: "Substitua caldeiras antigas por eficiência máxima. Aqueça sua casa retirando energia térmica do ar, reduzindo drasticamente custos.",
                                color: "orange" as ServiceColor
                            },
                            {
                                icon: Sun,
                                title: "Painéis Solares",
                                description: "Transforme seu telhado em um ativo financeiro. Gere sua própria eletricidade limpa e proteja-se contra o aumento das tarifas.",
                                color: "yellow" as ServiceColor
                            },
                            {
                                icon: Wind,
                                title: "Climatização",
                                description: "Conforto absoluto em todas as estações. Sistemas silenciosos e inteligentes que garantem a temperatura perfeita, verão ou inverno.",
                                color: "blue" as ServiceColor
                            },
                            {
                                icon: Battery,
                                title: "Baterias e Armazenamento",
                                description: "Use o sol mesmo à noite. Armazene o excesso de produção solar para garantir autonomia e segurança contra falhas na rede.",
                                color: "emerald" as ServiceColor
                            },
                            {
                                icon: Zap,
                                title: "Pontos de Recarga",
                                description: "O posto de combustível é a sua garagem. Carregadores rápidos e inteligentes integrados ao seu sistema solar para mobilidade custo zero.",
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
                            <span className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-4 block">Diferenciais</span>
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                                Por que a Chez Energie?
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Em um mercado complexo, trazemos simplicidade e confiança. Nossa abordagem é técnica, transparente e focada no longo prazo.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <Wrench size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Instalação Profissional Certificada</h4>
                                        <p className="text-slate-400 text-sm">Técnicos qualificados que seguem rigorosamente as normas suíças de segurança e qualidade.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Suporte Técnico Local</h4>
                                        <p className="text-slate-400 text-sm">Estamos em Genebra. Nosso suporte é próximo, rápido e fala a sua língua.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg h-fit text-emerald-400">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Tecnologia de Confiança</h4>
                                        <p className="text-slate-400 text-sm">Trabalhamos apenas com marcas líderes globais para garantir durabilidade e performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/img/panneau_installation.jpeg"
                                    alt="Instalação de Painéis Solares"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs text-slate-900">
                                <p className="font-display font-bold text-3xl text-emerald-600 mb-1">100%</p>
                                <p className="text-sm font-medium">Compromisso com a satisfação e qualidade técnica.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-emerald-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                        Pronto para o futuro da energia?
                    </h2>
                    <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                        Não deixe para depois a economia que você pode começar hoje. Fale com nossos especialistas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg"
                        >
                            Orçamento Gratuito
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
