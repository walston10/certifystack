/**
 * Calculate comprehensive exam score and performance metrics
 * @param {Object} examState - Complete exam state from useExamState
 * @returns {Object} Detailed scoring results
 */
export function calculateExamScore(examState) {
  const { questions, answers } = examState;
  
  let totalCorrect = 0;
  const domainScores = {};
  const questionResults = [];

  // Process each question
  questions.forEach((question) => {
    const userAnswer = answers[question.id];
    const isCorrect = userAnswer === question.correct;
    
    if (isCorrect) totalCorrect++;

    // Track domain performance
    const domain = question.domain;
    if (!domainScores[domain]) {
      domainScores[domain] = {
        domain: domain,
        correct: 0,
        total: 0,
        percentage: 0,
        questions: []
      };
    }
    
    domainScores[domain].total++;
    if (isCorrect) domainScores[domain].correct++;
    domainScores[domain].questions.push({
      id: question.id,
      isCorrect,
      objective: question.objective
    });

    // Store individual question result
    questionResults.push({
      question,
      userAnswer,
      isCorrect,
      wasMarked: examState.markedForReview.includes(question.id)
    });
  });

  // Calculate domain percentages
  Object.keys(domainScores).forEach(domain => {
    const score = domainScores[domain];
    score.percentage = Math.round((score.correct / score.total) * 100);
  });

  // Calculate overall metrics
  const totalQuestions = questions.length;
  const totalPercentage = Math.round((totalCorrect / totalQuestions) * 100);
  const passed = totalPercentage >= 72; // 720/1000 scaled score

  return {
    totalCorrect,
    totalQuestions,
    totalIncorrect: totalQuestions - totalCorrect,
    percentage: totalPercentage,
    passed,
    domainScores,
    questionResults,
    scaledScore: Math.round((totalPercentage / 100) * 1000) // Convert to 100-1000 scale
  };
}

/**
 * Identify weak areas based on domain performance
 * @param {Object} domainScores - Domain scores from calculateExamScore
 * @param {number} threshold - Percentage threshold for weak areas (default 70%)
 * @returns {Array} Weak areas sorted by percentage (worst first)
 */
export function identifyWeakAreas(domainScores, threshold = 70) {
  const weakAreas = [];
  
  Object.entries(domainScores).forEach(([domain, score]) => {
    if (score.percentage < threshold) {
      weakAreas.push({
        domain,
        domainName: getDomainName(domain),
        percentage: score.percentage,
        correct: score.correct,
        total: score.total,
        deficit: threshold - score.percentage
      });
    }
  });

  // Sort by percentage (worst first)
  return weakAreas.sort((a, b) => a.percentage - b.percentage);
}

/**
 * Get domain name from domain code
 * @param {string} domain - Domain code (e.g., "1.0", "2.0")
 * @returns {string} Human-readable domain name
 */
export function getDomainName(domain) {
  const domainNames = {
    '1.0': 'Networking Concepts',
    '2.0': 'Network Infrastructure',
    '3.0': 'Network Operations',
    '4.0': 'Network Security',
    '5.0': 'Network Troubleshooting'
  };
  
  return domainNames[domain] || `Domain ${domain}`;
}

/**
 * Get performance level based on percentage
 * @param {number} percentage - Score percentage (0-100)
 * @returns {Object} Performance level info
 */
export function getPerformanceLevel(percentage) {
  if (percentage >= 90) {
    return {
      level: 'Excellent',
      message: 'Outstanding performance! You\'re well-prepared for the exam.',
      color: '#00ff88'
    };
  } else if (percentage >= 80) {
    return {
      level: 'Very Good',
      message: 'Great work! You\'re nearly ready for the real exam.',
      color: '#00d9ff'
    };
  } else if (percentage >= 72) {
    return {
      level: 'Good',
      message: 'You passed! Keep studying to improve your confidence.',
      color: '#667eea'
    };
  } else if (percentage >= 60) {
    return {
      level: 'Fair',
      message: 'Close! Focus on your weak areas and try again.',
      color: '#ffa500'
    };
  } else {
    return {
      level: 'Needs Improvement',
      message: 'Keep studying. Review the lessons and try again.',
      color: '#ff4444'
    };
  }
}

