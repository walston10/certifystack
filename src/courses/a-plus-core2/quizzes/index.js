// ============================================
// QUIZ INDEX - A+ Core 2 (220-1102)
// ============================================
// Central export file for all lesson quizzes
// Quizzes will be added as they are created

// ============================================
// QUIZ REGISTRY (for dynamic loading by lesson number)
// ============================================

export const allQuizzes = {
  // Add quizzes as they are created
  // Example:
  // 31: lesson31Quiz,
  // 32: lesson32Quiz,
};

// ============================================
// HELPER FUNCTIONS (used by QuizActivity component)
// ============================================

/**
 * Get quiz by lesson number
 * @param {number} lessonNumber - The lesson number
 * @returns {Array|null} Quiz questions array or null if not found
 */
export function getQuizByLesson(lessonNumber) {
  return allQuizzes[lessonNumber] || null;
}

/**
 * Check if a quiz exists for a lesson
 * @param {number} lessonNumber - The lesson number
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
