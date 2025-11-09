import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  calculateExamScore,
  identifyWeakAreas,
  getStudyRecommendations,
  getDomainName,
  getPerformanceLevel,
  formatScoreDisplay,
  generateSummary
} from './examScoring';
import { formatTimeHuman, getTimeElapsed } from '../hooks/useExamState';
import { saveExamAttempt } from '../services/examService';
import './ExamResults.css';

function ExamResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { examState, mode, settings } = location.state || {};
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  // Calculate results (before any hooks that depend on it)
  const results = examState ? calculateExamScore(examState) : null;
  const weakAreas = results ? identifyWeakAreas(results.domainScores) : [];
  const recommendations = results ? getStudyRecommendations(results) : [];
  const performance = results ? getPerformanceLevel(results.percentage) : null;
  const displayScore = results ? formatScoreDisplay(results) : null;
  const summary = results ? generateSummary(results) : '';
  const timeSpent = examState ? getTimeElapsed(examState.startTime) : 0;

  // Redirect if no exam state
  useEffect(() => {
    if (!examState) {
      navigate('/practice-exam-setup');
    }
  }, [examState, navigate]);

  // Save to Supabase on mount
  useEffect(() => {
    if (!examState || !results) return;

    const handleSaveResults = async () => {
      setIsSaving(true);
      const response = await saveExamAttempt(examState, results, { mode, ...settings });

      if (response.success) {
        console.log('Exam results saved successfully');
      } else {
        console.error('Failed to save exam results:', response.error);
        setSaveError(response.error);
      }

      setIsSaving(false);
    };

    if (!isSaving) {
      handleSaveResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!examState) {
    return (
      <div className="exam-results loading">
        <div className="loading-message">Loading results...</div>
      </div>
    );
  }

  const getModeLabel = () => {
    if (mode === 'full') return 'Full Practice Exam';
    if (mode === 'domain') return 'Domain Practice Exam';
    if (mode === 'quick') return 'Quick Quiz';
    return 'Practice Exam';
  };

  const handleReviewAnswers = () => {
    navigate('/exam-review', {
      state: { examState, results }
    });
  };

  const handleRetakeExam = () => {
    navigate('/practice-exam-setup');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="exam-results">
      <div className="results-container">
        
        {/* Header */}
        <div className="results-header">
          <div className="completion-badge">
            {results.passed ? '🎉' : '📚'}
          </div>
          <h1>Exam Complete!</h1>
          <p className="exam-mode-label">{getModeLabel()}</p>
        </div>

        {/* Score Overview */}
        <div className="score-overview">
          <div className="score-circle-wrapper">
            <div 
              className="score-circle"
              style={{ 
                background: `conic-gradient(${performance.color} ${results.percentage * 3.6}deg, var(--bg-tertiary) 0deg)`
              }}
            >
              <div className="score-inner">
                <div className="score-percentage">{results.percentage}%</div>
                <div className="score-fraction">{displayScore.fraction}</div>
              </div>
            </div>
            <div className="score-letter-grade" style={{ color: performance.color }}>
              {displayScore.letterGrade}
            </div>
          </div>
          
          <div className="result-status-section">
            <div 
              className={`result-status-badge ${results.passed ? 'passed' : 'failed'}`}
              style={{ borderColor: performance.color }}
            >
              <span className="status-icon">{results.passed ? '✓' : '✗'}</span>
              <span className="status-text">{displayScore.status}</span>
            </div>
            
            <div className="performance-level" style={{ color: performance.color }}>
              {performance.level}
            </div>
            
            <p className="performance-message">
              {performance.message}
            </p>

            <div className="scaled-score">
              Scaled Score: <strong>{displayScore.scaledScore}</strong>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="results-summary">
          <p>{summary}</p>
        </div>

        {/* Stats Grid */}
        <div className="exam-stats-grid">
          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div className="stat-value correct">{results.totalCorrect}</div>
            <div className="stat-label">Correct</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">✗</div>
            <div className="stat-value incorrect">{results.totalIncorrect}</div>
            <div className="stat-label">Incorrect</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-value">{formatTimeHuman(timeSpent)}</div>
            <div className="stat-label">Time Spent</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-value">{examState.markedForReview.length}</div>
            <div className="stat-label">Marked</div>
          </div>
        </div>

        {/* PBQ Performance (if exam included PBQs) */}
        {results.totalPBQPoints > 0 && (
          <div className="pbq-performance-section">
            <h2>Performance-Based Questions (PBQs)</h2>
            <p className="section-description">
              PBQs test hands-on skills and offer partial credit. Here's how you performed:
            </p>

            <div className="pbq-stats-grid">
              <div className="pbq-stat-card">
                <div className="pbq-stat-label">PBQ Points Earned</div>
                <div className="pbq-stat-value">
                  <span className="points-earned">{results.pbqPointsEarned}</span>
                  <span className="points-separator"> / </span>
                  <span className="points-total">{results.totalPBQPoints}</span>
                </div>
                <div className="pbq-percentage">
                  {Math.round((results.pbqPointsEarned / results.totalPBQPoints) * 100)}% of PBQ points
                </div>
              </div>

              <div className="pbq-stat-card">
                <div className="pbq-stat-label">MCQ Performance</div>
                <div className="pbq-stat-value">
                  <span className="points-earned">{results.mcqCorrect}</span>
                  <span className="points-separator"> / </span>
                  <span className="points-total">{results.mcqTotal}</span>
                </div>
                <div className="pbq-percentage">
                  {Math.round((results.mcqCorrect / results.mcqTotal) * 100)}% correct
                </div>
              </div>

              <div className="pbq-stat-card highlight">
                <div className="pbq-stat-label">Overall Score</div>
                <div className="pbq-stat-value">
                  <span className="points-earned">{results.earnedPoints}</span>
                  <span className="points-separator"> / </span>
                  <span className="points-total">{results.totalPossiblePoints}</span>
                </div>
                <div className="pbq-percentage">
                  {results.percentage}% total points earned
                </div>
              </div>
            </div>

            <div className="pbq-info-note">
              <div className="info-icon">💡</div>
              <div className="info-text">
                <strong>Note:</strong> The real CompTIA exam includes PBQs worth multiple points each.
                Your final score is calculated based on total points earned, not just number of questions correct.
              </div>
            </div>
          </div>
        )}

        {/* Domain Breakdown */}
        <div className="domain-breakdown-section">
          <h2>Performance by Domain</h2>
          <p className="section-description">
            CompTIA Network+ exam weights each domain differently. Here's how you performed:
          </p>
          
          <div className="domain-list">
            {Object.entries(results.domainScores)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([domain, score]) => {
                const isWeak = score.percentage < 70;
                const isStrong = score.percentage >= 90;
                
                return (
                  <div 
                    key={domain} 
                    className={`domain-item ${isWeak ? 'weak' : ''} ${isStrong ? 'strong' : ''}`}
                  >
                    <div className="domain-header">
                      <div className="domain-info">
                        <span className="domain-code">{domain}</span>
                        <span className="domain-name">{getDomainName(domain)}</span>
                      </div>
                      <div className="domain-score">
                        <span className="score-numbers">
                          {score.correct}/{score.total}
                        </span>
                        <span 
                          className="score-percentage"
                          style={{ 
                            color: score.percentage >= 70 ? 'var(--accent-green)' : 'var(--error)' 
                          }}
                        >
                          {score.percentage}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="domain-progress-bar">
                      <div 
                        className="domain-progress-fill"
                        style={{
                          width: `${score.percentage}%`,
                          background: score.percentage >= 90 
                            ? 'var(--accent-green)' 
                            : score.percentage >= 70 
                              ? 'var(--accent-cyan)' 
                              : 'var(--error)'
                        }}
                      >
                        <span className="progress-shimmer"></span>
                      </div>
                    </div>
                    
                    {isWeak && (
                      <div className="domain-flag weak-flag">
                        ⚠️ Needs improvement
                      </div>
                    )}
                    {isStrong && (
                      <div className="domain-flag strong-flag">
                        💪 Strong performance
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Weak Areas Alert */}
        {weakAreas.length > 0 && (
          <div className="weak-areas-section">
            <div className="weak-areas-header">
              <h2>⚠️ Focus Areas</h2>
              <p>These domains need additional study to reach passing level (70%):</p>
            </div>
            
            <div className="weak-areas-list">
              {weakAreas.map((area, index) => (
                <div key={area.domain} className="weak-area-card">
                  <div className="weak-area-rank">#{index + 1}</div>
                  <div className="weak-area-content">
                    <h3>{area.domainName}</h3>
                    <div className="weak-area-stats">
                      <span className="weak-area-score">
                        Current: {area.percentage}% ({area.correct}/{area.total})
                      </span>
                      <span className="weak-area-goal">
                        Need: +{area.deficit}% to reach 70%
                      </span>
                    </div>
                  </div>
                  <button 
                    className="study-domain-btn"
                    onClick={() => navigate(`/lessons?domain=${area.domain}`)}
                  >
                    Study Now →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study Recommendations */}
        <div className="recommendations-section">
          <h2>📚 Study Recommendations</h2>
          <p className="section-description">
            Based on your performance, here's what we recommend:
          </p>
          
          <div className="recommendations-grid">
            {recommendations.map((rec, index) => (
              <div 
                key={index} 
                className={`recommendation-card ${rec.type}`}
              >
                <div className="rec-icon">{rec.icon}</div>
                <div className="rec-content">
                  <h3>{rec.title}</h3>
                  <p>{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="results-actions">
          <button 
            className="action-btn primary"
            onClick={handleReviewAnswers}
          >
            <span className="btn-icon">📋</span>
            <span className="btn-text">Review Answers</span>
          </button>
          
          <button 
            className="action-btn secondary"
            onClick={handleRetakeExam}
          >
            <span className="btn-icon">🔄</span>
            <span className="btn-text">Take Another Exam</span>
          </button>
          
          <button 
            className="action-btn tertiary"
            onClick={handleDashboard}
          >
            <span className="btn-icon">🏠</span>
            <span className="btn-text">Back to Dashboard</span>
          </button>
        </div>

        {/* Motivational Footer */}
        <div className="results-footer">
          {results.passed ? (
            <>
              <p className="footer-message success">
                <strong>Great job!</strong> Keep practicing to maintain and improve your score.
              </p>
              <p className="footer-tip">
                💡 Take 2-3 more practice exams to build confidence before the real test.
              </p>
            </>
          ) : (
            <>
              <p className="footer-message">
                <strong>Don't give up!</strong> Every practice exam helps you improve.
              </p>
              <p className="footer-tip">
                💡 Review your weak areas, study the lessons, and try again. You've got this!
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default ExamResults;