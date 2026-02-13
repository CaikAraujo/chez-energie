import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Sun, Thermometer, Zap, Wind } from 'lucide-react';
import { SectionId } from '../../types';
import ServiceCard from '../ui/ServiceCard';
import './Hero.css';

interface HeroProps {
  scrollTo: (sectionId: SectionId) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id={SectionId.HERO} className="hero-section">
      {/* Background Layer */}
      <div className="hero-bg-wrapper">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2932&auto=format&fit=crop"
          alt="Panneaux Solaires"
          className="hero-bg-img"
          loading="eager" // LCP Image
          fetchPriority="high"
        />
        <div className="hero-overlay-gradient" />
        <div className="hero-noise" />
      </div>

      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-content-left">
          {/* Badge */}
          <div className="hero-badge">
            <div className="badge-dot" />
            <span className="badge-text">Leaders en Énergie Renouvelable en Suisse</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Autonomie <br className="hidden md:block" /> <span className="text-gradient">Énergétique</span> <br />
            <div className="hero-underline-wrapper">
              360º
              <svg className="hero-underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </div>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            Solutions complètes de matériel et d'installation pour résidences modernes. Produisez, climatisez et chargez avec une technologie de pointe.
          </p>

          {/* Buttons */}
          <div className="hero-actions">
            <button
              onClick={() => navigate('/contact')}
              className="btn-hero-primary"
            >
              <div className="btn-shine" />
              <span>Configurer le Système</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="https://wa.me/41765133166"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <Phone size={18} />
              <span>Parler à un Technicien</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-avatars">
              {[1, 2, 3].map((i) => (
                <div key={i} className="trust-avatar-item">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                    alt="User"
                    className="trust-avatar-img"
                  />
                </div>
              ))}
            </div>
            <span className="trust-text">
              <span className="trust-bold">500+</span> Projets installés
            </span>
          </div>
        </div>

        {/* Right Content Column (Cards) */}
        <div
          className="hero-content-right"
          onScroll={(e) => {
            const container = e.currentTarget;
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.offsetWidth;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveCard(index);
          }}
        >
          <div className="stagger-1">
            <ServiceCard
              title="Panneaux Solaires"
              subtitle="Production Photovoltaïque"
              image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop"
              icon={Sun}
              delay={0.1}
              onClick={() => navigate('/services#solar')}
            />
          </div>

          <div className="stagger-2">
            <ServiceCard
              title="Pompes à Chaleur"
              subtitle="Climatisation Efficace"
              image="/img/pompe_card.webp"
              icon={Thermometer}
              delay={0.2}
              imagePosition="30% center"
              onClick={() => navigate('/services#heat-pumps')}
            />
          </div>

          <div className="stagger-3">
            <ServiceCard
              title="Recharge VE"
              subtitle="Mobilité Électrique"
              image="/img/prise_card.webp"
              icon={Zap}
              delay={0.3}
              imagePosition="70% center"
              onClick={() => navigate('/services#ev-charging')}
            />
          </div>

          <div className="stagger-4">
            <ServiceCard
              title="Climatisation"
              subtitle="Confort 365 jours"
              image="/img/clim_card.webp"
              icon={Wind}
              delay={0.4}
              onClick={() => navigate('/services#hvac')}
            />
          </div>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${activeCard === index ? 'w-8 bg-brand-accent' : 'w-2 bg-white/20'
                }`}
            />
          ))}
        </div>

        {/* Soft Background Elements */}
        <div className="hero-blob" />
      </div>
    </section>
  );
};

export default Hero;