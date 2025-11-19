import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import './MDRGame.css';

function MDRGame() {
  const navigate = useNavigate();

  return (
    <div className="mdr-game-container">
      <div className="mdr-header">
        <button className="back-btn" onClick={() => navigate('/games')}>
          <ArrowLeft size={20} />
          Back to Games
        </button>
        <h1>MDR - Networking Connections</h1>
        <a
          href="https://walston10.github.io/MDR/"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link-btn"
        >
          <ExternalLink size={16} />
          Open in New Tab
        </a>
      </div>

      <div className="game-instructions">
        <p>Connect related networking concepts! Find groups of four items that share something in common.</p>
      </div>

      <div className="iframe-container">
        <iframe
          src="https://walston10.github.io/MDR/"
          title="MDR - Networking Connections Game"
          className="game-iframe"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default MDRGame;
