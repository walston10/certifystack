// ============================================
// FLASHCARD INDEX - A+ Core 1 (220-1101)
// ============================================
// Central export file for all lesson flashcards

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
import { lesson11Flashcards } from './lesson-11-flashcards';
import { lesson12Flashcards } from './lesson-12-flashcards';
import { lesson13Flashcards } from './lesson-13-flashcards';
import { lesson14Flashcards } from './lesson-14-flashcards';
import { lesson15Flashcards } from './lesson-15-flashcards';
import { lesson16Flashcards } from './lesson-16-flashcards';
import { lesson17Flashcards } from './lesson-17-flashcards';
import { lesson18Flashcards } from './lesson-18-flashcards';
import { lesson19Flashcards } from './lesson-19-flashcards';
import { lesson20Flashcards } from './lesson-20-flashcards';
import { lesson21Flashcards } from './lesson-21-flashcards';
import { lesson22Flashcards } from './lesson-22-flashcards';
import { lesson23Flashcards } from './lesson-23-flashcards';
import { lesson24Flashcards } from './lesson-24-flashcards';
import { lesson25Flashcards } from './lesson-25-flashcards';
import { lesson26Flashcards } from './lesson-26-flashcards';
import { lesson27Flashcards } from './lesson-27-flashcards';
import { lesson28Flashcards } from './lesson-28-flashcards';
import { lesson29Flashcards } from './lesson-29-flashcards';
import { lesson30Flashcards } from './lesson-30-flashcards';

// Registry of all flashcards
export const allFlashcards = {
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
  11: lesson11Flashcards,
  12: lesson12Flashcards,
  13: lesson13Flashcards,
  14: lesson14Flashcards,
  15: lesson15Flashcards,
  16: lesson16Flashcards,
  17: lesson17Flashcards,
  18: lesson18Flashcards,
  19: lesson19Flashcards,
  20: lesson20Flashcards,
  21: lesson21Flashcards,
  22: lesson22Flashcards,
  23: lesson23Flashcards,
  24: lesson24Flashcards,
  25: lesson25Flashcards,
  26: lesson26Flashcards,
  27: lesson27Flashcards,
  28: lesson28Flashcards,
  29: lesson29Flashcards,
  30: lesson30Flashcards,
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
