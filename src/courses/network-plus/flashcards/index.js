// ============================================
// FLASHCARD INDEX - Network+ N10-009
// ============================================
// Central export file for all lesson flashcards

// Import individual flashcard modules
import { lesson1Flashcards } from './lesson-01-flashcards';
import { lesson2Flashcards } from './lesson-02-flashcards';
import { lesson3Flashcards } from './lesson-03-flashcards';
import { lesson4Flashcards } from './lesson-04-flashcards';
import { lesson5Flashcards } from './lesson-05-flashcards';
import { lesson6Flashcards } from './lesson-06-flashcards';
import { lesson7Flashcards } from './lesson-07-flashcards';
import { lesson8Flashcards } from './lesson-08-flashcards';
import { lesson9Flashcards } from './lesson-09-flashcards';
import { lesson10Flashcards } from './lesson-10-flashcards';
import { networkPlusLessons } from '../data/lessons';

// Registry of all flashcards
const allFlashcards = {
  1: lesson1Flashcards,
  2: lesson2Flashcards,
  3: lesson3Flashcards,
  4: lesson4Flashcards,
  5: lesson5Flashcards,
  6: lesson6Flashcards,
  7: lesson7Flashcards,
  8: lesson8Flashcards,
  9: lesson9Flashcards,
  10: lesson10Flashcards,
};

// Helper function to get flashcards by lesson number
export function getFlashcardsByLesson(lessonNumber) {
  return allFlashcards[lessonNumber] || [];
}

/**
 * Get a list of all lessons that have flashcards
 * @returns {Array<{id: number, title: string, cardCount: number}>}
 */
export function getLessonsWithFlashcards() {
  return Object.keys(allFlashcards).map(id => {
    const lessonId = parseInt(id);
    const lesson = networkPlusLessons.find(l => l.id === lessonId);
    const cards = allFlashcards[lessonId];
    
    return { id: lessonId, title: lesson?.title || `Lesson ${lessonId}`, cardCount: cards.length };
  }).sort((a, b) => a.id - b.id);
}