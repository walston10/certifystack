/**
 * Quick verification script to demonstrate answer randomization
 * Run with: node verify-randomization.js
 */

import { randomizeAnswerChoices } from './src/utils/quizUtils.js';

// Sample question from lesson-01-quiz.js
const sampleQuestion = {
  id: 1,
  question: "At which OSI layer do routers operate?",
  options: [
    "Layer 2 - Data Link",
    "Layer 3 - Network",
    "Layer 4 - Transport",
    "Layer 7 - Application"
  ],
  correct: 1,  // "Layer 3 - Network"
  explanation: "Routers operate at Layer 3 (Network Layer)..."
};

console.log('\n📋 Original Question:');
console.log('='.repeat(60));
console.log(`Question: ${sampleQuestion.question}`);
console.log('\nOptions:');
sampleQuestion.options.forEach((option, index) => {
  const marker = index === sampleQuestion.correct ? '✓ CORRECT' : '';
  console.log(`  ${String.fromCharCode(65 + index)}. ${option} ${marker}`);
});
console.log(`\nCorrect Answer Index: ${sampleQuestion.correct}`);
console.log(`Correct Answer Text: "${sampleQuestion.options[sampleQuestion.correct]}"`);

console.log('\n\n🎲 Randomized Versions:');
console.log('='.repeat(60));

// Generate 5 randomized versions to show the randomization
for (let i = 1; i <= 5; i++) {
  const randomized = randomizeAnswerChoices(sampleQuestion);

  console.log(`\nAttempt ${i}:`);
  console.log('Options:');
  randomized.options.forEach((option, index) => {
    const marker = index === randomized.correct ? '✓ CORRECT' : '';
    console.log(`  ${String.fromCharCode(65 + index)}. ${option} ${marker}`);
  });
  console.log(`Correct Answer Index: ${randomized.correct}`);
  console.log(`Correct Answer Text: "${randomized.options[randomized.correct]}"`);

  // Verify correctness
  if (randomized.options[randomized.correct] !== sampleQuestion.options[sampleQuestion.correct]) {
    console.error('❌ ERROR: Correct answer mismatch!');
    process.exit(1);
  }
}

console.log('\n✅ All randomizations maintain the correct answer!');
console.log('='.repeat(60));
console.log('\n');
