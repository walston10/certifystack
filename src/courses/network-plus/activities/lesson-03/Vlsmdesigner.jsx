import React, { useState, useEffect } from 'react';
import './VLSMDesigner.css';

const VLSMDesigner = () => {
  // Game modes
  const [gameMode, setGameMode] = useState('menu'); // menu, tutorial, challenge, expert
  const [difficulty, setDifficulty] = useState('easy'); // easy, medium, hard
  
  // Game state
  const [scenario, setScenario] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [allocatedSubnets, setAllocatedSubnets] = useState([]);
  const [availableSpace, setAvailableSpace] = useState(254);
  const [usedSpace, setUsedSpace] = useState(0);
  const [wastedSpace, setWastedSpace] = useState(0);
  const [score, setScore] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showMath, setShowMath] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState(null);
  const [orderCorrect, setOrderCorrect] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Scenarios
  const scenarios = {
    easy: {
      name: 'Small Office Network',
      network: '192.168.10.0/24',
      baseAddress: '192.168.10.0',
      totalIPs: 256,
      departments: [
        { id: 1, name: 'Office Staff', icon: '👥', hosts: 50, color: '#667eea' },
        { id: 2, name: 'Guest WiFi', icon: '📱', hosts: 20, color: '#f093fb' },
        { id: 3, name: 'Servers', icon: '🖥️', hosts: 10, color: '#4facfe' },
        { id: 4, name: 'WAN Link', icon: '🔗', hosts: 2, color: '#00d9ff' }
      ]
    },
    medium: {
      name: 'Multi-Floor Building',
      network: '10.1.0.0/16',
      baseAddress: '10.1.0.0',
      totalIPs: 65536,
      departments: [
        { id: 1, name: 'Floor 1 Sales', icon: '🏢', hosts: 200, color: '#667eea' },
        { id: 2, name: 'Floor 2 Engineering', icon: '💻', hosts: 100, color: '#764ba2' },
        { id: 3, name: 'Floor 3 Management', icon: '👔', hosts: 50, color: '#f093fb' },
        { id: 4, name: 'Data Center', icon: '💾', hosts: 30, color: '#4facfe' },
        { id: 5, name: 'WAN Link 1', icon: '🔗', hosts: 2, color: '#00d9ff' },
        { id: 6, name: 'WAN Link 2', icon: '🔗', hosts: 2, color: '#00d9ff' }
      ]
    },
    hard: {
      name: 'Enterprise Campus',
      network: '172.16.0.0/16',
      baseAddress: '172.16.0.0',
      totalIPs: 65536,
      departments: [
        { id: 1, name: 'Building A', icon: '🏛️', hosts: 500, color: '#667eea' },
        { id: 2, name: 'Building B', icon: '🏢', hosts: 250, color: '#764ba2' },
        { id: 3, name: 'Building C', icon: '🏭', hosts: 125, color: '#f093fb' },
        { id: 4, name: 'Server Farm', icon: '🖥️', hosts: 60, color: '#4facfe' },
        { id: 5, name: 'DMZ', icon: '🛡️', hosts: 30, color: '#fa709a' },
        { id: 6, name: 'Guest Network', icon: '📱', hosts: 100, color: '#fee140' },
        { id: 7, name: 'WAN Link 1', icon: '🔗', hosts: 2, color: '#00d9ff' },
        { id: 8, name: 'WAN Link 2', icon: '🔗', hosts: 2, color: '#00d9ff' },
        { id: 9, name: 'WAN Link 3', icon: '🔗', hosts: 2, color: '#00d9ff' },
        { id: 10, name: 'WAN Link 4', icon: '🔗', hosts: 2, color: '#00d9ff' }
      ]
    }
  };

  // Calculate subnet requirements
  const calculateSubnetMask = (hostsNeeded) => {
    let hostBits = Math.ceil(Math.log2(hostsNeeded + 2));
    let prefix = 32 - hostBits;
    let totalHosts = Math.pow(2, hostBits);
    let usableHosts = totalHosts - 2;
    
    return {
      prefix,
      hostBits,
      totalHosts,
      usableHosts,
      dotted: prefixToDotted(prefix)
    };
  };

  // Convert prefix to dotted decimal
  const prefixToDotted = (prefix) => {
    const masks = {
      24: '255.255.255.0',
      25: '255.255.255.128',
      26: '255.255.255.192',
      27: '255.255.255.224',
      28: '255.255.255.240',
      29: '255.255.255.248',
      30: '255.255.255.252'
    };
    return masks[prefix] || `/${prefix}`;
  };

  // Calculate next subnet address
  const calculateSubnetAddresses = (baseAddress, prefix, subnetNumber = 0) => {
    const parts = baseAddress.split('.').map(Number);
    const hostBits = 32 - prefix;
    const blockSize = Math.pow(2, hostBits);
    const offset = blockSize * subnetNumber;
    
    // Add offset to the last octet (simplified for /24 and smaller)
    let lastOctet = parts[3] + offset;
    let thirdOctet = parts[2];
    
    if (lastOctet >= 256) {
      thirdOctet += Math.floor(lastOctet / 256);
      lastOctet = lastOctet % 256;
    }
    
    const networkAddress = `${parts[0]}.${parts[1]}.${thirdOctet}.${lastOctet}`;
    const firstUsable = `${parts[0]}.${parts[1]}.${thirdOctet}.${lastOctet + 1}`;
    const broadcastOctet = lastOctet + blockSize - 1;
    const lastUsableOctet = broadcastOctet - 1;
    
    const broadcast = `${parts[0]}.${parts[1]}.${thirdOctet}.${broadcastOctet}`;
    const lastUsable = `${parts[0]}.${parts[1]}.${thirdOctet}.${lastUsableOctet}`;
    
    return {
      networkAddress,
      firstUsable,
      lastUsable,
      broadcast,
      blockSize,
      nextSubnetStart: `${parts[0]}.${parts[1]}.${thirdOctet}.${lastOctet + blockSize}`
    };
  };

  // Check for overlaps
  const checkOverlaps = (newSubnet, existingSubnets) => {
    for (let existing of existingSubnets) {
      const newStart = ipToNumber(newSubnet.networkAddress);
      const newEnd = ipToNumber(newSubnet.broadcast);
      const existStart = ipToNumber(existing.networkAddress);
      const existEnd = ipToNumber(existing.broadcast);
      
      if ((newStart >= existStart && newStart <= existEnd) ||
          (newEnd >= existStart && newEnd <= existEnd) ||
          (newStart <= existStart && newEnd >= existEnd)) {
        return existing;
      }
    }
    return null;
  };

  // Convert IP to number for comparison
  const ipToNumber = (ip) => {
    const parts = ip.split('.').map(Number);
    return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
  };

  // Start game
  const startGame = (mode, diff) => {
    const selectedScenario = scenarios[diff];
    setScenario(selectedScenario);
    setDepartments([...selectedScenario.departments].sort((a, b) => b.hosts - a.hosts));
    setGameMode(mode);
    setDifficulty(diff);
    setAllocatedSubnets([]);
    setScore(0);
    setEfficiency(0);
    setUsedSpace(0);
    setWastedSpace(0);
    setFeedback(null);
    setOrderCorrect(null);
    setTimeElapsed(0);
    setTimerActive(true);
    setCurrentDepartment(null);
  };

  // Timer
  useEffect(() => {
    if (!timerActive) return;
    
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timerActive]);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Select department for configuration
  const selectDepartment = (dept) => {
    if (allocatedSubnets.find(s => s.department.id === dept.id)) {
      setFeedback({
        type: 'warning',
        message: `${dept.name} is already configured!`
      });
      return;
    }
    setCurrentDepartment(dept);
    setShowMath(false);
  };

  // Allocate subnet
  const allocateSubnet = () => {
    if (!currentDepartment) return;

    const subnetMask = calculateSubnetMask(currentDepartment.hosts);
    const lastSubnet = allocatedSubnets[allocatedSubnets.length - 1];
    
    let nextAddress = scenario.baseAddress;
    if (lastSubnet) {
      nextAddress = lastSubnet.nextSubnetStart;
    }
    
    const addresses = calculateSubnetAddresses(nextAddress, subnetMask.prefix);
    
    const newSubnet = {
      department: currentDepartment,
      ...subnetMask,
      ...addresses,
      hostsNeeded: currentDepartment.hosts,
      wastedHosts: subnetMask.usableHosts - currentDepartment.hosts,
      efficiency: ((currentDepartment.hosts / subnetMask.usableHosts) * 100).toFixed(1)
    };

    // Check for overlaps
    const overlap = checkOverlaps(newSubnet, allocatedSubnets);
    if (overlap) {
      setFeedback({
        type: 'error',
        message: `⚠️ Overlap detected with ${overlap.department.name}!`,
        detail: `${newSubnet.networkAddress} conflicts with ${overlap.networkAddress}`
      });
      return;
    }

    // Add subnet
    const updated = [...allocatedSubnets, newSubnet];
    setAllocatedSubnets(updated);
    
    // Update statistics
    const totalUsed = updated.reduce((sum, s) => sum + s.hostsNeeded, 0);
    const totalAllocated = updated.reduce((sum, s) => sum + s.usableHosts, 0);
    const totalWasted = totalAllocated - totalUsed;
    const overallEfficiency = ((totalUsed / totalAllocated) * 100).toFixed(1);
    
    setUsedSpace(totalUsed);
    setWastedSpace(totalWasted);
    setEfficiency(overallEfficiency);

    // Calculate score
    let points = 10; // Base points
    if (newSubnet.efficiency >= 95) points += 5; // Bonus for high efficiency
    if (newSubnet.efficiency >= 90) points += 3;
    setScore(prev => prev + points);

    setFeedback({
      type: 'success',
      message: `✓ ${currentDepartment.name} configured successfully!`,
      detail: `${newSubnet.usableHosts} IPs allocated, ${newSubnet.efficiency}% efficiency`
    });
    
    setCurrentDepartment(null);
  };

  // Check if game is complete
  const isComplete = allocatedSubnets.length === departments.length;

  // Calculate final score
  const calculateFinalScore = () => {
    let finalScore = score;
    
    // Order bonus
    const correctOrder = checkOrder();
    if (correctOrder) finalScore += 25;
    
    // Efficiency bonus
    if (efficiency >= 90) finalScore += 25;
    else if (efficiency >= 85) finalScore += 15;
    else if (efficiency >= 80) finalScore += 10;
    
    // Time bonus (if under 5 minutes)
    if (timeElapsed < 300) {
      finalScore += Math.floor((300 - timeElapsed) / 10);
    }
    
    return finalScore;
  };

  // Check if departments are in correct order (largest first)
  const checkOrder = () => {
    for (let i = 0; i < allocatedSubnets.length - 1; i++) {
      if (allocatedSubnets[i].hostsNeeded < allocatedSubnets[i + 1].hostsNeeded) {
        return false;
      }
    }
    return true;
  };

  // Show completion screen
  useEffect(() => {
    if (isComplete && gameMode !== 'menu') {
      setTimerActive(false);
      const finalScore = calculateFinalScore();
      const correctOrder = checkOrder();
      
      setFeedback({
        type: 'complete',
        score: finalScore,
        efficiency: efficiency,
        time: formatTime(timeElapsed),
        correctOrder: correctOrder,
        grade: finalScore >= 100 ? 'S' : finalScore >= 90 ? 'A' : finalScore >= 80 ? 'B' : finalScore >= 70 ? 'C' : 'D'
      });
    }
  }, [isComplete]);

  // Render menu
  if (gameMode === 'menu') {
    return (
      <div className="vlsm-designer">
        <div className="game-menu">
          <h1>🎮 VLSM Network Designer</h1>
          <p className="game-subtitle">Design efficient networks with Variable Length Subnet Masking</p>
          
          <div className="menu-section">
            <h2>Choose Your Challenge</h2>
            
            <div className="scenario-cards">
              <div className="scenario-card" onClick={() => startGame('challenge', 'easy')}>
                <div className="scenario-icon">⭐</div>
                <h3>Small Office Network</h3>
                <p>192.168.10.0/24</p>
                <div className="scenario-details">
                  <span>4 departments</span>
                  <span>Beginner friendly</span>
                </div>
              </div>
              
              <div className="scenario-card" onClick={() => startGame('challenge', 'medium')}>
                <div className="scenario-icon">⭐⭐</div>
                <h3>Multi-Floor Building</h3>
                <p>10.1.0.0/16</p>
                <div className="scenario-details">
                  <span>6 departments</span>
                  <span>Intermediate</span>
                </div>
              </div>
              
              <div className="scenario-card" onClick={() => startGame('challenge', 'hard')}>
                <div className="scenario-icon">⭐⭐⭐</div>
                <h3>Enterprise Campus</h3>
                <p>172.16.0.0/16</p>
                <div className="scenario-details">
                  <span>10 departments</span>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-tips">
            <h3>💡 VLSM Golden Rules</h3>
            <ul>
              <li>Always allocate largest subnets first</li>
              <li>Round hosts up to nearest power of 2</li>
              <li>Add 2 for network + broadcast addresses</li>
              <li>Avoid address space fragmentation</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Render game
  return (
    <div className="vlsm-designer">
      <div className="game-header">
        <div className="header-left">
          <h2>🎯 {scenario?.name}</h2>
          <div className="network-info">Network: {scenario?.network}</div>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-label">Score</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Efficiency</span>
            <span className="stat-value">{efficiency}%</span>
          </div>
          <div className="stat">
            <span className="stat-label">Time</span>
            <span className="stat-value">{formatTime(timeElapsed)}</span>
          </div>
        </div>
      </div>

      <div className="game-container">
        {/* Left Panel - Departments */}
        <div className="departments-panel">
          <h3>🏢 Departments to Configure</h3>
          <p className="panel-hint">Click a department to configure (largest first!)</p>
          
          <div className="departments-list">
            {departments.map(dept => {
              const isAllocated = allocatedSubnets.find(s => s.department.id === dept.id);
              const isSelected = currentDepartment?.id === dept.id;
              
              return (
                <div
                  key={dept.id}
                  className={`department-card ${isAllocated ? 'allocated' : ''} ${isSelected ? 'selected' : ''}`}
                  onClick={() => !isAllocated && selectDepartment(dept)}
                  style={{ borderColor: dept.color }}
                >
                  <div className="dept-icon" style={{ background: dept.color }}>
                    {dept.icon}
                  </div>
                  <div className="dept-info">
                    <div className="dept-name">{dept.name}</div>
                    <div className="dept-hosts">{dept.hosts} hosts needed</div>
                  </div>
                  {isAllocated && <div className="dept-check">✓</div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Panel - Configuration */}
        <div className="configuration-panel">
          {currentDepartment ? (
            <div className="config-area">
              <h3>⚙️ Configure: {currentDepartment.name}</h3>
              
              <div className="config-card">
                <div className="config-row">
                  <span className="config-label">Hosts Required:</span>
                  <span className="config-value">{currentDepartment.hosts}</span>
                </div>
                
                {(() => {
                  const mask = calculateSubnetMask(currentDepartment.hosts);
                  const lastSubnet = allocatedSubnets[allocatedSubnets.length - 1];
                  const nextAddress = lastSubnet ? lastSubnet.nextSubnetStart : scenario.baseAddress;
                  const addresses = calculateSubnetAddresses(nextAddress, mask.prefix);
                  
                  return (
                    <>
                      <div className="config-row highlight">
                        <span className="config-label">Subnet Mask:</span>
                        <span className="config-value">/{mask.prefix} ({mask.dotted})</span>
                      </div>
                      
                      <div className="calculation-result">
                        <div className="calc-row">
                          <span>Network Address:</span>
                          <span className="mono">{addresses.networkAddress}</span>
                        </div>
                        <div className="calc-row">
                          <span>First Usable IP:</span>
                          <span className="mono">{addresses.firstUsable}</span>
                        </div>
                        <div className="calc-row">
                          <span>Last Usable IP:</span>
                          <span className="mono">{addresses.lastUsable}</span>
                        </div>
                        <div className="calc-row">
                          <span>Broadcast Address:</span>
                          <span className="mono">{addresses.broadcast}</span>
                        </div>
                        <div className="calc-row highlight">
                          <span>Usable Hosts:</span>
                          <span className="mono">{mask.usableHosts}</span>
                        </div>
                        <div className="calc-row">
                          <span>Wasted IPs:</span>
                          <span className={mask.usableHosts - currentDepartment.hosts <= 10 ? 'good' : 'warning'}>
                            {mask.usableHosts - currentDepartment.hosts} 
                            ({(((mask.usableHosts - currentDepartment.hosts) / mask.usableHosts) * 100).toFixed(1)}% waste)
                          </span>
                        </div>
                      </div>
                      
                      <div className="config-actions">
                        <button className="btn-allocate" onClick={allocateSubnet}>
                          ✓ Allocate Subnet
                        </button>
                        <button className="btn-cancel" onClick={() => setCurrentDepartment(null)}>
                          Cancel
                        </button>
                      </div>
                      
                      <button 
                        className="btn-show-math" 
                        onClick={() => setShowMath(!showMath)}
                      >
                        {showMath ? '🙈 Hide Math' : '📊 Show Math'}
                      </button>
                      
                      {showMath && (
                        <div className="math-explanation">
                          <h4>📐 Calculation Breakdown</h4>
                          <div className="math-step">
                            <strong>Step 1:</strong> Find smallest power of 2 ≥ {currentDepartment.hosts}
                            <div className="math-detail">→ 2^{mask.hostBits} = {mask.totalHosts}</div>
                          </div>
                          <div className="math-step">
                            <strong>Step 2:</strong> Subtract 2 for network + broadcast
                            <div className="math-detail">→ {mask.totalHosts} - 2 = {mask.usableHosts} usable hosts</div>
                          </div>
                          <div className="math-step">
                            <strong>Step 3:</strong> Calculate subnet mask
                            <div className="math-detail">→ Need {mask.hostBits} host bits</div>
                            <div className="math-detail">→ 32 - {mask.hostBits} = {mask.prefix} network bits</div>
                            <div className="math-detail">→ Subnet Mask: /{mask.prefix}</div>
                          </div>
                          <div className="math-step">
                            <strong>Step 4:</strong> Next subnet starts at
                            <div className="math-detail">→ {addresses.networkAddress} + {addresses.blockSize} = {addresses.nextSubnetStart}</div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <div className="no-selection-icon">👈</div>
              <h3>Select a department to configure</h3>
              <p>Click on a department card to allocate its subnet</p>
              <div className="progress-info">
                <strong>{allocatedSubnets.length}</strong> of <strong>{departments.length}</strong> configured
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Visualization */}
        <div className="visualization-panel">
          <h3>📊 Address Space</h3>
          
          <div className="allocated-subnets">
            {allocatedSubnets.map((subnet, index) => (
              <div 
                key={index} 
                className="subnet-block"
                style={{ borderLeftColor: subnet.department.color }}
              >
                <div className="subnet-header">
                  <span className="subnet-icon">{subnet.department.icon}</span>
                  <span className="subnet-name">{subnet.department.name}</span>
                  <span className="subnet-mask">/{subnet.prefix}</span>
                </div>
                <div className="subnet-range mono">
                  {subnet.networkAddress} - {subnet.broadcast}
                </div>
                <div className="subnet-stats">
                  <span>{subnet.usableHosts} IPs</span>
                  <span className={subnet.efficiency >= 90 ? 'good' : 'warning'}>
                    {subnet.efficiency}% efficient
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {allocatedSubnets.length === 0 && (
            <div className="empty-visualization">
              <p>No subnets allocated yet</p>
              <p className="hint">Start by configuring the largest department first!</p>
            </div>
          )}
        </div>
      </div>

      {/* Feedback Modal */}
      {feedback && feedback.type !== 'complete' && (
        <div className={`feedback-toast ${feedback.type}`}>
          <div className="toast-message">{feedback.message}</div>
          {feedback.detail && <div className="toast-detail">{feedback.detail}</div>}
          <button className="toast-close" onClick={() => setFeedback(null)}>×</button>
        </div>
      )}

      {/* Completion Modal */}
      {feedback && feedback.type === 'complete' && (
        <div className="completion-modal-overlay">
          <div className="completion-modal">
            <div className="completion-header">
              <div className="completion-icon">🎉</div>
              <h2>Network Design Complete!</h2>
            </div>
            
            <div className="completion-grade">
              <div className={`grade-display grade-${feedback.grade}`}>
                {feedback.grade}
              </div>
              <div className="grade-label">
                {feedback.grade === 'S' ? 'VLSM Master!' :
                 feedback.grade === 'A' ? 'Excellent!' :
                 feedback.grade === 'B' ? 'Good Job!' :
                 feedback.grade === 'C' ? 'Passed!' : 'Keep Practicing!'}
              </div>
            </div>
            
            <div className="completion-stats">
              <div className="completion-stat">
                <span className="stat-icon">🏆</span>
                <span className="stat-label">Final Score</span>
                <span className="stat-value">{feedback.score}</span>
              </div>
              <div className="completion-stat">
                <span className="stat-icon">⚡</span>
                <span className="stat-label">Efficiency</span>
                <span className="stat-value">{feedback.efficiency}%</span>
              </div>
              <div className="completion-stat">
                <span className="stat-icon">⏱️</span>
                <span className="stat-label">Time</span>
                <span className="stat-value">{feedback.time}</span>
              </div>
            </div>
            
            <div className="completion-feedback">
              <div className={`feedback-item ${feedback.correctOrder ? 'success' : 'warning'}`}>
                {feedback.correctOrder ? '✓' : '⚠️'} 
                {feedback.correctOrder ? ' Perfect ordering (largest first)!' : ' Ordering could be improved'}
              </div>
              <div className={`feedback-item ${feedback.efficiency >= 85 ? 'success' : 'warning'}`}>
                {feedback.efficiency >= 85 ? '✓' : '⚠️'}
                {feedback.efficiency >= 85 ? ' Excellent efficiency!' : ' Efficiency could be better'}
              </div>
            </div>
            
            <div className="completion-actions">
              <button className="btn-retry" onClick={() => startGame('challenge', difficulty)}>
                ↻ Try Again
              </button>
              <button className="btn-menu" onClick={() => setGameMode('menu')}>
                📋 Main Menu
              </button>
              {difficulty === 'easy' && (
                <button className="btn-next" onClick={() => startGame('challenge', 'medium')}>
                  ⭐⭐ Next Challenge
                </button>
              )}
              {difficulty === 'medium' && (
                <button className="btn-next" onClick={() => startGame('challenge', 'hard')}>
                  ⭐⭐⭐ Expert Level
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Control Bar */}
      <div className="control-bar">
        <button className="btn-hint" onClick={() => setShowHint(!showHint)}>
          💡 {showHint ? 'Hide' : 'Show'} Hint
        </button>
        <button className="btn-reset" onClick={() => startGame('challenge', difficulty)}>
          ↻ Reset
        </button>
        <button className="btn-menu-small" onClick={() => setGameMode('menu')}>
          📋 Menu
        </button>
      </div>

      {/* Hint Panel */}
      {showHint && (
        <div className="hint-panel">
          <h4>💡 VLSM Tips</h4>
          <ul>
            <li><strong>Always start with the largest subnet!</strong> This prevents fragmentation.</li>
            <li>Round up to the nearest power of 2, then add 2 for network + broadcast.</li>
            <li>Each subnet starts where the previous one ended.</li>
            <li>Aim for ≥85% efficiency to minimize waste.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VLSMDesigner;