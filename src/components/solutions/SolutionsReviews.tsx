import React from 'react';
import { Star } from 'lucide-react';

const SolutionsReviews: React.FC = () => {
    const reviews = [
        {
            name: "Jean-Pierre M.",
            location: "Genève",
            role: "Installation Solaire + Batterie",
            content: "Impressionnant le niveau de détail technique. L'équipe a expliqué chaque étape et le système produit exactement ce qui a été promis dans l'étude initiale. L'indépendance du réseau est réelle.",
            date: "Octobre 2025"
        },
        {
            name: "Sarah L.",
            location: "Lausanne",
            role: "Pompe à Chaleur",
            content: "Nous avons remplacé notre vieille chaudière à mazout. Le confort thermique est incomparable et le silence de l'unité extérieure m'a surpris. La facture de chauffage a chuté de 60%.",
            date: "Novembre 2025"
        },
        {
            name: "Marc D.",
            location: "Fribourg",
            role: "Wallbox + Solaire",
            content: "Charger la voiture avec le soleil est une sensation incroyable. L'application me permet de tout contrôler et de voir quand je charge 'gratuitement'. Je recommande Chez Energie pour leur sérieux.",
            date: "Janvier 2026"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-6">
                        Résultats Prouvés
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Découvrez ce que disent les propriétaires qui ont déjà effectué la transition énergétique complète.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                            {/* Stars */}
                            <div className="flex gap-1 mb-6 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-slate-700 leading-relaxed mb-8 min-h-[100px]">
                                "{review.content}"
                            </p>

                            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                                    <div className="text-slate-500 text-xs">{review.location}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-semibold text-brand-blue bg-blue-50 px-2 py-1 rounded border border-blue-100">
                                        {review.role}
                                    </div>
                                    <div className="text-[10px] text-slate-400 mt-1">{review.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsReviews;
