// ============================================
// FLASHCARD ALGORITHM - SM-2 (Simplified)
// ============================================
// Spaced repetition algorithm for optimal learning

/**
 * Add days to a date
 */
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString().split('T')[0];
}

/**
 * Update card state based on rating (SM-2 algorithm)
 * @param {Object} card - Current card state
 * @param {string} rating - 'hard', 'good', or 'easy'
 * @returns {Object} Updated card state
 */
export function updateCard(card, rating) {
  const now = new Date().toISOString();
  const today = now.split('T')[0];
  const updatedCard = { ...card };

  // Update rating counts
  if (rating === 'hard') {
    updatedCard.timesHard += 1;
  } else if (rating === 'good') {
    updatedCard.timesGood += 1;
  } else if (rating === 'easy') {
    updatedCard.timesEasy += 1;
  }

  // SM-2 Algorithm logic
  if (rating === 'hard') {
    // Reset progress but don't completely restart
    updatedCard.repetitions = 0;
    updatedCard.interval = 1; // Review tomorrow
    updatedCard.ease = Math.max(1.3, updatedCard.ease - 0.2);
    updatedCard.state = 'learning';
  } else {
    // Good or Easy response
    updatedCard.repetitions += 1;

    // Calculate new interval
    if (updatedCard.repetitions === 1) {
      updatedCard.interval = 1; // 1 day
    } else if (updatedCard.repetitions === 2) {
      updatedCard.interval = 3; // 3 days
    } else {
      // Multiply previous interval by ease factor
      updatedCard.interval = Math.round(updatedCard.interval * updatedCard.ease);
    }

    // Adjust ease factor
    if (rating === 'easy') {
      updatedCard.ease = Math.min(3.0, updatedCard.ease + 0.15);
      // Bonus: Graduate faster on easy
      if (updatedCard.repetitions === 1) {
        updatedCard.interval = 3; // Skip ahead
      }
    } else if (rating === 'good') {
      // Maintain ease factor (could add small adjustment if desired)
      updatedCard.ease = Math.min(2.8, updatedCard.ease + 0.05);
    }

    // Update state based on interval (days until next review)
    // learning: interval < 1 day (should be 1 day after first success)
    // review: interval >= 1 day but < 21 days
    // mature: interval >= 21 days
    if (updatedCard.interval >= 21) {
      updatedCard.state = 'mature';
    } else if (updatedCard.interval >= 1) {
      updatedCard.state = 'review';
    } else {
      updatedCard.state = 'learning';
    }
  }

  // Set due date
  updatedCard.dueDate = addDays(today, updatedCard.interval);
  updatedCard.lastReviewed = now;

  return updatedCard;
}

/**
 * Select cards for a study session
 * @param {Array} allCards - All available cards
 * @param {Object} cardStates - Card states from storage
 * @param {number} sessionSize - Desired number of cards
 * @returns {Array} Cards to study
 */
export function selectCardsForSession(allCards, cardStates, sessionSize) {
  const today = new Date().toISOString().split('T')[0];

  // Categorize cards
  const dueCards = [];
  const newCards = [];

  allCards.forEach(card => {
    const state = cardStates[card.id];

    if (!state || state.state === 'new') {
      newCards.push({ ...card, cardState: state || null });
    } else if (state.dueDate <= today) {
      dueCards.push({ ...card, cardState: state });
    }
  });

  // Sort due cards by date (oldest first)
  dueCards.sort((a, b) => {
    const dateA = new Date(a.cardState.dueDate);
    const dateB = new Date(b.cardState.dueDate);
    return dateA - dateB;
  });

  // If no due cards and no new cards, return empty
  if (dueCards.length === 0 && newCards.length === 0) {
    return [];
  }

  // Calculate distribution
  const totalAvailable = dueCards.length + newCards.length;
  const actualSessionSize = Math.min(sessionSize, totalAvailable);

  let selectedCards = [];

  if (sessionSize === Infinity) {
    // "Clear Everything" mode - all due cards + some new
    selectedCards = [...dueCards];
    const remainingSlots = Math.min(50, newCards.length); // Cap new cards at 50 for sanity
    selectedCards.push(...newCards.slice(0, remainingSlots));
  } else {
    // Calculate proportional distribution
    const dueRatio = dueCards.length / totalAvailable;
    const dueCount = Math.min(
      Math.round(actualSessionSize * dueRatio),
      dueCards.length
    );
    const newCount = actualSessionSize - dueCount;

    selectedCards = [
      ...dueCards.slice(0, dueCount),
      ...newCards.slice(0, newCount)
    ];
  }

  // Shuffle selected cards
  for (let i = selectedCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedCards[i], selectedCards[j]] = [selectedCards[j], selectedCards[i]];
  }

  return selectedCards;
}

/**
 * Calculate session statistics
 * @param {Array} ratings - Array of ratings from the session
 * @returns {Object} Session statistics
 */
export function calculateSessionStats(ratings) {
  const stats = {
    totalCards: ratings.length,
    hardCount: ratings.filter(r => r === 'hard').length,
    goodCount: ratings.filter(r => r === 'good').length,
    easyCount: ratings.filter(r => r === 'easy').length
  };

  return stats;
}
