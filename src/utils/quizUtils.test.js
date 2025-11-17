/**
 * Test suite for quiz utility functions
 * Run with: node quizUtils.test.js
 */

import { randomizeAnswerChoices, randomizeQuizAnswers } from './quizUtils.js';

// Simple test framework
let testsPassed = 0;
let testsFailed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    testsPassed++;
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    testsFailed++;
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

function assertTrue(value, message) {
  if (!value) {
    throw new Error(message || 'Expected true, got false');
  }
}

// Test cases
console.log('\n🧪 Testing Quiz Randomization Functions\n');

// Test 1: Verify that the correct answer is still marked correctly after randomization
test('Correct answer is preserved after randomization (correct=0)', () => {
  const question = {
    id: 1,
    question: 'What is 2+2?',
    options: ['4', '5', '6', '7'],
    correct: 0,
    explanation: 'Basic math'
  };

  const randomized = randomizeAnswerChoices(question);
  const correctAnswerText = question.options[question.correct]; // '4'
  const newCorrectAnswerText = randomized.options[randomized.correct];

  assertEqual(correctAnswerText, newCorrectAnswerText,
    'Correct answer text should remain the same');
});

test('Correct answer is preserved after randomization (correct=1)', () => {
  const question = {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    correct: 1,
    explanation: 'Paris is the capital'
  };

  const randomized = randomizeAnswerChoices(question);
  const correctAnswerText = question.options[question.correct]; // 'Paris'
  const newCorrectAnswerText = randomized.options[randomized.correct];

  assertEqual(correctAnswerText, newCorrectAnswerText,
    'Correct answer text should remain the same');
});

test('Correct answer is preserved after randomization (correct=2)', () => {
  const question = {
    id: 1,
    question: 'What color is the sky?',
    options: ['Red', 'Green', 'Blue', 'Yellow'],
    correct: 2,
    explanation: 'The sky is blue'
  };

  const randomized = randomizeAnswerChoices(question);
  const correctAnswerText = question.options[question.correct]; // 'Blue'
  const newCorrectAnswerText = randomized.options[randomized.correct];

  assertEqual(correctAnswerText, newCorrectAnswerText,
    'Correct answer text should remain the same');
});

test('Correct answer is preserved after randomization (correct=3)', () => {
  const question = {
    id: 1,
    question: 'How many sides does a square have?',
    options: ['1', '2', '3', '4'],
    correct: 3,
    explanation: 'A square has 4 sides'
  };

  const randomized = randomizeAnswerChoices(question);
  const correctAnswerText = question.options[question.correct]; // '4'
  const newCorrectAnswerText = randomized.options[randomized.correct];

  assertEqual(correctAnswerText, newCorrectAnswerText,
    'Correct answer text should remain the same');
});

// Test 2: All options are still present after randomization
test('All options are preserved after randomization', () => {
  const question = {
    id: 1,
    question: 'Test question',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 1,
    explanation: 'Test'
  };

  const randomized = randomizeAnswerChoices(question);

  assertEqual(randomized.options.length, 4, 'Should have 4 options');

  // Check that all original options are present in the randomized version
  const originalOptions = new Set(question.options);
  const randomizedOptions = new Set(randomized.options);

  for (const option of originalOptions) {
    assertTrue(randomizedOptions.has(option),
      `Option "${option}" should be present in randomized options`);
  }
});

// Test 3: Randomization produces different orders (probabilistic test)
test('Randomization produces different orders (run 100 times)', () => {
  const question = {
    id: 1,
    question: 'Test question',
    options: ['A', 'B', 'C', 'D'],
    correct: 0,
    explanation: 'Test'
  };

  const originalOrder = question.options.join(',');
  let differentOrderCount = 0;

  // Run randomization 100 times
  for (let i = 0; i < 100; i++) {
    const randomized = randomizeAnswerChoices(question);
    const newOrder = randomized.options.join(',');
    if (newOrder !== originalOrder) {
      differentOrderCount++;
    }
  }

  // We expect at least 95% of randomizations to produce a different order
  // (probability of same order is 1/24 ≈ 4.2%)
  assertTrue(differentOrderCount >= 95,
    `Expected at least 95 different orders, got ${differentOrderCount}`);
});

// Test 4: randomizeQuizAnswers works on array of questions
test('randomizeQuizAnswers works on quiz array', () => {
  const quiz = [
    {
      id: 1,
      question: 'Q1',
      options: ['A', 'B', 'C', 'D'],
      correct: 0,
      explanation: 'Test'
    },
    {
      id: 2,
      question: 'Q2',
      options: ['W', 'X', 'Y', 'Z'],
      correct: 2,
      explanation: 'Test'
    }
  ];

  const randomized = randomizeQuizAnswers(quiz);

  assertEqual(randomized.length, 2, 'Should have 2 questions');

  // Check first question
  const correct1 = quiz[0].options[quiz[0].correct];
  const newCorrect1 = randomized[0].options[randomized[0].correct];
  assertEqual(correct1, newCorrect1, 'First question correct answer should be preserved');

  // Check second question
  const correct2 = quiz[1].options[quiz[1].correct];
  const newCorrect2 = randomized[1].options[randomized[1].correct];
  assertEqual(correct2, newCorrect2, 'Second question correct answer should be preserved');
});

// Test 5: Edge cases
test('Handles null/undefined gracefully', () => {
  const result1 = randomizeQuizAnswers(null);
  assertEqual(result1, null, 'Should return null for null input');

  const result2 = randomizeQuizAnswers(undefined);
  assertEqual(result2, undefined, 'Should return undefined for undefined input');
});

// Print summary
console.log('\n' + '='.repeat(50));
console.log(`Tests passed: ${testsPassed}`);
console.log(`Tests failed: ${testsFailed}`);
console.log('='.repeat(50) + '\n');

if (testsFailed > 0) {
  process.exit(1);
}
