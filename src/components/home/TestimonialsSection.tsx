import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
    {
        name: "Marie Dubois",
        loc: "Paris, France",
        text: "A instalação da bomba de calor foi impecável. A equipa foi super profissional e a economia na fatura energética foi imediata. Recomendo vivamente!",
        initial: "M"
    },
    {
        name: "Jean Pierre",
        loc: "Lyon, France",
        text: "Profissionalismo raro nos dias de hoje. O carregador EV funciona perfeitamente e a estética da instalação ficou ótima na minha garagem.",
        initial: "J"
    },
    {
        name: "Sophie Martin",
        loc: "Bordeaux, France",
        text: "Transformaram completamente o conforto da nossa casa antiga. O sistema é silencioso, eficiente e muito fácil de controlar pelo telemóvel.",
        initial: "S"
    },
    {
        name: "Thomas Bernard",
        loc: "Geneva, Switzerland",
        text: "Excelente acompanhamento desde o primeiro contacto até à instalação final. Os painéis solares estão a produzir acima do esperado.",
        initial: "T"
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-section">
            {/* Background Effects */}
            <div className="testimonials-glow-1" />
            <div className="testimonials-glow-2" />

            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h3 className="testimonials-title">O que dizem os nossos clientes</h3>
                    <p className="testimonials-subtitle">
                        Mais de 500 famílias já confiam na Chez Energie para a sua transição energética.
                        A satisfação dos nossos clientes é a nossa melhor garantia.
                    </p>
                </div>

                <div className="testimonials-scroll">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div>
                                <div className="testimonial-stars">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                            </div>

                            <div className="testimonial-footer">
                                <div className="testimonial-avatar">
                                    {t.initial}
                                </div>
                                <div className="testimonial-info">
                                    <p className="testimonial-name">{t.name}</p>
                                    <p className="testimonial-loc">{t.loc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
