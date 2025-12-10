import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-container">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="CertifyStack" className="brand-icon" />
            <span className="brand-name">CertifyStack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/signin" className="nav-link">Sign In</Link>
            <Link to="/signup" className="btn-nav-cta">Get Started Free</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="brand" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="CertifyStack" className="brand-icon" />
            <span className="brand-name">CertifyStack</span>
          </Link>
          <button
            className="mobile-nav-close"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#features" className="mobile-nav-link" onClick={closeMobileMenu}>Features</a>
          <a href="#pricing" className="mobile-nav-link" onClick={closeMobileMenu}>Pricing</a>
          <Link to="/signin" className="mobile-nav-link" onClick={closeMobileMenu}>Sign In</Link>
          <Link to="/signup" className="btn-mobile-cta" onClick={closeMobileMenu}>Get Started Free</Link>
        </div>
      </nav>

      {/* Hero Section - Above the Fold */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span>Full Content • AI Tutor • Real Labs</span>
            </div>

            <h1 className="hero-headline">
              Stop Watching Videos. Start Building Skills.<br />
              <span className="gradient-text">Your IT Certification Starts Here.</span>
            </h1>

            <p className="hero-subheadline">
              The only hands-on platform with interactive labs, AI tutoring, and real-world scenarios.
              Learn by doing—not watching.
            </p>

            <div className="hero-cta-buttons">
              <Link to="/signup" className="btn-hero-cta">
                Get Started Free →
              </Link>
            </div>

            <div className="hero-trust-signals">
              <div className="trust-item">
                <span className="trust-check">✓</span> Free 7-day trial
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span> Free forever tier available
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span> No credit card required
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="video-embed-container">
              <iframe
                src="https://www.youtube.com/embed/8sRNPOVgH5A"
                title="CertifyStack Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar - Replacing Social Proof */}
      <section className="features-bar">
        <div className="features-container">
          <div className="feature-highlight">
            <div className="highlight-icon">💻</div>
            <div className="highlight-text">30+ Interactive Labs</div>
          </div>
          <div className="proof-divider"></div>
          <div className="feature-highlight">
            <div className="highlight-icon">🤖</div>
            <div className="highlight-text">24/7 AI Tutor</div>
          </div>
          <div className="proof-divider"></div>
          <div className="feature-highlight">
            <div className="highlight-icon">📝</div>
            <div className="highlight-text">Unlimited Practice Exams</div>
          </div>
          <div className="proof-divider"></div>
          <div className="feature-highlight">
            <div className="highlight-icon">📊</div>
            <div className="highlight-text">Real-Time Progress Tracking</div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="problem-solution-section">
        <div className="container">
          <div className="problem-box">
            <h2 className="section-headline">
              Tired of Failing Practice Exams?
            </h2>
            <div className="problem-list">
              <div className="problem-item">
                <span className="problem-icon">😴</span>
                <div>
                  <strong>Boring video lectures</strong> that put you to sleep after 10 minutes
                </div>
              </div>
              <div className="problem-item">
                <span className="problem-icon">📚</span>
                <div>
                  <strong>Dense textbooks</strong> filled with info you'll never use on the job
                </div>
              </div>
              <div className="problem-item">
                <span className="problem-icon">🤯</span>
                <div>
                  <strong>Overwhelming concepts</strong> that make you want to quit
                </div>
              </div>
              <div className="problem-item">
                <span className="problem-icon">💸</span>
                <div>
                  <strong>Expensive bootcamps</strong> that cost thousands and waste your time
                </div>
              </div>
            </div>
          </div>

          <div className="solution-box">
            <h2 className="section-headline">
              Learn by Doing. Pass with Confidence.
            </h2>
            <div className="solution-list">
              <div className="solution-item">
                <span className="solution-icon">💻</span>
                <div>
                  <strong>Interactive labs</strong> where you actually execute commands and see results
                </div>
              </div>
              <div className="solution-item">
                <span className="solution-icon">🤖</span>
                <div>
                  <strong>AI tutor</strong> that explains concepts in plain English, 24/7
                </div>
              </div>
              <div className="solution-item">
                <span className="solution-icon">🎯</span>
                <div>
                  <strong>Realistic practice exams</strong> that mirror the actual test
                </div>
              </div>
              <div className="solution-item">
                <span className="solution-icon">⚡</span>
                <div>
                  <strong>Complete in 30 days</strong> studying just 1 hour per day
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Screenshots */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title">Everything You Need to Pass Your Certification</h2>
            <p className="section-subtitle">Not just features. A complete learning system.</p>
          </div>

          {/* Feature 1 - Dashboard */}
          <div className="feature-row">
            <div className="feature-text">
              <div className="feature-badge">Visual Progress</div>
              <h3 className="feature-title">See Your Progress. Stay Motivated.</h3>
              <p className="feature-description">
                Beautiful dashboard shows exactly where you are and where you're going.
                Track lessons completed, study streaks, and time invested—all in one place.
              </p>
              <ul className="feature-list">
                <li>30 comprehensive lessons covering all exam objectives</li>
                <li>Real-time progress tracking with visual indicators</li>
                <li>Streak system to keep you consistent</li>
                <li>Time estimates so you know when you'll be ready</li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="screenshot-frame">
                <img
                  src="/screenshots/Dashboard.PNG"
                  alt="CertifyStack Dashboard showing progress tracking, lessons, and study features"
                  className="screenshot-image"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - AI Tutor */}
          <div className="feature-row feature-row-reverse">
            <div className="feature-text">
              <div className="feature-badge">AI-Powered</div>
              <h3 className="feature-title">Your Personal IT Tutor, 24/7</h3>
              <p className="feature-description">
                Stuck on subnetting? Confused about VLANs? Ask our AI tutor anything.
                Get instant explanations in plain English—no more Googling for hours.
              </p>
              <ul className="feature-list">
                <li>Context-aware answers based on your current lesson</li>
                <li>Explains complex topics with real-world analogies</li>
                <li>Available 24/7—no waiting for office hours</li>
                <li>Remembers your questions and learning style</li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="screenshot-frame">
                <img
                  src="/screenshots/AITutor.PNG"
                  alt="CertifyStack AI Tutor providing instant help and explanations"
                  className="screenshot-image"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 - Interactive Labs */}
          <div className="feature-row">
            <div className="feature-text">
              <div className="feature-badge">Hands-On Labs</div>
              <h3 className="feature-title">Stop Watching. Start Doing.</h3>
              <p className="feature-description">
                Execute real commands. Configure actual networks. Build things that work.
                This isn't theory—it's the real skills you need for the exam AND the job.
              </p>
              <ul className="feature-list">
                <li>Command-line labs with instant feedback</li>
                <li>Network design challenges using real tools</li>
                <li>Troubleshooting scenarios from actual IT environments</li>
                <li>Step-by-step solutions when you get stuck</li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="screenshot-frame">
                <img
                  src="/screenshots/Labs.PNG"
                  alt="CertifyStack interactive labs with hands-on practice"
                  className="screenshot-image"
                />
              </div>
            </div>
          </div>

          {/* Feature 4 - Practice Exams */}
          <div className="feature-row feature-row-reverse">
            <div className="feature-text">
              <div className="feature-badge">Exam Prep</div>
              <h3 className="feature-title">Full-Length Practice Exams with Working PBQs</h3>
              <p className="feature-description">
                Realistic questions. Interactive Performance-Based Questions (PBQs). Detailed explanations.
                Know exactly what you'll see on test day—no surprises.
              </p>
              <ul className="feature-list">
                <li>Full-length exams with actual working PBQ simulations</li>
                <li>Questions written in CompTIA's exact style</li>
                <li>Detailed explanations for every answer (right and wrong)</li>
                <li>Performance analytics by domain to identify weak areas</li>
                <li>Unlimited retakes to master every topic</li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="screenshot-frame">
                <img
                  src="/screenshots/PracticeExam.PNG"
                  alt="CertifyStack practice exams with PBQ simulations"
                  className="screenshot-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">How We Compare to Other Platforms</h2>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-cell"></div>
              <div className="comparison-cell comparison-competitor">Professor Messer</div>
              <div className="comparison-cell comparison-competitor">Udemy Courses</div>
              <div className="comparison-cell comparison-us">CertifyStack</div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Interactive Labs</div>
              <div className="comparison-cell">❌</div>
              <div className="comparison-cell">❌</div>
              <div className="comparison-cell highlight">✅</div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">AI Tutor 24/7</div>
              <div className="comparison-cell">❌</div>
              <div className="comparison-cell">❌</div>
              <div className="comparison-cell highlight">✅</div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Progress Tracking</div>
              <div className="comparison-cell">❌</div>
              <div className="comparison-cell">⚠️ Basic</div>
              <div className="comparison-cell highlight">✅ Advanced</div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Practice Exams</div>
              <div className="comparison-cell">💰 Extra Cost</div>
              <div className="comparison-cell">⚠️ Limited</div>
              <div className="comparison-cell highlight">✅ Unlimited</div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Price</div>
              <div className="comparison-cell">Free + $60 exams</div>
              <div className="comparison-cell">$15-30</div>
              <div className="comparison-cell highlight">$29/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story - Replacing Fake Testimonials */}
      <section className="story-section">
        <div className="container">
          <h2 className="section-title">Built by Someone Who Gets It</h2>
          <div className="story-card">
            <div className="story-content">
              <p className="story-text">
                "I struggled with traditional certification prep. The videos were boring, the textbooks were
                overwhelming, and practice exams didn't prepare me for the real thing.
              </p>
              <p className="story-text">
                So I built CertifyStack—the platform I wish existed when I was studying.
                Interactive labs that make concepts click. An AI tutor that never gets tired
                of your questions. Practice exams that actually help.
              </p>
              <p className="story-text">
                This hands-on approach works. Now I'm building it for
                everyone else who's tired of passive learning."
              </p>
              <div className="story-author">
                <div className="author-name">— CertifyStack Team</div>
                <div className="author-creds">CompTIA Certified • Built for Learners</div>
              </div>
            </div>
          </div>

          <div className="roadmap-box">
            <h3 className="roadmap-title">Available Courses</h3>
            <div className="roadmap-items">
              <div className="roadmap-item">✅ CompTIA A+ (Core 1 & Core 2)</div>
              <div className="roadmap-item">✅ CompTIA Network+</div>
              <div className="roadmap-item">✅ CompTIA Security+</div>
              <div className="roadmap-item">🔜 CCNA (Coming Soon)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header-centered">
            <h2 className="section-title">Simple, Honest Pricing</h2>
            <p className="section-subtitle">No hidden fees. Cancel anytime. 7-day money-back guarantee.</p>
          </div>

          <div className="pricing-cards">
            {/* Free Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Free</h3>
                <div className="pricing-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/forever</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ All 30 lesson videos</li>
                <li>✓ Flashcards & quizzes</li>
                <li>✓ Community access</li>
                <li>⚠️ Limited AI tutor (5 questions/day)</li>
                <li>⚠️ Limited practice exams (1/month)</li>
                <li>❌ No interactive labs</li>
              </ul>
              <Link to="/signup" className="btn-pricing">
                Start Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-title">Pro</h3>
                <div className="pricing-price">
                  <span className="price-amount">$29</span>
                  <span className="price-period">/month</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Free</li>
                <li>✓ Unlimited AI tutor</li>
                <li>✓ All interactive labs</li>
                <li>✓ Unlimited practice exams</li>
                <li>✓ Advanced progress analytics</li>
                <li>✓ Downloadable resources</li>
                <li>✓ Priority support</li>
              </ul>
              <Link to="/signup?plan=pro" className="btn-pricing btn-pricing-featured">
                Start 7-Day Free Trial
              </Link>
              <p className="pricing-note">No credit card required for trial</p>
            </div>

            {/* One-Time Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Lifetime</h3>
                <div className="pricing-price">
                  <span className="price-amount">$149</span>
                  <span className="price-period">/one-time</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Pro</li>
                <li>✓ Lifetime access</li>
                <li>✓ All future course updates included</li>
                <li>✓ Early access to new courses</li>
                <li>✓ Founding member benefits</li>
              </ul>
              <Link to="/signup?plan=lifetime" className="btn-pricing">
                Get Lifetime Access
              </Link>
              <p className="pricing-note">Save $199 vs. 12 months of Pro</p>
            </div>
          </div>

          <div className="pricing-guarantee">
            <div className="guarantee-icon">🛡️</div>
            <div>
              <strong>7-Day Money-Back Guarantee</strong>
              <p>Not happy? Get a full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How is this different from Professor Messer or Udemy?</h3>
              <p className="faq-answer">
                We're the only platform with interactive labs where you actually DO things instead of
                just watching. Plus, our AI tutor gives you instant help 24/7—no waiting for course Q&A.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do I need any prior experience?</h3>
              <p className="faq-answer">
                Nope! We start from the basics and build up. If you can use a computer, you can learn networking.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I really finish in 30 days?</h3>
              <p className="faq-answer">
                Yes, if you study 1-2 hours per day. We have a structured 30-day plan, but you can go faster
                or slower based on your schedule.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What if I fail the exam?</h3>
              <p className="faq-answer">
                Keep your subscription active and keep studying. We're here until you succeed with unlimited
                access to all materials and practice exams.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I cancel anytime?</h3>
              <p className="faq-answer">
                Absolutely. No contracts, no commitments. Cancel in one click from your account settings.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you offer discounts for students?</h3>
              <p className="faq-answer">
                Yes! Email us at support@certifystack.com with your .edu email for 20% off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-box">
            <h2 className="final-cta-title">
              Ready to Pass Your IT Certification?
            </h2>
            <p className="final-cta-subtitle">
              Start with hands-on labs and AI tutoring—no boring videos
            </p>
            <Link to="/signup" className="btn-final-cta">
              Start Learning Free Today →
            </Link>
            <p className="final-cta-note">
              No credit card required • 7-day money-back guarantee • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand">
              <img src="/logo.png" alt="CertifyStack" className="brand-icon" />
              <span className="brand-name">CertifyStack</span>
            </div>
            <p className="footer-tagline">Master IT certifications through hands-on practice</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <Link to="/courses">Courses</Link>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/refund">Refund Policy</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 CertifyStack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
