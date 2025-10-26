import React, { useState, useEffect } from 'react';
import { getQuizByLesson, hasQuiz } from '../data/courses/network-plus/quizzes';
import '../styles/QuizActivity.css';

function QuizActivity({ lessonId }) {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  // Load quiz when component mounts or lessonId changes
  useEffect(() => {
    const loadedQuiz = getQuizByLesson(parseInt(lessonId));
    
    if (loadedQuiz) {
      setQuiz(loadedQuiz);
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
  }, [lessonId]);

  // If quiz doesn't exist yet
  if (!hasQuiz(parseInt(lessonId))) {
    return (
      <div className="quiz-activity">
        <div className="quiz-header">
          <h2>Quiz Not Available</h2>
          <p>The quiz for Lesson {lessonId} is coming soon!</p>
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

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz complete
      setQuizComplete(true);
    }
  };

  const handleRetryQuiz = () => {
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
          
          <div className="score-display">
            <div className="score-big">{percentage}%</div>
            <div className="score-details">
              {score} out of {totalQuestions} correct
            </div>
          </div>

          <div className="result-message">
            {passed ? (
              <>
                <p>🎉 Congratulations! You passed!</p>
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
                      {answer.isCorrect ? '✓' : '✗'}
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
                {showCorrect && <span className="option-icon">✓</span>}
                {showIncorrect && <span className="option-icon">✗</span>}
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
                ? '✓ Correct!' 
                : '✗ Incorrect'}
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