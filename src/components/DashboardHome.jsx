import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle, Target, FlaskConical, FileText, User, Users, ExternalLink, Gamepad2 } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { supabase } from '../lib/supabase';
import { getActiveCourse } from '../services/courseService';
import { useUserStats } from '../hooks/useUserStats';
import './DashboardHome.css';

// Motivational quotes for IT certification students
const motivationalQuotes = [
  "Success is the sum of small efforts repeated day in and day out.",
  "The expert in anything was once a beginner.",
  "Every certification starts with a single lesson.",
  "Your future self will thank you for starting today.",
  "Progress, not perfection, is what matters.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Small daily improvements lead to stunning results.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "You don't have to be great to start, but you have to start to be great.",
  "Every expert was once a beginner who refused to give up.",
  "Your only limit is you.",
  "Study smart, work hard, and success will follow.",
  "The journey of a thousand lessons begins with one.",
  "Consistency beats intensity every time.",
  "Learn something new every day, even if it's just one concept.",
  "Certification earned, career advanced.",
  "The best time to start was yesterday. The next best time is now.",
  "Champions keep playing until they get it right.",
  "Knowledge is power, but only when applied.",
  "Every lesson completed is a step closer to your goal.",
  "Doubt kills more dreams than failure ever will.",
  "The harder you work, the luckier you get.",
  "Success doesn't come from what you do occasionally, but what you do consistently.",
  "Focus on progress, not perfection.",
  "Your certification journey is a marathon, not a sprint.",
  "The only bad study session is the one that didn't happen.",
  "Every subnet you master brings you closer to certification.",
  "Dream big, study hard, achieve more.",
  "The pain of discipline is nothing compared to the pain of regret.",
  "You're not just learning networking, you're building your future.",
  "The difference between try and triumph is a little umph.",
  "Today's struggle is tomorrow's strength.",
  "Stay committed to your goals, not your excuses.",
  "A little progress each day adds up to big results.",
  "The certification exam doesn't care about your feelings, only your preparation.",
  "Your career breakthrough is just one certification away."
];

