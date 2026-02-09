import React from 'react';
import { ServiceCardProps } from '../../types';
import './ServiceCard.css';

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  image,
  icon: Icon,
  delay = 0,
  imagePosition = 'center',
  imageScale = 1,
  className = ''
}) => {
  return (
    <div
      className={`service-card ${className}`}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      {/* Background Image */}
      <div className="card-bg-container">
        <img
          src={image}
          alt={title}
          className="card-bg-img"
          style={{
            objectPosition: imagePosition,
            ...(imageScale !== 1 ? { transform: `scale(${imageScale})` } : {})
          }}
        />
        {/* Dark Gradient Overlay for readability */}
        <div className="card-overlay" />
      </div>

      {/* Glass Content Area */}
      <div className="card-content">
        {/* Icon container */}
        <div className="card-icon-wrapper">
          <Icon size={24} strokeWidth={1.5} />
        </div>

        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Subtle decorative line */}
        <div className="card-divider" />
      </div>
    </div>
  );
};

export default ServiceCard;