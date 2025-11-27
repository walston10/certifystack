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
export async function getCardState(lessonId, cardId, courseId = 'network-plus') {
  const progressMap = await getFlashcardProgress(lessonId, courseId);

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
export async function updateCardState(lessonId, cardId, newState, courseId = 'network-plus') {
  console.log('🔧 flashcardService.updateCardState called with:', { lessonId, cardId, newState, courseId });
  // Convert cardId to proper format: "lessonId-cardIndex"
  // cardId from flashcard files is just a number (1, 2, 3...), convert to "1-0", "1-1", etc.
  const properCardId = `${lessonId}-${cardId - 1}`; // Subtract 1 because cards start at id:1 but index should start at 0
  console.log('🔧 Converted cardId to properCardId:', properCardId);
  const result = await updateFlashcardProgress(lessonId, properCardId, newState, courseId);
  console.log('🔧 updateFlashcardProgress returned:', result);
  return result;
}

/**
 * Get all card states for a lesson
 */
export async function getLessonCardStates(lessonId, courseId = 'network-plus') {
  return await getFlashcardProgress(lessonId, courseId);
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
export async function getDueCardsCount(lessonId, allCards, courseId = 'network-plus') {
  const today = new Date().toISOString().split('T')[0];
  const cardStates = await getLessonCardStates(lessonId, courseId);

  let dueCount = 0;

  allCards.forEach(card => {
    // Convert card.id to proper format: "lessonId-cardIndex"
    const properCardId = `${lessonId}-${card.id - 1}`;
    const state = cardStates[properCardId];
    if (!state || state.dueDate <= today) {
      dueCount++;
    }
  });

  return dueCount;
}

/**
 * Get count of new cards (never studied) for a lesson
 */
export async function getNewCardsCount(lessonId, allCards, courseId = 'network-plus') {
  const cardStates = await getLessonCardStates(lessonId, courseId);

  let newCount = 0;

  allCards.forEach(card => {
    // Convert card.id to proper format: "lessonId-cardIndex"
    const properCardId = `${lessonId}-${card.id - 1}`;
    const state = cardStates[properCardId];
    if (!state || state.state === 'new') {
      newCount++;
    }
  });

  return newCount;
}

/**
 * Get total due cards across all lessons
 */
export async function getTotalDueCards(allLessonsCards, courseId = 'network-plus') {
  const today = new Date().toISOString().split('T')[0];
  let totalDue = 0;

  // Process each lesson
  for (const lessonId of Object.keys(allLessonsCards)) {
    const cards = allLessonsCards[lessonId];
    const cardStates = await getLessonCardStates(parseInt(lessonId), courseId);

    // Count due cards for this lesson
    for (const card of cards) {
      // Convert card.id to proper format: "lessonId-cardIndex"
      const properCardId = `${lessonId}-${card.id - 1}`;
      const state = cardStates[properCardId];
      if (!state || state.dueDate <= today) {
        totalDue++;
      }
    }
  }

  return totalDue;
}
