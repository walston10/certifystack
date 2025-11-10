import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle, Target, FlaskConical, FileText, User } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { supabase } from '../lib/supabase';
import './DashboardHome.css';

function DashboardHome() {
  const navigate = useNavigate();
  const [userStats, setUserStats] = useState({
    name: '',
    lessonsCompleted: 0,
    totalLessons: 30,
    labsCompleted: 0,
    totalLabs: 10,
    quizzesTaken: 0,
    averageScore: 0,
    studyStreak: 0,
    xp: 0,
    level: 1
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserStats();
  }, []);

  const loadUserStats = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Get user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, xp_points, study_streak')
        .eq('id', user.id)
        .single();

      // Get lessons progress
      const { data: lessonsProgress } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id)
        .eq('completed', true);

      // Get labs progress
      const { data: labsProgress } = await supabase
        .from('lab_submissions')
        .select('lab_id')
        .eq('user_id', user.id)
        .eq('completed', true);

      // Get quiz stats
      const { data: quizAttempts } = await supabase
        .from('quiz_attempts')
        .select('score')
        .eq('user_id', user.id);

      const avgScore = quizAttempts?.length
        ? Math.round(quizAttempts.reduce((sum, q) => sum + q.score, 0) / quizAttempts.length)
        : 0;

      // Calculate level from XP (every 1000 XP = 1 level)
      const xp = profile?.xp_points || 0;
      const level = Math.floor(xp / 1000) + 1;

      setUserStats({
        name: profile?.full_name || user.email?.split('@')[0] || 'Student',
        lessonsCompleted: lessonsProgress?.length || 0,
        totalLessons: 30,
        labsCompleted: labsProgress?.length || 0,
        totalLabs: 10,
        quizzesTaken: quizAttempts?.length || 0,
        averageScore: avgScore,
        studyStreak: profile?.study_streak || 0,
        xp: xp,
        level: level
      });

      setLoading(false);
    } catch (error) {
      console.error('Error loading user stats:', error);
      setLoading(false);
    }
  };

  const completionPercentage = Math.round(
    (userStats.lessonsCompleted / userStats.totalLessons) * 100
  );

  const getLevelTitle = (level) => {
    if (level >= 10) return 'Network Master';
    if (level >= 7) return 'Network Professional';
    if (level >= 5) return 'Network Specialist';
    if (level >= 3) return 'Network Novice';
    return 'Network Beginner';
  };

  if (loading) {
    return (
      <div className="dashboard-home loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-greeting">
            Welcome back, {userStats.name}! 👋
          </h1>

          <div className="hero-stats">
            {/* Progress Ring */}
            <div className="progress-ring-container">
              <svg className="progress-ring" width="200" height="200">
                <circle
                  className="progress-ring-background"
                  cx="100"
                  cy="100"
                  r="80"
                />
                <circle
                  className="progress-ring-progress"
                  cx="100"
                  cy="100"
                  r="80"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 80}`,
                    strokeDashoffset: `${2 * Math.PI * 80 * (1 - completionPercentage / 100)}`
                  }}
                />
                <text
                  x="100"
                  y="95"
                  className="progress-ring-text"
                  textAnchor="middle"
                >
                  {completionPercentage}%
                </text>
                <text
                  x="100"
                  y="115"
                  className="progress-ring-subtext"
                  textAnchor="middle"
                >
                  Complete
                </text>
              </svg>
            </div>

            {/* Progress Text */}
            <div className="progress-text">
              <p className="progress-message">
                {userStats.studyStreak > 0 && `You're on fire! 🔥 ${userStats.studyStreak} day streak!`}
                {userStats.studyStreak === 0 && "Let's build a study streak! 🚀"}
              </p>
              <p className="progress-details">
                {userStats.lessonsCompleted} of {userStats.totalLessons} lessons complete
              </p>
              <button
                className="btn-continue"
                onClick={() => navigate('/lessons')}
              >
                Continue Learning →
              </button>
            </div>
          </div>

          {/* Level Badge */}
          <div className="level-badge">
            <span className="level-number">Level {userStats.level}</span>
            <span className="level-title">{getLevelTitle(userStats.level)}</span>
            <div className="xp-bar">
              <div
                className="xp-bar-fill"
                style={{ width: `${(userStats.xp % 1000) / 10}%` }}
              ></div>
            </div>
            <span className="xp-text">{userStats.xp % 1000}/1000 XP</span>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="features-grid">
        <FeatureCard
          icon={<BookOpen size={32} />}
          title="📚 Lessons"
          description="30 comprehensive lessons covering all Network+ exam objectives"
          status={`${userStats.lessonsCompleted}/${userStats.totalLessons} completed`}
          ctaText="Continue Learning"
          ctaLink="/lessons"
          gradient="cyan"
        />

        <FeatureCard
          icon={<MessageCircle size={32} />}
          title="🤖 AI Tutor"
          description="24/7 intelligent help for any Network+ topic"
          status="Always available"
          ctaText="Chat Now"
          ctaLink="/ai-tutor"
          gradient="purple"
        />

        <FeatureCard
          icon={<Target size={32} />}
          title="🎯 Practice Zone"
          description="Practice exams, quizzes, and flashcards to test your knowledge"
          status={`${userStats.quizzesTaken} quizzes taken · ${userStats.averageScore}% avg`}
          ctaText="Start Practicing"
          ctaLink="/practice"
          gradient="green"
        />

        <FeatureCard
          icon={<FlaskConical size={32} />}
          title="🧪 Labs"
          description="Hands-on practice with real networking scenarios"
          status={`${userStats.labsCompleted}/${userStats.totalLabs} completed`}
          ctaText="Practice Labs"
          ctaLink="/labs"
          gradient="orange"
        />

        <FeatureCard
          icon={<FileText size={32} />}
          title="📖 Resources"
          description="Cheat sheets, reference guides, and study materials"
          status="Quick reference materials"
          ctaText="Browse Resources"
          ctaLink="/resources"
          gradient="blue"
        />

        <FeatureCard
          icon={<User size={32} />}
          title="👤 Profile"
          description="Track your progress, view stats, and manage settings"
          status={`Level ${userStats.level} · ${userStats.xp} XP`}
          ctaText="View Profile"
          ctaLink="/profile"
          gradient="pink"
        />
      </section>

      {/* Quick Stats Bar */}
      <section className="quick-stats">
        <div className="stat-item">
          <div className="stat-value">{userStats.lessonsCompleted}</div>
          <div className="stat-label">Lessons Done</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{userStats.quizzesTaken}</div>
          <div className="stat-label">Quizzes Taken</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{userStats.averageScore}%</div>
          <div className="stat-label">Avg Score</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{userStats.studyStreak}</div>
          <div className="stat-label">Day Streak</div>
        </div>
      </section>
    </div>
  );
}

export default DashboardHome;
