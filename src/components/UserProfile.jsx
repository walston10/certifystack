import React, { useEffect, useState } from 'react';
import { User, LogOut, Zap, Trophy, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState({
    lessonsCompleted: 0,
    labsCompleted: 0,
    quizzesTaken: 0,
    averageScore: 0,
    studyStreak: 0,
    xp: 0,
    level: 1
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserProfile();
    loadUserStats();
  }, []);

  const loadUserProfile = async () => {
    try {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setProfile(data);
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const loadUserStats = async () => {
    try {
      // Similar logic to DashboardHome
      const { data: lessons } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id)
        .eq('completed', true);

      const { data: labs } = await supabase
        .from('lab_submissions')
        .select('lab_id')
        .eq('user_id', user.id)
        .eq('completed', true);

      const { data: quizzes } = await supabase
        .from('quiz_attempts')
        .select('score')
        .eq('user_id', user.id);

      const avgScore = quizzes?.length
        ? Math.round(quizzes.reduce((sum, q) => sum + q.score, 0) / quizzes.length)
        : 0;

      const xp = profile?.xp_points || 0;
      const level = Math.floor(xp / 1000) + 1;

      setStats({
        lessonsCompleted: lessons?.length || 0,
        labsCompleted: labs?.length || 0,
        quizzesTaken: quizzes?.length || 0,
        averageScore: avgScore,
        studyStreak: profile?.study_streak || 0,
        xp: xp,
        level: level
      });

      setLoading(false);
    } catch (error) {
      console.error('Error loading stats:', error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const getLevelTitle = (level) => {
    if (level >= 10) return 'Network Master';
    if (level >= 7) return 'Network Professional';
    if (level >= 5) return 'Network Specialist';
    if (level >= 3) return 'Network Novice';
    return 'Network Beginner';
  };

  if (loading) {
    return <div className="user-profile loading"><div className="loading-spinner"></div></div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <User size={64} />
        </div>
        <div className="profile-info">
          <h1>{profile?.full_name || user?.email}</h1>
          <p>{user?.email}</p>
          <div className="membership-badge">
            {profile?.membership_tier === 'premium' ? (
              <span className="premium-badge"><Zap size={16} /> Premium Member</span>
            ) : (
              <span className="free-badge">Free Tier</span>
            )}
          </div>
        </div>
      </div>

      <div className="profile-content">
        <section className="stats-section">
          <h2>Progress Overview</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Lessons Completed</div>
              <div className="stat-value">{stats.lessonsCompleted}/30</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Labs Completed</div>
              <div className="stat-value">{stats.labsCompleted}/10</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Quizzes Taken</div>
              <div className="stat-value">{stats.quizzesTaken}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Average Score</div>
              <div className="stat-value">{stats.averageScore}%</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Study Streak</div>
              <div className="stat-value">{stats.studyStreak} days 🔥</div>
            </div>
          </div>
        </section>

        <section className="xp-section">
          <h2>XP Progress</h2>
          <div className="xp-card">
            <div className="level-info">
              <span className="level-number">Level {stats.level}</span>
              <span className="level-title">{getLevelTitle(stats.level)}</span>
            </div>
            <div className="xp-bar">
              <div className="xp-bar-fill" style={{ width: `${(stats.xp % 1000) / 10}%` }}></div>
            </div>
            <div className="xp-text">{stats.xp % 1000}/1000 XP to next level</div>
          </div>
        </section>

        <section className="actions-section">
          <h2>Account</h2>
          {profile?.membership_tier !== 'premium' && (
            <button className="btn-upgrade-premium">
              <Zap size={20} />
              <span>Upgrade to Premium - $29/month</span>
            </button>
          )}
          <button className="btn-logout" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
