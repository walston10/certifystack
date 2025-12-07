// Course-aware exam generator
import { examQuestionPool } from '../data/examQuestions';
import { getRandomPBQs } from '../data/pbqQuestions';
import { aPlusCore1QuestionPool } from '../data/examQuestions-a-plus-core1';
import { aPlusCore2QuestionPool } from '../data/examQuestions-a-plus-core2';
import { securityPlusQuestionPool } from '../data/examQuestions-security';
import { getRandomCore1PBQs } from '../data/pbqQuestions-a-plus-core1';
import { getRandomCore2PBQs } from '../data/pbqQuestions-a-plus-core2';
import { getRandomSecurityPBQs } from '../data/pbqQuestions-security';

/**
 * Course configurations with exam specifications
 */
const courseConfigs = {
  'network-plus': {
    questionPool: examQuestionPool,
    getPBQs: getRandomPBQs,
    totalQuestions: 90,
    passingScore: 720, // out of 900
    pbqMin: 2,
    pbqMax: 4,
    // Network+ N10-009 domain weights (for remaining MCQs after PBQs):
    domainWeights: {
      domain1: 0.23,  // 23%
      domain2: 0.20,  // 20%
      domain3: 0.19,  // 19%
      domain4: 0.14,  // 14%
      domain5: 0.24   // 24%
    }
  },
  'a-plus-core1': {
    questionPool: aPlusCore1QuestionPool,
    getPBQs: getRandomCore1PBQs,
    totalQuestions: 90,
    passingScore: 675, // out of 900
    pbqMin: 2,
    pbqMax: 4,
    // A+ Core 1 (220-1101) domain weights:
    domainWeights: {
      domain1: 0.15,  // Mobile Devices 15%
      domain2: 0.20,  // Networking 20%
      domain3: 0.25,  // Hardware 25%
      domain4: 0.11,  // Virtualization & Cloud 11%
      domain5: 0.29   // Hardware & Network Troubleshooting 29%
    }
  },
  'a-plus-core2': {
    questionPool: aPlusCore2QuestionPool,
    getPBQs: getRandomCore2PBQs,
    totalQuestions: 90,
    passingScore: 700, // out of 900
    pbqMin: 2,
    pbqMax: 4,
    // A+ Core 2 (220-1102) domain weights:
    domainWeights: {
      domain1: 0.31,  // Operating Systems 31%
      domain2: 0.25,  // Security 25%
      domain3: 0.22,  // Software Troubleshooting 22%
      domain4: 0.22   // Operational Procedures 22%
    }
  },
  'security-plus': {
    questionPool: securityPlusQuestionPool,
    getPBQs: getRandomSecurityPBQs,
    totalQuestions: 90,
    passingScore: 750, // out of 900
    pbqMin: 2,
    pbqMax: 4,
    // Security+ SY0-701 domain weights:
    domainWeights: {
      domain1: 0.12,  // General Security Concepts 12%
      domain2: 0.22,  // Threats, Vulnerabilities & Mitigations 22%
      domain3: 0.18,  // Security Architecture 18%
      domain4: 0.28,  // Security Operations 28%
      domain5: 0.20   // Security Program Management & Oversight 20%
    }
  }
};

/**
 * Get course configuration, defaults to network-plus
 */
