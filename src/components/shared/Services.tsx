import React from 'react';
import { SectionId } from '../../types';
import { Thermometer, Zap, Fan, Leaf, Home, BarChart3, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section id={SectionId.SERVICES} className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                        <span className="text-brand-dark text-xs font-bold tracking-widest uppercase">Nos Solutions</span>
                    </div>
                    <h3 className="font-display text-4xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
                        La technologie au service <br /><span className="text-brand-primary">de votre maison.</span>
                    </h3>
                    <p className="text-slate-500 text-xl leading-relaxed">
                        Nous intégrons les systèmes les plus avancés du marché pour garantir un confort maximal avec une consommation minimale.
                    </p>
                </div>

                {/* Interactive Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">

                    {/* Card 1: Bomba de Calor (Large) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-10 h-full flex flex-col justify-between relative z-10">
                            <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                                    <Thermometer className="w-7 h-7" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div>
                                <h4 className="font-display text-3xl font-bold text-brand-dark mb-4">Pompes à Chaleur</h4>
                                <p className="text-slate-500 text-lg max-w-md leading-relaxed">Systèmes aérothermiques de dernière génération. Jusqu'à 75% d'énergie gratuite extraite de l'air.</p>
                            </div>

                            {/* Hover Image Reveal */}
                            <img
                                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
                                className="absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none mask-image-gradient"
                                alt="Heat pump abstract"
                            />
                        </div>
                    </div>

                    {/* Card 2: EV Charger (Dark Mode) */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-brand-dark text-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-transparent opacity-20" />
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl group-hover:bg-brand-accent/40 transition-colors duration-500" />

                        <div className="p-10 h-full flex flex-col relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-accent mb-auto group-hover:rotate-12 transition-transform duration-500">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h4 className="font-display text-2xl font-bold mb-3">Mobilité Électrique</h4>
                            <p className="text-slate-400 leading-relaxed">Chargeurs rapides et intelligents. Installation clé en main.</p>
                        </div>
                    </div>

                    {/* Card 3: Climatização */}
                    <div className="md:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                        <div className="p-10 h-full flex flex-col relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-auto group-hover:scale-110 transition-transform duration-500">
                                <Fan className="w-7 h-7" />
                            </div>
                            <h4 className="font-display text-2xl font-bold text-brand-dark mb-3">Climatisation</h4>
                            <p className="text-slate-500 leading-relaxed">Climatisation multi-split silencieuse et efficace.</p>
                        </div>
                    </div>

                    {/* Card 4: Detailed Stats Grid */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="grid grid-cols-3 h-full divide-x divide-slate-100">
                            <div className="p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors duration-300">
                                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4 text-brand-accent">
                                    <Leaf className="w-8 h-8" />
                                </div>
                                <span className="font-display font-bold text-xl text-brand-dark mb-1">100% Éco</span>
                                <span className="text-sm text-slate-500 font-medium">Durable</span>
                            </div>
                            <div className="p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors duration-300">
                                <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-4 text-brand-secondary">
                                    <Home className="w-8 h-8" />
                                </div>
                                <span className="font-display font-bold text-xl text-brand-dark mb-1">Résidentiel</span>
                                <span className="text-sm text-slate-500 font-medium">& Commercial</span>
                            </div>
                            <div className="p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors duration-300">
                                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary">
                                    <BarChart3 className="w-8 h-8" />
                                </div>
                                <span className="font-display font-bold text-xl text-brand-dark mb-1">ROI Rapide</span>
                                <span className="text-sm text-slate-500 font-medium">Retour Garanti</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
