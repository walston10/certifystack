import { examQuestionPool } from '../data/examQuestions';
import { getRandomPBQs } from '../data/pbqQuestions';

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Select random questions from an array
 */
function selectRandom(array, count) {
  if (!array || array.length === 0) {
    console.warn('selectRandom called with empty array');
    return [];
  }
  
  const shuffled = shuffle(array);
  return shuffled.slice(0, Math.min(count, array.length));
}

/**
 * Generate a full practice exam (90 questions)
 * - 3 PBQs (Performance-Based Questions) - appear first like real CompTIA exam
 * - 87 MCQs weighted by CompTIA exam percentages:
 *   - Domain 1: 23% of 87 = 20 questions
 *   - Domain 2: 20% of 87 = 17 questions
 *   - Domain 3: 19% of 87 = 17 questions
 *   - Domain 4: 14% of 87 = 12 questions
 *   - Domain 5: 24% of 87 = 21 questions
 * Total: 3 PBQs + 87 MCQs = 90 questions
 */
export function generateFullExam() {
  // Select 3 random PBQs (will appear first in exam, like real CompTIA)
  const pbqs = getRandomPBQs(3);

  // Select 87 MCQs based on domain weights
  const mcqs = [
    ...selectRandom(examQuestionPool.domain1, 20),
    ...selectRandom(examQuestionPool.domain2, 17),
    ...selectRandom(examQuestionPool.domain3, 17),
    ...selectRandom(examQuestionPool.domain4, 12),
    ...selectRandom(examQuestionPool.domain5, 21)
  ];

  // Shuffle the MCQs
  const shuffledMCQs = shuffle(mcqs);

  // Combine: PBQs FIRST (questions 1-3), then MCQs (questions 4-90)
  // This matches the real CompTIA exam format
  const questions = [
    ...pbqs,           // Questions 1-3: PBQs
    ...shuffledMCQs    // Questions 4-90: MCQs
  ];

  return questions;
}

/**
 * Generate domain-specific practice exam (25 questions)
 * @param {number} domainNumber - Domain number (1-5)
 */
export function generateDomainExam(domainNumber) {
  const domainKey = `domain${domainNumber}`;
  const questions = examQuestionPool[domainKey];
  
  if (!questions || questions.length === 0) {
    throw new Error(`Invalid domain number: ${domainNumber}`);
  }
  
  // If domain has fewer than 25 questions, return all available
  const questionCount = Math.min(25, questions.length);
  
  return selectRandom(questions, questionCount);
}

/**
 * Generate quick quiz (15 random questions from all domains)
 */
export function generateQuickQuiz() {
  const allQuestions = [
    ...examQuestionPool.domain1,
    ...examQuestionPool.domain2,
    ...examQuestionPool.domain3,
    ...examQuestionPool.domain4,
    ...examQuestionPool.domain5
  ];
  
  return selectRandom(allQuestions, 15);
}

/**
 * Get total question count per domain
 */
export function getQuestionCounts() {
  return {
    domain1: examQuestionPool.domain1.length,
    domain2: examQuestionPool.domain2.length,
    domain3: examQuestionPool.domain3.length,
    domain4: examQuestionPool.domain4.length,
    domain5: examQuestionPool.domain5.length,
    total: 
      examQuestionPool.domain1.length +
      examQuestionPool.domain2.length +
      examQuestionPool.domain3.length +
      examQuestionPool.domain4.length +
      examQuestionPool.domain5.length
  };
}

/**
 * Validate that we have enough questions for exam generation
 */
export function validateQuestionPool() {
  const counts = getQuestionCounts();
  const warnings = [];
  
  if (counts.domain1 < 21) {
    warnings.push(`Domain 1 has only ${counts.domain1} questions (need 21)`);
  }
  if (counts.domain2 < 18) {
    warnings.push(`Domain 2 has only ${counts.domain2} questions (need 18)`);
  }
  if (counts.domain3 < 18) {
    warnings.push(`Domain 3 has only ${counts.domain3} questions (need 18)`);
  }
  if (counts.domain4 < 24) {
    warnings.push(`Domain 4 has only ${counts.domain4} questions (need 24)`);
  }
  if (counts.domain5 < 9) {
    warnings.push(`Domain 5 has only ${counts.domain5} questions (need 9)`);
  }
  
  return {
    isValid: warnings.length === 0,
    warnings,
    counts
  };
}

/**
 * Generate exam with specific difficulty distribution (future feature)
 * @param {string} difficulty - 'easy', 'medium', 'hard', or 'mixed'
 */
export function generateExamByDifficulty(difficulty = 'mixed') {
  // TODO: Implement once questions have difficulty tags
  // For now, just return a full exam
  console.log(`Difficulty-based generation not yet implemented. Difficulty: ${difficulty}`);
  return generateFullExam();
}

/**
 * Generate exam focusing on weak areas (future feature)
 * @param {object} userProgress - User's historical performance by domain
 */
export function generateWeakAreaExam(userProgress) {
  // TODO: Implement once we have user progress tracking
  // For now, just return a full exam
  console.log('Weak area generation not yet implemented', userProgress);
  return generateFullExam();
}