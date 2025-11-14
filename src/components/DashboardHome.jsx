import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle, Target, FlaskConical, FileText, User, Users, ExternalLink, Award, GraduationCap } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { supabase } from '../lib/supabase';
import { getActiveCourse } from '../services/courseService';
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
  const [activeCourse, setActiveCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserStats();
  }, []);

  const loadUserStats = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Get active course with progress
      const course = await getActiveCourse();
      setActiveCourse(course);

      // Get user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, xp_points, study_streak')
        .eq('id', user.id)
        .single();

      // Get lessons progress for active course
      const { data: lessonsProgress } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id)
        .eq('course_id', course?.id || 'network-plus')
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
        .select('score, total_questions')
        .eq('user_id', user.id);

      const avgScore = quizAttempts?.length
        ? Math.round(quizAttempts.reduce((sum, q) => sum + (q.score / q.total_questions * 100), 0) / quizAttempts.length)
        : 0;

      // Calculate level from XP (every 1000 XP = 1 level)
      const xp = profile?.xp_points || 0;
      const level = Math.floor(xp / 1000) + 1;

      // Get name from profile, user metadata, or email
      // Google OAuth stores name in user_metadata
      const displayName = profile?.full_name
        || user.user_metadata?.full_name
        || user.user_metadata?.name
        || user.email?.split('@')[0]
        || 'Student';

      setUserStats({
        name: displayName,
        lessonsCompleted: lessonsProgress?.length || 0,
        totalLessons: course?.total_lessons || 30,
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

          {/* Active Course Display */}
          {activeCourse && (
            <div className="active-course-info">
              <div className="course-badge">
                <span className="course-emoji">{activeCourse.icon_emoji}</span>
                <span className="course-name">{activeCourse.short_name}</span>
              </div>
              <button
                className="btn-switch-course"
                onClick={() => navigate('/courses')}
              >
                <GraduationCap size={16} />
                Switch Course
              </button>
            </div>
          )}

          <div className="hero-stats">
            {/* Progress Text */}
            <div className="progress-text">
              <p className="progress-message">
                {userStats.studyStreak > 0 && `You're on fire! 🔥 ${userStats.studyStreak} day streak!`}
                {userStats.studyStreak === 0 && "Let's build a study streak! 🚀"}
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
          title={`📚 Lessons${activeCourse ? ` - ${activeCourse.short_name}` : ''}`}
          description={activeCourse?.description || "Comprehensive lessons covering all exam objectives"}
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
          gradient="teal"
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
          icon={<Users size={32} />}
          title="💬 Community"
          description="Join our Discord community to connect with other students"
          status="Join the conversation"
          ctaText="Join Discord"
          ctaLink="https://discord.gg/YNDe94Z9"
          gradient="purple"
          external={true}
        />

        <FeatureCard
          icon={<ExternalLink size={32} />}
          title="🌐 Free Resources"
          description="Curated collection of the best free study materials online"
          status="External study tools"
          ctaText="Explore Resources"
          ctaLink="/free-resources"
          gradient="indigo"
        />

        <FeatureCard
          icon={<Award size={32} />}
          title="🏆 Achievements"
          description="Track your milestones and celebrate your progress"
          status="Coming soon"
          ctaText="View Progress"
          ctaLink="/achievements"
          gradient="yellow"
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
    </div>
  );
}

export default DashboardHome;
