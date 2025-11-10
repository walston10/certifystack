import React, { useEffect, useState, useRef } from 'react';
import { User, LogOut, Zap, Target } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { useUserStats } from '../hooks/useUserStats';
import FlashcardPracticeModal from './FlashcardPracticeModal';
import FlashcardStatsWidget from './FlashcardStatsWidget';
import DomainPerformanceWidget from './DomainPerformanceWidget';
import './UserProfile.css';

function UserProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { progress } = useUserStats();
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for the animated stats
  const totalLessonsRef = useRef(null);
  const completedRef = useRef(null);
  const daysRemainingRef = useRef(null);
  const progressArcRef = useRef(null);

  const completedLessons = progress.completedLessons || [];
  const completed = completedLessons.length;
  const progressPercent = (completed / networkPlusLessons.length) * 100;
  const daysRemaining = Math.max(0, 30 - Math.floor(completed * (30 / networkPlusLessons.length)));
  const progressPercentRounded = Math.round(progressPercent);

  useEffect(() => {
    loadUserProfile();
    loadUserStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- useEffect for Animations (Runs ONCE after mount) ---
  useEffect(() => {
    const animateCounter = (element, target) => {
      if (!element) return;
      const duration = 1000;
      const start = 0;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentValue = Math.round(percentage * (target - start) + start);

        element.textContent = currentValue;

        if (percentage < 1) {
          window.requestAnimationFrame(step);
        } else {
          element.textContent = target;
        }
      }
      window.requestAnimationFrame(step);
    };

    animateCounter(totalLessonsRef.current, networkPlusLessons.length);
    animateCounter(completedRef.current, completed);
    animateCounter(daysRemainingRef.current, daysRemaining);

    const arcContainer = progressArcRef.current;
    if (arcContainer) {
      const radius = 45;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progressPercentRounded / 100) * circumference;

      const ringFill = arcContainer.querySelector('.ring-fill');
      const percentageText = arcContainer.querySelector('.progress-percentage-arc');

      if (ringFill && percentageText) {
        ringFill.style.strokeDasharray = circumference;
        ringFill.style.strokeDashoffset = circumference;

        setTimeout(() => {
          ringFill.style.strokeDashoffset = offset;
        }, 100);

        animateCounter(percentageText, progressPercentRounded);
      }

      const flatBar = document.querySelector('.progress-bar-fill');
      if (flatBar) {
        flatBar.style.width = `${progressPercent}%`;
      }
    }
  }, [completed, daysRemaining, progressPercentRounded, progressPercent]);

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
        {/* Hero Stats Section */}
        <section className="hero-stats-section">
          <h2>Course Progress</h2>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value" ref={totalLessonsRef} data-target={networkPlusLessons.length}>0</span>
              <span className="stat-label">Total Lessons</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" ref={completedRef} data-target={completed}>0</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" ref={daysRemainingRef} data-target={daysRemaining}>0</span>
              <span className="stat-label">Target Days Left</span>
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <section className="progress-section">
          <div className="progress-card">
            <div className="progress-header">
              <h2>Your Progress</h2>

              <div className="circular-progress-container" ref={progressArcRef}>
                <svg className="progress-ring" width="100" height="100">
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'var(--accent-cyan)', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'var(--accent-purple)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle className="ring-bg" cx="50" cy="50" r="45"></circle>
                  <circle className="ring-fill" cx="50" cy="50" r="45"></circle>
                </svg>
                <span className="progress-percentage-arc">0%</span>
              </div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `0%` }}
              />
            </div>

            <div className="progress-details">
              <span><strong>{completed}</strong> of <strong>{networkPlusLessons.length}</strong> lessons completed</span>
              <span><strong>{networkPlusLessons.length - completed}</strong> remaining</span>
            </div>
          </div>

          <div className="progress-card practice-card">
            <div className="progress-header">
              <h2>Practice Center</h2>
            </div>
            <div className="practice-card-body">
              <p>Ready to review? Create a custom flashcard session from multiple lessons to test your knowledge.</p>
              <button
                className="btn-start-practice"
                onClick={() => setIsModalOpen(true)}
              >
                🃏 Start Practice Session
              </button>
            </div>
          </div>

          <div className="progress-card exam-card">
            <div className="progress-header">
              <h2>Practice Exams</h2>
            </div>
            <div className="practice-card-body">
              <p>Test your knowledge with full-length simulated Network+ exams</p>
              <div className="exam-types">
                <div className="exam-type-badge">📝 Full Exam (90 questions)</div>
                <div className="exam-type-badge">📚 Domain Practice (25 questions)</div>
                <div className="exam-type-badge">⚡ Quick Quiz (15 questions)</div>
              </div>
              <button
                className="btn-start-practice"
                onClick={() => navigate('/practice-exam-setup')}
                style={{
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                  marginTop: '16px'
                }}
              >
                <Target size={18} />
                <span>Start Practice Exam</span>
              </button>
            </div>
          </div>
        </section>

        {/* Flashcard Stats Widget */}
        <section className="flashcard-stats-section">
          <FlashcardStatsWidget />
        </section>

        {/* Exam Performance Analytics Widget */}
        <section className="exam-analytics-section">
          <DomainPerformanceWidget />
        </section>
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

      <FlashcardPracticeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default UserProfile;
