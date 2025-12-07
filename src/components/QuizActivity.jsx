import React, { useState, useEffect } from 'react';
import { saveQuizScore } from '../services/progressService';
import { randomizeQuizAnswers } from '../utils/quizUtils';
import '../styles/QuizActivity.css';

function QuizActivity({ lessonId, courseId = 'network-plus' }) {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [savingResults, setSavingResults] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [quizModule, setQuizModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // Parse and validate lessonId
  const parsedLessonId = parseInt(lessonId);
  const isValidLessonId = !isNaN(parsedLessonId) && parsedLessonId > 0;

  // Dynamically load quiz module based on courseId
  useEffect(() => {
    const loadQuizModule = async () => {
      setLoading(true);
      setLoadError(null);

      try {
        let module;
        switch (courseId) {
          case 'network-plus':
            module = await import('../courses/network-plus/quizzes');
            break;
          case 'a-plus-core1':
            module = await import('../courses/a-plus-core1/quizzes');
            break;
          case 'a-plus-core2':
            module = await import('../courses/a-plus-core2/quizzes');
            break;
          case 'security-plus':
            module = await import('../courses/security-plus/quizzes');
            break;
          default:
            // Default to network-plus for backward compatibility
            module = await import('../courses/network-plus/quizzes');
        }
        setQuizModule(module);
      } catch (err) {
        console.error('Error loading quiz module:', err);
        setLoadError(`Failed to load quizzes for ${courseId}`);
      } finally {
        setLoading(false);
      }
    };

    loadQuizModule();
  }, [courseId]);

  // Load quiz when module is ready and lessonId changes
  useEffect(() => {
    if (!quizModule || !isValidLessonId) {
      return;
    }

    const loadedQuiz = quizModule.getQuizByLesson(parsedLessonId);

    if (loadedQuiz) {
      // Randomize answer choices to prevent AI bias towards specific positions
      const randomizedQuiz = randomizeQuizAnswers(loadedQuiz);
      setQuiz(randomizedQuiz);
      // Reset all state when new quiz loads
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(0);
      setAnsweredQuestions([]);
      setQuizComplete(false);
    } else {
      setQuiz(null);
    }
  }, [lessonId, parsedLessonId, isValidLessonId, quizModule]);

  // If still loading the module
  if (loading) {
    return (
      <div className="quiz-activity">
        <div className="quiz-header">
          <h2>Loading Quiz...</h2>
        </div>
      </div>
    );
  }

  // If there was an error loading the module
  if (loadError) {
    return (
      <div className="quiz-activity">
        <div className="quiz-header">
          <h2>Error Loading Quiz</h2>
          <p>{loadError}</p>
        </div>
      </div>
    );
  }

  // If lessonId is invalid
  if (!isValidLessonId) {
    return (
      <div className="quiz-activity">
        <div className="quiz-header">
          <h2>Error Loading Quiz</h2>
          <p>Invalid lesson ID: {lessonId}</p>
        </div>
        <div className="no-quiz-message">
          <p>Please return to the lesson and try again.</p>
        </div>
      </div>
    );
  }

  // If quiz doesn't exist yet
  if (quizModule && !quizModule.hasQuiz(parsedLessonId)) {
    return (
      <div className="quiz-activity">
        <div className="quiz-header">
          <h2>Quiz Not Available</h2>
          <p>The quiz for Lesson {parsedLessonId} is coming soon!</p>
        </div>
        <div className="no-quiz-message">
          <p>This lesson is still in development. Check back later for the quiz.</p>
        </div>
      </div>
    );
  }

  // If quiz is still loading
  if (!quiz) {
    return (
      <div className="quiz-activity">
        <div className="quiz-header">
          <h2>Loading Quiz...</h2>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz[currentQuestionIndex];
  const totalQuestions = quiz.length;

  const handleAnswerSelect = (optionIndex) => {
    if (showExplanation) return; // Already answered
    setSelectedAnswer(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);

    // Record answer
    const isCorrect = selectedAnswer === currentQuestion.correct;
    setAnsweredQuestions([
      ...answeredQuestions,
      {
        questionId: currentQuestion.id,
        selectedAnswer,
        correctAnswer: currentQuestion.correct,
        isCorrect
      }
    ]);

    // Update score if correct
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz complete - save results to database
      setQuizComplete(true);
      setSavingResults(true);
      setSaveError(null);

      try {
        // Save quiz results to database with dynamic courseId
        await saveQuizScore(
          parsedLessonId,
          score,
          totalQuestions,
          courseId, // Use the courseId prop
          'lesson-quiz',
          answeredQuestions
        );
        console.log('Quiz results saved successfully');
      } catch (error) {
        console.error('Error saving quiz results:', error);
        setSaveError(error.message);
      } finally {
        setSavingResults(false);
      }
    }
  };

  const handleRetryQuiz = () => {
    // Re-randomize answer choices for a fresh quiz attempt
    if (quizModule) {
      const loadedQuiz = quizModule.getQuizByLesson(parsedLessonId);
      if (loadedQuiz) {
        const randomizedQuiz = randomizeQuizAnswers(loadedQuiz);
        setQuiz(randomizedQuiz);
      }
    }

    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  // Quiz Results Screen
  if (quizComplete) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 70;

    return (
      <div className="quiz-activity">
        <div className={`quiz-results ${passed ? 'passed' : 'failed'}`}>
          <h2>Quiz Complete!</h2>

          {savingResults && (
            <div style={{ padding: '10px', background: '#ffa500', color: '#000', borderRadius: '4px', marginBottom: '15px' }}>
              Saving your results...
            </div>
          )}

          {saveError && (
            <div style={{ padding: '10px', background: '#ff4444', color: '#fff', borderRadius: '4px', marginBottom: '15px' }}>
              Warning: Error saving results: {saveError}
            </div>
          )}

          {!savingResults && !saveError && (
            <div style={{ padding: '10px', background: '#4ade80', color: '#000', borderRadius: '4px', marginBottom: '15px' }}>
              Results saved to your profile!
            </div>
          )}

          <div className="score-display">
            <div className="score-big">{percentage}%</div>
            <div className="score-details">
              {score} out of {totalQuestions} correct
            </div>
          </div>

          <div className="result-message">
            {passed ? (
              <>
                <p>Congratulations! You passed!</p>
                <p>You've demonstrated a solid understanding of this lesson's concepts.</p>
              </>
            ) : (
              <>
                <p>Keep studying! You're making progress.</p>
                <p>Review the lesson material and try again. You need 70% to pass.</p>
              </>
            )}
          </div>

          <div className="review-section">
            <h3>Question Review</h3>
            {answeredQuestions.map((answer, index) => {
              const question = quiz[index];
              return (
                <div
                  key={index}
                  className={`review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <div className="review-header">
                    <span className="review-icon">
                      {answer.isCorrect ? '\u2713' : '\u2717'}
                    </span>
                    <span className="review-number">Question {index + 1}</span>
                  </div>
                  <p className="review-question">{question.question}</p>
                  {!answer.isCorrect && (
                    <div className="review-correction">
                      <strong>Your answer:</strong> {question.options[answer.selectedAnswer]}
                      <br />
                      <strong>Correct answer:</strong> {question.options[answer.correctAnswer]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="btn-retry" onClick={handleRetryQuiz}>
            Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  // Quiz Question Screen
  return (
    <div className="quiz-activity">
      <div className="quiz-header">
        <h2>Lesson {lessonId} Quiz</h2>
        <div className="quiz-progress">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
        <div className="quiz-score">
          Score: {score}/{currentQuestionIndex + (showExplanation ? 1 : 0)}
        </div>
      </div>

      <div className="question-card">
        <p className="question-text">{currentQuestion.question}</p>

        <div className="options">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correct;
            const showCorrect = showExplanation && isCorrect;
            const showIncorrect = showExplanation && isSelected && !isCorrect;

            return (
              <button
                key={index}
                className={`option ${isSelected ? 'selected' : ''} ${
                  showCorrect ? 'correct' : ''
                } ${showIncorrect ? 'incorrect' : ''}`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
                {showCorrect && <span className="option-icon">{'\u2713'}</span>}
                {showIncorrect && <span className="option-icon">{'\u2717'}</span>}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className={`explanation ${
            selectedAnswer === currentQuestion.correct ? 'correct' : 'incorrect'
          }`}>
            <div className="explanation-header">
              {selectedAnswer === currentQuestion.correct
                ? '\u2713 Correct!'
                : '\u2717 Incorrect'}
            </div>
            <p className="explanation-text">{currentQuestion.explanation}</p>
          </div>
        )}

        {!showExplanation && selectedAnswer !== null && (
          <button className="btn-next-question" onClick={handleSubmitAnswer}>
            Submit Answer
          </button>
        )}

        {showExplanation && (
          <button className="btn-next-question" onClick={handleNextQuestion}>
            {currentQuestionIndex < totalQuestions - 1
              ? 'Next Question'
              : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizActivity;
