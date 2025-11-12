import React from 'react';
import { getAvailableQuizzes, getQuizByLesson } from '../courses/network-plus/quizzes';

/**
 * Debug component to verify quiz availability
 * Temporarily add this to PracticeZone to debug quiz issues
 */
function QuizDebug() {
  const availableQuizzes = getAvailableQuizzes();

  return (
    <div style={{
      background: '#1a1a2e',
      border: '2px solid #00d9ff',
      borderRadius: '12px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '1400px',
      fontFamily: 'monospace',
      color: '#fff'
    }}>
      <h3 style={{ color: '#00d9ff', marginTop: 0 }}>🔍 Quiz Debug Info</h3>

      <div style={{ marginBottom: '16px' }}>
        <strong>Total Available Quizzes:</strong> {availableQuizzes.length}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <strong>Quiz Numbers:</strong> [{availableQuizzes.join(', ')}]
      </div>

      <div style={{ marginTop: '20px' }}>
        <strong>Sample Quiz Checks:</strong>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '8px', marginTop: '12px' }}>
          {[...Array(30)].map((_, i) => {
            const lessonNum = i + 1;
            const quiz = getQuizByLesson(lessonNum);
            const exists = !!quiz;

            return (
              <div
                key={lessonNum}
                style={{
                  padding: '8px',
                  background: exists ? '#00e676' : '#ff4444',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#000'
                }}
                title={exists ? `Lesson ${lessonNum}: ${quiz.length} questions` : `Lesson ${lessonNum}: NO QUIZ`}
              >
                {lessonNum}
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '12px', fontSize: '12px', color: '#aaa' }}>
          Green = Quiz exists | Red = Quiz missing
        </div>
      </div>
    </div>
  );
}

export default QuizDebug;
