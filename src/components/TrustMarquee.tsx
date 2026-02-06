import React from 'react';

const TrustMarquee: React.FC = () => {
    const companies = [
        "Kassoe", "Compass Financial", "EcoHome", "SolarTech", "GreenLife", "FutureEnergy"
    ];

    return (
        <div className="bg-slate-950 py-12 border-y border-white/5 overflow-hidden relative">
            <p className="text-center text-slate-500 text-sm font-bold tracking-[0.2em] uppercase mb-8">
                Mais de 500 parcerias de sucesso
            </p>

            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

            <div className="flex gap-16 animate-marquee whitespace-nowrap">
                {[...companies, ...companies, ...companies].map((company, index) => (
                    <div key={index} className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer group">
                        {/* Placeholder Logo Icon */}
                        <div className="w-8 h-8 bg-white/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors" />
                        <span className="text-xl font-display font-bold text-slate-600 group-hover:text-white transition-colors">{company}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustMarquee;
