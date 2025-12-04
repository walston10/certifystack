// ============================================
// QUIZ INDEX - A+ Core 1 (220-1101)
// ============================================
// Central export file for all lesson quizzes

// Import quiz modules
import { lesson1Quiz } from './lesson-01-quiz';
import { lesson2Quiz } from './lesson-02-quiz';
import { lesson3Quiz } from './lesson-03-quiz';
import { lesson4Quiz } from './lesson-04-quiz';
import { lesson5Quiz } from './lesson-05-quiz';
import { lesson6Quiz } from './lesson-06-quiz';
import { lesson7Quiz } from './lesson-07-quiz';
import { lesson8Quiz } from './lesson-08-quiz';
import { lesson9Quiz } from './lesson-09-quiz';
import { lesson10Quiz } from './lesson-10-quiz';
import { lesson11Quiz } from './lesson-11-quiz';
import { lesson12Quiz } from './lesson-12-quiz';
import { lesson13Quiz } from './lesson-13-quiz';
import { lesson14Quiz } from './lesson-14-quiz';
import { lesson15Quiz } from './lesson-15-quiz';
import { lesson16Quiz } from './lesson-16-quiz';
import { lesson17Quiz } from './lesson-17-quiz';
import { lesson18Quiz } from './lesson-18-quiz';
import { lesson19Quiz } from './lesson-19-quiz';
import { lesson20Quiz } from './lesson-20-quiz';
import { lesson21Quiz } from './lesson-21-quiz';
import { lesson22Quiz } from './lesson-22-quiz';
import { lesson23Quiz } from './lesson-23-quiz';
import { lesson24Quiz } from './lesson-24-quiz';
import { lesson25Quiz } from './lesson-25-quiz';
import { lesson26Quiz } from './lesson-26-quiz';
import { lesson27Quiz } from './lesson-27-quiz';
import { lesson28Quiz } from './lesson-28-quiz';
import { lesson29Quiz } from './lesson-29-quiz';
import { lesson30Quiz } from './lesson-30-quiz';

// Re-export quizzes for direct imports
export { lesson1Quiz } from './lesson-01-quiz';
export { lesson2Quiz } from './lesson-02-quiz';
export { lesson3Quiz } from './lesson-03-quiz';
export { lesson4Quiz } from './lesson-04-quiz';
export { lesson5Quiz } from './lesson-05-quiz';
export { lesson6Quiz } from './lesson-06-quiz';
export { lesson7Quiz } from './lesson-07-quiz';
export { lesson8Quiz } from './lesson-08-quiz';
export { lesson9Quiz } from './lesson-09-quiz';
export { lesson10Quiz } from './lesson-10-quiz';
export { lesson11Quiz } from './lesson-11-quiz';
export { lesson12Quiz } from './lesson-12-quiz';
export { lesson13Quiz } from './lesson-13-quiz';
export { lesson14Quiz } from './lesson-14-quiz';
export { lesson15Quiz } from './lesson-15-quiz';
export { lesson16Quiz } from './lesson-16-quiz';
export { lesson17Quiz } from './lesson-17-quiz';
export { lesson18Quiz } from './lesson-18-quiz';
export { lesson19Quiz } from './lesson-19-quiz';
export { lesson20Quiz } from './lesson-20-quiz';
export { lesson21Quiz } from './lesson-21-quiz';
export { lesson22Quiz } from './lesson-22-quiz';
export { lesson23Quiz } from './lesson-23-quiz';
export { lesson24Quiz } from './lesson-24-quiz';
export { lesson25Quiz } from './lesson-25-quiz';
export { lesson26Quiz } from './lesson-26-quiz';
export { lesson27Quiz } from './lesson-27-quiz';
export { lesson28Quiz } from './lesson-28-quiz';
export { lesson29Quiz } from './lesson-29-quiz';
export { lesson30Quiz } from './lesson-30-quiz';

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
  7: lesson7Quiz,
  8: lesson8Quiz,
  9: lesson9Quiz,
  10: lesson10Quiz,
  11: lesson11Quiz,
  12: lesson12Quiz,
  13: lesson13Quiz,
  14: lesson14Quiz,
  15: lesson15Quiz,
  16: lesson16Quiz,
  17: lesson17Quiz,
  18: lesson18Quiz,
  19: lesson19Quiz,
  20: lesson20Quiz,
  21: lesson21Quiz,
  22: lesson22Quiz,
  23: lesson23Quiz,
  24: lesson24Quiz,
  25: lesson25Quiz,
  26: lesson26Quiz,
  27: lesson27Quiz,
  28: lesson28Quiz,
  29: lesson29Quiz,
  30: lesson30Quiz,
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
  return !!allQuizzes[lessonNumber] && allQuizzes[lessonNumber].length > 0;
}

/**
 * Get all available quiz lesson numbers
 * @returns {Array<number>} Array of lesson numbers that have quizzes
 */
export function getAvailableQuizzes() {
  return Object.keys(allQuizzes).map(Number).sort((a, b) => a - b);
}
