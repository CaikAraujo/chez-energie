import React from 'react';
import { ShieldCheck, Award, Users, Clock } from 'lucide-react';

const SolutionsStats: React.FC = () => {
    const stats = [
        {
            label: "Ingénierie",
            value: "Certifiée",
            icon: Award,
            desc: "ISO 9001"
        },
        {
            label: "Installations",
            value: "500+",
            icon: Users,
            desc: "Dans toute la Suisse"
        },
        {
            label: "Support",
            value: "24/7",
            icon: Clock,
            desc: "Réponse Immédiate"
        },
        {
            label: "Garantie",
            value: "25 Ans",
            icon: ShieldCheck,
            desc: "Performance Linéaire"
        },
    ];

    return (
        <section className="bg-slate-50 border-y border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                            <div className="mb-4 text-slate-400 group-hover:text-brand-blue transition-colors duration-300">
                                <stat.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div className="font-display font-bold text-2xl text-slate-900 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                {stat.label}
                            </div>
                            <div className="text-xs text-slate-400 font-medium bg-slate-100 px-3 py-1 rounded-full">
                                {stat.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsStats;
