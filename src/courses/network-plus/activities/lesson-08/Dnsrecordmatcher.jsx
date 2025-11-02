import { useState } from 'react';
import '../styles/DNSRecordMatcher.css';

function DNSRecordMatcher() {
  const [recordTypes] = useState([
    { id: 'A', name: 'A Record', description: 'IPv4 Address' },
    { id: 'AAAA', name: 'AAAA Record', description: 'IPv6 Address' },
    { id: 'CNAME', name: 'CNAME Record', description: 'Canonical Name/Alias' },
    { id: 'MX', name: 'MX Record', description: 'Mail Exchange' },
    { id: 'PTR', name: 'PTR Record', description: 'Reverse Lookup' },
    { id: 'TXT', name: 'TXT Record', description: 'Text/Verification' },
    { id: 'NS', name: 'NS Record', description: 'Name Server' },
    { id: 'SOA', name: 'SOA Record', description: 'Start of Authority' },
  ]);

  const [examples] = useState([
    { id: 1, text: 'Points google.com to 142.250.185.46', correctType: 'A' },
    { id: 2, text: 'Points google.com to 2607:f8b0:4004:c07::71', correctType: 'AAAA' },
    { id: 3, text: 'Makes www.example.com point to example.com', correctType: 'CNAME' },
    { id: 4, text: 'Routes email to aspmx.l.google.com with priority 10', correctType: 'MX' },
    { id: 5, text: 'Reverse lookup: 8.8.8.8 → dns.google', correctType: 'PTR' },
    { id: 6, text: 'Domain verification: v=spf1 include:_spf.google.com ~all', correctType: 'TXT' },
    { id: 7, text: 'Specifies ns1.cloudflare.com manages this domain', correctType: 'NS' },
    { id: 8, text: 'Contains primary name server and zone refresh settings', correctType: 'SOA' },
  ]);

  const [shuffled] = useState(() => {
    const copy = [...examples];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const [placed, setPlaced] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleDragStart = (example) => {
    setDraggedItem(example);
  };

  const handleDrop = (recordType) => {
    if (draggedItem) {
      const newPlaced = { ...placed };
      
      // Remove from previous position if exists
      Object.keys(newPlaced).forEach(type => {
        if (newPlaced[type]?.id === draggedItem.id) {
          delete newPlaced[type];
        }
      });
      
      // Place in new position
      newPlaced[recordType] = draggedItem;
      setPlaced(newPlaced);
      setDraggedItem(null);
    }
  };

  const handleCheck = () => {
    if (Object.keys(placed).length === 8) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setPlaced({});
    setShowResults(false);
  };

  const isCorrect = (recordType) => {
    return placed[recordType] && placed[recordType].correctType === recordType;
  };

  const score = showResults
    ? Object.keys(placed).filter(type => isCorrect(type)).length
    : 0;

  const allCorrect = score === 8;

  return (
    <div className="dns-activity">
      <h2>🎮 DNS Record Matcher</h2>
      <p>Drag each example to the correct DNS record type</p>

      {showResults && (
        <div className={`score-display ${allCorrect ? 'perfect' : ''}`}>
          {allCorrect ? (
            <>
              <span className="trophy">🏆</span>
              <strong>Perfect Score!</strong> You've mastered DNS record types!
            </>
          ) : (
            <>
              <strong>Score: {score}/8</strong> - {score >= 6 ? 'Good job!' : 'Keep practicing!'}
            </>
          )}
        </div>
      )}

      <div className="activity-container">
        <div className="drop-zones">
          <h3>DNS Record Types</h3>
          {recordTypes.map(record => (
            <div
              key={record.id}
              className={`drop-zone ${placed[record.id] ? 'filled' : ''} ${
                showResults && placed[record.id]
                  ? isCorrect(record.id)
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(record.id)}
            >
              <div className="record-header">
                <strong>{record.name}</strong>
                <span className="record-desc">{record.description}</span>
              </div>
              
              {placed[record.id] ? (
                <div className="placed-example">
                  {showResults && (
                    <span className="result-icon">
                      {isCorrect(record.id) ? '✓' : '✗'}
                    </span>
                  )}
                  <p>{placed[record.id].text}</p>
                  {showResults && !isCorrect(record.id) && (
                    <span className="correction">
                      This is actually a <strong>{placed[record.id].correctType}</strong> record
                    </span>
                  )}
                </div>
              ) : (
                <div className="placeholder">
                  Drop example here
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="drag-items">
          <h3>DNS Examples</h3>
          <div className="items-grid">
            {shuffled
              .filter(example => !Object.values(placed).find(p => p?.id === example.id))
              .map(example => (
                <div
                  key={example.id}
                  className="drag-item"
                  draggable
                  onDragStart={() => handleDragStart(example)}
                >
                  {example.text}
                </div>
              ))}
          </div>
          
          {Object.keys(placed).length === 8 && !showResults && (
            <button className="check-btn" onClick={handleCheck}>
              ✓ Check My Answers
            </button>
          )}
          
          {showResults && (
            <div className="results-actions">
              <button className="reset-btn" onClick={handleReset}>
                🔄 Try Again
              </button>
              {allCorrect && (
                <div className="completion-message">
                  <p>🎉 Congratulations! You can now:</p>
                  <ul>
                    <li>Identify DNS record types by their function</li>
                    <li>Understand when each record type is used</li>
                    <li>Troubleshoot DNS configuration issues</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="dns-hints">
        <h4>Quick Reference:</h4>
        <ul>
          <li><strong>A/AAAA:</strong> Look for IP addresses (v4 vs v6)</li>
          <li><strong>CNAME:</strong> Look for "alias" or "points to another domain"</li>
          <li><strong>MX:</strong> Look for "email" or "mail" keywords</li>
          <li><strong>PTR:</strong> Look for "reverse lookup" (IP → name)</li>
          <li><strong>TXT:</strong> Look for verification codes or text strings</li>
          <li><strong>NS:</strong> Look for "name server" or "manages domain"</li>
          <li><strong>SOA:</strong> Look for "authority" or "zone settings"</li>
        </ul>
      </div>
    </div>
  );
}

export default DNSRecordMatcher;