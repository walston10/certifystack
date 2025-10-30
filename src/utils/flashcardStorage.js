// ============================================
// FLASHCARD STORAGE UTILITIES
// ============================================
// Handles localStorage operations for Anki-style flashcard system

const STORAGE_KEY = 'certifystack_flashcard_data';

/**
 * Get the default data structure for a new user
 */
function getDefaultData() {
  return {
    stats: {
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: null,
      totalCardsStudied: 0,
      totalReviews: 0
    },
    lessons: {}
  };
}

/**
 * Get the default card state for a new card
 */
function getDefaultCardState() {
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

/**
 * Load all flashcard data from localStorage
 */
export function loadFlashcardData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getDefaultData();
    }
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading flashcard data:', error);
    return getDefaultData();
  }
}

/**
 * Save all flashcard data to localStorage
 */
export function saveFlashcardData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving flashcard data:', error);
  }
}

/**
 * Get card state for a specific lesson and card
 */
export function getCardState(lessonId, cardId) {
  const data = loadFlashcardData();
  const lessonKey = `lesson${lessonId}`;

  if (!data.lessons[lessonKey]) {
    data.lessons[lessonKey] = {};
  }

  if (!data.lessons[lessonKey][cardId]) {
    data.lessons[lessonKey][cardId] = getDefaultCardState();
  }

  return data.lessons[lessonKey][cardId];
}

/**
 * Update card state after rating
 */
export function updateCardState(lessonId, cardId, newState) {
  const data = loadFlashcardData();
  const lessonKey = `lesson${lessonId}`;

  if (!data.lessons[lessonKey]) {
    data.lessons[lessonKey] = {};
  }

  data.lessons[lessonKey][cardId] = newState;
  saveFlashcardData(data);
}

/**
 * Get all card states for a lesson
 */
export function getLessonCardStates(lessonId) {
  const data = loadFlashcardData();
  const lessonKey = `lesson${lessonId}`;
  return data.lessons[lessonKey] || {};
}

/**
 * Update global stats (streak, total reviews, etc.)
 */
export function updateGlobalStats(updates) {
  const data = loadFlashcardData();
  data.stats = { ...data.stats, ...updates };
  saveFlashcardData(data);
}

/**
 * Get global stats
 */
export function getGlobalStats() {
  const data = loadFlashcardData();
  return data.stats;
}

/**
 * Update streak - call this after any flashcard activity
 */
export function updateStreak() {
  const data = loadFlashcardData();
  const today = new Date().toISOString().split('T')[0];
  const lastStudy = data.stats.lastStudyDate;

  if (!lastStudy) {
    // First time studying
    data.stats.currentStreak = 1;
    data.stats.longestStreak = 1;
    data.stats.lastStudyDate = today;
  } else if (lastStudy === today) {
    // Already studied today, no change to streak
    return data.stats.currentStreak;
  } else {
    const lastDate = new Date(lastStudy);
    const todayDate = new Date(today);
    const diffTime = Math.abs(todayDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Consecutive day
      data.stats.currentStreak += 1;
      data.stats.longestStreak = Math.max(data.stats.longestStreak, data.stats.currentStreak);
    } else {
      // Streak broken
      data.stats.currentStreak = 1;
    }

    data.stats.lastStudyDate = today;
  }

  saveFlashcardData(data);
  return data.stats.currentStreak;
}

/**
 * Get count of due cards for a lesson
 */
export function getDueCardsCount(lessonId, allCards) {
  const today = new Date().toISOString().split('T')[0];
  const cardStates = getLessonCardStates(lessonId);

  let dueCount = 0;

  allCards.forEach(card => {
    const state = cardStates[card.id] || getDefaultCardState();
    if (state.dueDate <= today) {
      dueCount++;
    }
  });

  return dueCount;
}

/**
 * Get count of new cards (never studied) for a lesson
 */
export function getNewCardsCount(lessonId, allCards) {
  const cardStates = getLessonCardStates(lessonId);

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
export function getTotalDueCards(allLessonsCards) {
  const today = new Date().toISOString().split('T')[0];
  const data = loadFlashcardData();
  let totalDue = 0;

  Object.keys(allLessonsCards).forEach(lessonId => {
    const cards = allLessonsCards[lessonId];
    const lessonKey = `lesson${lessonId}`;
    const cardStates = data.lessons[lessonKey] || {};

    cards.forEach(card => {
      const state = cardStates[card.id] || getDefaultCardState();
      if (state.dueDate <= today) {
        totalDue++;
      }
    });
  });

  return totalDue;
}

/**
 * Increment total reviews counter
 */
export function incrementTotalReviews() {
  const data = loadFlashcardData();
  data.stats.totalReviews += 1;
  saveFlashcardData(data);
}

/**
 * Increment total cards studied counter (for unique cards)
 */
export function incrementCardsStudied() {
  const data = loadFlashcardData();
  data.stats.totalCardsStudied += 1;
  saveFlashcardData(data);
}
