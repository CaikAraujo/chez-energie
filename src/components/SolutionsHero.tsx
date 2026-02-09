import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import { SectionId } from '../types';

interface SolutionsHeroProps {
    scrollTo: (sectionId: SectionId) => void;
}

const SolutionsHero: React.FC<SolutionsHeroProps> = ({ scrollTo }) => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">

            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/bg-services.jpg"
                    alt="Engenharia de Precisão"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">

                {/* Label */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <Zap className="w-4 h-4 text-brand-green fill-brand-green" />
                    <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Engenharia Suíça</span>
                </div>

                {/* Main Title */}
                <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-8 leading-tight">
                    Eficiência <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-400">Sem Compromissos.</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                    Desenhamos, instalamos e mantemos ecossistemas de energia completos. Fotovoltaico, Térmico e Mobilidade integrados com precisão milimétrica.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => scrollTo(SectionId.CONTACT)}
                        className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                    >
                        Solicitar Estudo Técnico
                    </button>
                    <button
                        onClick={() => {
                            const el = document.getElementById('solutions-content');
                            el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                        Explorar Soluções
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-slate-500" />
            </div>

        </section>
    );
};

export default SolutionsHero;
