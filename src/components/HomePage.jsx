import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Terminal,
  Sparkles,
  ClipboardCheck,
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  Zap
} from 'lucide-react';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const certifications = [
    {
      name: 'CompTIA A+',
      code: 'Core 1 & Core 2',
      status: 'Coming January 2025',
      lessons: '60+ Lessons',
      exams: '6 Full Practice Exams',
      timeline: '8-10 weeks',
      available: false,
      ctaText: 'Preview Curriculum',
      ctaLink: '/courses'
    },
    {
      name: 'CompTIA Network+',
      code: 'N10-009',
      status: '30 Lessons Available Now',
      lessons: '30 Lessons',
      exams: '3 Full Practice Exams',
      timeline: '4-6 weeks',
      available: true,
      ctaText: 'Start Free',
      ctaLink: '/register'
    },
    {
      name: 'CompTIA Security+',
      code: 'SY0-701',
      status: 'Coming Spring 2025',
      lessons: '45 Lessons',
      exams: '4 Full Practice Exams',
      timeline: '6-8 weeks',
      available: false,
      ctaText: 'Join Waitlist',
      ctaLink: '/register'
    }
  ];

  return (
    <div className="home-page">
      {/* Navigation Header */}
      <nav className="home-nav">
        <div className="home-nav-container">
          <div className="home-logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">CertifyStack</span>
          </div>
          <div className="home-nav-links">
            <a href="#features" className="home-nav-link">Features</a>
            <a href="#pricing" className="home-nav-link">Pricing</a>
            <button
              className="btn-login"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
            <button
              className="btn-signup"
              onClick={() => navigate('/register')}
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            Master IT Certifications Through Hands-On Practice
          </h1>
          <p className="hero-subheadline">
            Interactive labs, AI tutoring, and real-world scenarios for CompTIA certifications
          </p>
          <button
            className="cta-primary"
            onClick={() => navigate('/register')}
          >
            Start Learning Free →
          </button>
          <p className="hero-supporting">
            No credit card required. Free lessons forever.
          </p>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="value-props-section">
        <div className="value-props-grid">
          <div className="value-prop">
            <div className="value-icon">
              <Terminal size={32} />
            </div>
            <h3>Learn by Doing</h3>
            <p>Real commands, actual labs, hands-on practice. No passive video watching.</p>
          </div>

          <div className="value-prop">
            <div className="value-icon">
              <Sparkles size={32} />
            </div>
            <h3>AI-Powered Tutor</h3>
            <p>Get instant help with context-aware AI that knows exactly where you're stuck.</p>
          </div>

          <div className="value-prop">
            <div className="value-icon">
              <ClipboardCheck size={32} />
            </div>
            <h3>Full Practice Exams</h3>
            <p>Complete exam simulations with detailed results and performance analytics.</p>
          </div>

          <div className="value-prop">
            <div className="value-icon">
              <TrendingUp size={32} />
            </div>
            <h3>Track Your Progress</h3>
            <p>Monitor your growth with comprehensive stats, streaks, and skill analytics.</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h2 className="section-title">Your Path to IT Success</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card ${cert.available ? 'available' : 'coming-soon'}`}
            >
              <div className="cert-header">
                <Award size={32} />
                <div className="cert-status">{cert.status}</div>
              </div>
              <h3>{cert.name}</h3>
              <p className="cert-code">{cert.code}</p>

              <div className="cert-details">
                <div className="cert-detail">
                  <CheckCircle size={16} />
                  <span>{cert.lessons}</span>
                </div>
                <div className="cert-detail">
                  <CheckCircle size={16} />
                  <span>{cert.exams}</span>
                </div>
                <div className="cert-detail">
                  <CheckCircle size={16} />
                  <span>{cert.timeline}</span>
                </div>
              </div>

              <button
                className={cert.available ? 'cert-cta-primary' : 'cert-cta-secondary'}
                onClick={() => navigate(cert.ctaLink)}
              >
                {cert.ctaText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Everything You Need to Pass</h2>
        <div className="features-grid">
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>Interactive lessons with real examples</span>
          </div>
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>900+ flashcards with spaced repetition</span>
          </div>
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>Hands-on labs using real tools</span>
          </div>
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>Full-length timed practice exams</span>
          </div>
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>Performance analytics dashboard</span>
          </div>
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>Mobile-friendly study anywhere</span>
          </div>
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>Dark mode for late-night sessions</span>
          </div>
          <div className="feature-item">
            <CheckCircle size={20} className="feature-check" />
            <span>Community Discord access</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Certification</h3>
            <p>Pick A+, Network+, or Security+ based on your goals</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Learn Through Practice</h3>
            <p>Interactive lessons, labs, and quizzes - not boring videos</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Track & Improve</h3>
            <p>Monitor progress, identify weak areas, ace the exam</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>FREE Forever</h3>
            <div className="price">$0</div>
            <ul className="pricing-features">
              <li><CheckCircle size={16} /> All lesson content</li>
              <li><CheckCircle size={16} /> Basic flashcards</li>
              <li><CheckCircle size={16} /> Limited quizzes</li>
              <li><CheckCircle size={16} /> Community access</li>
            </ul>
            <button
              className="pricing-cta-secondary"
              onClick={() => navigate('/register')}
            >
              Start Free
            </button>
          </div>

          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <h3>PRO</h3>
            <div className="price">$79<span>/certification</span></div>
            <ul className="pricing-features">
              <li><CheckCircle size={16} /> Everything in Free</li>
              <li><CheckCircle size={16} /> Unlimited practice exams</li>
              <li><CheckCircle size={16} /> AI tutor access</li>
              <li><CheckCircle size={16} /> Advanced analytics</li>
              <li><CheckCircle size={16} /> Lab solutions</li>
              <li><CheckCircle size={16} /> Priority support</li>
            </ul>
            <button
              className="pricing-cta-primary"
              onClick={() => navigate('/register')}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <h2>Ready to Start Your IT Journey?</h2>
        <p>Join learners choosing hands-on practice over passive videos</p>
        <button
          className="cta-primary large"
          onClick={() => navigate('/register')}
        >
          Get Started Free - No Credit Card Required
        </button>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="/courses">Certifications</a></li>
              <li><a href="/courses">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="#discord">Discord</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CertifyStack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