function DashboardHome() {
  const navigate = useNavigate();
  const [activeCourse, setActiveCourse] = useState(null);
  const [courseLoaded, setCourseLoaded] = useState(false);

  // Load active course first before fetching stats
  useEffect(() => {
    const loadCourse = async () => {
      try {
        const course = await getActiveCourse();
        setActiveCourse(course);
      } catch (error) {
        console.error('Error loading active course:', error);
      } finally {
        setCourseLoaded(true);
      }
    };
    loadCourse();
  }, []);

  // Pass active course ID to useUserStats (only after course is loaded)
  const { progress, stats } = useUserStats(courseLoaded ? (activeCourse?.id || 'network-plus') : null);

  const [userStats, setUserStats] = useState({
    name: '',
    lessonsCompleted: 0,
    totalLessons: 30,
    labsCompleted: 0,
    totalLabs: 10,
    quizzesTaken: 0,
    averageScore: 0,
    studyStreak: 0,
    completionPercentage: 0
  });
  const [loading, setLoading] = useState(true);
  // Pick a random quote on component mount
  const [dailyQuote] = useState(() => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);

  const loadUserStats = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Use already loaded activeCourse
      const course = activeCourse;

      // Get user profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, study_streak')
        .eq('id', user.id)
        .single();

      // Get labs progress
      const { data: labsProgress } = await supabase
        .from('lab_submissions')
        .select('lab_id')
        .eq('user_id', user.id)
        .eq('completed', true);

      // Use data from useUserStats hook for lessons and quiz stats
      const completedLessons = progress?.completedLessons?.length || 0;
      const totalCourseLessons = course?.total_lessons || 30;
      const completionPct = Math.round((completedLessons / totalCourseLessons) * 100);

      // Get name from profile, user metadata, or email
      // Google OAuth stores name in user_metadata
      const displayName = profile?.full_name
        || user.user_metadata?.full_name
        || user.user_metadata?.name
        || user.email?.split('@')[0]
        || 'Student';

      setUserStats({
        name: displayName,
        lessonsCompleted: completedLessons,
        totalLessons: totalCourseLessons,
        labsCompleted: labsProgress?.length || 0,
        totalLabs: 10,
        quizzesTaken: stats?.quizzesTaken || 0,
        averageScore: stats?.avgQuizScore || 0,
        studyStreak: profile?.study_streak || 0,
        completionPercentage: completionPct
      });

      setLoading(false);
    } catch (error) {
      console.error('Error loading user stats:', error);
      setLoading(false);
    }
  }, [progress, stats, activeCourse]);

  useEffect(() => {
    // Only load stats after course is loaded
    if (courseLoaded) {
      loadUserStats();
    }
  }, [loadUserStats, courseLoaded]);

  if (loading || !courseLoaded) {
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
        <div className="hero-content" style={{ position: 'relative' }}>
          <h1 className="hero-greeting">
            Welcome back, {userStats.name}! <span style={{ filter: 'none', WebkitTextFillColor: 'initial' }}>👋</span>
          </h1>

          {/* Motivational Quote - Floating on the right */}
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            fontSize: '0.95rem',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '1rem 1.5rem',
            borderLeft: '3px solid #00d9ff',
            background: 'rgba(0, 217, 255, 0.05)',
            borderRadius: '8px',
            maxWidth: '350px',
            lineHeight: '1.5'
          }}>
            "{dailyQuote}"
          </div>

          {/* Active Course Display */}
          {activeCourse && (
            <div className="active-course-info">
              <div className="course-badge">
                <span className="course-emoji">{activeCourse.icon_emoji}</span>
                <span className="course-name">{activeCourse.short_name}</span>
              </div>
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

          {/* Course Progress Badge */}
          <div className="level-badge">
            <span className="level-number">{userStats.completionPercentage}%</span>
            <span className="level-title">Course Complete</span>
            <div className="xp-bar">
              <div
                className="xp-bar-fill"
                style={{ width: `${userStats.completionPercentage}%` }}
              ></div>
            </div>
            <span className="xp-text">{userStats.lessonsCompleted}/{userStats.totalLessons} lessons</span>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="features-grid">
        <FeatureCard
          icon={<BookOpen size={32} />}
          title={`Lessons${activeCourse ? ` - ${activeCourse.short_name}` : ''}`}
          description={activeCourse?.description || "Comprehensive lessons covering all exam objectives"}
          status={`${userStats.lessonsCompleted}/${userStats.totalLessons} completed`}
          ctaText="Continue Learning"
          ctaLink={activeCourse ? `/course/${activeCourse.id}/lessons` : '/lessons'}
          gradient="cyan"
        />

        <FeatureCard
          icon={<MessageCircle size={32} />}
          title="AI Tutor"
          description="24/7 intelligent help for any Network+ topic"
          status="Always available"
          ctaText="Chat Now"
          ctaLink="/ai-tutor"
          gradient="teal"
        />

        <FeatureCard
          icon={<Target size={32} />}
          title="Practice Zone"
          description="Practice exams, quizzes, and flashcards to test your knowledge"
          status={`${userStats.quizzesTaken} quizzes taken · ${userStats.averageScore}% avg`}
          ctaText="Start Practicing"
          ctaLink="/practice"
          gradient="green"
        />

        <FeatureCard
          icon={<FlaskConical size={32} />}
          title={`Labs${activeCourse ? ` - ${activeCourse.short_name}` : ''}`}
          description="Hands-on practice with real-world scenarios"
          status={`${userStats.labsCompleted}/${userStats.totalLabs} completed`}
          ctaText="Practice Labs"
          ctaLink={activeCourse ? `/course/${activeCourse.id}/labs` : '/labs'}
          gradient="orange"
        />

        <FeatureCard
          icon={<FileText size={32} />}
          title="Resources"
          description="Cheat sheets, reference guides, and study materials"
          status="Quick reference materials"
          ctaText="Browse Resources"
          ctaLink="/resources"
          gradient="blue"
        />

        <FeatureCard
          icon={<Users size={32} />}
          title="Community"
          description="Join our Discord community to connect with other students"
          status="Join the conversation"
          ctaText="Join Discord"
          ctaLink="https://discord.gg/YNDe94Z9"
          gradient="purple"
          external={true}
        />

        <FeatureCard
          icon={<ExternalLink size={32} />}
          title="Free Resources"
          description="Curated collection of the best free study materials online"
          status="External study tools"
          ctaText="Explore Resources"
          ctaLink="/free-resources"
          gradient="indigo"
        />

        <FeatureCard
          icon={<Gamepad2 size={32} />}
          title="Study Games"
          description="Fun, interactive games to reinforce networking concepts"
          status="Learn while playing"
          ctaText="Play Games"
          ctaLink="/games"
          gradient="yellow"
        />

        <FeatureCard
          icon={<User size={32} />}
          title="My Account"
          description="Track your progress, view stats, and manage settings"
          status={`${userStats.completionPercentage}% complete · ${userStats.studyStreak} day streak`}
          ctaText="View Account"
          ctaLink="/account"
          gradient="pink"
        />
      </section>
    </div>
  );
}

export default DashboardHome;
