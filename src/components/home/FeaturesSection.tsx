import React from 'react';
import { Sun, Thermometer, Zap, Battery, Home, ArrowRight, Wind } from 'lucide-react';
import { SectionId } from '../../types';
import './FeaturesSection.css';

interface FeaturesSectionProps {
    onLearnMoreClick?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onLearnMoreClick }) => {
    return (
        <section id={SectionId.SERVICES} className="features-section">

            {/* Background Elements */}
            <div className="features-bg-line" />
            <div className="features-bg-orb-yellow" />
            <div className="features-bg-orb-blue" />

            <div className="features-container">

                {/* Section Header */}
                <div className="features-header">
                    <h2 className="features-title">
                        Technologie de <span className="features-highlight">Pointe</span>
                    </h2>
                    <p className="features-desc">
                        Équipements sélectionnés pour leur durabilité et performance supérieure.
                    </p>
                </div>

                {/* TOP ROW: Tech Specs Cards */}
                <div className="features-grid">
                    {/* Card 1: Solar */}
                    <div className="feature-card solar group">
                        <div className="card-decor">
                            <Sun className="decor-icon solar" />
                        </div>
                        <div className="card-content">
                            <div className="card-icon-box solar">
                                <Sun size={24} />
                            </div>
                            <h3 className="card-title">Panneau Solaire Full Black</h3>
                            <p className="card-text">
                                Modules monocristallins avec esthétique supérieure et efficacité garantie même par temps nuageux.
                            </p>
                            <div className="card-footer">
                                <span className="card-label">Garantie</span>
                                <span className="card-value">25 Ans</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Heat Pump */}
                    <div className="feature-card heat group">
                        <div className="card-decor">
                            <Thermometer className="decor-icon heat" />
                        </div>
                        <div className="card-content">
                            <div className="card-icon-box heat">
                                <Thermometer size={24} />
                            </div>
                            <h3 className="card-title">Pompe à Chaleur</h3>
                            <p className="card-text">
                                Coefficient de performance leader du marché. 4x plus efficace que les systèmes au gaz ou fioul.
                            </p>
                            <div className="card-footer">
                                <span className="card-label">Efficacité</span>
                                <span className="card-value">COP 4.5</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: EV Charger */}
                    <div className="feature-card ev group">
                        <div className="card-decor">
                            <Zap className="decor-icon ev" />
                        </div>
                        <div className="card-content">
                            <div className="card-icon-box ev">
                                <Zap size={24} />
                            </div>
                            <h3 className="card-title">Recharge VE</h3>
                            <p className="card-text">
                                Chargement intelligent intégré avec votre production solaire. Faites le plein avec le soleil.
                            </p>
                            <div className="card-footer">
                                <span className="card-label">Puissance</span>
                                <span className="card-value">22 kW</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Climatização */}
                    <div className="feature-card wind group">
                        <div className="card-decor">
                            <Wind className="decor-icon wind" />
                        </div>
                        <div className="card-content">
                            <div className="card-icon-box wind">
                                <Wind size={24} />
                            </div>
                            <h3 className="card-title">Climatisation</h3>
                            <p className="card-text">
                                Confort thermique toute l'année avec une efficacité énergétique maximale et un silence absolu.
                            </p>
                            <div className="card-footer">
                                <span className="card-label">Bruit</span>
                                <span className="card-value">&lt; 20 dB</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM ROW: System Pillars (Flow) */}
                <div className="system-pillars">
                    {/* Decorative Grid Background */}
                    <div className="system-bg-grid" />

                    <div className="system-content">
                        <div className="system-text">
                            <h3>Un Système, <br />Trois Piliers</h3>
                            <p>
                                La synergie parfaite entre la production du toit, le confort du salon et la mobilité du garage. Tout contrôlé dans une seule application.
                            </p>
                            <button
                                className="system-btn"
                                onClick={onLearnMoreClick}
                            >
                                Savoir comment ça marche <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Connected Icons Flow */}
                        <div className="system-flow">

                            {/* Pillar 1: SOLAR */}
                            <div className="pillar-item solar">
                                <div className="pillar-circle">
                                    <Sun className="pillar-icon" color="currentColor" />
                                </div>
                                <span className="pillar-label">Production</span>
                            </div>

                            {/* CONNECTOR 1: Solar -> Battery */}
                            <div className="connector-box">
                                <svg className="w-full h-full" viewBox="0 0 100 24" preserveAspectRatio="none">
                                    <path
                                        d="M0 12 L35 12 L42 20 L50 4 L58 12 L100 12"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.05)"
                                        strokeWidth="2"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                    <path
                                        d="M0 12 L35 12 L42 20 L50 4 L58 12 L100 12"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        vectorEffect="non-scaling-stroke"
                                        className="beam-animate-1"
                                        style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,1))' }}
                                    />
                                </svg>
                            </div>

                            {/* Pillar 2: BATTERY */}
                            <div className="pillar-item heat">
                                <div className="pillar-circle">
                                    <Battery className="pillar-icon" color="currentColor" />
                                </div>
                                <span className="pillar-label">Stockage</span>
                            </div>

                            {/* CONNECTOR 2: Battery -> Home */}
                            <div className="connector-box">
                                <svg className="w-full h-full" viewBox="0 0 100 24" preserveAspectRatio="none">
                                    <path
                                        d="M0 12 L35 12 L42 20 L50 4 L58 12 L100 12"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.05)"
                                        strokeWidth="2"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                    <path
                                        d="M0 12 L35 12 L42 20 L50 4 L58 12 L100 12"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        vectorEffect="non-scaling-stroke"
                                        className="beam-animate-2"
                                        style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,1))' }}
                                    />
                                </svg>
                            </div>

                            {/* Pillar 3: HOME */}
                            <div className="pillar-item ev">
                                <div className="pillar-circle">
                                    <Home className="pillar-icon" color="currentColor" />
                                </div>
                                <span className="pillar-label">Consommation</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
