import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto relative">
        {/* Glow effect behind the card */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-emerald opacity-30 rounded-3xl blur-3xl transform -rotate-1 translate-y-4"></div>

        {/* Main Card - Now Dark to contrast with the light page */}
        <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">

          {/* Internal ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-emerald/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 relative z-10">
            Pronto para começar a poupar?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-light">
            Peça o seu orçamento gratuito hoje mesmo. A nossa equipa de engenheiros vai analisar a sua fatura e desenhar a solução perfeita.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="O seu email"
              className="w-full px-6 py-4 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-accent-emerald focus:ring-1 focus:ring-accent-emerald transition-all"
            />
            <button className="whitespace-nowrap px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-accent-emerald text-white font-bold hover:shadow-lg hover:shadow-accent-emerald/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Pedir Proposta
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium tracking-widest uppercase relative z-10">
            <span>Gratuito</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Sem Compromisso</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Resposta em 24h</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;