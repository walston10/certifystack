import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Award, CheckCircle, Lock, Zap, Target, FlaskConical } from 'lucide-react';
import { getCourse, getBundleInfo } from '../data/courseCatalog';
import { supabase } from '../lib/supabase';
import './CourseOverview.css';

function CourseOverview() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [accessType, setAccessType] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourseAndAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  const loadCourseAndAccess = async () => {
    try {
      // Get course metadata
      const courseData = getCourse(courseId);
      if (!courseData) {
        navigate('/courses');
        return;
      }
      setCourse(courseData);

      // Check user access
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: accessData } = await supabase
          .from('user_access')
          .select('course_id, access_type, status')
          .eq('user_id', user.id)
          .eq('status', 'active');

        let userHasAccess = false;
        let userAccessType = null;

        accessData?.forEach(access => {
          if (access.access_type === 'subscription') {
            userHasAccess = true;
            userAccessType = 'subscription';
          } else if (access.course_id === courseId) {
            userHasAccess = true;
            userAccessType = 'course';
          }
        });

        // Check bundle access for A+ courses
        if (courseId === 'a-plus-core1' || courseId === 'a-plus-core2') {
          const otherCourse = courseId === 'a-plus-core1' ? 'a-plus-core2' : 'a-plus-core1';
          const hasOtherCourse = accessData?.some(access => access.course_id === otherCourse);
          if (hasOtherCourse) {
            userHasAccess = true;
            userAccessType = 'bundle';
          }
        }

        setHasAccess(userHasAccess);
        setAccessType(userAccessType);

        // Load progress if has access
        if (userHasAccess) {
          const { data: lessonsProgress } = await supabase
            .from('lesson_progress')
            .select('lesson_id, completed')
            .eq('user_id', user.id)
            .eq('course_id', courseId);

          const completed = lessonsProgress?.filter(l => l.completed).length || 0;
          const total = courseData.totalLessons;
          const percentage = Math.round((completed / total) * 100);

          setProgress({
            lessonsCompleted: completed,
            totalLessons: total,
            percentage: percentage
          });
        }
      }

      setLoading(false);
    } catch (error) {
      console.error('Error loading course:', error);
      setLoading(false);
    }
  };

  const handleStartLearning = () => {
    if (hasAccess) {
      navigate(`/course/${courseId}/lessons`);
    } else {
      // Show pricing options (could open modal or scroll to pricing section)
      document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchaseCourse = () => {
    // TODO: Integrate with Stripe checkout
    alert(`Purchase ${course.title} for $${course.price} - Stripe integration coming soon`);
  };

  const handlePurchaseBundle = () => {
    const bundleInfo = getBundleInfo(courseId);
    if (bundleInfo) {
      alert(`Purchase A+ Bundle for $${bundleInfo.bundlePrice} - Stripe integration coming soon`);
    }
  };

  if (loading) {
    return (
      <div className="course-overview loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="course-overview not-found">
        <h1>Course Not Found</h1>
        <button onClick={() => navigate('/courses')}>Browse Courses</button>
      </div>
    );
  }

  const bundleInfo = getBundleInfo(courseId);

  return (
    <div className="course-overview">
      {/* Hero Section */}
      <div className="course-hero" style={{ background: course.gradient }}>
        <div className="hero-content">
          <div className="course-badge">{course.difficulty}</div>
          <h1 className="course-title">{course.fullTitle}</h1>
          <p className="course-tagline">{course.description}</p>

          <div className="hero-stats">
            <div className="stat">
              <BookOpen size={20} />
              <span>{course.totalLessons} Lessons</span>
            </div>
            <div className="stat">
              <FlaskConical size={20} />
              <span>{course.totalLabs} Labs</span>
            </div>
            <div className="stat">
              <Clock size={20} />
              <span>{course.estimatedHours}h Content</span>
            </div>
            <div className="stat">
              <Target size={20} />
              <span>{course.totalQuizzes} Quizzes</span>
            </div>
          </div>

          {/* Access Status */}
          {hasAccess && (
            <div className="access-status">
              <CheckCircle size={20} />
              <span>
                {accessType === 'subscription' && 'Included in Your Subscription'}
                {accessType === 'course' && 'You Own This Course'}
                {accessType === 'bundle' && 'Bundle Access'}
              </span>
            </div>
          )}

          {/* Progress Bar (if started) */}
          {progress && progress.percentage > 0 && (
            <div className="progress-section">
              <div className="progress-info">
                <span>Your Progress</span>
                <span>{progress.percentage}% Complete</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress.percentage}%` }}></div>
              </div>
              <p className="progress-text">
                {progress.lessonsCompleted} of {progress.totalLessons} lessons completed
              </p>
            </div>
          )}

          {/* CTA Button */}
          <button className="btn-start-learning" onClick={handleStartLearning}>
            {hasAccess ? (progress?.percentage > 0 ? 'Continue Learning' : 'Start Learning') : 'View Pricing'}
          </button>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-content">
        <div className="content-main">
          {/* About Section */}
          <section className="about-section">
            <h2>About This Course</h2>
            <p>{course.longDescription}</p>
          </section>

          {/* What You'll Learn */}
          <section className="learn-section">
            <h2>What You'll Learn</h2>
            <div className="domains-grid">
              {course.domains.map((domain, idx) => (
                <div key={idx} className="domain-item">
                  <CheckCircle size={20} />
                  <span>{domain}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Course Includes */}
          <section className="includes-section">
            <h2>This Course Includes</h2>
            <div className="includes-grid">
              <div className="include-item">
                <BookOpen size={24} />
                <h4>{course.totalLessons} Comprehensive Lessons</h4>
                <p>Step-by-step learning modules</p>
              </div>
              <div className="include-item">
                <FlaskConical size={24} />
                <h4>{course.totalLabs} Hands-On Labs</h4>
                <p>Practice real-world scenarios</p>
              </div>
              <div className="include-item">
                <Target size={24} />
                <h4>{course.totalQuizzes} Practice Quizzes</h4>
                <p>Test your knowledge</p>
              </div>
              <div className="include-item">
                <Award size={24} />
                <h4>{course.totalFlashcards} Flashcards</h4>
                <p>Master key concepts</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar - Pricing */}
        <aside className="pricing-sidebar" id="pricing-section">
          {!hasAccess ? (
            <>
              <div className="pricing-card">
                <h3>Get This Course</h3>

                <div className="price-option main-price">
                  <div className="price">${course.price}</div>
                  <p>One-time payment</p>
                  <p className="price-subtext">Lifetime access to this course</p>
                  <button className="btn-purchase" onClick={handlePurchaseCourse}>
                    Purchase Course
                  </button>
                </div>

                {bundleInfo && (
                  <div className="price-option bundle-price">
                    <div className="bundle-badge">Best Value</div>
                    <h4>A+ Bundle</h4>
                    <div className="price">${bundleInfo.bundlePrice}</div>
                    <p>Core 1 + Core 2</p>
                    <p className="savings">Save ${bundleInfo.savings}!</p>
                    <button className="btn-purchase bundle" onClick={handlePurchaseBundle}>
                      Purchase Bundle
                    </button>
                  </div>
                )}

                <div className="divider">OR</div>

                <div className="subscription-option">
                  <Zap size={20} />
                  <div>
                    <h4>Subscribe for $29/month</h4>
                    <p>Get access to ALL courses</p>
                  </div>
                  <button className="btn-subscribe" onClick={() => navigate('/profile')}>
                    Subscribe
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="access-card">
              <CheckCircle size={48} />
              <h3>You Have Access!</h3>
              <p>Start learning right away</p>
              <button className="btn-start" onClick={handleStartLearning}>
                {progress?.percentage > 0 ? 'Continue' : 'Start Course'}
              </button>
            </div>
          )}

          {/* Prerequisites */}
          {course.prerequisites && course.prerequisites.length > 0 && (
            <div className="prerequisites-card">
              <h4>Prerequisites</h4>
              <ul>
                {course.prerequisites.map((prereq, idx) => (
                  <li key={idx}>
                    <Lock size={16} />
                    <span>{getCourse(prereq)?.title || prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Certification */}
          {course.nextCert && (
            <div className="next-cert-card">
              <h4>Next Certification</h4>
              <p>After completing this course, continue with:</p>
              <button
                className="btn-next-cert"
                onClick={() => navigate(`/course/${course.nextCert}`)}
              >
                {getCourse(course.nextCert)?.title || 'Next Course'}
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default CourseOverview;
