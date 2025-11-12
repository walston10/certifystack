import React, { useEffect, useState, useRef } from 'react';
import { User, LogOut, Zap } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { useUserStats } from '../hooks/useUserStats';
import DomainPerformanceWidget from './DomainPerformanceWidget';
import './UserProfile.css';

function UserProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { progress, loading: progressLoading } = useUserStats();
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
  const [statsLoading, setStatsLoading] = useState(true);

  // Combined loading state
  const loading = progressLoading || statsLoading;

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
    loadUserStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only load once on mount

  // --- useEffect for Animations (Runs after data is loaded) ---
  useEffect(() => {
    // Don't run animations until we have data (completed > 0 or progressLoading finished)
    if (progressLoading && completed === 0) return;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed, daysRemaining, progressPercentRounded, progressPercent]);

  const loadUserProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error loading profile:', error);
        return null;
      }

      setProfile(data);
      return data;
    } catch (error) {
      console.error('Error loading profile:', error);
      return null;
    }
  };

  const loadUserStats = async () => {
    try {
      // Load profile first to get XP
      const profileData = await loadUserProfile();

      // Query user_progress table (not lesson_progress)
      const { data: lessons, error: lessonsError } = await supabase
        .from('user_progress')
        .select('lesson_id')
        .eq('user_id', user.id)
        .eq('completed', true);

      if (lessonsError && lessonsError.code !== 'PGRST116') {
        console.warn('Error loading lessons:', lessonsError);
      }

      const { data: labs, error: labsError } = await supabase
        .from('lab_submissions')
        .select('lab_id')
        .eq('user_id', user.id)
        .eq('completed', true);

      if (labsError && labsError.code !== 'PGRST116') {
        console.warn('Error loading labs:', labsError);
      }

      const { data: quizzes, error: quizzesError } = await supabase
        .from('quiz_attempts')
        .select('score, total_questions')
        .eq('user_id', user.id);

      if (quizzesError && quizzesError.code !== 'PGRST116') {
        console.warn('Error loading quizzes:', quizzesError);
      }

      // Calculate average quiz score as percentage
      let avgScore = 0;
      if (quizzes && quizzes.length > 0) {
        const totalScore = quizzes.reduce((sum, q) => {
          const percentage = (q.score / q.total_questions) * 100;
          return sum + percentage;
        }, 0);
        avgScore = Math.round(totalScore / quizzes.length);
      }

      const xp = profileData?.xp_points || 0;
      const level = Math.floor(xp / 1000) + 1;

      setStats({
        lessonsCompleted: lessons?.length || 0,
        labsCompleted: labs?.length || 0,
        quizzesTaken: quizzes?.length || 0,
        averageScore: avgScore,
        studyStreak: profileData?.study_streak || 0,
        xp: xp,
        level: level
      });

      setStatsLoading(false);
    } catch (error) {
      console.error('Error loading stats:', error);
      // Set default values even on error
      setStats({
        lessonsCompleted: 0,
        labsCompleted: 0,
        quizzesTaken: 0,
        averageScore: 0,
        studyStreak: 0,
        xp: 0,
        level: 1
      });
      setStatsLoading(false);
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
              <div className="stat-value">{completed}/{networkPlusLessons.length}</div>
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
