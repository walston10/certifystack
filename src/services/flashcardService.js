// ============================================
// FLASHCARD SERVICE - Supabase Version
// ============================================
// Replaces localStorage with Supabase for flashcard progress

import {
  getFlashcardProgress,
  updateFlashcardProgress,
  getFlashcardStats,
  updateStudyStreak,
  incrementTotalReviews
} from './progressService';

/**
 * Get card state for a specific lesson and card
 */
export async function getCardState(lessonId, cardId) {
  const progressMap = await getFlashcardProgress(lessonId);

  if (!progressMap[cardId]) {
    // Return default state for new cards
    return {
      state: 'new',
      ease: 2.5,
      interval: 0,
      dueDate: new Date().toISOString().split('T')[0],
      lastReviewed: null,
      repetitions: 0,
      timesHard: 0,
      timesGood: 0,
      timesEasy: 0
    };
  }

  return progressMap[cardId];
}

/**
 * Update card state after rating
 */
export async function updateCardState(lessonId, cardId, newState) {
  return await updateFlashcardProgress(lessonId, cardId, newState);
}

/**
 * Get all card states for a lesson
 */
export async function getLessonCardStates(lessonId) {
  return await getFlashcardProgress(lessonId);
}

/**
 * Get global stats
 */
export async function getGlobalStats() {
  return await getFlashcardStats();
}

/**
 * Update streak
 */
export async function updateStreakData() {
  return await updateStudyStreak();
}

/**
 * Increment total reviews counter
 */
export async function incrementReviews() {
  return await incrementTotalReviews();
}

/**
 * Get count of due cards for a lesson
 */
export async function getDueCardsCount(lessonId, allCards) {
  const today = new Date().toISOString().split('T')[0];
  const cardStates = await getLessonCardStates(lessonId);

  let dueCount = 0;

  allCards.forEach(card => {
    const state = cardStates[card.id];
    if (!state || state.dueDate <= today) {
      dueCount++;
    }
  });

  return dueCount;
}

/**
 * Get count of new cards (never studied) for a lesson
 */
export async function getNewCardsCount(lessonId, allCards) {
  const cardStates = await getLessonCardStates(lessonId);

  let newCount = 0;

  allCards.forEach(card => {
    const state = cardStates[card.id];
    if (!state || state.state === 'new') {
      newCount++;
    }
  });

  return newCount;
}

/**
 * Get total due cards across all lessons
 */
export async function getTotalDueCards(allLessonsCards) {
  const today = new Date().toISOString().split('T')[0];
  let totalDue = 0;

  // Process each lesson
  for (const lessonId of Object.keys(allLessonsCards)) {
    const cards = allLessonsCards[lessonId];
    const cardStates = await getLessonCardStates(parseInt(lessonId));

    cards.forEach(card => {
      const state = cardStates[card.id];
      if (!state || state.dueDate <= today) {
        totalDue++;
      }
    });
  }

  return totalDue;
}
