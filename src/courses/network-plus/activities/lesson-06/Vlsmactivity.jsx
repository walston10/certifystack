import React, { useState } from 'react';
import './VLSMActivity.css';

const VLSMActivity = () => {
  const [currentChallenge, setCurrentChallenge] = useState(1);
  const [challengeCompleted, setChallengeCompleted] = useState({
    1: false,
    2: false,
    3: false
  });

  // Challenge 1: Calculate Subnet Sizes
  const [challenge1Answers, setChallenge1Answers] = useState({
    sales: '',
    engineering: '',
    it: '',
    wan: ''
  });
  const [challenge1Feedback, setChallenge1Feedback] = useState(null);

  // Challenge 2: Spot the Error
  const [challenge2Answer, setChallenge2Answer] = useState('');
  const [challenge2Feedback, setChallenge2Feedback] = useState(null);

  // Challenge 3: Build an Allocation
  const [challenge3Answers, setChallenge3Answers] = useState({
    dept1Network: '',
    dept1Mask: '',
    dept2Network: '',
    dept2Mask: '',
    dept3Network: '',
    dept3Mask: ''
  });
  const [challenge3Feedback, setChallenge3Feedback] = useState(null);

  // Challenge 1 handlers
  const handleChallenge1Change = (field, value) => {
    setChallenge1Answers({ ...challenge1Answers, [field]: value });
    setChallenge1Feedback(null);
  };

  const checkChallenge1 = () => {
    const correct = {
      sales: '/25',
      engineering: '/26',
      it: '/28',
      wan: '/30'
    };

    const results = {
      sales: challenge1Answers.sales === correct.sales,
      engineering: challenge1Answers.engineering === correct.engineering,
      it: challenge1Answers.it === correct.it,
      wan: challenge1Answers.wan === correct.wan
    };

    const allCorrect = Object.values(results).every(v => v);

    setChallenge1Feedback({
      results,
      allCorrect,
      explanations: {
        sales: challenge1Answers.sales === correct.sales 
          ? "✅ Correct! 120 hosts needs 128 addresses (2^7). That's /25 (32-7=25)."
          : `❌ 120 hosts needs 128 addresses (2^7 = 128, minus 2 = 126 usable). The answer is /25, not ${challenge1Answers.sales || '(not selected)'}.`,
        engineering: challenge1Answers.engineering === correct.engineering
          ? "✅ Correct! 50 hosts needs 64 addresses (2^6). That's /26 (32-6=26)."
          : `❌ 50 hosts needs 64 addresses (2^6 = 64, minus 2 = 62 usable). The answer is /26, not ${challenge1Answers.engineering || '(not selected)'}.`,
        it: challenge1Answers.it === correct.it
          ? "✅ Correct! 10 hosts needs 16 addresses (2^4). That's /28 (32-4=28)."
          : `❌ 10 hosts needs 16 addresses (2^4 = 16, minus 2 = 14 usable). The answer is /28, not ${challenge1Answers.it || '(not selected)'}.`,
        wan: challenge1Answers.wan === correct.wan
          ? "✅ Correct! 2 hosts needs 4 addresses (2^2). That's /30 (32-2=30)."
          : `❌ WAN point-to-point links always use /30 (4 addresses, 2 usable), not ${challenge1Answers.wan || '(not selected)'}.`
      }
    });

    if (allCorrect) {
      setChallengeCompleted({ ...challengeCompleted, 1: true });
    }
  };

  // Challenge 2 handlers
  const handleChallenge2Change = (value) => {
    setChallenge2Answer(value);
    setChallenge2Feedback(null);
  };

  const checkChallenge2 = () => {
    const correct = 'overlap';
    const isCorrect = challenge2Answer === correct;

    setChallenge2Feedback({
      correct: isCorrect,
      message: isCorrect
        ? "✅ Correct! The IT subnet (192.168.10.64/28) and WAN subnet (192.168.10.64/30) both start at .64, causing an overlap. The WAN link should start at .80 or later."
        : challenge2Answer === 'mask'
        ? "❌ The subnet masks are actually correct for the host requirements. The problem is that two subnets start at the same address (.64)."
        : challenge2Answer === 'address'
        ? "❌ Close! While the addresses are involved, the specific problem is that two subnets are trying to use the same address space (overlap)."
        : "❌ There is definitely a problem. Look at where each subnet starts - do any share the same starting address?"
    });

    if (isCorrect) {
      setChallengeCompleted({ ...challengeCompleted, 2: true });
    }
  };

  // Challenge 3 handlers
  const handleChallenge3Change = (field, value) => {
    setChallenge3Answers({ ...challenge3Answers, [field]: value });
    setChallenge3Feedback(null);
  };

  const checkChallenge3 = () => {
    const correct = {
      dept1Network: '0',
      dept1Mask: '/26',
      dept2Network: '64',
      dept2Mask: '/27',
      dept3Network: '96',
      dept3Mask: '/28'
    };

    const results = {
      dept1: challenge3Answers.dept1Network === correct.dept1Network && 
             challenge3Answers.dept1Mask === correct.dept1Mask,
      dept2: challenge3Answers.dept2Network === correct.dept2Network && 
             challenge3Answers.dept2Mask === correct.dept2Mask,
      dept3: challenge3Answers.dept3Network === correct.dept3Network && 
             challenge3Answers.dept3Mask === correct.dept3Mask
    };

    const allCorrect = Object.values(results).every(v => v);

    setChallenge3Feedback({
      results,
      allCorrect,
      explanations: {
        dept1: results.dept1
          ? "✅ Correct! Marketing needs 50 hosts → /26 (62 usable). Starts at .0, uses .0-.63."
          : `❌ Marketing (50 hosts) needs /26 starting at .0. You entered: 192.168.20.${challenge3Answers.dept1Network || '___'}${challenge3Answers.dept1Mask || '/__'}.`,
        dept2: results.dept2
          ? "✅ Correct! Sales needs 25 hosts → /27 (30 usable). Starts at .64 (after Marketing), uses .64-.95."
          : `❌ Sales (25 hosts) needs /27 starting at .64 (after Marketing's /26). You entered: 192.168.20.${challenge3Answers.dept2Network || '___'}${challenge3Answers.dept2Mask || '/__'}.`,
        dept3: results.dept3
          ? "✅ Correct! IT needs 10 hosts → /28 (14 usable). Starts at .96 (after Sales), uses .96-.111."
          : `❌ IT (10 hosts) needs /28 starting at .96 (after Sales' /27). You entered: 192.168.20.${challenge3Answers.dept3Network || '___'}${challenge3Answers.dept3Mask || '/__'}.`
      }
    });

    if (allCorrect) {
      setChallengeCompleted({ ...challengeCompleted, 3: true });
    }
  };

  const resetChallenge = (challengeNum) => {
    if (challengeNum === 1) {
      setChallenge1Answers({ sales: '', engineering: '', it: '', wan: '' });
      setChallenge1Feedback(null);
    } else if (challengeNum === 2) {
      setChallenge2Answer('');
      setChallenge2Feedback(null);
    } else if (challengeNum === 3) {
      setChallenge3Answers({
        dept1Network: '',
        dept1Mask: '',
        dept2Network: '',
        dept2Mask: '',
        dept3Network: '',
        dept3Mask: ''
      });
      setChallenge3Feedback(null);
    }
  };

  const allChallengesComplete = Object.values(challengeCompleted).every(v => v);

  return (
    <div className="vlsm-activity">
      <div className="vlsm-header">
        <h2>🧩 VLSM Problem Solver</h2>
        <p>Test your Variable Length Subnet Masking skills with three progressive challenges!</p>
        <div className="vlsm-progress">
          <div className={`progress-dot ${challengeCompleted[1] ? 'complete' : currentChallenge === 1 ? 'active' : ''}`}>1</div>
          <div className="progress-line"></div>
          <div className={`progress-dot ${challengeCompleted[2] ? 'complete' : currentChallenge === 2 ? 'active' : ''}`}>2</div>
          <div className="progress-line"></div>
          <div className={`progress-dot ${challengeCompleted[3] ? 'complete' : currentChallenge === 3 ? 'active' : ''}`}>3</div>
        </div>
      </div>

      <div className="vlsm-tabs">
        <button 
          className={`vlsm-tab ${currentChallenge === 1 ? 'active' : ''}`}
          onClick={() => setCurrentChallenge(1)}
        >
          Challenge 1: Calculate {challengeCompleted[1] && '✓'}
        </button>
        <button 
          className={`vlsm-tab ${currentChallenge === 2 ? 'active' : ''}`}
          onClick={() => setCurrentChallenge(2)}
        >
          Challenge 2: Spot Error {challengeCompleted[2] && '✓'}
        </button>
        <button 
          className={`vlsm-tab ${currentChallenge === 3 ? 'active' : ''}`}
          onClick={() => setCurrentChallenge(3)}
        >
          Challenge 3: Build {challengeCompleted[3] && '✓'}
        </button>
      </div>

      {/* Challenge 1: Calculate Subnet Sizes */}
      {currentChallenge === 1 && (
        <div className="vlsm-challenge">
          <div className="challenge-header">
            <h3>Challenge 1: Calculate Subnet Sizes</h3>
            <p>Given these department requirements, select the most efficient subnet mask for each:</p>
          </div>

          <div className="vlsm-question-group">
            <div className="vlsm-question">
              <label>
                <strong>Sales Department:</strong> 120 hosts needed
                <select 
                  value={challenge1Answers.sales} 
                  onChange={(e) => handleChallenge1Change('sales', e.target.value)}
                  className={challenge1Feedback?.results?.sales === false ? 'incorrect' : challenge1Feedback?.results?.sales === true ? 'correct' : ''}
                >
                  <option value="">Select subnet mask...</option>
                  <option value="/24">/24 (254 hosts)</option>
                  <option value="/25">/25 (126 hosts)</option>
                  <option value="/26">/26 (62 hosts)</option>
                  <option value="/27">/27 (30 hosts)</option>
                </select>
              </label>
              {challenge1Feedback?.explanations?.sales && (
                <div className={`feedback ${challenge1Feedback.results.sales ? 'correct' : 'incorrect'}`}>
                  {challenge1Feedback.explanations.sales}
                </div>
              )}
            </div>

            <div className="vlsm-question">
              <label>
                <strong>Engineering:</strong> 50 hosts needed
                <select 
                  value={challenge1Answers.engineering} 
                  onChange={(e) => handleChallenge1Change('engineering', e.target.value)}
                  className={challenge1Feedback?.results?.engineering === false ? 'incorrect' : challenge1Feedback?.results?.engineering === true ? 'correct' : ''}
                >
                  <option value="">Select subnet mask...</option>
                  <option value="/25">/25 (126 hosts)</option>
                  <option value="/26">/26 (62 hosts)</option>
                  <option value="/27">/27 (30 hosts)</option>
                  <option value="/28">/28 (14 hosts)</option>
                </select>
              </label>
              {challenge1Feedback?.explanations?.engineering && (
                <div className={`feedback ${challenge1Feedback.results.engineering ? 'correct' : 'incorrect'}`}>
                  {challenge1Feedback.explanations.engineering}
                </div>
              )}
            </div>

            <div className="vlsm-question">
              <label>
                <strong>IT Department:</strong> 10 hosts needed
                <select 
                  value={challenge1Answers.it} 
                  onChange={(e) => handleChallenge1Change('it', e.target.value)}
                  className={challenge1Feedback?.results?.it === false ? 'incorrect' : challenge1Feedback?.results?.it === true ? 'correct' : ''}
                >
                  <option value="">Select subnet mask...</option>
                  <option value="/26">/26 (62 hosts)</option>
                  <option value="/27">/27 (30 hosts)</option>
                  <option value="/28">/28 (14 hosts)</option>
                  <option value="/29">/29 (6 hosts)</option>
                </select>
              </label>
              {challenge1Feedback?.explanations?.it && (
                <div className={`feedback ${challenge1Feedback.results.it ? 'correct' : 'incorrect'}`}>
                  {challenge1Feedback.explanations.it}
                </div>
              )}
            </div>

            <div className="vlsm-question">
              <label>
                <strong>WAN Link (point-to-point):</strong> 2 hosts needed
                <select 
                  value={challenge1Answers.wan} 
                  onChange={(e) => handleChallenge1Change('wan', e.target.value)}
                  className={challenge1Feedback?.results?.wan === false ? 'incorrect' : challenge1Feedback?.results?.wan === true ? 'correct' : ''}
                >
                  <option value="">Select subnet mask...</option>
                  <option value="/28">/28 (14 hosts)</option>
                  <option value="/29">/29 (6 hosts)</option>
                  <option value="/30">/30 (2 hosts)</option>
                  <option value="/31">/31 (point-to-point only)</option>
                </select>
              </label>
              {challenge1Feedback?.explanations?.wan && (
                <div className={`feedback ${challenge1Feedback.results.wan ? 'correct' : 'incorrect'}`}>
                  {challenge1Feedback.explanations.wan}
                </div>
              )}
            </div>
          </div>

          <div className="challenge-buttons">
            <button onClick={checkChallenge1} className="btn-primary">Check Answers</button>
            <button onClick={() => resetChallenge(1)} className="btn-secondary">Reset</button>
          </div>

          {challenge1Feedback?.allCorrect && (
            <div className="success-message">
              <h4>🎉 Challenge 1 Complete!</h4>
              <p>You've mastered calculating subnet sizes! Move to Challenge 2 to test your error-spotting skills.</p>
              <button onClick={() => setCurrentChallenge(2)} className="btn-next">Next Challenge →</button>
            </div>
          )}
        </div>
      )}

      {/* Challenge 2: Spot the Error */}
      {currentChallenge === 2 && (
        <div className="vlsm-challenge">
          <div className="challenge-header">
            <h3>Challenge 2: Spot the Error</h3>
            <p>This VLSM allocation has a critical error. Can you identify it?</p>
          </div>

          <div className="vlsm-scenario">
            <div className="scenario-header">
              <strong>Network:</strong> 192.168.10.0/24
            </div>
            <div className="allocation-list">
              <div className="allocation-item">
                <span className="alloc-network">192.168.10.0/26</span>
                <span className="alloc-purpose">Sales (50 hosts)</span>
                <span className="alloc-status good">✓</span>
              </div>
              <div className="allocation-item">
                <span className="alloc-network">192.168.10.64/28</span>
                <span className="alloc-purpose">IT (10 hosts)</span>
                <span className="alloc-status good">✓</span>
              </div>
              <div className="allocation-item error-highlight">
                <span className="alloc-network">192.168.10.64/30</span>
                <span className="alloc-purpose">WAN Link (2 hosts)</span>
                <span className="alloc-status bad">❌</span>
              </div>
              <div className="allocation-item">
                <span className="alloc-network">192.168.10.80/28</span>
                <span className="alloc-purpose">Guest WiFi (10 hosts)</span>
                <span className="alloc-status good">✓</span>
              </div>
            </div>
          </div>

          <div className="vlsm-question-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="challenge2" 
                value="overlap"
                checked={challenge2Answer === 'overlap'}
                onChange={(e) => handleChallenge2Change(e.target.value)}
              />
              <span>Subnets overlap (same address space)</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="challenge2" 
                value="mask"
                checked={challenge2Answer === 'mask'}
                onChange={(e) => handleChallenge2Change(e.target.value)}
              />
              <span>Wrong subnet mask for host requirements</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="challenge2" 
                value="address"
                checked={challenge2Answer === 'address'}
                onChange={(e) => handleChallenge2Change(e.target.value)}
              />
              <span>Wrong network address</span>
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="challenge2" 
                value="nothing"
                checked={challenge2Answer === 'nothing'}
                onChange={(e) => handleChallenge2Change(e.target.value)}
              />
              <span>Nothing is wrong</span>
            </label>
          </div>

          {challenge2Feedback && (
            <div className={`feedback ${challenge2Feedback.correct ? 'correct' : 'incorrect'}`}>
              {challenge2Feedback.message}
            </div>
          )}

          <div className="challenge-buttons">
            <button onClick={checkChallenge2} className="btn-primary" disabled={!challenge2Answer}>Check Answer</button>
            <button onClick={() => resetChallenge(2)} className="btn-secondary">Reset</button>
          </div>

          {challenge2Feedback?.correct && (
            <div className="success-message">
              <h4>🎉 Challenge 2 Complete!</h4>
              <p>Great eye! You caught the overlapping subnets. Now let's build a complete VLSM allocation in Challenge 3.</p>
              <button onClick={() => setCurrentChallenge(3)} className="btn-next">Final Challenge →</button>
            </div>
          )}
        </div>
      )}

      {/* Challenge 3: Build an Allocation */}
      {currentChallenge === 3 && (
        <div className="vlsm-challenge">
          <div className="challenge-header">
            <h3>Challenge 3: Build an Allocation</h3>
            <p>Design a complete VLSM scheme for this network. Allocate subnets in order (largest first)!</p>
          </div>

          <div className="vlsm-scenario">
            <div className="scenario-header">
              <strong>Base Network:</strong> 192.168.20.0/24
            </div>
            <div className="requirements-list">
              <div className="requirement">1. Marketing: 50 hosts</div>
              <div className="requirement">2. Sales: 25 hosts</div>
              <div className="requirement">3. IT: 10 hosts</div>
            </div>
          </div>

          <div className="vlsm-build-section">
            <div className="build-item">
              <div className="build-header">
                <strong>1. Marketing</strong> (50 hosts) - Should be allocated FIRST (largest)
              </div>
              <div className="build-inputs">
                <label>
                  Network:
                  <div className="ip-input-group">
                    <span className="ip-prefix">192.168.20.</span>
                    <input 
                      type="text" 
                      className={`ip-input ${challenge3Feedback?.results?.dept1 === false ? 'incorrect' : challenge3Feedback?.results?.dept1 === true ? 'correct' : ''}`}
                      value={challenge3Answers.dept1Network}
                      onChange={(e) => handleChallenge3Change('dept1Network', e.target.value)}
                      placeholder="0"
                      maxLength="3"
                    />
                  </div>
                </label>
                <label>
                  Subnet Mask:
                  <select 
                    value={challenge3Answers.dept1Mask}
                    onChange={(e) => handleChallenge3Change('dept1Mask', e.target.value)}
                    className={challenge3Feedback?.results?.dept1 === false ? 'incorrect' : challenge3Feedback?.results?.dept1 === true ? 'correct' : ''}
                  >
                    <option value="">Select...</option>
                    <option value="/24">/24</option>
                    <option value="/25">/25</option>
                    <option value="/26">/26</option>
                    <option value="/27">/27</option>
                    <option value="/28">/28</option>
                  </select>
                </label>
              </div>
              {challenge3Feedback?.explanations?.dept1 && (
                <div className={`feedback ${challenge3Feedback.results.dept1 ? 'correct' : 'incorrect'}`}>
                  {challenge3Feedback.explanations.dept1}
                </div>
              )}
            </div>

            <div className="build-item">
              <div className="build-header">
                <strong>2. Sales</strong> (25 hosts) - Should be allocated SECOND
              </div>
              <div className="build-inputs">
                <label>
                  Network:
                  <div className="ip-input-group">
                    <span className="ip-prefix">192.168.20.</span>
                    <input 
                      type="text" 
                      className={`ip-input ${challenge3Feedback?.results?.dept2 === false ? 'incorrect' : challenge3Feedback?.results?.dept2 === true ? 'correct' : ''}`}
                      value={challenge3Answers.dept2Network}
                      onChange={(e) => handleChallenge3Change('dept2Network', e.target.value)}
                      placeholder="?"
                      maxLength="3"
                    />
                  </div>
                </label>
                <label>
                  Subnet Mask:
                  <select 
                    value={challenge3Answers.dept2Mask}
                    onChange={(e) => handleChallenge3Change('dept2Mask', e.target.value)}
                    className={challenge3Feedback?.results?.dept2 === false ? 'incorrect' : challenge3Feedback?.results?.dept2 === true ? 'correct' : ''}
                  >
                    <option value="">Select...</option>
                    <option value="/25">/25</option>
                    <option value="/26">/26</option>
                    <option value="/27">/27</option>
                    <option value="/28">/28</option>
                    <option value="/29">/29</option>
                  </select>
                </label>
              </div>
              {challenge3Feedback?.explanations?.dept2 && (
                <div className={`feedback ${challenge3Feedback.results.dept2 ? 'correct' : 'incorrect'}`}>
                  {challenge3Feedback.explanations.dept2}
                </div>
              )}
            </div>

            <div className="build-item">
              <div className="build-header">
                <strong>3. IT</strong> (10 hosts) - Should be allocated THIRD (smallest)
              </div>
              <div className="build-inputs">
                <label>
                  Network:
                  <div className="ip-input-group">
                    <span className="ip-prefix">192.168.20.</span>
                    <input 
                      type="text" 
                      className={`ip-input ${challenge3Feedback?.results?.dept3 === false ? 'incorrect' : challenge3Feedback?.results?.dept3 === true ? 'correct' : ''}`}
                      value={challenge3Answers.dept3Network}
                      onChange={(e) => handleChallenge3Change('dept3Network', e.target.value)}
                      placeholder="?"
                      maxLength="3"
                    />
                  </div>
                </label>
                <label>
                  Subnet Mask:
                  <select 
                    value={challenge3Answers.dept3Mask}
                    onChange={(e) => handleChallenge3Change('dept3Mask', e.target.value)}
                    className={challenge3Feedback?.results?.dept3 === false ? 'incorrect' : challenge3Feedback?.results?.dept3 === true ? 'correct' : ''}
                  >
                    <option value="">Select...</option>
                    <option value="/26">/26</option>
                    <option value="/27">/27</option>
                    <option value="/28">/28</option>
                    <option value="/29">/29</option>
                    <option value="/30">/30</option>
                  </select>
                </label>
              </div>
              {challenge3Feedback?.explanations?.dept3 && (
                <div className={`feedback ${challenge3Feedback.results.dept3 ? 'correct' : 'incorrect'}`}>
                  {challenge3Feedback.explanations.dept3}
                </div>
              )}
            </div>
          </div>

          <div className="vlsm-hint">
            <strong>💡 Hint:</strong> Start with the largest subnet first. Marketing uses /26 (64 addresses: .0 to .63). 
            Sales comes next starting where Marketing ends. IT follows Sales.
          </div>

          <div className="challenge-buttons">
            <button onClick={checkChallenge3} className="btn-primary">Validate Allocation</button>
            <button onClick={() => resetChallenge(3)} className="btn-secondary">Reset</button>
          </div>

          {challenge3Feedback?.allCorrect && (
            <div className="success-message">
              <h4>🎉 All Challenges Complete!</h4>
              <p>Excellent work! You've mastered VLSM subnet calculation, error detection, and allocation design. You're ready for the Network+ exam!</p>
              <div className="completion-stats">
                <div className="stat">✓ Calculated subnet sizes</div>
                <div className="stat">✓ Identified overlapping subnets</div>
                <div className="stat">✓ Built sequential VLSM allocation</div>
              </div>
            </div>
          )}
        </div>
      )}

      {allChallengesComplete && (
        <div className="vlsm-complete">
          <h3>🏆 VLSM Mastery Achieved!</h3>
          <p>You've completed all three challenges. You now understand:</p>
          <ul>
            <li>How to calculate the most efficient subnet size for any requirement</li>
            <li>How to identify common VLSM errors like overlapping subnets</li>
            <li>How to build complete VLSM allocations using the largest-first methodology</li>
          </ul>
          <p className="final-tip">
            <strong>Exam Tip:</strong> On the Network+ exam, always remember the VLSM process: 
            Sort largest to smallest → Calculate subnet sizes → Allocate sequentially starting from the base network.
          </p>
        </div>
      )}
    </div>
  );
};

export default VLSMActivity;