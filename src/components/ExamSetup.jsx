import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateQuestionPool, getQuestionCounts } from '../utils/examGenerator';
import './ExamSetup.css';

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

  // Get question counts for display
  const questionCounts = getQuestionCounts();
  const validation = validateQuestionPool();

  const domainNames = {
    '1': 'Networking Concepts',
    '2': 'Network Infrastructure',
    '3': 'Network Operations',
    '4': 'Network Security',
    '5': 'Network Troubleshooting'
  };

  const startExam = () => {
    // Validate before starting
    if (!validation.isValid) {
      alert('Not enough questions to generate exam. Need at least:\n' + validation.warnings.join('\n'));
      return;
    }

    // Navigate to exam with settings
    navigate('/practice-exam', {
      state: {
        mode: examMode,
        domain: selectedDomain,
        settings: settings
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

  return (
    <div className="exam-setup">
      <div className="exam-setup-container">
        {/* Header */}
        <div className="exam-setup-header">
          <h1>Practice Exam</h1>
          <p className="subtitle">Test your Network+ knowledge with realistic practice exams</p>
        </div>

        {/* Question Bank Status */}
        {!validation.isValid && (
          <div className="warning-banner">
            <strong>⚠️ Warning:</strong> Question bank is incomplete
            <ul>
              {validation.warnings.map((warning, idx) => (
                <li key={idx}>{warning}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="question-bank-stats">
          <div className="stat">
            <span className="stat-value">{questionCounts.total}</span>
            <span className="stat-label">Total Questions</span>
          </div>
          <div className="stat">
            <span className="stat-value">{questionCounts.domain1}</span>
            <span className="stat-label">Domain 1</span>
          </div>
          <div className="stat">
            <span className="stat-value">{questionCounts.domain2}</span>
            <span className="stat-label">Domain 2</span>
          </div>
          <div className="stat">
            <span className="stat-value">{questionCounts.domain3}</span>
            <span className="stat-label">Domain 3</span>
          </div>
          <div className="stat">
            <span className="stat-value">{questionCounts.domain4}</span>
            <span className="stat-label">Domain 4</span>
          </div>
          <div className="stat">
            <span className="stat-value">{questionCounts.domain5}</span>
            <span className="stat-label">Domain 5</span>
          </div>
        </div>

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
                Complete exam simulation matching the real Network+ format. 
                Tests all 5 domains with proper weighting.
              </p>
              <div className="mode-breakdown">
                <span>Domain 1: 21 questions</span>
                <span>Domain 2: 18 questions</span>
                <span>Domain 3: 18 questions</span>
                <span>Domain 4: 24 questions</span>
                <span>Domain 5: 20 questions</span>
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
                    <option value="1">Domain 1: {domainNames['1']} ({questionCounts.domain1} questions)</option>
                    <option value="2">Domain 2: {domainNames['2']} ({questionCounts.domain2} questions)</option>
                    <option value="3">Domain 3: {domainNames['3']} ({questionCounts.domain3} questions)</option>
                    <option value="4">Domain 4: {domainNames['4']} ({questionCounts.domain4} questions)</option>
                    <option value="5">Domain 5: {domainNames['5']} ({questionCounts.domain5} questions)</option>
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