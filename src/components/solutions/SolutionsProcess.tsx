import React from 'react';
import { ClipboardCheck, PenTool, Wrench, Headphones, ArrowRight } from 'lucide-react';

const SolutionsProcess: React.FC = () => {
    const steps = [
        {
            icon: ClipboardCheck,
            title: "1. Consultation",
            description: "Analyse gratuite de votre profil de consommation et de vos besoins énergétiques."
        },
        {
            icon: PenTool,
            title: "2. Ingénierie",
            description: "Développement d'une solution technique personnalisée et dimensionnée."
        },
        {
            icon: Wrench,
            title: "3. Installation",
            description: "Montage par des équipes certifiées avec des matériaux de haute qualité."
        },
        {
            icon: Headphones,
            title: "4. Support",
            description: "Surveillance à distance 24/7 et garantie de performance à long terme."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        Comment ça Marche
                    </h2>
                    <p className="text-slate-600 text-lg">
                        De la première visite à l'indépendance énergétique, nous nous occupons de tout le processus.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-100 -z-10"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:border-emerald-100 transition-all duration-300">
                                <step.icon className="w-10 h-10 text-emerald-500" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm px-4">
                                {step.description}
                            </p>

                            {/* Arrow for mobile sequence indication */}
                            {idx < steps.length - 1 && (
                                <div className="md:hidden mt-8 text-slate-300">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsProcess;
