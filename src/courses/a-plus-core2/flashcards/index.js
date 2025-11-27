// ============================================
// FLASHCARD INDEX - A+ Core 2 (220-1102)
// ============================================
// Central export file for all lesson flashcards

import { lesson31Flashcards } from './lesson-31-flashcards';
import { lesson32Flashcards } from './lesson-32-flashcards';
import { lesson33Flashcards } from './lesson-33-flashcards';
import { lesson34Flashcards } from './lesson-34-flashcards';
import { lesson35Flashcards } from './lesson-35-flashcards';
import { lesson36Flashcards } from './lesson-36-flashcards';
import { lesson37Flashcards } from './lesson-37-flashcards';
import { lesson38Flashcards } from './lesson-38-flashcards';
import { lesson39Flashcards } from './lesson-39-flashcards';
import { lesson40Flashcards } from './lesson-40-flashcards';
import { lesson41Flashcards } from './lesson-41-flashcards';
import { lesson42Flashcards } from './lesson-42-flashcards';
import { lesson43Flashcards } from './lesson-43-flashcards';
import { lesson44Flashcards } from './lesson-44-flashcards';
import { lesson45Flashcards } from './lesson-45-flashcards';
import { lesson46Flashcards } from './lesson-46-flashcards';
import { lesson47Flashcards } from './lesson-47-flashcards';

// Registry of all flashcards
export const allFlashcards = {
  31: lesson31Flashcards,
  32: lesson32Flashcards,
  33: lesson33Flashcards,
  34: lesson34Flashcards,
  35: lesson35Flashcards,
  36: lesson36Flashcards,
  37: lesson37Flashcards,
  38: lesson38Flashcards,
  39: lesson39Flashcards,
  40: lesson40Flashcards,
  41: lesson41Flashcards,
  42: lesson42Flashcards,
  43: lesson43Flashcards,
  44: lesson44Flashcards,
  45: lesson45Flashcards,
  46: lesson46Flashcards,
  47: lesson47Flashcards,
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
