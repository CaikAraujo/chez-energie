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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id={SectionId.HERO} className="hero-section">
      {/* Background Layer */}
      <div className="hero-bg-wrapper">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2932&auto=format&fit=crop"
          alt="Painéis Solares"
          className="hero-bg-img"
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
            <span className="badge-text">Líderes em Energia Renovável na Suíça</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Autonomia <br />
            <span className="text-gradient">Energética</span> <br />
            <div className="hero-underline-wrapper">
              360º
              <svg className="hero-underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </div>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            Soluções completas de hardware e instalação para residências modernas. Produza, climatize e carregue com tecnologia de ponta.
          </p>

          {/* Buttons */}
          <div className="hero-actions">
            <button
              onClick={() => navigate('/contact')}
              className="btn-hero-primary"
            >
              <div className="btn-shine" />
              <span>Configurar Sistema</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <Phone size={18} />
              <span>Falar com Técnico</span>
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
              <span className="trust-bold">500+</span> Projetos instalados
            </span>
          </div>
        </div>

        {/* Right Content Column (Cards) */}
        <div className="hero-content-right">
          <div className="stagger-1">
            <ServiceCard
              title="Painéis Solares"
              subtitle="Produção Fotovoltaica"
              image="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop"
              icon={Sun}
              delay={0.1}
            />
          </div>

          <div className="stagger-2">
            <ServiceCard
              title="Bombas de Calor"
              subtitle="Climatização Eficiente"
              image="/img/pompe_card.jpeg"
              icon={Thermometer}
              delay={0.2}
              imagePosition="30% center"
            />
          </div>

          <div className="stagger-3">
            <ServiceCard
              title="Carregamento EV"
              subtitle="Mobilidade Elétrica"
              image="/img/prise_card.jpeg"
              icon={Zap}
              delay={0.3}
              imagePosition="70% center"
            />
          </div>

          <div className="stagger-4">
            <ServiceCard
              title="Climatização"
              subtitle="Conforto 365 dias"
              image="/img/clim_card.jpeg"
              icon={Wind}
              delay={0.4}
            />
          </div>
        </div>

        {/* Soft Background Elements */}
        <div className="hero-blob" />
      </div>
    </section>
  );
};

export default Hero;