/**
 * Calculate study recommendations based on exam results
 * @param {Object} results - Results from calculateExamScore
 * @returns {Array} Recommended study actions
 */
export function getStudyRecommendations(results) {
  const recommendations = [];
  const weakAreas = identifyWeakAreas(results.domainScores);

  // Overall performance recommendation
  if (results.percentage < 72) {
    recommendations.push({
      type: 'critical',
      icon: '🎯',
      title: 'Focus on Fundamentals',
      description: 'Your score is below passing. Review all lessons systematically before attempting another practice exam.',
      priority: 1
    });
  }

  // Weak area recommendations
  if (weakAreas.length > 0) {
    weakAreas.forEach((area, index) => {
      if (index < 3) { // Top 3 weak areas
        recommendations.push({
          type: 'domain',
          icon: '📚',
          title: `Study ${area.domainName}`,
          description: `You scored ${area.percentage}% in this domain. Review lessons and practice more questions.`,
          priority: 2,
          domain: area.domain
        });
      }
    });
  }

  // Marked questions recommendation
  const markedCount = results.questionResults.filter(r => r.wasMarked).length;
  if (markedCount > 5) {
    recommendations.push({
      type: 'review',
      icon: '⭐',
      title: 'Review Marked Questions',
      description: `You marked ${markedCount} questions for review. These likely indicate areas of uncertainty.`,
      priority: 3
    });
  }

  // Time-based recommendation (if available)
  if (results.timeSpent && results.totalQuestions) {
    const avgTimePerQuestion = results.timeSpent / results.totalQuestions;
    if (avgTimePerQuestion < 30) {
      recommendations.push({
        type: 'strategy',
        icon: '⏱️',
        title: 'Take Your Time',
        description: 'You rushed through questions. On the real exam, read carefully and take time to think.',
        priority: 4
      });
    } else if (avgTimePerQuestion > 90) {
      recommendations.push({
        type: 'strategy',
        icon: '⚡',
        title: 'Improve Speed',
        description: 'Practice answering questions faster to ensure you finish the real exam in time.',
        priority: 4
      });
    }
  }

  // Strong areas encouragement
  const strongAreas = Object.values(results.domainScores)
    .filter(s => s.percentage >= 80)
    .sort((a, b) => b.percentage - a.percentage);

  if (strongAreas.length > 0) {
    recommendations.push({
      type: 'strength',
      icon: '💪',
      title: 'Build on Your Strengths',
      description: `You're strong in ${getDomainName(strongAreas[0].domain)} (${strongAreas[0].percentage}%). Use this as a foundation.`,
      priority: 5
    });
  }

  // Practice exam recommendation
  if (results.percentage >= 72 && results.percentage < 80) {
    recommendations.push({
      type: 'practice',
      icon: '🎓',
      title: 'Take More Practice Exams',
      description: 'You\'re close! Take 2-3 more full practice exams to build confidence and consistency.',
      priority: 3
    });
  }

  // Sort by priority
  return recommendations.sort((a, b) => a.priority - b.priority);
}

/**
 * Compare current exam to previous attempts (future feature)
 * @param {Object} currentResults - Current exam results
 * @param {Array} previousResults - Array of previous exam results
 * @returns {Object} Comparison and trend data
 */
