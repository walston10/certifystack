import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle, Target, FlaskConical, FileText, User, Menu, X, Zap, GraduationCap } from 'lucide-react';
import './Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleUpgrade = () => {
    navigate('/profile');
    closeMobileMenu();
  };

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/" className="nav-logo" onClick={closeMobileMenu}>
          <span className="logo-icon">⚡</span>
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
          {/* Upgrade Button */}
          <button className="btn-upgrade" onClick={handleUpgrade}>
            <Zap size={16} />
            <span>Upgrade to Premium</span>
          </button>

          {/* Profile Dropdown */}
          <NavLink
            to="/profile"
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

          <NavLink
            to="/profile"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <User size={20} />
            <span>Profile</span>
          </NavLink>

          <div className="mobile-menu-divider"></div>

          <button className="mobile-upgrade-btn" onClick={handleUpgrade}>
            <Zap size={20} />
            <span>Upgrade to Premium</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
