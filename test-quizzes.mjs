// Test script to verify quiz availability
import { getAvailableQuizzes, getQuizByLesson } from './src/courses/network-plus/quizzes/index.js';

console.log('Available quizzes:', getAvailableQuizzes());
console.log('Total count:', getAvailableQuizzes().length);

// Test a few specific lessons
for (let i of [1, 10, 11, 15, 20, 30]) {
  const quiz = getQuizByLesson(i);
  console.log(`Lesson ${i}: ${quiz ? 'EXISTS' : 'MISSING'} (${quiz?.length || 0} questions)`);
}