export function compareToHistory(currentResults, previousResults = []) {
  if (!previousResults || previousResults.length === 0) {
    return {
      trend: 'first',
      message: 'This is your first practice exam!',
      improvement: null
    };
  }

  const lastExam = previousResults[previousResults.length - 1];
  const improvement = currentResults.percentage - lastExam.percentage;

  let trend;
  let message;

  if (improvement > 5) {
    trend = 'improving';
    message = `Great progress! You improved by ${improvement} percentage points.`;
  } else if (improvement > 0) {
    trend = 'slight_improvement';
    message = `Good work! You improved by ${improvement} percentage points.`;
  } else if (improvement === 0) {
    trend = 'stable';
    message = 'Your score is consistent. Focus on weak areas to improve.';
  } else if (improvement > -5) {
    trend = 'slight_decline';
    message = `Your score decreased slightly. Review what changed.`;
  } else {
    trend = 'declining';
    message = `Your score dropped by ${Math.abs(improvement)} points. Take a break and review fundamentals.`;
  }

  // Calculate average of all previous attempts
  const avgPrevious = Math.round(
    previousResults.reduce((sum, r) => sum + r.percentage, 0) / previousResults.length
  );

  return {
    trend,
    message,
    improvement,
    lastScore: lastExam.percentage,
    currentScore: currentResults.percentage,
    averageScore: avgPrevious,
    totalAttempts: previousResults.length + 1
  };
}

/**
 * Generate performance summary text
 * @param {Object} results - Results from calculateExamScore
 * @returns {string} Human-readable summary
 */
export function generateSummary(results) {
  const performance = getPerformanceLevel(results.percentage);
  const weakAreas = identifyWeakAreas(results.domainScores);
  
  let summary = `You scored ${results.percentage}% (${results.totalCorrect}/${results.totalQuestions} correct). `;
  summary += performance.message;

  if (weakAreas.length > 0) {
    summary += ` Focus on improving ${weakAreas[0].domainName} (${weakAreas[0].percentage}%)`;
    if (weakAreas.length > 1) {
      summary += ` and ${weakAreas[1].domainName} (${weakAreas[1].percentage}%)`;
    }
    summary += '.';
  } else {
    summary += ' You performed well across all domains!';
  }

  return summary;
}

/**
 * Calculate objective-level performance (future feature)
 * @param {Object} results - Results from calculateExamScore
 * @returns {Object} Performance broken down by exam objectives
 */
export function analyzeByObjective(results) {
  const objectivePerformance = {};

  results.questionResults.forEach(({ question, isCorrect }) => {
    const objective = question.objective;
    
    if (!objectivePerformance[objective]) {
      objectivePerformance[objective] = {
        objective,
        domain: question.domain,
        correct: 0,
        total: 0,
        percentage: 0
      };
    }

    objectivePerformance[objective].total++;
    if (isCorrect) objectivePerformance[objective].correct++;
  });

  // Calculate percentages
  Object.values(objectivePerformance).forEach(obj => {
    obj.percentage = Math.round((obj.correct / obj.total) * 100);
  });

  return objectivePerformance;
}

/**
 * Get exam grade letter
 * @param {number} percentage - Score percentage
 * @returns {string} Letter grade (A+, A, B+, etc.)
 */
export function getLetterGrade(percentage) {
  if (percentage >= 97) return 'A+';
  if (percentage >= 93) return 'A';
  if (percentage >= 90) return 'A-';
  if (percentage >= 87) return 'B+';
  if (percentage >= 83) return 'B';
  if (percentage >= 80) return 'B-';
  if (percentage >= 77) return 'C+';
  if (percentage >= 73) return 'C';
  if (percentage >= 70) return 'C-';
  if (percentage >= 67) return 'D+';
  if (percentage >= 63) return 'D';
  if (percentage >= 60) return 'D-';
  return 'F';
}

/**
 * Format score for display
 * @param {Object} results - Results from calculateExamScore
 * @returns {Object} Formatted display values
 */
export function formatScoreDisplay(results) {
  return {
    percentage: `${results.percentage}%`,
    fraction: `${results.totalCorrect}/${results.totalQuestions}`,
    scaledScore: `${results.scaledScore}/1000`,
    letterGrade: getLetterGrade(results.percentage),
    status: results.passed ? 'PASS' : 'FAIL',
    statusColor: results.passed ? '#00ff88' : '#ff4444'
  };
}