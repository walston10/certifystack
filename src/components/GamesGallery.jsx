import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2, Link as LinkIcon } from 'lucide-react';
import './GamesGallery.css';

const GAMES = [
  {
    id: 'mdr-a-plus-core1',
    title: 'MDR - A+ Core 1 Connections',
    description: 'Connect related A+ Core 1 concepts in this Connections-style puzzle game',
    difficulty: 'Intermediate',
    estimatedTime: '10-15 min',
    category: 'Puzzle',
    course: 'A+ Core 1',
    path: '/games/mdr/a-plus-core1'
  },
  {
    id: 'mdr-a-plus-core2',
    title: 'MDR - A+ Core 2 Connections',
    description: 'Connect related A+ Core 2 concepts in this Connections-style puzzle game',
    difficulty: 'Intermediate',
    estimatedTime: '10-15 min',
    category: 'Puzzle',
    course: 'A+ Core 2',
    path: '/games/mdr/a-plus-core2'
  },
  {
    id: 'mdr-network-plus',
    title: 'MDR - Network+ Connections',
    description: 'Connect related Network+ concepts in this Connections-style puzzle game',
    difficulty: 'Intermediate',
    estimatedTime: '10-15 min',
    category: 'Puzzle',
    course: 'Network+',
    path: '/games/mdr/network-plus'
  },
  {
    id: 'mdr-security-plus',
    title: 'MDR - Security+ Connections',
    description: 'Connect related Security+ concepts in this Connections-style puzzle game',
    difficulty: 'Intermediate',
    estimatedTime: '10-15 min',
    category: 'Puzzle',
    course: 'Security+',
    path: '/games/mdr/security-plus'
  }
  // Add more games here as you create them
];

function GamesGallery() {
  const navigate = useNavigate();

  const handleGameClick = (game) => {
    console.log('GamesGallery - Clicking game:', game.title);
    console.log('GamesGallery - Navigating to:', game.path);
    navigate(game.path);
  };

  return (
    <div className="games-gallery">
      <div className="games-header">
        <Gamepad2 size={48} className="header-icon" />
        <div>
          <h1>Study Games</h1>
          <p>Learn networking concepts through fun, interactive games</p>
        </div>
      </div>

      <div className="games-stats">
        <div className="stat">
          <span className="stat-value">{GAMES.length}</span>
          <span className="stat-label">Total Games</span>
        </div>
        <div className="stat">
          <span className="stat-value">0</span>
          <span className="stat-label">Played</span>
        </div>
        <div className="stat">
          <span className="stat-value">{GAMES.length}</span>
          <span className="stat-label">Available</span>
        </div>
      </div>

      <div className="games-grid">
        {GAMES.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleGameClick(game)}
          >
            <div className={`game-difficulty ${game.difficulty.toLowerCase()}`}>
              {game.difficulty}
            </div>

            <div className="game-category">{game.category}</div>

            <h3>{game.title}</h3>
            <p className="game-description">{game.description}</p>

            <div className="game-meta">
              <span>{game.estimatedTime}</span>
            </div>

            <button className="game-start-btn">
              <LinkIcon size={16} />
              Play Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesGallery;
