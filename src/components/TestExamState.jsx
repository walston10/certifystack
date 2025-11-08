import React, { useEffect } from 'react';
import { generateQuickQuiz } from '../utils/examGenerator';
import { useExamState, formatTime } from '../hooks/useExamState';

function TestExamState() {
  const questions = React.useMemo(() => generateQuickQuiz(), []);
  
  const {
    examState,
    answerQuestion,
    toggleMarkForReview,
    nextQuestion,
    previousQuestion,
    startTimer,
    pauseTimer,
    submitExam,
    progress,
    isCurrentQuestionAnswered
  } = useExamState(questions, { timed: true, duration: 300 }); // 5 min for testing

  useEffect(() => {
    console.log('Exam State Hook Test Loaded');
    console.log('Questions:', questions.length);
  }, [questions]);

  const currentQ = examState.questions[examState.currentQuestion];
  const selectedAnswer = examState.answers[currentQ?.id];
  const isMarked = examState.markedForReview.includes(currentQ?.id);

  if (examState.isComplete) {
    return (
      <div style={{ padding: '40px', color: 'white' }}>
        <h1>✅ Exam Complete!</h1>
        <p>Answered: {progress.answered} / {progress.total}</p>
        <p>Marked for review: {examState.markedForReview.length}</p>
        <pre>{JSON.stringify(examState.answers, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Exam State Hook Test</h1>
      
      {/* Timer and Progress */}
      <div style={{ 
        background: '#1e293b', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <strong>Question {examState.currentQuestion + 1} of {examState.questions.length}</strong>
          <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '4px' }}>
            Answered: {progress.answered} | Marked: {examState.markedForReview.length}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          {examState.timeRemaining !== null && (
            <>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {formatTime(examState.timeRemaining)}
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                {examState.isTimerActive ? (
                  <button onClick={pauseTimer} style={{ padding: '4px 12px' }}>
                    Pause
                  </button>
                ) : (
                  <button onClick={startTimer} style={{ padding: '4px 12px' }}>
                    {examState.isPaused ? 'Resume' : 'Start'}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Question */}
      <div style={{ 
        background: '#1e293b', 
        padding: '30px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <div style={{ 
          fontSize: '1.1rem', 
          marginBottom: '24px',
          lineHeight: '1.6'
        }}>
          {currentQ?.question}
        </div>

        {/* Options */}
        {currentQ?.options.map((option, index) => (
          <div
            key={index}
            onClick={() => answerQuestion(currentQ.id, index)}
            style={{
              background: selectedAnswer === index ? '#00d9ff22' : '#0a0e27',
              border: selectedAnswer === index ? '2px solid #00d9ff' : '2px solid transparent',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (selectedAnswer !== index) {
                e.currentTarget.style.border = '2px solid #667eea';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedAnswer !== index) {
                e.currentTarget.style.border = '2px solid transparent';
              }
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              background: selectedAnswer === index ? '#00d9ff' : '#1e293b',
              color: selectedAnswer === index ? '#0a0e27' : '#94a3b8',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0
            }}>
              {String.fromCharCode(65 + index)}
            </div>
            <div style={{ flex: 1 }}>{option}</div>
          </div>
        ))}

        {/* Mark for Review */}
        <button
          onClick={() => toggleMarkForReview(currentQ.id)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: isMarked ? '#667eea' : 'transparent',
            border: '2px solid #667eea',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          {isMarked ? '★' : '☆'} {isMarked ? 'Marked' : 'Mark for Review'}
        </button>
      </div>

      {/* Navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '12px',
        justifyContent: 'space-between'
      }}>
        <button
          onClick={previousQuestion}
          disabled={examState.currentQuestion === 0}
          style={{
            padding: '12px 24px',
            background: examState.currentQuestion === 0 ? '#1e293b' : '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: examState.currentQuestion === 0 ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          ← Previous
        </button>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={nextQuestion}
            disabled={examState.currentQuestion === examState.questions.length - 1}
            style={{
              padding: '12px 24px',
              background: examState.currentQuestion === examState.questions.length - 1 
                ? '#1e293b' 
                : '#00d9ff',
              color: examState.currentQuestion === examState.questions.length - 1 
                ? '#94a3b8' 
                : '#0a0e27',
              border: 'none',
              borderRadius: '8px',
              cursor: examState.currentQuestion === examState.questions.length - 1 
                ? 'not-allowed' 
                : 'pointer',
              fontWeight: 'bold'
            }}
          >
            Next →
          </button>

          <button
            onClick={submitExam}
            style={{
              padding: '12px 24px',
              background: '#00ff88',
              color: '#0a0e27',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* Debug Info */}
      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        background: '#0a0e27',
        borderRadius: '8px',
        fontSize: '0.85rem',
        fontFamily: 'monospace'
      }}>
        <div><strong>Debug Info:</strong></div>
        <div>Current Question: {examState.currentQuestion + 1}</div>
        <div>Answered: {isCurrentQuestionAnswered ? 'Yes' : 'No'}</div>
        <div>Selected: {selectedAnswer !== undefined ? String.fromCharCode(65 + selectedAnswer) : 'None'}</div>
        <div>Timer Active: {examState.isTimerActive ? 'Yes' : 'No'}</div>
        <div>Progress: {progress.percentage}%</div>
      </div>
    </div>
  );
}

export default TestExamState;