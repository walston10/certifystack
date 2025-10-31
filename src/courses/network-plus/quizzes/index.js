// ============================================
// QUIZ INDEX - Network+ N10-009
// ============================================
// Central export file for all lesson quizzes

// Import quiz modules (needed for helper functions)
import { lesson1Quiz } from './lesson-01-quiz';
import { lesson2Quiz } from './lesson-02-quiz';
import { lesson3Quiz } from './lesson-03-quiz';
import { lesson4Quiz } from './lesson-04-quiz';
import { lesson5Quiz } from './lesson-05-quiz';
import { lesson6Quiz } from './lesson-06-quiz';


// Re-export quizzes for direct imports
export { lesson1Quiz } from './lesson-01-quiz';
export { lesson2Quiz } from './lesson-02-quiz';
// export { lesson3Quiz } from './lesson-03-quiz';
// export { lesson4Quiz } from './lesson-04-quiz';
// ... add more as you create them

// ============================================
// QUIZ REGISTRY (for dynamic loading by lesson number)
// ============================================

const allQuizzes = {
  1: lesson1Quiz,
  2: lesson2Quiz,
  3: lesson3Quiz,
  4: lesson4Quiz,
  5: lesson5Quiz,
  6: lesson6Quiz,
};

// ============================================
// HELPER FUNCTIONS (used by QuizActivity component)
// ============================================

/**
 * Get quiz by lesson number
 * @param {number} lessonNumber - The lesson number (1-30)
 * @returns {Array|null} Quiz questions array or null if not found
 */
export function getQuizByLesson(lessonNumber) {
  return allQuizzes[lessonNumber] || null;
}

/**
 * Check if a quiz exists for a lesson
 * @param {number} lessonNumber - The lesson number (1-30)
 * @returns {boolean} True if quiz exists
 */
export function hasQuiz(lessonNumber) {
  return !!allQuizzes[lessonNumber];
}

/**
 * Get all available quiz lesson numbers
 * @returns {Array<number>} Array of lesson numbers that have quizzes
 */
export function getAvailableQuizzes() {
  return Object.keys(allQuizzes).map(Number).sort((a, b) => a - b);
}