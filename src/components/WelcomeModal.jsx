import React from 'react';
import { Zap, X } from 'lucide-react';
import { useTour } from '../context/TourContext';
import './WelcomeModal.css';

function WelcomeModal() {
  const { showWelcome, startTour, skipTour } = useTour();

  if (!showWelcome) return null;

  return (
    <div className="welcome-modal-overlay">
      <div className="welcome-modal">
        <button className="welcome-close" onClick={skipTour} aria-label="Close">
          <X size={24} />
        </button>

        <div className="welcome-icon">
          <Zap size={64} />
        </div>

        <h1>Welcome to CertifyStack!</h1>

        <p className="welcome-subtitle">
          Your all-in-one platform for IT certification success
        </p>

        <div className="welcome-features">
          <div className="welcome-feature">
            <span className="feature-icon">📚</span>
            <span>Comprehensive lessons & courses</span>
          </div>
          <div className="welcome-feature">
            <span className="feature-icon">🧪</span>
            <span>Interactive labs & practice exams</span>
          </div>
          <div className="welcome-feature">
            <span className="feature-icon">🎯</span>
            <span>AI-powered tutoring & flashcards</span>
          </div>
          <div className="welcome-feature">
            <span className="feature-icon">📊</span>
            <span>Track your progress in real-time</span>
          </div>
        </div>

        <div className="welcome-actions">
          <button className="btn-tour-start" onClick={startTour}>
            Take a Quick Tour
          </button>
          <button className="btn-tour-skip" onClick={skipTour}>
            Skip for Now
          </button>
        </div>

        <p className="welcome-hint">
          You can restart the tour anytime from the help menu
        </p>
      </div>
    </div>
  );
}

export default WelcomeModal;
