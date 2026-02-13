import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';
import { useTranslations } from '../../i18n/useTranslations';

const testimonials = [
    {
        name: "Marie Dubois",
        loc: "Lausanne, Suisse",
        text: "L'installation de la pompe à chaleur a été impeccable. L'équipe était super professionnelle et les économies sur la facture énergétique ont été immédiates. Je recommande vivement !",
        initial: "M"
    },
    {
        name: "Jean Pierre",
        loc: "Fribourg, Suisse",
        text: "Professionnalisme rare de nos jours. Le chargeur VE fonctionne parfaitement et l'esthétique de l'installation est superbe dans mon garage.",
        initial: "J"
    },
    {
        name: "Sophie Martin",
        loc: "Neuchâtel, Suisse",
        text: "Ils ont complètement transformé le confort de notre vieille maison. Le système est silencieux, efficace et très facile à contrôler via mobile.",
        initial: "S"
    },
    {
        name: "Thomas Bernard",
        loc: "Genève, Suisse",
        text: "Excellent suivi du premier contact à l'installation finale. Les panneaux solaires produisent au-delà des attentes.",
        initial: "T"
    }
];

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslations('testimonials');

    return (
        <section className="testimonials-section">
            {/* Background Effects */}
            <div className="testimonials-glow-1" />
            <div className="testimonials-glow-2" />

            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h3 className="testimonials-title">{t('title')}</h3>
                    <p className="testimonials-subtitle">
                        {t('subtitle')}
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

