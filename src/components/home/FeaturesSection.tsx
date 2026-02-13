import React from 'react';
import { Sun, Thermometer, Zap, Battery, Home, ArrowRight, Wind } from 'lucide-react';
import { SectionId } from '../../types';
import { useTranslations } from '../../i18n/useTranslations';
import './FeaturesSection.css';

interface FeaturesSectionProps {
    onLearnMoreClick?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onLearnMoreClick }) => {
    const { t } = useTranslations('features');

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
                        {t('title')} <span className="features-highlight">{t('titleHighlight')}</span>
                    </h2>
                    <p className="features-desc">
                        {t('description')}
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
                            <h3 className="card-title">{t('solar.title')}</h3>
                            <p className="card-text">
                                {t('solar.description')}
                            </p>
                            <div className="card-footer">
                                <span className="card-label">{t('solar.label')}</span>
                                <span className="card-value">{t('solar.value')}</span>
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
                            <h3 className="card-title">{t('heatPump.title')}</h3>
                            <p className="card-text">
                                {t('heatPump.description')}
                            </p>
                            <div className="card-footer">
                                <span className="card-label">{t('heatPump.label')}</span>
                                <span className="card-value">{t('heatPump.value')}</span>
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
                            <h3 className="card-title">{t('evCharger.title')}</h3>
                            <p className="card-text">
                                {t('evCharger.description')}
                            </p>
                            <div className="card-footer">
                                <span className="card-label">{t('evCharger.label')}</span>
                                <span className="card-value">{t('evCharger.value')}</span>
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
                            <h3 className="card-title">{t('hvac.title')}</h3>
                            <p className="card-text">
                                {t('hvac.description')}
                            </p>
                            <div className="card-footer">
                                <span className="card-label">{t('hvac.label')}</span>
                                <span className="card-value" dangerouslySetInnerHTML={{ __html: t('hvac.value') }} />
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
                            <h3>{t('system.title')}<br />{t('system.titleLine2')}</h3>
                            <p>
                                {t('system.description')}
                            </p>
                            <button
                                className="system-btn"
                                onClick={onLearnMoreClick}
                            >
                                {t('system.button')} <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Connected Icons Flow */}
                        <div className="system-flow">

                            {/* Pillar 1: SOLAR */}
                            <div className="pillar-item solar">
                                <div className="pillar-circle">
                                    <Sun className="pillar-icon" color="currentColor" />
                                </div>
                                <span className="pillar-label">{t('system.production')}</span>
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
                                <span className="pillar-label">{t('system.storage')}</span>
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
                                <span className="pillar-label">{t('system.consumption')}</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
