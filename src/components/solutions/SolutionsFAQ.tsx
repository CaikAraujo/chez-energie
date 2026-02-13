import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from '../../i18n/useTranslations';

const SolutionsFAQ: React.FC = () => {
    const { t } = useTranslations('solutions');

    const faqs = [
        {
            question: t('faq.questions.warranty.q'),
            answer: t('faq.questions.warranty.a')
        },
        {
            question: t('faq.questions.savings.q'),
            answer: t('faq.questions.savings.a')
        },
        {
            question: t('faq.questions.subsidies.q'),
            answer: t('faq.questions.subsidies.a')
        },
        {
            question: t('faq.questions.installation.q'),
            answer: t('faq.questions.installation.a')
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        {t('faq.title')}
                    </h2>
                    <p className="text-slate-600">
                        {t('faq.subtitle')}
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
