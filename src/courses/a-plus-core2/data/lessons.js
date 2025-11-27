// ============================================
// A+ CORE 2 (220-1102) LESSONS DATA
// ============================================
// Complete curriculum for A+ Core 2 exam
// Lessons will be populated as content is created

export const aPlusCore2Lessons = [
  // Add lessons as they are created
  // Example structure:
  // {
  //   id: 31,
  //   title: "Lesson Title",
  //   domain: "Operating Systems",
  //   time: "25-30 min",
  //   completed: false,
  //   locked: false,
  //   examObjective: "1.1",
  //   path: "/content/a-plus-core2/lessons/lesson-31.md",
  //   hasFlashcards: false,
  //   hasQuiz: false,
  //   hasLab: false,
  //   labId: null,
  //   prerequisites: [],
  //   nextLesson: 32
  // },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get lesson by ID
 */
export function getLessonById(id) {
  return aPlusCore2Lessons.find(lesson => lesson.id === parseInt(id));
}

/**
 * Get lessons by domain
 */
export function getLessonsByDomain(domain) {
  return aPlusCore2Lessons.filter(lesson => lesson.domain === domain);
}

/**
 * Get all unique domains
 */
export function getDomains() {
  return [...new Set(aPlusCore2Lessons.map(lesson => lesson.domain))];
}

/**
 * Get completion statistics
 */
export function getLessonCompletionStats() {
  const completed = aPlusCore2Lessons.filter(l => l.completed).length;
  const total = aPlusCore2Lessons.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
}

export default aPlusCore2Lessons;
