import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SolutionsCTA: React.FC = () => {
    const benefits = [
        "Étude énergétique gratuite",
        "Dimensionnement personnalisé",
        "Calcul du retour sur investissement (ROI)",
        "Devis détaillé sans engagement"
    ];

    return (
        <section className="py-24 px-6 bg-[#0B1120] relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-left animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 w-fit shadow-lg shadow-black/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
                                Places limitées ce mois-ci
                            </span>
                        </div>

                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-tight">
                            Transformez votre maison <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                                en centrale énergétique.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-light">
                            Faites le premier pas vers l'indépendance énergétique. Notre équipe d'ingénieurs est prête à concevoir la solution idéale pour vous.
                        </p>

                        <div className="space-y-4 mb-10">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-300 group">
                                    <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                    </div>
                                    <span className="font-medium group-hover:text-white transition-colors">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/40 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-emerald-500"></div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Démarrez votre projet</h3>
                        <p className="text-slate-500 mb-8 text-sm font-medium">Répondez en moins d'une minute.</p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Prénom" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400 text-sm font-medium" />
                                <input type="text" placeholder="Nom" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400 text-sm font-medium" />
                            </div>
                            <input type="email" placeholder="Email" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400 text-sm font-medium" />
                            <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400 text-sm font-medium" />

                            <button type="submit" className="w-full py-4 mt-4 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-600/25 transition-all duration-300 flex items-center justify-center gap-2 group transform active:scale-[0.98]">
                                Recevoir mon Étude Gratuite
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-[11px] text-center text-slate-400 mt-6 leading-relaxed">
                                En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Vos données sont sécurisées et ne sont pas partagées avec des tiers.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionsCTA;
