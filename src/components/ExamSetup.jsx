import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateQuestionPool, getQuestionCounts, getCourseDomainCount } from '../utils/examGenerator';
import { useActiveCourse } from '../context/ActiveCourseContext';
import './ExamSetup.css';

// Domain names per course
const courseDomainNames = {
  'network-plus': {
    '1': 'Networking Concepts',
    '2': 'Network Infrastructure',
    '3': 'Network Operations',
    '4': 'Network Security',
    '5': 'Network Troubleshooting'
  },
  'a-plus-core1': {
    '1': 'Mobile Devices',
    '2': 'Networking',
    '3': 'Hardware',
    '4': 'Virtualization & Cloud',
    '5': 'Troubleshooting'
  },
  'a-plus-core2': {
    '1': 'Operating Systems',
    '2': 'Security',
    '3': 'Software Troubleshooting',
    '4': 'Operational Procedures'
  },
  'security-plus': {
    '1': 'General Security Concepts',
    '2': 'Threats, Vulnerabilities & Mitigations',
    '3': 'Security Architecture',
    '4': 'Security Operations',
    '5': 'Security Program Management'
  }
};

const courseDisplayNames = {
  'network-plus': 'Network+',
  'a-plus-core1': 'A+ Core 1',
  'a-plus-core2': 'A+ Core 2',
  'security-plus': 'Security+'
};

