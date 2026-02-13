import React from 'react';
import { SectionId } from '../../types';

const AboutSection: React.FC = () => {
    return (
        <section id={SectionId.ABOUT} className="py-32 bg-brand-dark relative overflow-hidden">
            {/* Parallax Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">

                {/* Creative Visual Composition */}
                <div className="lg:w-1/2 relative group perspective-1000">
                    {/* Back Image */}
                    <div className="absolute -left-8 -top-8 w-3/4 h-full rounded-[2.5rem] bg-gradient-to-tr from-brand-secondary to-brand-primary opacity-20 transform -rotate-6 transition-transform group-hover:-rotate-12 duration-700" />

                    {/* Main Image */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                        <img
                            src="https://images.unsplash.com/photo-1581094794329-cd56b509568e?auto=format&fit=crop&q=80&w=1000"
                            alt="Engineering Team"
                            className="w-full h-auto object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                    </div>

                    {/* Floating Stats Card - Experience */}
                    <div className="absolute -right-6 top-12 bg-white p-6 rounded-3xl shadow-xl shadow-black/20 animate-float">
                        <p className="font-display font-bold text-4xl text-brand-dark mb-1">10+</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ans d'Exp.</p>
                    </div>

                    {/* Floating Stats Card - CO2 */}
                    <div className="absolute -left-6 bottom-12 bg-brand-accent text-brand-dark p-6 rounded-3xl shadow-xl shadow-brand-accent/20 animate-float" style={{ animationDelay: '2s' }}>
                        <p className="font-display font-bold text-4xl mb-1">CO₂</p>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80">Réduction Réelle</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-2">
                        <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                        <span className="text-brand-accent text-xs font-bold tracking-widest uppercase">À propos de nous</span>
                    </div>

                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                        Ingénierie de précision <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">avec une touche humaine.</span>
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed border-l-4 border-brand-primary pl-6">
                        <span className="text-white font-bold">Chez Energie</span> est née de la fusion entre l'exigence technique et la nécessité de durabilité. Nous ne vendons pas seulement des équipements ; nous concevons l'écosystème énergétique de votre maison pour durer des générations.
                    </p>

                    <div className="flex flex-col gap-4">
                        {[
                            "Projets clé en main sans surprises",
                            "Suivi technique à vie",
                            "Partenaires officiels des meilleures marques"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                </div>
                                <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
