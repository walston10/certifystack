import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import './MDRGame.css';

// Course configuration
const COURSE_CONFIG = {
  'network-plus': {
    title: 'Network+ Connections',
    description: 'Connect related Network+ concepts! Find groups of four items that share something in common.',
    url: 'https://walston10.github.io/MDR/'
  },
  'a-plus-core1': {
    title: 'A+ Core 1 Connections',
    description: 'Connect related A+ Core 1 concepts! Find groups of four items that share something in common.',
    url: 'https://walston10.github.io/MDR/?course=a-plus-core1'
  },
  'a-plus-core2': {
    title: 'A+ Core 2 Connections',
    description: 'Connect related A+ Core 2 concepts! Find groups of four items that share something in common.',
    url: 'https://walston10.github.io/MDR/?course=a-plus-core2'
  },
  'security-plus': {
    title: 'Security+ Connections',
    description: 'Connect related Security+ concepts! Find groups of four items that share something in common.',
    url: 'https://walston10.github.io/MDR/?course=security-plus'
  }
};

function MDRGame() {
  const navigate = useNavigate();
  const { course } = useParams();

  // Debug logging
  console.log('MDRGame - course param:', course);
  console.log('MDRGame - available configs:', Object.keys(COURSE_CONFIG));

  // Get course config or default to network-plus
  const config = COURSE_CONFIG[course] || COURSE_CONFIG['network-plus'];
  console.log('MDRGame - selected config:', config);

  return (
    <div className="mdr-game-container">
      <div className="mdr-header">
        <button className="back-btn" onClick={() => navigate('/games')}>
          <ArrowLeft size={20} />
          Back to Games
        </button>
        <h1>MDR - {config.title}</h1>
        <a
          href={config.url}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link-btn"
        >
          <ExternalLink size={16} />
          Open in New Tab
        </a>
      </div>

      <div className="game-instructions">
        <p>{config.description}</p>
      </div>

      <div className="iframe-container">
        <iframe
          src={config.url}
          title={`MDR - ${config.title} Game`}
          className="game-iframe"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default MDRGame;
