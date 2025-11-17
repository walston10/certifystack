/**
 * Fisher-Yates shuffle algorithm
 * Randomly shuffles an array in place
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Safely randomizes answer choices for a quiz question
 * Maintains the correct answer by tracking its new position after shuffling
 *
 * @param {Object} question - Quiz question object with options and correct index
 * @returns {Object} New question object with shuffled options and updated correct index
 */
export function randomizeAnswerChoices(question) {
  // Create array of indices paired with their options
  const indexedOptions = question.options.map((option, index) => ({
    option,
    originalIndex: index
  }));

  // Shuffle the indexed options
  const shuffledIndexedOptions = shuffleArray(indexedOptions);

  // Extract the shuffled options
  const shuffledOptions = shuffledIndexedOptions.map(item => item.option);

  // Find where the correct answer ended up after shuffling
  const newCorrectIndex = shuffledIndexedOptions.findIndex(
    item => item.originalIndex === question.correct
  );

  // Return new question object with shuffled options and updated correct index
  return {
    ...question,
    options: shuffledOptions,
    correct: newCorrectIndex
  };
}

/**
 * Randomizes answer choices for all questions in a quiz
 *
 * @param {Array} quiz - Array of quiz question objects
 * @returns {Array} New array with all questions having randomized answer choices
 */
export function randomizeQuizAnswers(quiz) {
  if (!quiz || !Array.isArray(quiz)) {
    return quiz;
  }

  return quiz.map(question => randomizeAnswerChoices(question));
}
