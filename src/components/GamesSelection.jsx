import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Gamepad2, Zap, Star, ArrowLeft } from 'lucide-react';
import './GamesSelection.css';

const GamesSelection = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 'mdr',
      title: 'Network+ Connections',
      description: 'Match 4 related networking terms. Race against the clock!',
      icon: <Zap size={48} />,
      gradient: 'cyan',
      path: '/games/mdr',
      difficulty: 'Medium',
      levels: 10,
      avgTime: '5-10 min'
    },
    // Placeholder for future games
    {
      id: 'coming-soon-1',
      title: 'Coming Soon',
      description: 'More networking games on the way!',
      icon: <Star size={48} />,
      gradient: 'purple',
      path: null,
      difficulty: 'TBD',
      levels: '?',
      avgTime: 'TBD',
      locked: true
    }
  ];

  return (
    <div className="games-selection-container">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      <div className="games-hero">
        <Gamepad2 size={64} className="games-hero-icon" />
        <h1 className="games-title">Study Games</h1>
        <p className="games-subtitle">
          Learn networking concepts through interactive games
        </p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className={`game-card ${game.gradient} ${game.locked ? 'locked' : ''}`}
            onClick={() => !game.locked && game.path && navigate(game.path)}
            style={{ cursor: game.locked ? 'not-allowed' : 'pointer' }}
          >
            <div className="game-card-icon">{game.icon}</div>
            <h2 className="game-card-title">{game.title}</h2>
            <p className="game-card-description">{game.description}</p>

            <div className="game-card-stats">
              <div className="stat">
                <span className="stat-label">Difficulty</span>
                <span className="stat-value">{game.difficulty}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Levels</span>
                <span className="stat-value">{game.levels}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Time</span>
                <span className="stat-value">{game.avgTime}</span>
              </div>
            </div>

            {!game.locked && (
              <button className="play-button">
                Play Now
              </button>
            )}

            {game.locked && (
              <div className="locked-badge">Coming Soon</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesSelection;
