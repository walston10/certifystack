// ============================================
// SECURITY+ SY0-701 LABS DATA
// ============================================
// Hands-on lab exercises for practical skills

export const securityPlusLabs = [
  // Add labs as they are created
  // Example structure:
  // {
  //   id: 1,
  //   lessonId: 1,
  //   title: "Lab Title",
  //   difficulty: "Beginner",
  //   estimatedTime: "20-30 min",
  //   labPath: "/content/security-plus/labs/lab-01.md",
  //   solutionPath: "/content/security-plus/labs/lab-01-solution.md",
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
  return securityPlusLabs.find(lab => lab.id === parseInt(id));
}

/**
 * Get lab by lesson ID
 */
export function getLabByLessonId(lessonId) {
  return securityPlusLabs.find(lab => lab.lessonId === parseInt(lessonId));
}

/**
 * Get labs by difficulty
 */
export function getLabsByDifficulty(difficulty) {
  return securityPlusLabs.filter(lab => lab.difficulty === difficulty);
}

/**
 * Get completion statistics
 */
export function getLabCompletionStats() {
  const completed = securityPlusLabs.filter(l => l.completed).length;
  const total = securityPlusLabs.length;
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
  return securityPlusLabs.reduce((total, lab) => total + lab.xpReward, 0);
}

/**
 * Get earned XP from completed labs
 */
export function getEarnedLabXP() {
  return securityPlusLabs
    .filter(lab => lab.completed)
    .reduce((total, lab) => total + lab.xpReward, 0);
}

export default securityPlusLabs;
