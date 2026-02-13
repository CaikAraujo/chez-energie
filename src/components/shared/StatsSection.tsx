import React from 'react';
import { useTranslations } from '../../i18n/useTranslations';

const StatsSection: React.FC = () => {
  const { t } = useTranslations('stats');

  const stats = [
    { value: "+500", label: t('projects') },
    { value: "30%", label: t('savings') },
    { value: "24/7", label: t('support') },
    { value: "25", label: t('warranty') },
  ];

  return (
    // Moved up with negative margin to overlap the Hero
    <section className="relative z-30 px-6 -mt-16 md:-mt-24 mb-12 pointer-events-none">
      <div className="max-w-6xl mx-auto">
        {/* The Card Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 pointer-events-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group px-4">
                <div className="font-display font-bold text-3xl md:text-5xl text-slate-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-accent-emerald transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;