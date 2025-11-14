import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeatureCard.css';

function FeatureCard({
  icon,
  title,
  description,
  status,
  ctaText,
  ctaLink,
  gradient = 'cyan',
  onClick,
  external = false
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (ctaLink) {
      if (external) {
        window.open(ctaLink, '_blank', 'noopener,noreferrer');
      } else {
        navigate(ctaLink);
      }
    }
  };

  return (
    <div
      className={`feature-card feature-card-${gradient}`}
      onClick={handleClick}
    >
      <div className="feature-card-header">
        <div className="feature-card-icon">
          {icon}
        </div>
        <h3 className="feature-card-title">{title}</h3>
      </div>

      <div className="feature-card-content">
        <p className="feature-card-description">{description}</p>

        {status && (
          <div className="feature-card-status">{status}</div>
        )}
      </div>

      <button className="feature-card-cta">
        {ctaText}
      </button>
    </div>
  );
}

export default FeatureCard;
