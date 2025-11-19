import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Check, Zap, Sparkles, ArrowRight, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './PricingPage.css';

function PricingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        // Redirect to login if not authenticated
        navigate('/login');
        return;
      }

      // Redirect to Stripe payment link with 7-day free trial
      window.location.href = 'https://buy.stripe.com/3cI8wPewj6FWbwJ1UVcEw01';
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="pricing-page">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h1>Choose Your Learning Path</h1>
          <p className="pricing-subtitle">
            Unlock your full potential with CertifyStack Premium
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {/* Free Tier */}
          <div className="pricing-card free-tier">
            <div className="pricing-card-header">
              <Zap size={32} className="pricing-icon" />
              <h2>Free Tier</h2>
              <p className="pricing-description">Get started with the basics</p>
            </div>

            <div className="pricing-price">
              <span className="price-amount">$0</span>
              <span className="price-period">/month</span>
            </div>

            <ul className="pricing-features">
              <li>
                <Check size={20} />
                <span>Access to all course content</span>
              </li>
              <li>
                <Check size={20} />
                <span>Interactive flashcards</span>
              </li>
              <li>
                <Check size={20} />
                <span>Practice quizzes</span>
              </li>
              <li>
                <Check size={20} />
                <span>Progress tracking</span>
              </li>
              <li className="limited">
                <AlertCircle size={20} />
                <span>3 AI Tutor questions per day</span>
              </li>
            </ul>

            <button className="pricing-btn free-btn" onClick={() => navigate('/dashboard')}>
              Current Plan
            </button>
          </div>

          {/* Premium Tier */}
          <div className="pricing-card premium-tier">
            <div className="popular-badge">
              <Crown size={16} />
              <span>Most Popular</span>
            </div>

            <div className="pricing-card-header">
              <Sparkles size={32} className="pricing-icon premium-icon" />
              <h2>Premium</h2>
              <p className="pricing-description">Supercharge your certification journey</p>
            </div>

            <div className="pricing-price">
              <span className="price-amount">$19</span>
              <span className="price-period">/month</span>
            </div>

            <ul className="pricing-features">
              <li>
                <Check size={20} />
                <span><strong>Everything in Free</strong>, plus:</span>
              </li>
              <li className="premium-feature">
                <Sparkles size={20} />
                <span><strong>Unlimited AI Tutor questions</strong></span>
              </li>
              <li className="premium-feature">
                <Sparkles size={20} />
                <span>Advanced progress analytics</span>
              </li>
              <li className="premium-feature">
                <Sparkles size={20} />
                <span>Priority support</span>
              </li>
              <li className="premium-feature">
                <Sparkles size={20} />
                <span>Early access to new features</span>
              </li>
              <li className="premium-feature">
                <Sparkles size={20} />
                <span>Personalized study recommendations</span>
              </li>
            </ul>

            <button
              className="pricing-btn premium-btn"
              onClick={handleGetStarted}
              disabled={loading}
            >
              {loading ? (
                'Processing...'
              ) : (
                <>
                  Get Started
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pricing-faq">
          <h3>Frequently Asked Questions</h3>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I cancel anytime?</h4>
              <p>Yes! You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
            </div>

            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, debit cards, and digital wallets through Stripe's secure payment processing.</p>
            </div>

            <div className="faq-item">
              <h4>Is there a free trial?</h4>
              <p>The free tier is always available! You can try out the platform before upgrading to Premium.</p>
            </div>

            <div className="faq-item">
              <h4>What's the AI Tutor?</h4>
              <p>Our AI Tutor is powered by advanced AI to answer your Network+ questions 24/7. Premium users get unlimited access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
