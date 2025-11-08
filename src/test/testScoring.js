import { calculateExamScore, identifyWeakAreas, getStudyRecommendations, generateSummary } from '../utils/examScoring';

// Mock exam state
const mockExamState = {
  questions: [
    { id: 'd1-q001', domain: '1.0', objective: '1.1', correct: 0 },
    { id: 'd1-q002', domain: '1.0', objective: '1.1', correct: 1 },
    { id: 'd1-q003', domain: '1.0', objective: '1.2', correct: 2 },
    { id: 'd2-q001', domain: '2.0', objective: '2.1', correct: 0 },
    { id: 'd2-q002', domain: '2.0', objective: '2.1', correct: 1 },
    { id: 'd3-q001', domain: '3.0', objective: '3.1', correct: 0 },
    { id: 'd4-q001', domain: '4.0', objective: '4.1', correct: 3 },
    { id: 'd5-q001', domain: '5.0', objective: '5.1', correct: 2 }
  ],
  answers: {
    'd1-q001': 0, // correct
    'd1-q002': 0, // incorrect (correct is 1)
    'd1-q003': 2, // correct
    'd2-q001': 1, // incorrect (correct is 0)
    'd2-q002': 1, // correct
    'd3-q001': 0, // correct
    'd4-q001': 3, // correct
    'd5-q001': 1  // incorrect (correct is 2)
  },
  markedForReview: ['d1-q002', 'd5-q001']
};

console.log('=== Testing Exam Scoring ===\n');

// Test 1: Calculate score
console.log('1. Calculating exam score...');
const results = calculateExamScore(mockExamState);
console.log('Total Correct:', results.totalCorrect);
console.log('Total Questions:', results.totalQuestions);
console.log('Percentage:', results.percentage + '%');
console.log('Passed:', results.passed);
console.log('Scaled Score:', results.scaledScore);
console.log('');

// Test 2: Domain breakdown
console.log('2. Domain breakdown:');
Object.entries(results.domainScores).forEach(([domain, score]) => {
  console.log(`  ${domain}: ${score.correct}/${score.total} (${score.percentage}%)`);
});
console.log('');

// Test 3: Weak areas
console.log('3. Identifying weak areas...');
const weakAreas = identifyWeakAreas(results.domainScores);
console.log('Weak areas:', weakAreas.length);
weakAreas.forEach(area => {
  console.log(`  - ${area.domainName}: ${area.percentage}% (${area.correct}/${area.total})`);
});
console.log('');

// Test 4: Study recommendations
console.log('4. Study recommendations:');
const recommendations = getStudyRecommendations(results);
recommendations.forEach(rec => {
  console.log(`  ${rec.icon} ${rec.title}`);
  console.log(`     ${rec.description}`);
});
console.log('');

// Test 5: Summary
console.log('5. Performance summary:');
const summary = generateSummary(results);
console.log(summary);
console.log('');

console.log('=== Scoring Tests Complete ===');