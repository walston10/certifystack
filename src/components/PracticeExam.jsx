import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateFullExam, generateDomainExam, generateQuickQuiz } from '../utils/examGenerator';
import { useExamState, formatTimeRemaining } from '../hooks/useExamState';
import { Clock, AlertTriangle } from 'lucide-react';
import PBQDragDrop from './pbq/PBQDragDrop';
import PBQConfiguration from './pbq/PBQConfiguration';
import PBQMatching from './pbq/PBQMatching';
import PBQOrdering from './pbq/PBQOrdering';
import './PracticeExam.css';

function PracticeExam() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, domain, settings } = location.state || {};
  const [showNavigator, setShowNavigator] = useState(false);
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);

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
    submitExam,
    progress
  } = useExamState(questions, mode);

  // Check if time expired - auto submit
  useEffect(() => {
    if (examState.timeRemaining === 0 && !examState.examEnded && questions.length > 0) {
      setShowTimeUpModal(true);

      // Auto-navigate to results after 3 seconds
      setTimeout(() => {
        navigate('/exam-results', {
          state: {
            examState,
            mode,
            settings,
            timeExpired: true
          }
        });
      }, 3000);
    }
  }, [examState.timeRemaining, examState.examEnded, questions.length, examState, mode, settings, navigate]);

  // Navigate to results when manually submitted
  useEffect(() => {
    if (examState.examEnded && !showTimeUpModal) {
      navigate('/exam-results', {
        state: {
          examState,
          mode,
          settings,
          timeExpired: false
        }
      });
    }
  }, [examState.examEnded, navigate, examState, mode, settings, showTimeUpModal]);

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
  const isPBQ = currentQ.type !== undefined; // PBQs have a 'type' field

  // Handler for PBQ answers
  const handlePBQAnswer = (answer) => {
    answerQuestion(currentQ.id, answer);
  };

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

  // Get timer warning level
  const getTimerClass = () => {
    const minutes = Math.floor(examState.timeRemaining / 60);
    if (minutes <= 5) return 'timer-critical';
    if (minutes <= 10) return 'timer-warning';
    return '';
  };

  const getTimerIcon = () => {
    const minutes = Math.floor(examState.timeRemaining / 60);
    if (minutes <= 5) {
      return <AlertTriangle size={20} className="timer-icon-warning" />;
    }
    return <Clock size={20} />;
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
          {/* Timer Display */}
          <div className={`exam-timer ${getTimerClass()}`}>
            {getTimerIcon()}
            <span className="timer-text">
              {formatTimeRemaining(examState.timeRemaining)}
            </span>
          </div>

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

      {/* Time Warning Banner */}
      {examState.timeRemaining <= 300 && examState.timeRemaining > 0 && (
        <div className="time-warning-banner">
          <AlertTriangle size={20} />
          <span>
            {Math.floor(examState.timeRemaining / 60)} minutes remaining!
            The exam will auto-submit when time expires.
          </span>
        </div>
      )}

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
          {isPBQ ? (
            // PBQ Display
            <div className="pbq-question">
              <div className="pbq-header">
                <div className="pbq-badge">Performance-Based Question</div>
                <div className="question-number">Question {examState.currentQuestion + 1}</div>
              </div>

              <h2 className="pbq-title">{currentQ.title}</h2>

              <div className="pbq-scenario">
                <h3>Scenario:</h3>
                <p>{currentQ.scenario}</p>
              </div>

              <div className="pbq-instructions">
                <h3>Instructions:</h3>
                <p>{currentQ.instructions}</p>
              </div>

              <div className="pbq-component">
                {currentQ.type === 'drag-drop' && (
                  <PBQDragDrop
                    question={currentQ}
                    onAnswer={handlePBQAnswer}
                    userAnswer={selectedAnswer}
                    isReviewMode={false}
                  />
                )}

                {currentQ.type === 'configuration' && (
                  <PBQConfiguration
                    question={currentQ}
                    onAnswer={handlePBQAnswer}
                    userAnswer={selectedAnswer}
                    isReviewMode={false}
                  />
                )}

                {currentQ.type === 'matching' && (
                  <PBQMatching
                    question={currentQ}
                    onAnswer={handlePBQAnswer}
                    userAnswer={selectedAnswer}
                    isReviewMode={false}
                  />
                )}

                {currentQ.type === 'ordering' && (
                  <PBQOrdering
                    question={currentQ}
                    onAnswer={handlePBQAnswer}
                    userAnswer={selectedAnswer}
                    isReviewMode={false}
                  />
                )}
              </div>
            </div>
          ) : (
            // MCQ Display
            <>
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
            </>
          )}

          {/* Mark for Review (works for both MCQ and PBQ) */}
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

      {/* Time's Up Modal */}
      {showTimeUpModal && (
        <div className="modal-overlay">
          <div className="modal-content time-up-modal">
            <div className="modal-icon">
              <Clock size={64} />
            </div>
            <h2>Time's Up!</h2>
            <p>The exam time limit has been reached.</p>
            <p>Your answers are being submitted automatically...</p>
            <div className="loading-spinner"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PracticeExam;