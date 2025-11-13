import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Target, Award, Flame, Zap, CreditCard } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import {
  getCourseProgress,
  getStudyStats,
  getQuizPerformance,
  getExamPerformance,
  getRecentActivity,
  formatRelativeTime,
  getCourseName
} from '../services/accountService';
import './AccountPage.css';

function AccountPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courseProgress, setCourseProgress] = useState([]);
  const [studyStats, setStudyStats] = useState(null);
  const [quizPerformance, setQuizPerformance] = useState(null);
  const [examPerformance, setExamPerformance] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    loadAccountData();
  }, []);

  const loadAccountData = async () => {
    setLoading(true);

    try {
      // Load all account data in parallel
      const [courses, stats, quizzes, exams, activity] = await Promise.all([
        getCourseProgress(),
        getStudyStats(),
        getQuizPerformance(),
        getExamPerformance(),
        getRecentActivity(10)
      ]);

      if (courses.success) setCourseProgress(courses.data);
      if (stats.success) setStudyStats(stats.data);
      if (quizzes.success) setQuizPerformance(quizzes.data);
      if (exams.success) setExamPerformance(exams.data);
      if (activity.success) setRecentActivity(activity.data);
    } catch (error) {
      console.error('Error loading account data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'lesson':
        return '📚';
      case 'quiz':
        return '🎯';
      case 'exam':
        return '📝';
      default:
        return '✓';
    }
  };

  const getActivityMessage = (activity) => {
    switch (activity.type) {
      case 'lesson':
        return `Completed ${getCourseName(activity.course_id)} Lesson ${activity.lesson_id}`;
      case 'quiz':
        return `Quiz on Lesson ${activity.lesson_id} - Scored ${activity.score}%`;
      case 'exam':
        return `Practice Exam - ${activity.passed ? 'Passed' : 'Failed'} (${activity.score}%)`;
      default:
        return 'Activity';
    }
  };

  if (loading) {
    return (
      <div className="account-page loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="account-page">
      {/* Profile Header */}
      <div className="account-header">
        <div className="profile-avatar-large">
          <User size={64} />
        </div>
        <div className="profile-info-large">
          <h1>{user?.email}</h1>
          <p className="subtitle">Account Settings</p>
        </div>
      </div>

      <div className="account-content">
        {/* Course Progress Section */}
        <section className="account-section">
          <h2 className="section-title">📖 Course Progress</h2>
          <div className="course-progress-list">
            {courseProgress.length === 0 ? (
              <div className="empty-state">
                <p>No course progress yet. Start learning to see your progress here!</p>
              </div>
            ) : (
              courseProgress.map(course => (
                <div key={course.course_id} className="course-progress-card">
                  <div className="course-progress-header">
                    <span className="course-name">{getCourseName(course.course_id)}</span>
                    <span className="course-stats">
                      {course.completed_lessons}/{course.total_lessons} lessons • {course.progress_pct}%
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${course.progress_pct}%` }}
                    ></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Study Stats Grid */}
        <section className="account-section">
          <h2 className="section-title">📊 Study Stats</h2>
          <div className="stats-grid">
            <div className="stat-card-account">
              <div className="stat-icon-account streak-icon">
                <Flame size={32} />
              </div>
              <div className="stat-details">
                <div className="stat-value-large">{studyStats?.current_streak || 0}</div>
                <div className="stat-label-account">Day Streak</div>
              </div>
            </div>

            <div className="stat-card-account">
              <div className="stat-icon-account xp-icon">
                <Zap size={32} />
              </div>
              <div className="stat-details">
                <div className="stat-value-large">{studyStats?.xp_points || 0}</div>
                <div className="stat-label-account">XP Points</div>
              </div>
            </div>

            <div className="stat-card-account">
              <div className="stat-icon-account cards-icon">
                <CreditCard size={32} />
              </div>
              <div className="stat-details">
                <div className="stat-value-large">{studyStats?.cards_studied || 0}</div>
                <div className="stat-label-account">Cards Studied</div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="account-section">
          <h2 className="section-title">🎯 Performance</h2>

          {/* Quiz Performance */}
          <div className="performance-card">
            <div className="performance-header">
              <Target size={24} />
              <h3>Quiz Performance</h3>
            </div>
            <div className="performance-content">
              {quizPerformance && quizPerformance.quizzes_taken > 0 ? (
                <>
                  <div className="performance-stat">
                    <span className="performance-label">Quizzes Taken:</span>
                    <span className="performance-value">{quizPerformance.quizzes_taken}</span>
                  </div>
                  <div className="performance-stat">
                    <span className="performance-label">Average Score:</span>
                    <span className="performance-value highlight">{quizPerformance.avg_score}%</span>
                  </div>
                </>
              ) : (
                <div className="empty-state-small">
                  <p>No quizzes taken yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Exam Performance */}
          <div className="performance-card">
            <div className="performance-header">
              <Award size={24} />
              <h3>Practice Exam Results</h3>
            </div>
            <div className="performance-content">
              {examPerformance && examPerformance.exams_taken > 0 ? (
                <>
                  <div className="performance-stat">
                    <span className="performance-label">Exams Taken:</span>
                    <span className="performance-value">{examPerformance.exams_taken}</span>
                  </div>
                  <div className="performance-stat">
                    <span className="performance-label">Exams Passed:</span>
                    <span className="performance-value">{examPerformance.exams_passed}</span>
                  </div>
                  <div className="performance-stat">
                    <span className="performance-label">Average Score:</span>
                    <span className="performance-value highlight">{examPerformance.avg_score}%</span>
                  </div>
                </>
              ) : (
                <div className="empty-state-small">
                  <p>No practice exams taken yet</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Recent Activity Feed */}
        <section className="account-section">
          <h2 className="section-title">⚡ Recent Activity</h2>
          <div className="activity-feed">
            {recentActivity.length === 0 ? (
              <div className="empty-state">
                <p>No recent activity. Start learning to see your activity here!</p>
              </div>
            ) : (
              recentActivity.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon">{getActivityIcon(activity.type)}</div>
                  <div className="activity-content">
                    <div className="activity-message">{getActivityMessage(activity)}</div>
                    <div className="activity-time">{formatRelativeTime(activity.timestamp)}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Logout Button */}
        <div className="logout-section">
          <button className="btn-logout-danger" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
