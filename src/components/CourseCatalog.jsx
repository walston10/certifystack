import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { getActiveCourses, getBundleInfo } from '../data/courseCatalog';
import { supabase } from '../lib/supabase';
import './CourseCatalog.css';

function CourseCatalog() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [userAccess, setUserAccess] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCoursesAndAccess();
  }, []);

  const loadCoursesAndAccess = async () => {
    try {
      const activeCourses = getActiveCourses();
      setCourses(activeCourses);

      // Check user access for each course
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: accessData } = await supabase
          .from('user_access')
          .select('course_id, access_type, status')
          .eq('user_id', user.id)
          .eq('status', 'active');

        const accessMap = {};
        accessData?.forEach(access => {
          if (access.access_type === 'subscription') {
            // Subscription gives access to all courses
            activeCourses.forEach(course => {
              accessMap[course.id] = 'subscription';
            });
          } else if (access.course_id) {
            accessMap[access.course_id] = 'course';
          }
        });

        // Check for bundle access (A+ Core 1 + Core 2)
        if (accessMap['a-plus-core1'] === 'course') {
          accessMap['a-plus-core2'] = 'bundle';
        }
        if (accessMap['a-plus-core2'] === 'course') {
          accessMap['a-plus-core1'] = 'bundle';
        }

        setUserAccess(accessMap);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error loading courses:', error);
      setLoading(false);
    }
  };

  const hasAccess = (courseId) => {
    return userAccess[courseId] !== undefined;
  };

  const getAccessBadge = (courseId) => {
    const accessType = userAccess[courseId];
    if (!accessType) return null;

    const badges = {
      subscription: { text: 'Included in Subscription', color: '#ffd700' },
      course: { text: 'Owned', color: '#00e676' },
      bundle: { text: 'Bundle Access', color: '#667eea' }
    };

    const badge = badges[accessType];
    return (
      <div className="access-badge" style={{ background: badge.color }}>
        <CheckCircle size={16} />
        <span>{badge.text}</span>
      </div>
    );
  };

  const handleCourseClick = (course) => {
    navigate(`/course/${course.id}`);
  };

  if (loading) {
    return (
      <div className="course-catalog loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="course-catalog">
      {/* Header */}
      <div className="catalog-header">
        <div className="header-content">
          <BookOpen size={48} className="header-icon" />
          <div>
            <h1>Course Catalog</h1>
            <p>Choose your certification path and start learning</p>
          </div>
        </div>
      </div>

      {/* Subscription Banner */}
      <div className="subscription-banner">
        <div className="banner-content">
          <h3>🚀 Get Unlimited Access</h3>
          <p>Subscribe for $29/month and unlock all courses, or purchase courses individually</p>
          <button className="btn-subscribe" onClick={() => navigate('/profile')}>
            View Subscription Options
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-grid">
        {courses.map(course => {
          const bundleInfo = getBundleInfo(course.id);
          const owned = hasAccess(course.id);

          return (
            <div
              key={course.id}
              className={`course-card ${owned ? 'owned' : ''}`}
              style={{ '--course-color': course.color }}
              onClick={() => handleCourseClick(course)}
            >
              {/* Access Badge */}
              {getAccessBadge(course.id)}

              {/* Course Header */}
              <div className="course-header" style={{ background: course.gradient }}>
                <div className="course-icon">
                  <Award size={40} />
                </div>
              </div>

              {/* Course Content */}
              <div className="course-content">
                <div className="course-difficulty">
                  <TrendingUp size={16} />
                  <span>{course.difficulty}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>
                <p className="course-exam">{course.exam}</p>
                <p className="course-description">{course.description}</p>

                {/* Course Stats */}
                <div className="course-stats">
                  <div className="stat">
                    <BookOpen size={16} />
                    <span>{course.totalLessons} Lessons</span>
                  </div>
                  <div className="stat">
                    <Clock size={16} />
                    <span>{course.estimatedHours}h</span>
                  </div>
                </div>

                {/* Domains Preview */}
                <div className="domains-preview">
                  <strong>Topics Covered:</strong>
                  <ul>
                    {course.domains.slice(0, 3).map((domain, idx) => (
                      <li key={idx}>{domain}</li>
                    ))}
                    {course.domains.length > 3 && (
                      <li className="more">+{course.domains.length - 3} more</li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="course-pricing">
                  {!owned ? (
                    <>
                      <div className="price-main">
                        <span className="price">${course.price}</span>
                        <span className="price-label">one-time payment</span>
                      </div>

                      {/* Bundle Option */}
                      {bundleInfo && (
                        <div className="bundle-option">
                          <div className="bundle-badge">Bundle & Save</div>
                          <p>
                            Get {course.title} + {bundleInfo.bundleCourse.title} for{' '}
                            <strong>${bundleInfo.bundlePrice}</strong>
                          </p>
                          <p className="savings">Save ${bundleInfo.savings}!</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="owned-message">
                      <CheckCircle size={20} />
                      <span>You have access to this course</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className="course-cta"
                  style={{ background: owned ? course.gradient : 'var(--bg-tertiary)' }}
                >
                  {owned ? 'Continue Learning' : 'View Course'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Coming Soon Section */}
      <div className="coming-soon-section">
        <h2>Coming Soon</h2>
        <div className="coming-soon-grid">
          <div className="coming-soon-card">
            <h3>CompTIA Security+</h3>
            <p>Master cybersecurity fundamentals</p>
            <span className="eta">Q1 2026</span>
          </div>
          <div className="coming-soon-card">
            <h3>Cisco CCNA</h3>
            <p>Cisco networking certification</p>
            <span className="eta">Q2 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCatalog;
