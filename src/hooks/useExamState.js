import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to manage exam state
 * @param {Array} questions - Array of exam questions
 * @param {Object} settings - Exam settings (timed, duration, etc.)
 */
export function useExamState(questions, settings = {}) {
  const [examState, setExamState] = useState({
    questions: questions,
    currentQuestion: 0,
    answers: {}, // { questionId: selectedOptionIndex }
    markedForReview: [], // [questionIds]
    startTime: Date.now(),
    timeRemaining: settings.timed ? (settings.duration || 5400) : null, // 90 min default
    isTimerActive: false,
    isComplete: false,
    isPaused: false
  });

  // Timer effect
  useEffect(() => {
    if (!examState.isTimerActive || examState.isComplete || examState.isPaused || !settings.timed) {
      return;
    }

    const timer = setInterval(() => {
      setExamState(prev => {
        if (prev.timeRemaining === null) return prev;
        
        const newTime = prev.timeRemaining - 1;
        
        if (newTime <= 0) {
          // Time's up - auto submit
          return { 
            ...prev, 
            timeRemaining: 0, 
            isComplete: true,
            isTimerActive: false 
          };
        }
        
        return { ...prev, timeRemaining: newTime };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState.isTimerActive, examState.isComplete, examState.isPaused, settings.timed]);

  /**
   * Answer a question
   */
  const answerQuestion = useCallback((questionId, optionIndex) => {
    setExamState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: optionIndex
      }
    }));
  }, []);

  /**
   * Toggle mark for review
   */
  const toggleMarkForReview = useCallback((questionId) => {
    setExamState(prev => {
      const marked = prev.markedForReview.includes(questionId)
        ? prev.markedForReview.filter(id => id !== questionId)
        : [...prev.markedForReview, questionId];
      
      return { ...prev, markedForReview: marked };
    });
  }, []);

  /**
   * Navigate to specific question by index
   */
  const goToQuestion = useCallback((index) => {
    setExamState(prev => {
      const newIndex = Math.max(0, Math.min(index, prev.questions.length - 1));
      return { ...prev, currentQuestion: newIndex };
    });
  }, []);

  /**
   * Navigate to next question
   */
  const nextQuestion = useCallback(() => {
    setExamState(prev => {
      const next = Math.min(prev.currentQuestion + 1, prev.questions.length - 1);
      return { ...prev, currentQuestion: next };
    });
  }, []);

  /**
   * Navigate to previous question
   */
  const previousQuestion = useCallback(() => {
    setExamState(prev => {
      const previous = Math.max(prev.currentQuestion - 1, 0);
      return { ...prev, currentQuestion: previous };
    });
  }, []);

  /**
   * Start the timer
   */
  const startTimer = useCallback(() => {
    setExamState(prev => ({ 
      ...prev, 
      isTimerActive: true,
      isPaused: false 
    }));
  }, []);

  /**
   * Pause the timer
   */
  const pauseTimer = useCallback(() => {
    setExamState(prev => ({ 
      ...prev, 
      isTimerActive: false,
      isPaused: true 
    }));
  }, []);

  /**
   * Resume the timer
   */
  const resumeTimer = useCallback(() => {
    setExamState(prev => ({ 
      ...prev, 
      isTimerActive: true,
      isPaused: false 
    }));
  }, []);

  /**
   * Submit the exam
   */
  const submitExam = useCallback(() => {
    setExamState(prev => ({ 
      ...prev, 
      isComplete: true, 
      isTimerActive: false 
    }));
  }, []);

  /**
   * Get progress statistics
   */
  const getProgress = useCallback(() => {
    const answered = Object.keys(examState.answers).length;
    const total = examState.questions.length;
    const marked = examState.markedForReview.length;
    const unanswered = total - answered;
    
    return {
      answered,
      unanswered,
      marked,
      total,
      percentage: Math.round((answered / total) * 100)
    };
  }, [examState.answers, examState.questions.length, examState.markedForReview.length]);

  /**
   * Check if current question is answered
   */
  const isCurrentQuestionAnswered = useCallback(() => {
    const currentQ = examState.questions[examState.currentQuestion];
    return examState.answers.hasOwnProperty(currentQ.id);
  }, [examState.currentQuestion, examState.questions, examState.answers]);

  /**
   * Get answered question IDs
   */
  const getAnsweredQuestions = useCallback(() => {
    return Object.keys(examState.answers);
  }, [examState.answers]);

  /**
   * Get unanswered question indices
   */
  const getUnansweredQuestions = useCallback(() => {
    return examState.questions
      .map((q, index) => ({ id: q.id, index }))
      .filter(({ id }) => !examState.answers.hasOwnProperty(id))
      .map(({ index }) => index);
  }, [examState.questions, examState.answers]);

  /**
   * Jump to next unanswered question
   */
  const goToNextUnanswered = useCallback(() => {
    const unanswered = getUnansweredQuestions();
    if (unanswered.length > 0) {
      // Find first unanswered after current position
      const next = unanswered.find(index => index > examState.currentQuestion);
      if (next !== undefined) {
        goToQuestion(next);
      } else {
        // Wrap to first unanswered
        goToQuestion(unanswered[0]);
      }
    }
  }, [examState.currentQuestion, getUnansweredQuestions, goToQuestion]);

  /**
   * Clear answer for a question
   */
  const clearAnswer = useCallback((questionId) => {
    setExamState(prev => {
      const newAnswers = { ...prev.answers };
      delete newAnswers[questionId];
      return { ...prev, answers: newAnswers };
    });
  }, []);

  return {
    // State
    examState,
    
    // Actions
    answerQuestion,
    toggleMarkForReview,
    goToQuestion,
    nextQuestion,
    previousQuestion,
    startTimer,
    pauseTimer,
    resumeTimer,
    submitExam,
    clearAnswer,
    goToNextUnanswered,
    
    // Computed values
    progress: getProgress(),
    isCurrentQuestionAnswered: isCurrentQuestionAnswered(),
    answeredQuestions: getAnsweredQuestions(),
    unansweredQuestions: getUnansweredQuestions()
  };
}

/**
 * Format time in MM:SS format
 */
export function formatTime(seconds) {
  if (seconds === null || seconds === undefined) return '--:--';
  
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format time in human readable format (e.g., "1h 23m")
 */
export function formatTimeHuman(seconds) {
  if (seconds === null || seconds === undefined) return 'N/A';
  
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  } else if (mins > 0) {
    return `${mins}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
}

/**
 * Calculate time elapsed since start
 */
export function getTimeElapsed(startTime) {
  return Math.floor((Date.now() - startTime) / 1000);
}