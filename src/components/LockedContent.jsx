import React from 'react';
import { Lock, Crown, Sparkles } from 'lucide-react';
import './LockedContent.css';

function LockedContent({ type = 'content', itemNumber }) {
  const handleUpgrade = () => {
    // Redirect to Stripe payment link with 7-day free trial
    window.location.href = 'https://buy.stripe.com/3cI8wPewj6FWbwJ1UVcEw01';
  };

  const getContentLabel = () => {
    switch (type) {
      case 'quiz':
        return 'Quiz';
      case 'flashcards':
        return 'Flashcards';
      case 'lab':
        return 'Lab';
      case 'lesson':
        return 'Lesson';
      default:
        return 'Content';
    }
  };

  return (
    <div className="locked-content">
      <div className="locked-content-inner">
        <div className="lock-icon">
          <Lock size={48} />
        </div>

        <h2>
          <Crown size={24} className="crown-icon" />
          Premium Content
        </h2>

        <p className="locked-message">
          This {getContentLabel().toLowerCase()} is only available to Premium members.
        </p>

        <div className="free-tier-info">
          <p>
            <strong>Free Tier:</strong> Access to the first 3 {type === 'lesson' ? 'lessons' : `${type}s`} per course
          </p>
          <p>
            <strong>Premium:</strong> Unlimited access to all content
          </p>
        </div>

        <div className="premium-benefits">
          <h3>
            <Sparkles size={20} />
            Premium Benefits
          </h3>
          <ul>
            <li>✨ Unlimited {getContentLabel().toLowerCase()}s and all content</li>
            <li>🤖 Unlimited AI Tutor questions</li>
            <li>📊 Advanced progress analytics</li>
            <li>🎯 Priority support</li>
          </ul>
        </div>

        <button
          className="btn-unlock-premium"
          onClick={handleUpgrade}
        >
          <Crown size={20} />
          <span>Upgrade to Premium</span>
        </button>
      </div>
    </div>
  );
}

export default LockedContent;