function getCourseConfig(courseId = 'network-plus') {
  return courseConfigs[courseId] || courseConfigs['network-plus'];
}

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
 * Get random number between min and max (inclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a full practice exam (90 questions total)
 * - 2-4 PBQs randomly selected (appear first like real CompTIA exam)
 * - Remaining questions are MCQs weighted by CompTIA exam percentages
 * @param {string} courseId - Course identifier (network-plus, a-plus-core1, a-plus-core2, security-plus)
 * @returns {object} Exam object with questions, metadata, and scoring info
 */
export function generateFullExam(courseId = 'network-plus') {
  const config = getCourseConfig(courseId);

  // Random 2-4 PBQs like real CompTIA exam
  const pbqCount = getRandomInt(config.pbqMin, config.pbqMax);
  const pbqs = config.getPBQs(pbqCount);

  // Mark PBQs with their type for scoring
  const markedPBQs = pbqs.map((q, index) => ({
    ...q,
    questionType: 'pbq',
    questionNumber: index + 1
  }));

  // Calculate how many MCQs needed (total - PBQs)
  const mcqCount = config.totalQuestions - pbqCount;

  // Select MCQs based on domain weights
  const mcqs = [];
  const domainKeys = Object.keys(config.domainWeights);

  for (const domainKey of domainKeys) {
    const weight = config.domainWeights[domainKey];
    const domainQuestions = config.questionPool[domainKey] || [];
    const questionsFromDomain = Math.round(mcqCount * weight);
    mcqs.push(...selectRandom(domainQuestions, questionsFromDomain));
  }

  // Ensure we have exactly the right number of MCQs
  // (rounding might give us slightly more or fewer)
  const shuffledMCQs = shuffle(mcqs).slice(0, mcqCount);

  // Mark MCQs with their type for scoring
  const markedMCQs = shuffledMCQs.map((q, index) => ({
    ...q,
    questionType: 'mcq',
    questionNumber: pbqCount + index + 1
  }));

  // Combine: PBQs FIRST (like real CompTIA), then MCQs
  const questions = [
    ...markedPBQs,
    ...markedMCQs
  ];

  return {
    courseId,
    questions,
    totalQuestions: questions.length,
    pbqCount,
    mcqCount: questions.length - pbqCount,
    passingScore: config.passingScore,
    timeLimit: 90, // minutes
    generatedAt: new Date().toISOString()
  };
}

/**
 * Score an exam based on user answers
 * @param {object} exam - The exam object from generateFullExam
 * @param {object} userAnswers - Object mapping questionNumber to user's answer
 * @returns {object} Scoring results
 */
export function scoreExam(exam, userAnswers) {
  let pbqCorrect = 0;
  let pbqTotal = 0;
  let pbqPoints = 0;
  let pbqMaxPoints = 0;

  let mcqCorrect = 0;
  let mcqTotal = 0;

  const questionResults = [];

  for (const question of exam.questions) {
    const userAnswer = userAnswers[question.questionNumber];
    let isCorrect = false;
    let pointsEarned = 0;
    let maxPoints = 1;

    if (question.questionType === 'pbq') {
      pbqTotal++;
      maxPoints = question.points || 5; // PBQs have point values
      pbqMaxPoints += maxPoints;

      // Score PBQ based on type
      const pbqScore = scorePBQ(question, userAnswer);
      pointsEarned = pbqScore.pointsEarned;
      isCorrect = pbqScore.isFullyCorrect;

      if (isCorrect) pbqCorrect++;
      pbqPoints += pointsEarned;
    } else {
      mcqTotal++;
      // MCQ scoring: simple correct/incorrect
      isCorrect = userAnswer === question.correct;
      pointsEarned = isCorrect ? 1 : 0;
      if (isCorrect) mcqCorrect++;
    }

    questionResults.push({
      questionNumber: question.questionNumber,
      questionType: question.questionType,
      isCorrect,
      pointsEarned,
      maxPoints,
      userAnswer,
      correctAnswer: question.questionType === 'mcq' ? question.correct : question.correctAnswers || question.correctOrder || question.correctMatches
    });
  }

  // Calculate scaled score (100-900 scale like CompTIA)
  // PBQs are worth more than MCQs in the real exam
  const pbqWeight = 0.20; // PBQs worth ~20% of score
  const mcqWeight = 0.80; // MCQs worth ~80% of score

  const pbqPercentage = pbqMaxPoints > 0 ? pbqPoints / pbqMaxPoints : 0;
  const mcqPercentage = mcqTotal > 0 ? mcqCorrect / mcqTotal : 0;

  // Weighted percentage
  const weightedPercentage = (pbqPercentage * pbqWeight) + (mcqPercentage * mcqWeight);

  // Scale to 100-900 (800 point range)
  const scaledScore = Math.round(100 + (weightedPercentage * 800));

  const passed = scaledScore >= exam.passingScore;

  return {
    scaledScore,
    passingScore: exam.passingScore,
    passed,
    pbq: {
      correct: pbqCorrect,
      total: pbqTotal,
      pointsEarned: pbqPoints,
      maxPoints: pbqMaxPoints,
      percentage: pbqMaxPoints > 0 ? Math.round((pbqPoints / pbqMaxPoints) * 100) : 0
    },
    mcq: {
      correct: mcqCorrect,
      total: mcqTotal,
      percentage: mcqTotal > 0 ? Math.round((mcqCorrect / mcqTotal) * 100) : 0
    },
    overall: {
      correct: pbqCorrect + mcqCorrect,
      total: pbqTotal + mcqTotal,
      percentage: Math.round(weightedPercentage * 100)
    },
    questionResults
  };
}

/**
 * Score a Performance-Based Question
 * @param {object} question - The PBQ question
 * @param {any} userAnswer - User's answer (format depends on PBQ type)
 * @returns {object} Score result with pointsEarned and isFullyCorrect
 */
function scorePBQ(question, userAnswer) {
  if (!userAnswer) {
    return { pointsEarned: 0, isFullyCorrect: false };
  }

  const maxPoints = question.points || 5;
  let pointsEarned = 0;
  let correctCount = 0;
  let totalItems = 0;

  switch (question.type) {
    case 'drag-drop': {
      // userAnswer should be an object: { zoneId: [itemIds] }
      const correctAnswers = question.correctAnswers;
      for (const [zoneId, correctItems] of Object.entries(correctAnswers)) {
        const userItems = userAnswer[zoneId] || [];
        totalItems += correctItems.length;
        for (const item of correctItems) {
          if (userItems.includes(item)) {
            correctCount++;
          }
        }
      }
      break;
    }

    case 'matching': {
      // userAnswer should be an object: { leftId: rightId }
      const correctMatches = question.correctMatches;
      totalItems = Object.keys(correctMatches).length;
      for (const [leftId, correctRightId] of Object.entries(correctMatches)) {
        if (userAnswer[leftId] === correctRightId) {
          correctCount++;
        }
      }
      break;
    }

    case 'ordering': {
      // userAnswer should be an array of item IDs in order
      const correctOrder = question.correctOrder;
      totalItems = correctOrder.length;
      for (let i = 0; i < correctOrder.length; i++) {
        if (userAnswer[i] === correctOrder[i]) {
          correctCount++;
        }
      }
      break;
    }

    case 'configuration': {
      // userAnswer should be an object: { fieldId: value }
      const fields = question.fields;
      totalItems = fields.length;
      for (const field of fields) {
        const userValue = (userAnswer[field.id] || '').toString().trim();
        const correctValue = field.correctAnswer.toString().trim();
        const partialCredit = field.partialCredit || [];

        if (userValue.toLowerCase() === correctValue.toLowerCase()) {
          correctCount++;
        } else if (partialCredit.some(pc => userValue.toLowerCase() === pc.toString().toLowerCase())) {
          correctCount += 0.5; // Partial credit
        }
      }
      break;
    }

    default:
      console.warn(`Unknown PBQ type: ${question.type}`);
      return { pointsEarned: 0, isFullyCorrect: false };
  }

  // Calculate points based on percentage correct
  const percentage = totalItems > 0 ? correctCount / totalItems : 0;
  pointsEarned = Math.round(maxPoints * percentage * 10) / 10; // Round to 1 decimal
  const isFullyCorrect = correctCount === totalItems;

  return { pointsEarned, isFullyCorrect };
}

/**
 * Generate domain-specific practice exam (25 questions)
 * @param {number} domainNumber - Domain number (1-5 for most certs, 1-4 for A+ Core 2)
 * @param {string} courseId - Course identifier
 */
export function generateDomainExam(domainNumber, courseId = 'network-plus') {
  const config = getCourseConfig(courseId);
  const domainKey = `domain${domainNumber}`;
  const questions = config.questionPool[domainKey];

  if (!questions || questions.length === 0) {
    throw new Error(`Invalid domain number ${domainNumber} for course ${courseId}`);
  }

  // If domain has fewer than 25 questions, return all available
  const questionCount = Math.min(25, questions.length);
  const selectedQuestions = selectRandom(questions, questionCount);

  return {
    courseId,
    domainNumber,
    questions: selectedQuestions.map((q, index) => ({
      ...q,
      questionType: 'mcq',
      questionNumber: index + 1
    })),
    totalQuestions: selectedQuestions.length,
    timeLimit: 30 // minutes for domain practice
  };
}

/**
 * Generate quick quiz (15 random questions from all domains)
 * @param {string} courseId - Course identifier
 */
export function generateQuickQuiz(courseId = 'network-plus') {
  const config = getCourseConfig(courseId);

  const allQuestions = [];
  for (const domainKey of Object.keys(config.domainWeights)) {
    const domainQuestions = config.questionPool[domainKey] || [];
    allQuestions.push(...domainQuestions);
  }

  const selectedQuestions = selectRandom(allQuestions, 15);

  return {
    courseId,
    questions: selectedQuestions.map((q, index) => ({
      ...q,
      questionType: 'mcq',
      questionNumber: index + 1
    })),
    totalQuestions: selectedQuestions.length,
    timeLimit: 15 // minutes for quick quiz
  };
}

/**
 * Get total question count per domain
 * @param {string} courseId - Course identifier
 */
export function getQuestionCounts(courseId = 'network-plus') {
  const config = getCourseConfig(courseId);
  const counts = {};
  let total = 0;

  for (const domainKey of Object.keys(config.domainWeights)) {
    const count = (config.questionPool[domainKey] || []).length;
    counts[domainKey] = count;
    total += count;
  }

  counts.total = total;
  return counts;
}

/**
 * Validate that we have enough questions for exam generation
 * @param {string} courseId - Course identifier
 */
export function validateQuestionPool(courseId = 'network-plus') {
  const config = getCourseConfig(courseId);
  const counts = getQuestionCounts(courseId);
  const warnings = [];

  const mcqNeeded = config.totalQuestions - config.pbqMax; // Max PBQs = min MCQs needed

  for (const [domainKey, weight] of Object.entries(config.domainWeights)) {
    const requiredCount = Math.ceil(mcqNeeded * weight);
    const actualCount = counts[domainKey] || 0;
    if (actualCount < requiredCount) {
      warnings.push(`${domainKey} has only ${actualCount} questions (need ${requiredCount})`);
    }
  }

  return {
    isValid: warnings.length === 0,
    warnings,
    counts
  };
}

/**
 * Get available courses
 */
export function getAvailableCourses() {
  return Object.keys(courseConfigs);
}

/**
 * Get course domain count
 * @param {string} courseId - Course identifier
 */
export function getCourseDomainCount(courseId = 'network-plus') {
  const config = getCourseConfig(courseId);
  return Object.keys(config.domainWeights).length;
}

/**
 * Get course info
 * @param {string} courseId - Course identifier
 */
export function getCourseInfo(courseId = 'network-plus') {
  const config = getCourseConfig(courseId);
  return {
    courseId,
    totalQuestions: config.totalQuestions,
    passingScore: config.passingScore,
    pbqRange: `${config.pbqMin}-${config.pbqMax}`,
    domainCount: Object.keys(config.domainWeights).length,
    domains: Object.entries(config.domainWeights).map(([key, weight]) => ({
      key,
      weight: Math.round(weight * 100) + '%'
    }))
  };
}
