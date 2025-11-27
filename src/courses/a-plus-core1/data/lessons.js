// ============================================
// A+ CORE 1 (220-1101) LESSONS DATA
// ============================================
// Complete curriculum for A+ Core 1 exam
// Lessons will be populated as content is created

export const aPlusCore1Lessons = [
  // Add lessons as they are created
  // Example structure:
  // {
  //   id: 1,
  //   title: "Lesson Title",
  //   domain: "Mobile Devices",
  //   time: "25-30 min",
  //   completed: false,
  //   locked: false,
  //   examObjective: "1.1",
  //   path: "/content/a-plus-core1/lessons/lesson-01.md",
  //   hasFlashcards: false,
  //   hasQuiz: false,
  //   hasLab: false,
  //   labId: null,
  //   prerequisites: [],
  //   nextLesson: 2
  // },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get lesson by ID
 */
export function getLessonById(id) {
  return aPlusCore1Lessons.find(lesson => lesson.id === parseInt(id));
}

/**
 * Get lessons by domain
 */
export function getLessonsByDomain(domain) {
  return aPlusCore1Lessons.filter(lesson => lesson.domain === domain);
}

/**
 * Get all unique domains
 */
export function getDomains() {
  return [...new Set(aPlusCore1Lessons.map(lesson => lesson.domain))];
}

/**
 * Get completion statistics
 */
export function getLessonCompletionStats() {
  const completed = aPlusCore1Lessons.filter(l => l.completed).length;
  const total = aPlusCore1Lessons.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
}

export default aPlusCore1Lessons;