function ExamSetup() {
  const navigate = useNavigate();
  const [examMode, setExamMode] = useState('full');
  const [selectedDomain, setSelectedDomain] = useState('1');
  const [settings, setSettings] = useState({
    timed: true,
    duration: 5400, // 90 minutes in seconds
    allowReview: true,
    showExplanations: false // Show immediately vs only after submit
  });

  // Use ActiveCourseContext for course selection (syncs with navbar dropdown)
  const { activeCourse, loading: courseLoading } = useActiveCourse();
  const activeCourseId = activeCourse?.id || 'network-plus';

  // Get question counts for display
  const questionCounts = getQuestionCounts(activeCourseId);
  const validation = validateQuestionPool(activeCourseId);

  const domainNames = courseDomainNames[activeCourseId] || courseDomainNames['network-plus'];
  const courseDisplayName = courseDisplayNames[activeCourseId] || 'Network+';

  const startExam = () => {
    // Validate before starting
    if (!validation.isValid) {
      alert('Not enough questions to generate exam. Need at least:\n' + validation.warnings.join('\n'));
      return;
    }

    // Navigate to instructions screen instead of directly to exam
    navigate('/exam-instructions', {
      state: {
        mode: examMode,
        settings: {
          ...settings,
          courseId: activeCourseId,
          selectedDomain: selectedDomain,
          domainName: examMode === 'domain' ? domainNames[selectedDomain] : null
        }
      }
    });
  };

  const getExamDuration = () => {
    if (examMode === 'full') return '90 minutes';
    if (examMode === 'domain') return '30 minutes';
    if (examMode === 'quick') return 'Untimed';
    return 'Unknown';
  };

  const getQuestionCount = () => {
    if (examMode === 'full') return '90 questions';
    if (examMode === 'domain') return '25 questions';
    if (examMode === 'quick') return '15 questions';
    return 'Unknown';
  };

  // Show loading while course is being fetched
  if (courseLoading) {
    return (
      <div className="exam-setup">
        <div className="exam-setup-container">
          <div className="exam-setup-header">
            <h1>Practice Exam</h1>
            <p className="subtitle">Loading course information...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="exam-setup">
      <div className="exam-setup-container">
        {/* Header */}
        <div className="exam-setup-header">
          <h1>Practice Exam</h1>
          <p className="subtitle">Test your {courseDisplayName} knowledge with realistic practice exams</p>
        </div>

        {/* Question Bank Status - only show if invalid (admin info) */}
        {!validation.isValid && process.env.NODE_ENV === 'development' && (
          <div className="warning-banner">
            <strong>⚠️ Warning:</strong> Question bank is incomplete
            <ul>
              {validation.warnings.map((warning, idx) => (
                <li key={idx}>{warning}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Exam Mode Selection */}
        <div className="exam-mode-selection">
          <h2>Choose Your Practice Exam</h2>
          
          {/* Full Exam */}
          <div
            className={`exam-mode-card ${examMode === 'full' ? 'selected' : ''}`}
            onClick={() => setExamMode('full')}
          >
            <div className="mode-icon">🎯</div>
            <div className="mode-content">
              <h3>Full Practice Exam</h3>
              <p className="mode-stats">90 questions • 90 minutes</p>
              <p className="mode-description">
                Complete exam simulation matching the real {courseDisplayName} format.
                Tests all {getCourseDomainCount(activeCourseId)} domains with proper weighting.
              </p>
              <div className="mode-breakdown">
                {Array.from({ length: getCourseDomainCount(activeCourseId) }, (_, i) => i + 1).map(num => (
                  <span key={num}>Domain {num}: {domainNames[num.toString()]}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Domain Practice */}
          <div 
            className={`exam-mode-card ${examMode === 'domain' ? 'selected' : ''}`}
            onClick={() => setExamMode('domain')}
          >
            <div className="mode-icon">📚</div>
            <div className="mode-content">
              <h3>Domain Practice</h3>
              <p className="mode-stats">25 questions • 30 minutes</p>
              <p className="mode-description">
                Focus on a specific domain to strengthen weak areas or master particular topics.
              </p>
              
              {examMode === 'domain' && (
                <div className="domain-selector">
                  <label htmlFor="domain-select">Select Domain:</label>
                  <select
                    id="domain-select"
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="domain-select"
                  >
                    {Array.from({ length: getCourseDomainCount(activeCourseId) }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num.toString()}>
                        Domain {num}: {domainNames[num.toString()]}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Quick Quiz */}
          <div 
            className={`exam-mode-card ${examMode === 'quick' ? 'selected' : ''}`}
            onClick={() => setExamMode('quick')}
          >
            <div className="mode-icon">⚡</div>
            <div className="mode-content">
              <h3>Quick Quiz</h3>
              <p className="mode-stats">15 questions • Untimed</p>
              <p className="mode-description">
                Fast confidence check with random questions from all domains. 
                Perfect for daily practice or warm-up before studying.
              </p>
            </div>
          </div>
        </div>

        {/* Exam Settings */}
        <div className="exam-settings">
          <h3>Exam Settings</h3>
          
          <div className="settings-grid">
            <label className="setting-option">
              <input
                type="checkbox"
                checked={settings.timed}
                onChange={(e) => setSettings({...settings, timed: e.target.checked})}
                disabled={examMode === 'quick'} // Quick quiz is always untimed
              />
              <div className="setting-info">
                <span className="setting-label">Timed Mode</span>
                <span className="setting-description">
                  {examMode === 'quick' 
                    ? 'Quick quizzes are always untimed' 
                    : `Countdown timer: ${getExamDuration()}`
                  }
                </span>
              </div>
            </label>

            <label className="setting-option">
              <input
                type="checkbox"
                checked={settings.allowReview}
                onChange={(e) => setSettings({...settings, allowReview: e.target.checked})}
              />
              <div className="setting-info">
                <span className="setting-label">Allow Question Review</span>
                <span className="setting-description">
                  Navigate between questions before submitting
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Summary Card */}
        <div className="exam-summary">
          <h3>Exam Summary</h3>
          <div className="summary-details">
            <div className="summary-row">
              <span className="summary-label">Mode:</span>
              <span className="summary-value">
                {examMode === 'full' && 'Full Practice Exam'}
                {examMode === 'domain' && `Domain ${selectedDomain}: ${domainNames[selectedDomain]}`}
                {examMode === 'quick' && 'Quick Quiz'}
              </span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Questions:</span>
              <span className="summary-value">{getQuestionCount()}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Duration:</span>
              <span className="summary-value">
                {settings.timed ? getExamDuration() : 'Untimed'}
              </span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Review:</span>
              <span className="summary-value">
                {settings.allowReview ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button 
          className="start-exam-btn" 
          onClick={startExam}
          disabled={!validation.isValid}
        >
          <span className="btn-text">Start Exam</span>
          <span className="btn-icon">→</span>
        </button>

        {/* Back to Dashboard */}
        <button 
          className="back-btn" 
          onClick={() => navigate('/dashboard')}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default ExamSetup;