import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SolutionsFAQ: React.FC = () => {
    const faqs = [
        {
            question: "Comment fonctionne la garantie et la maintenance ?",
            answer: "Nous offrons une garantie de 25 ans sur la performance des panneaux solaires et une assistance technique à vie. Nos solutions incluent une maintenance préventive annuelle pour garantir une efficacité maximale."
        },
        {
            question: "Combien puis-je économiser sur ma facture d'énergie ?",
            answer: "Avec un système intégré (Photovoltaïque + Batterie + Pompe à Chaleur), les économies peuvent atteindre 80 % par an, réduisant drastiquement la dépendance au réseau électrique public."
        },
        {
            question: "Existe-t-il des subventions disponibles ?",
            answer: "Oui, il existe diverses aides cantonales et fédérales (Pronovo) pour l'installation d'énergies renouvelables. Notre équipe s'occupe de tout le processus bureaucratique et des demandes pour vous."
        },
        {
            question: "Combien de temps dure l'installation ?",
            answer: "Après l'approbation du projet, l'installation physique prend généralement entre 2 et 3 jours, selon la complexité et la dimension du système. Nous garantissons un impact minimal sur votre routine quotidienne."
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        Questions Fréquentes
                    </h2>
                    <p className="text-slate-600">
                        Des questions sur la transition énergétique ? Nous clarifions tout.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-slate-900">{faq.question}</span>
                                {openIndex === idx ? (
                                    <ChevronUp className="w-5 h-5 text-emerald-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-400" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsFAQ;
