// ============================================
// A+ CORE 2 (220-1102) LABS DATA
// ============================================
// Hands-on lab exercises for practical skills
// Labs will be added as they are created

export const aPlusCore2Labs = [
  // Add labs as they are created
  // Example structure:
  // {
  //   id: 31,
  //   lessonId: 31,
  //   title: "Lab Title",
  //   difficulty: "Beginner",
  //   estimatedTime: "20-30 min",
  //   labPath: "/content/a-plus-core2/labs/lab-31.md",
  //   solutionPath: "/content/a-plus-core2/labs/lab-31-solution.md",
  //   objectives: ["Objective 1", "Objective 2"],
  //   prerequisites: [],
  //   skillsGained: ["Skill 1", "Skill 2"],
  //   xpReward: 50,
  //   completed: false
  // },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get lab by ID
 */
export function getLabById(id) {
  return aPlusCore2Labs.find(lab => lab.id === parseInt(id));
}

/**
 * Get lab by lesson ID
 */
export function getLabByLessonId(lessonId) {
  return aPlusCore2Labs.find(lab => lab.lessonId === parseInt(lessonId));
}

/**
 * Get labs by difficulty
 */
export function getLabsByDifficulty(difficulty) {
  return aPlusCore2Labs.filter(lab => lab.difficulty === difficulty);
}

/**
 * Get completion statistics
 */
export function getLabCompletionStats() {
  const completed = aPlusCore2Labs.filter(l => l.completed).length;
  const total = aPlusCore2Labs.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
}

/**
 * Get total XP available from labs
 */
export function getTotalLabXP() {
  return aPlusCore2Labs.reduce((total, lab) => total + lab.xpReward, 0);
}

/**
 * Get earned XP from completed labs
 */
export function getEarnedLabXP() {
  return aPlusCore2Labs
    .filter(lab => lab.completed)
    .reduce((total, lab) => total + lab.xpReward, 0);
}

export default aPlusCore2Labs;
