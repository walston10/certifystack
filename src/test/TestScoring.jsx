import React, { useEffect, useState } from 'react';
import { calculateExamScore, identifyWeakAreas, getStudyRecommendations, getDomainName } from '../utils/examScoring';

function TestScoring() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    // Mock exam state with 15 questions
    const mockExamState = {
      questions: [
        { id: 'd1-q001', domain: '1.0', objective: '1.1', correct: 0 },
        { id: 'd1-q002', domain: '1.0', objective: '1.1', correct: 1 },
        { id: 'd1-q003', domain: '1.0', objective: '1.2', correct: 2 },
        { id: 'd1-q004', domain: '1.0', objective: '1.3', correct: 1 },
        { id: 'd2-q001', domain: '2.0', objective: '2.1', correct: 0 },
        { id: 'd2-q002', domain: '2.0', objective: '2.1', correct: 1 },
        { id: 'd2-q003', domain: '2.0', objective: '2.2', correct: 3 },
        { id: 'd3-q001', domain: '3.0', objective: '3.1', correct: 0 },
        { id: 'd3-q002', domain: '3.0', objective: '3.2', correct: 2 },
        { id: 'd4-q001', domain: '4.0', objective: '4.1', correct: 3 },
        { id: 'd4-q002', domain: '4.0', objective: '4.2', correct: 1 },
        { id: 'd4-q003', domain: '4.0', objective: '4.3', correct: 2 },
        { id: 'd5-q001', domain: '5.0', objective: '5.1', correct: 2 },
        { id: 'd5-q002', domain: '5.0', objective: '5.2', correct: 0 },
        { id: 'd5-q003', domain: '5.0', objective: '5.3', correct: 1 }
      ],
      answers: {
        'd1-q001': 0, // correct
        'd1-q002': 0, // incorrect
        'd1-q003': 2, // correct
        'd1-q004': 1, // correct
        'd2-q001': 1, // incorrect
        'd2-q002': 1, // correct
        'd2-q003': 3, // correct
        'd3-q001': 1, // incorrect
        'd3-q002': 2, // correct
        'd4-q001': 3, // correct
        'd4-q002': 1, // correct
        'd4-q003': 0, // incorrect
        'd5-q001': 2, // correct
        'd5-q002': 1, // incorrect
        'd5-q003': 1  // correct
      },
      markedForReview: ['d1-q002', 'd3-q001', 'd4-q003']
    };

    const calculatedResults = calculateExamScore(mockExamState);
    setResults(calculatedResults);
    console.log('Scoring Results:', calculatedResults);
  }, []);

  if (!results) return <div style={{ color: 'white', padding: '40px' }}>Calculating...</div>;

  const weakAreas = identifyWeakAreas(results.domainScores);
  const recommendations = getStudyRecommendations(results);

  return (
    <div style={{ padding: '40px', color: 'white', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Scoring System Test</h1>

      {/* Overall Score */}
      <div style={{ 
        background: '#1e293b', 
        padding: '30px', 
        borderRadius: '16px', 
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <h2>Overall Performance</h2>
        <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#00d9ff', margin: '20px 0' }}>
          {results.percentage}%
        </div>
        <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          {results.totalCorrect} / {results.totalQuestions} correct
        </div>
        <div style={{ 
          display: 'inline-block',
          padding: '10px 30px',
          background: results.passed ? '#00ff88' : '#ff4444',
          color: '#0a0e27',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}>
          {results.passed ? '✅ PASS' : '❌ FAIL'}
        </div>
      </div>

      {/* Domain Breakdown */}
      <div style={{ 
        background: '#1e293b', 
        padding: '30px', 
        borderRadius: '16px',
        marginBottom: '30px'
      }}>
        <h2>Domain Performance</h2>
        {Object.entries(results.domainScores).map(([domain, score]) => (
          <div key={domain} style={{ marginBottom: '20px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '8px'
            }}>
              <span>{domain} {getDomainName(domain)}</span>
              <span style={{ fontWeight: 'bold' }}>
                {score.correct}/{score.total} ({score.percentage}%)
              </span>
            </div>
            <div style={{ 
              height: '12px', 
              background: '#0a0e27', 
              borderRadius: '6px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${score.percentage}%`,
                background: score.percentage >= 70 ? '#00ff88' : '#ff4444',
                transition: 'width 0.5s ease'
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Weak Areas */}
      {weakAreas.length > 0 && (
        <div style={{ 
          background: '#1e293b', 
          padding: '30px', 
          borderRadius: '16px',
          marginBottom: '30px',
          border: '2px solid #ff4444'
        }}>
          <h2>⚠️ Focus Areas</h2>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
            These domains need more study:
          </p>
          {weakAreas.map(area => (
            <div key={area.domain} style={{ 
              background: '#0a0e27',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '12px'
            }}>
              <strong>{area.domainName}</strong>
              <div style={{ color: '#94a3b8', marginTop: '4px' }}>
                {area.percentage}% ({area.correct}/{area.total}) - 
                Need {area.deficit}% improvement to reach 70%
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Study Recommendations */}
      <div style={{ 
        background: '#1e293b', 
        padding: '30px', 
        borderRadius: '16px'
      }}>
        <h2>📚 Study Recommendations</h2>
        {recommendations.map((rec, idx) => (
          <div key={idx} style={{ 
            background: '#0a0e27',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '16px',
            display: 'flex',
            gap: '16px'
          }}>
            <div style={{ fontSize: '2rem' }}>{rec.icon}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 8px 0' }}>{rec.title}</h3>
              <p style={{ margin: 0, color: '#94a3b8' }}>{rec.description}</p>
            </div>
          </div>
        ))}
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
        <strong>Debug Info:</strong>
        <pre style={{ overflow: 'auto' }}>
          {JSON.stringify(results, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default TestScoring;