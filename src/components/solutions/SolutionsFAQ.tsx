import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SolutionsFAQ: React.FC = () => {
    const faqs = [
        {
            question: "Como funciona a garantia e manutenção?",
            answer: "Oferecemos garantia de 25 anos na performance dos painéis solares e assistência técnica vitalícia. As nossas soluções incluem manutenção preventiva anual para garantir a máxima eficiência."
        },
        {
            question: "Quanto posso poupar na fatura de energia?",
            answer: "Com um sistema integrado (Fotovoltaico + Bateria + Bomba de Calor), a poupança pode chegar aos 80% anuais, reduzindo drasticamente a dependência da rede elétrica pública."
        },
        {
            question: "Existem subsídios disponíveis?",
            answer: "Sim, existem diversos apoios cantonais e federais (Pronovo) para instalação de energias renováveis. A nossa equipa trata de todo o processo burocrático e candidaturas por si."
        },
        {
            question: "Quanto tempo demora a instalação?",
            answer: "Após a aprovação do projeto, a instalação física geralmente demora entre 2 a 3 dias, dependendo da complexidade e dimensão do sistema. Garantimos o mínimo impacto na sua rotina diária."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-slate-600">
                        Dúvidas sobre a transição energética? Nós esclarecemos.
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
