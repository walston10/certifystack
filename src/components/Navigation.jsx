import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle, Target, FlaskConical, FileText, User, Menu, X, Zap, GraduationCap, Users, HelpCircle } from 'lucide-react';
import { useTour } from '../context/TourContext';
import { getActiveCourse } from '../services/courseService';
import { supabase } from '../lib/supabase';
import './Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpMenuOpen, setHelpMenuOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const { restartTour } = useTour();

  useEffect(() => {
    loadActiveCourse();
    loadUserProfile();
  }, []);

  const loadActiveCourse = async () => {
    try {
      const course = await getActiveCourse();
      setActiveCourse(course);
    } catch (error) {
      console.error('Error loading active course:', error);
    }
  };

  const loadUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('membership_tier')
        .eq('id', user.id)
        .single();

      setIsPremium(profile?.membership_tier === 'premium');
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleHelpMenu = () => {
    setHelpMenuOpen(!helpMenuOpen);
  };

  const closeHelpMenu = () => {
    setHelpMenuOpen(false);
  };

  const handleUpgrade = () => {
    navigate('/account');
    closeMobileMenu();
  };

  const handleRestartTour = () => {
    closeHelpMenu();
    restartTour();
  };

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/dashboard" className="nav-logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="CertifyStack" className="logo-icon" />
          <span className="logo-text">CertifyStack</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-nav">
          <NavLink
            to="/courses"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <GraduationCap size={20} />
            <span>Courses</span>
          </NavLink>

          {/* Active Course Badge */}
          {activeCourse && (
            <div className="active-course-badge" title={activeCourse.title}>
              <span className="course-emoji">{activeCourse.icon_emoji}</span>
              <span className="course-name">{activeCourse.short_name}</span>
            </div>
          )}

          <NavLink
            to="/lessons"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <BookOpen size={20} />
            <span>Lessons</span>
          </NavLink>

          <NavLink
            to="/ai-tutor"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <MessageCircle size={20} />
            <span>AI Tutor</span>
          </NavLink>

          <NavLink
            to="/practice"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <Target size={20} />
            <span>Practice</span>
          </NavLink>

          <NavLink
            to="/labs"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <FlaskConical size={20} />
            <span>Labs</span>
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <FileText size={20} />
            <span>Resources</span>
          </NavLink>
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          {/* Community Button */}
          <a
            href="https://discord.gg/YNDe94Z9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-community"
          >
            <Users size={16} />
            <span>Community</span>
          </a>

          {/* Upgrade Button - Only show for non-premium users */}
          {!isPremium && (
            <button className="btn-upgrade" onClick={handleUpgrade}>
              <Zap size={16} />
              <span>Upgrade to Premium</span>
            </button>
          )}

          {/* Help Menu */}
          <div className="help-menu-container">
            <button
              className="btn-help"
              onClick={toggleHelpMenu}
              aria-label="Help menu"
            >
              <HelpCircle size={20} />
            </button>

            {helpMenuOpen && (
              <>
                <div className="help-menu-backdrop" onClick={closeHelpMenu} />
                <div className="help-menu-dropdown">
                  <button className="help-menu-item" onClick={handleRestartTour}>
                    <span className="help-icon">🎯</span>
                    <div>
                      <div className="help-title">Take the Tour</div>
                      <div className="help-desc">Learn how to use CertifyStack</div>
                    </div>
                  </button>
                  <a
                    href="https://docs.certifystack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="help-menu-item"
                    onClick={closeHelpMenu}
                  >
                    <span className="help-icon">📚</span>
                    <div>
                      <div className="help-title">Documentation</div>
                      <div className="help-desc">Read the full guide</div>
                    </div>
                  </a>
                  <a
                    href="mailto:support@certifystack.com"
                    className="help-menu-item"
                    onClick={closeHelpMenu}
                  >
                    <span className="help-icon">💬</span>
                    <div>
                      <div className="help-title">Contact Support</div>
                      <div className="help-desc">Get help from our team</div>
                    </div>
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Account/Profile Link */}
          <NavLink
            to="/account"
            className={({ isActive }) => `nav-profile ${isActive ? 'active' : ''}`}
          >
            <User size={20} />
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink
            to="/courses"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <GraduationCap size={20} />
            <span>Courses</span>
          </NavLink>

          {/* Active Course Badge - Mobile */}
          {activeCourse && (
            <div className="active-course-badge mobile-badge" title={activeCourse.title}>
              <span className="course-emoji">{activeCourse.icon_emoji}</span>
              <span className="course-name">Active: {activeCourse.short_name}</span>
            </div>
          )}

          <NavLink
            to="/lessons"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <BookOpen size={20} />
            <span>Lessons</span>
          </NavLink>

          <NavLink
            to="/ai-tutor"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <MessageCircle size={20} />
            <span>AI Tutor</span>
          </NavLink>

          <NavLink
            to="/practice"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <Target size={20} />
            <span>Practice</span>
          </NavLink>

          <NavLink
            to="/labs"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FlaskConical size={20} />
            <span>Labs</span>
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FileText size={20} />
            <span>Resources</span>
          </NavLink>

          <a
            href="https://discord.gg/YNDe94Z9"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            <Users size={20} />
            <span>Community</span>
          </a>

          <NavLink
            to="/account"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <User size={20} />
            <span>Account</span>
          </NavLink>

          <div className="mobile-menu-divider"></div>

          <button className="mobile-help-btn" onClick={handleRestartTour}>
            <HelpCircle size={20} />
            <span>Take the Tour</span>
          </button>

          {/* Upgrade Button - Only show for non-premium users */}
          {!isPremium && (
            <button className="mobile-upgrade-btn" onClick={handleUpgrade}>
              <Zap size={20} />
              <span>Upgrade to Premium</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
