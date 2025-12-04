// ============================================
// QUIZ INDEX - A+ Core 2 (220-1102)
// ============================================
// Central export file for all lesson quizzes

// Import quiz modules
import { lesson31Quiz } from './lesson-31-quiz';
import { lesson32Quiz } from './lesson-32-quiz';
import { lesson33Quiz } from './lesson-33-quiz';
import { lesson34Quiz } from './lesson-34-quiz';
import { lesson35Quiz } from './lesson-35-quiz';
import { lesson36Quiz } from './lesson-36-quiz';
import { lesson37Quiz } from './lesson-37-quiz';
import { lesson38Quiz } from './lesson-38-quiz';
import { lesson39Quiz } from './lesson-39-quiz';
import { lesson40Quiz } from './lesson-40-quiz';
import { lesson41Quiz } from './lesson-41-quiz';
import { lesson42Quiz } from './lesson-42-quiz';
import { lesson43Quiz } from './lesson-43-quiz';
import { lesson44Quiz } from './lesson-44-quiz';
import { lesson45Quiz } from './lesson-45-quiz';
import { lesson46Quiz } from './lesson-46-quiz';
import { lesson47Quiz } from './lesson-47-quiz';
import { lesson48Quiz } from './lesson-48-quiz';
import { lesson49Quiz } from './lesson-49-quiz';
import { lesson50Quiz } from './lesson-50-quiz';
import { lesson51Quiz } from './lesson-51-quiz';
import { lesson52Quiz } from './lesson-52-quiz';
import { lesson53Quiz } from './lesson-53-quiz';
import { lesson54Quiz } from './lesson-54-quiz';
import { lesson55Quiz } from './lesson-55-quiz';
import { lesson56Quiz } from './lesson-56-quiz';
import { lesson57Quiz } from './lesson-57-quiz';
import { lesson58Quiz } from './lesson-58-quiz';
import { lesson59Quiz } from './lesson-59-quiz';
import { lesson60Quiz } from './lesson-60-quiz';

// Re-export quizzes for direct imports
export { lesson31Quiz } from './lesson-31-quiz';
export { lesson32Quiz } from './lesson-32-quiz';
export { lesson33Quiz } from './lesson-33-quiz';
export { lesson34Quiz } from './lesson-34-quiz';
export { lesson35Quiz } from './lesson-35-quiz';
export { lesson36Quiz } from './lesson-36-quiz';
export { lesson37Quiz } from './lesson-37-quiz';
export { lesson38Quiz } from './lesson-38-quiz';
export { lesson39Quiz } from './lesson-39-quiz';
export { lesson40Quiz } from './lesson-40-quiz';
export { lesson41Quiz } from './lesson-41-quiz';
export { lesson42Quiz } from './lesson-42-quiz';
export { lesson43Quiz } from './lesson-43-quiz';
export { lesson44Quiz } from './lesson-44-quiz';
export { lesson45Quiz } from './lesson-45-quiz';
export { lesson46Quiz } from './lesson-46-quiz';
export { lesson47Quiz } from './lesson-47-quiz';
export { lesson48Quiz } from './lesson-48-quiz';
export { lesson49Quiz } from './lesson-49-quiz';
export { lesson50Quiz } from './lesson-50-quiz';
export { lesson51Quiz } from './lesson-51-quiz';
export { lesson52Quiz } from './lesson-52-quiz';
export { lesson53Quiz } from './lesson-53-quiz';
export { lesson54Quiz } from './lesson-54-quiz';
export { lesson55Quiz } from './lesson-55-quiz';
export { lesson56Quiz } from './lesson-56-quiz';
export { lesson57Quiz } from './lesson-57-quiz';
export { lesson58Quiz } from './lesson-58-quiz';
export { lesson59Quiz } from './lesson-59-quiz';
export { lesson60Quiz } from './lesson-60-quiz';

// ============================================
// QUIZ REGISTRY (for dynamic loading by lesson number)
// ============================================

const allQuizzes = {
  31: lesson31Quiz,
  32: lesson32Quiz,
  33: lesson33Quiz,
  34: lesson34Quiz,
  35: lesson35Quiz,
  36: lesson36Quiz,
  37: lesson37Quiz,
  38: lesson38Quiz,
  39: lesson39Quiz,
  40: lesson40Quiz,
  41: lesson41Quiz,
  42: lesson42Quiz,
  43: lesson43Quiz,
  44: lesson44Quiz,
  45: lesson45Quiz,
  46: lesson46Quiz,
  47: lesson47Quiz,
  48: lesson48Quiz,
  49: lesson49Quiz,
  50: lesson50Quiz,
  51: lesson51Quiz,
  52: lesson52Quiz,
  53: lesson53Quiz,
  54: lesson54Quiz,
  55: lesson55Quiz,
  56: lesson56Quiz,
  57: lesson57Quiz,
  58: lesson58Quiz,
  59: lesson59Quiz,
  60: lesson60Quiz,
};

// ============================================
// HELPER FUNCTIONS (used by QuizActivity component)
// ============================================

/**
 * Get quiz by lesson number
 * @param {number} lessonNumber - The lesson number (31-60)
 * @returns {Array|null} Quiz questions array or null if not found
 */
export function getQuizByLesson(lessonNumber) {
  return allQuizzes[lessonNumber] || null;
}

/**
 * Check if a quiz exists for a lesson
 * @param {number} lessonNumber - The lesson number (31-60)
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
