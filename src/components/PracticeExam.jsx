import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateFullExam, generateDomainExam, generateQuickQuiz } from '../utils/examGenerator';
import { useExamState, formatTime } from '../hooks/useExamState';
import './PracticeExam.css';

function PracticeExam() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, domain, settings } = location.state || {};
  const [showNavigator, setShowNavigator] = useState(false);

  // Redirect if no state (direct navigation)
  useEffect(() => {
    if (!mode || !settings) {
      navigate('/practice-exam-setup');
    }
  }, [mode, settings, navigate]);

  // Generate questions based on mode
  const questions = React.useMemo(() => {
    if (!mode) return [];
    
    try {
      if (mode === 'domain') {
        return generateDomainExam(parseInt(domain));
      } else if (mode === 'quick') {
        return generateQuickQuiz();
      } else {
        return generateFullExam();
      }
    } catch (error) {
      console.error('Error generating exam:', error);
      alert('Error generating exam. Returning to setup.');
      navigate('/practice-exam-setup');
      return [];
    }
  }, [mode, domain, navigate]);

  const {
    examState,
    answerQuestion,
    toggleMarkForReview,
    goToQuestion,
    nextQuestion,
    previousQuestion,
    startTimer,
    submitExam,
    progress
  } = useExamState(questions, settings);

  // Auto-start timer on mount if timed mode
  useEffect(() => {
    if (settings?.timed && questions.length > 0) {
      startTimer();
    }
  }, [settings, questions.length, startTimer]);

  // Navigate to results when complete
  useEffect(() => {
    if (examState.isComplete) {
      navigate('/exam-results', {
        state: {
          examState,
          mode,
          settings
        }
      });
    }
  }, [examState.isComplete, navigate, examState, mode, settings]);

  // Prevent accidental page close
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!examState.isComplete && Object.keys(examState.answers).length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [examState.isComplete, examState.answers]);

  if (!mode || questions.length === 0) {
    return (
      <div className="practice-exam loading">
        <div className="loading-message">Loading exam...</div>
      </div>
    );
  }

  const currentQ = examState.questions[examState.currentQuestion];
  const selectedAnswer = examState.answers[currentQ.id];
  const isMarked = examState.markedForReview.includes(currentQ.id);

  const handleSubmit = () => {
    const unanswered = examState.questions.length - Object.keys(examState.answers).length;
    
    if (unanswered > 0) {
      const confirmMessage = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}.\n\nAre you sure you want to submit?`;
      if (!window.confirm(confirmMessage)) {
        return;
      }
    }
    
    submitExam();
  };

  const getQuestionStatus = (index) => {
    const question = examState.questions[index];
    const isAnswered = examState.answers.hasOwnProperty(question.id);
    const isMarked = examState.markedForReview.includes(question.id);
    const isCurrent = index === examState.currentQuestion;

    if (isCurrent) return 'current';
    if (isMarked) return 'marked';
    if (isAnswered) return 'answered';
    return 'unanswered';
  };

  return (
    <div className="practice-exam">
      {/* Header */}
      <div className="exam-header">
        <div className="exam-info">
          <div className="question-counter">
            Question <strong>{examState.currentQuestion + 1}</strong> of <strong>{examState.questions.length}</strong>
          </div>
          <div className="domain-badge">
            Domain {currentQ.domain}
          </div>
        </div>
        
        <div className="header-actions">
          {settings?.timed && examState.timeRemaining !== null && (
            <div className={`exam-timer ${examState.timeRemaining < 300 ? 'warning' : ''}`}>
              <span className="timer-icon">⏱️</span>
              <span className="timer-value">{formatTime(examState.timeRemaining)}</span>
            </div>
          )}
          
          <button 
            className="navigator-toggle"
            onClick={() => setShowNavigator(!showNavigator)}
            title="Question Navigator"
          >
            <span className="grid-icon">☰</span>
            <span className="navigator-label">Navigator</span>
          </button>
        </div>
      </div>

      {/* Question Navigator Overlay */}
      {showNavigator && (
        <div className="navigator-overlay" onClick={() => setShowNavigator(false)}>
          <div className="navigator-panel" onClick={(e) => e.stopPropagation()}>
            <div className="navigator-header">
              <h3>Question Navigator</h3>
              <button className="close-navigator" onClick={() => setShowNavigator(false)}>×</button>
            </div>
            
            <div className="navigator-legend">
              <div className="legend-item">
                <span className="legend-box answered"></span>
                <span>Answered ({progress.answered})</span>
              </div>
              <div className="legend-item">
                <span className="legend-box marked"></span>
                <span>Marked ({examState.markedForReview.length})</span>
              </div>
              <div className="legend-item">
                <span className="legend-box unanswered"></span>
                <span>Unanswered ({progress.unanswered})</span>
              </div>
            </div>

            <div className="navigator-grid">
              {examState.questions.map((q, index) => (
                <button
                  key={q.id}
                  className={`navigator-item ${getQuestionStatus(index)}`}
                  onClick={() => {
                    goToQuestion(index);
                    setShowNavigator(false);
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="exam-content">
        <div className="question-container">
          {/* Question Text */}
          <div className="question-text">
            <div className="question-number">Question {examState.currentQuestion + 1}</div>
            {currentQ.question}
          </div>

          {/* Answer Options */}
          <div className="answer-options">
            {currentQ.options.map((option, index) => (
              <div
                key={index}
                className={`answer-option ${selectedAnswer === index ? 'selected' : ''}`}
                onClick={() => answerQuestion(currentQ.id, index)}
              >
                <div className="option-indicator">
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <div className="option-text">{option}</div>
                {selectedAnswer === index && (
                  <div className="selected-checkmark">✓</div>
                )}
              </div>
            ))}
          </div>

          {/* Mark for Review */}
          <button
            className={`mark-review-btn ${isMarked ? 'marked' : ''}`}
            onClick={() => toggleMarkForReview(currentQ.id)}
          >
            <span className="star-icon">{isMarked ? '★' : '☆'}</span>
            <span>{isMarked ? 'Marked for Review' : 'Mark for Review'}</span>
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="exam-footer">
        <div className="footer-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((examState.currentQuestion + 1) / examState.questions.length) * 100}%`
              }}
            />
          </div>
          <div className="progress-stats">
            <span>{progress.answered} answered</span>
            <span>•</span>
            <span>{examState.markedForReview.length} marked</span>
            <span>•</span>
            <span>{progress.unanswered} remaining</span>
          </div>
        </div>

        <div className="footer-navigation">
          <button
            onClick={previousQuestion}
            disabled={examState.currentQuestion === 0}
            className="nav-btn prev-btn"
          >
            <span className="nav-icon">←</span>
            <span className="nav-text">Previous</span>
          </button>

          <button
            onClick={nextQuestion}
            disabled={examState.currentQuestion === examState.questions.length - 1}
            className="nav-btn next-btn"
          >
            <span className="nav-text">Next</span>
            <span className="nav-icon">→</span>
          </button>

          <button
            onClick={handleSubmit}
            className="submit-exam-btn"
          >
            <span className="submit-icon">✓</span>
            <span>End Exam</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PracticeExam;