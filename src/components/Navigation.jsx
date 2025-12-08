import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle, Target, FlaskConical, FileText, User, Menu, X, Zap, LayoutDashboard, Users, HelpCircle, ChevronDown, Check } from 'lucide-react';
import { useTour } from '../context/TourContext';
import { useActiveCourse } from '../context/ActiveCourseContext';
import { supabase } from '../lib/supabase';
import './Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [helpMenuOpen, setHelpMenuOpen] = useState(false);
  const [courseMenuOpen, setCourseMenuOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const { restartTour } = useTour();
  const navigate = useNavigate();

  // Use shared context for active course (syncs across all components)
  const { activeCourse, allCourses, setActiveCourse } = useActiveCourse();

  useEffect(() => {
    loadUserProfile();
  }, []);

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
    // Redirect to Stripe payment link with 7-day free trial
    window.location.href = 'https://buy.stripe.com/3cI8wPewj6FWbwJ1UVcEw01';
  };

  const handleRestartTour = () => {
    closeHelpMenu();
    restartTour();
  };

  const toggleCourseMenu = () => {
    setCourseMenuOpen(!courseMenuOpen);
    setHelpMenuOpen(false); // Close other menus
  };

  const closeCourseMenu = () => {
    setCourseMenuOpen(false);
  };

  const handleCourseSelect = async (course) => {
    if (course.status !== 'available') {
      closeCourseMenu();
      return;
    }
    await setActiveCourse(course.id);
    closeCourseMenu();
    // Navigate to the new course's lessons page
    navigate(`/course/${course.id}/lessons`);
  };

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/dashboard" className="nav-logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="MyStack" className="logo-icon" />
          <span className="logo-text">MyStack</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="nav-links desktop-nav">
          {/* Course Selector Dropdown */}
          <div className="course-selector-container">
            <button
              className="course-selector-btn"
              onClick={toggleCourseMenu}
              title="Switch Course"
            >
              <span className="course-emoji">{activeCourse?.icon_emoji || '📚'}</span>
              <span className="course-name">{activeCourse?.short_name || 'Select Course'}</span>
              <ChevronDown size={16} className={`chevron ${courseMenuOpen ? 'open' : ''}`} />
            </button>

            {courseMenuOpen && (
              <>
                <div className="course-menu-backdrop" onClick={closeCourseMenu} />
                <div className="course-menu-dropdown">
                  <div className="course-menu-header">Switch Course</div>
                  {allCourses.map((course) => (
                    <button
                      key={course.id}
                      className={`course-menu-item ${course.status !== 'available' ? 'disabled' : ''} ${activeCourse?.id === course.id ? 'active' : ''}`}
                      onClick={() => handleCourseSelect(course)}
                      disabled={course.status !== 'available'}
                    >
                      <span className="course-item-emoji">{course.icon_emoji}</span>
                      <div className="course-item-info">
                        <div className="course-item-name">{course.short_name}</div>
                        {course.status !== 'available' && (
                          <div className="course-item-status">Coming Soon</div>
                        )}
                      </div>
                      {activeCourse?.id === course.id && (
                        <Check size={16} className="course-check" />
                      )}
                    </button>
                  ))}
                  <div className="course-menu-divider" />
                  <button
                    className="course-menu-item view-all"
                    onClick={() => {
                      closeCourseMenu();
                      navigate('/courses');
                    }}
                  >
                    <span className="course-item-emoji">📋</span>
                    <div className="course-item-info">
                      <div className="course-item-name">View All Courses</div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <LayoutDashboard size={20} />
            <span>MyStack</span>
          </NavLink>

          <NavLink
            to={activeCourse ? `/course/${activeCourse.id}/lessons` : '/lessons'}
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
            to={activeCourse ? `/course/${activeCourse.id}/labs` : '/labs'}
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
                    href="mailto:hello@certifystack.com"
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
            to="/dashboard"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <LayoutDashboard size={20} />
            <span>MyStack</span>
          </NavLink>

          {/* Course Selector - Mobile */}
          <div className="mobile-course-selector">
            <div className="mobile-course-label">Active Course:</div>
            <div className="mobile-course-options">
              {allCourses.map((course) => (
                <button
                  key={course.id}
                  className={`mobile-course-option ${activeCourse?.id === course.id ? 'active' : ''} ${course.status !== 'available' ? 'disabled' : ''}`}
                  onClick={() => {
                    if (course.status === 'available') {
                      setActiveCourse(course.id);
                      closeMobileMenu();
                      navigate(`/course/${course.id}/lessons`);
                    }
                  }}
                  disabled={course.status !== 'available'}
                >
                  <span className="course-emoji">{course.icon_emoji}</span>
                  <span className="course-name">{course.short_name}</span>
                  {activeCourse?.id === course.id && <Check size={14} />}
                  {course.status !== 'available' && <span className="coming-soon-tag">Soon</span>}
                </button>
              ))}
            </div>
            <button
              className="mobile-view-all-courses"
              onClick={() => {
                closeMobileMenu();
                navigate('/courses');
              }}
            >
              📋 View All Courses
            </button>
          </div>

          <NavLink
            to={activeCourse ? `/course/${activeCourse.id}/lessons` : '/lessons'}
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
            to={activeCourse ? `/course/${activeCourse.id}/labs` : '/labs'}
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
