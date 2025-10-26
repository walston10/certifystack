import { useState } from 'react';
import '../styles/TopologyActivity.css';

const topologies = [
  { id: 'star', name: 'Star Topology', description: 'All devices connect to a central hub or switch' },
  { id: 'mesh', name: 'Mesh Topology', description: 'Devices have multiple connections creating redundant paths' },
  { id: 'bus', name: 'Bus Topology', description: 'All devices connect to a single backbone cable' },
  { id: 'ring', name: 'Ring Topology', description: 'Devices connect in a circular loop' },
  { id: 'hybrid', name: 'Hybrid Topology', description: 'Combination of two or more topologies' },
  { id: 'point-to-point', name: 'Point-to-Point', description: 'Direct connection between exactly two devices' }
];

const scenarios = [
  {
    id: 1,
    scenario: 'Modern office where every computer connects to a switch in the wiring closet',
    correctAnswer: 'star',
    hint: 'Most common in LANs today'
  },
  {
    id: 2,
    scenario: 'Five branch offices interconnected with multiple redundant paths between critical locations',
    correctAnswer: 'mesh',
    hint: 'Used for WANs and critical infrastructure'
  },
  {
    id: 3,
    scenario: 'Legacy 1990s network with coaxial cable running through the office with terminators at both ends',
    correctAnswer: 'bus',
    hint: 'Obsolete technology'
  },
  {
    id: 4,
    scenario: 'Token Ring network where data passes through each device until reaching destination',
    correctAnswer: 'ring',
    hint: 'Used token passing protocol'
  },
  {
    id: 5,
    scenario: 'University campus with star topology in buildings, connected by fiber ring between buildings',
    correctAnswer: 'hybrid',
    hint: 'Combination of multiple topologies'
  },
  {
    id: 6,
    scenario: 'Two buildings connected by a dedicated fiber optic cable',
    correctAnswer: 'point-to-point',
    hint: 'Simplest topology, exactly 2 devices'
  }
];

function TopologyActivity() {
  const [assignments, setAssignments] = useState({});
  const [feedback, setFeedback] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleDrop = (scenarioId, topologyId) => {
    if (isChecked) return; // Don't allow changes after checking
    
    setAssignments(prev => ({
      ...prev,
      [scenarioId]: topologyId
    }));
    setFeedback(prev => ({
      ...prev,
      [scenarioId]: null
    }));
  };

  const handleCheck = () => {
    const newFeedback = {};
    let correctCount = 0;

    scenarios.forEach(scenario => {
      const isCorrect = assignments[scenario.id] === scenario.correctAnswer;
      newFeedback[scenario.id] = isCorrect;
      if (isCorrect) correctCount++;
    });

    setFeedback(newFeedback);
    setScore(correctCount);
    setIsChecked(true);
  };

  const handleReset = () => {
    setAssignments({});
    setFeedback({});
    setIsChecked(false);
    setScore(0);
  };

  const allAssigned = scenarios.every(s => assignments[s.id]);
  const perfectScore = isChecked && score === scenarios.length;

  return (
    <div className="topology-activity">
      <h2>🎮 Topology Matching Challenge</h2>
      <p>Match each real-world scenario with the correct network topology by clicking the topology buttons below each scenario.</p>

      {perfectScore && (
        <div className="success-message">
          🎉 Perfect Score! You've mastered network topologies! All {scenarios.length} scenarios matched correctly!
        </div>
      )}

      <div className="activity-container">
        <div className="scenarios-section">
          <h3>Real-World Scenarios</h3>
          
          {scenarios.map(scenario => (
            <div 
              key={scenario.id}
              className={`scenario-card ${
                feedback[scenario.id] === true ? 'correct' : 
                feedback[scenario.id] === false ? 'incorrect' : ''
              }`}
            >
              <div className="scenario-number">Scenario {scenario.id}</div>
              <div className="scenario-text">{scenario.scenario}</div>
              
              {assignments[scenario.id] && (
                <div className="selected-topology">
                  <strong>Selected:</strong> {topologies.find(t => t.id === assignments[scenario.id])?.name}
                  {feedback[scenario.id] === true && <span className="icon">✓</span>}
                  {feedback[scenario.id] === false && <span className="icon">✗</span>}
                </div>
              )}

              {feedback[scenario.id] === false && (
                <div className="correction">
                  <strong>Correct Answer:</strong> {topologies.find(t => t.id === scenario.correctAnswer)?.name}
                  <div className="hint">💡 {scenario.hint}</div>
                </div>
              )}

              {!isChecked && (
                <div className="topology-buttons">
                  {topologies.map(topology => (
                    <button
                      key={topology.id}
                      className={`topology-btn ${assignments[scenario.id] === topology.id ? 'selected' : ''}`}
                      onClick={() => handleDrop(scenario.id, topology.id)}
                    >
                      {topology.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reference-section">
          <h3>📚 Topology Reference</h3>
          {topologies.map(topology => (
            <div key={topology.id} className="reference-card">
              <div className="topology-name">{topology.name}</div>
              <div className="topology-description">{topology.description}</div>
            </div>
          ))}

          <div className="controls">
            {!isChecked ? (
              <button 
                className="check-btn"
                onClick={handleCheck}
                disabled={!allAssigned}
              >
                {allAssigned ? 'Check Answers' : `Assign All Scenarios (${Object.keys(assignments).length}/${scenarios.length})`}
              </button>
            ) : (
              <>
                <div className="score-display">
                  Score: {score}/{scenarios.length} ({Math.round((score/scenarios.length) * 100)}%)
                </div>
                <button className="reset-btn" onClick={handleReset}>
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="activity-tips">
        <h4>💡 Tips for Success:</h4>
        <ul>
          <li><strong>Star:</strong> Central device (most common in modern offices)</li>
          <li><strong>Mesh:</strong> Multiple paths, redundancy (WANs, critical systems)</li>
          <li><strong>Bus:</strong> Single cable, obsolete (1980s-90s)</li>
          <li><strong>Ring:</strong> Circular, token passing, mostly obsolete</li>
          <li><strong>Hybrid:</strong> Combination of topologies (real-world networks)</li>
          <li><strong>Point-to-Point:</strong> Two devices only (building-to-building connections)</li>
        </ul>
      </div>
    </div>
  );
}

export default TopologyActivity;