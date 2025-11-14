import React, { useState } from 'react';
import { Lock, Crown, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { createCheckoutSession } from '../lib/stripe';
import './LockedContent.css';

function LockedContent({ type = 'content', itemNumber }) {
  const [loading, setLoading] = useState(false);

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await createCheckoutSession(user.id, user.email);
      }
    } catch (error) {
      console.error('Error starting checkout:', error);
      alert('Failed to start checkout. Please try again.');
      setLoading(false);
    }
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
          disabled={loading}
        >
          <Crown size={20} />
          <span>{loading ? 'Loading...' : 'Upgrade to Premium'}</span>
        </button>
      </div>
    </div>
  );
}

export default LockedContent;
