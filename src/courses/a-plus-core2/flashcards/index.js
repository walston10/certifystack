// ============================================
// FLASHCARD INDEX - A+ Core 2 (220-1102)
// ============================================
// Central export file for all lesson flashcards
// Flashcards will be added as they are created

// Registry of all flashcards
export const allFlashcards = {
  // Add flashcards as they are created
  // Example:
  // 31: lesson31Flashcards,
  // 32: lesson32Flashcards,
};

// Helper function to get flashcards by lesson number
export function getFlashcardsByLesson(lessonNumber) {
  return allFlashcards[lessonNumber] || [];
}

/**
 * Check if flashcards exist for a lesson
 * @param {number} lessonNumber - The lesson number
 * @returns {boolean} True if flashcards exist
 */
export function hasFlashcards(lessonNumber) {
  return !!allFlashcards[lessonNumber] && allFlashcards[lessonNumber].length > 0;
}

/**
 * Get a list of all lessons that have flashcards
 * @returns {Array<{id: number, title: string, cardCount: number}>}
 */
export function getLessonsWithFlashcards() {
  return Object.keys(allFlashcards).map(id => {
    const lessonId = parseInt(id);
    const cards = allFlashcards[lessonId];

    return { id: lessonId, title: `Lesson ${lessonId}`, cardCount: cards.length };
  }).sort((a, b) => a.id - b.id);
}
