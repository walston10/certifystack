import React from 'react';
import { Award, Lock, Trophy, Star } from 'lucide-react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: <Star size={32} />,
      unlocked: true,
      xp: 50
    },
    {
      id: 2,
      title: 'Quiz Master',
      description: 'Score 100% on any quiz',
      icon: <Trophy size={32} />,
      unlocked: false,
      xp: 100
    },
    {
      id: 3,
      title: 'Study Streak',
      description: 'Maintain a 7-day study streak',
      icon: <Award size={32} />,
      unlocked: false,
      xp: 150
    },
    {
      id: 4,
      title: 'Lab Expert',
      description: 'Complete all hands-on labs',
      icon: <Award size={32} />,
      unlocked: false,
      xp: 200
    },
    {
      id: 5,
      title: 'Flashcard Fanatic',
      description: 'Review 500 flashcards',
      icon: <Star size={32} />,
      unlocked: false,
      xp: 100
    },
    {
      id: 6,
      title: 'Network Novice',
      description: 'Reach Level 3',
      icon: <Trophy size={32} />,
      unlocked: false,
      xp: 150
    }
  ];

  return (
    <div className="achievements-page">
      <div className="achievements-header">
        <h1>🏆 Achievements</h1>
        <p>Track your milestones and celebrate your progress</p>
        <div className="coming-soon-badge">Coming Soon!</div>
      </div>

      <div className="achievements-grid">
        {achievements.map(achievement => (
          <div
            key={achievement.id}
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="achievement-icon">
              {achievement.unlocked ? achievement.icon : <Lock size={32} />}
            </div>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <div className="achievement-xp">+{achievement.xp} XP</div>
            </div>
            {achievement.unlocked && (
              <div className="achievement-unlocked-badge">Unlocked!</div>
            )}
          </div>
        ))}
      </div>

      <div className="achievements-footer">
        <p>More achievements and rewards will be added soon. Keep learning to unlock them all!</p>
      </div>
    </div>
  );
}

export default Achievements;
