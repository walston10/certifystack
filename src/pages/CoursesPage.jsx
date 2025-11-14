import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, Clock, Bell, Play, ArrowRight } from 'lucide-react';
import { getAllCourses, setActiveCourse, getActiveCourse } from '../services/courseService';
import './CoursesPage.css';

function CoursesPage() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [activeCourseId, setActiveCourseId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [switchingCourse, setSwitchingCourse] = useState(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);

      // Get all courses with progress
      const coursesData = await getAllCourses();
      setCourses(coursesData);

      // Get user's active course
      const activeCourse = await getActiveCourse();
      setActiveCourseId(activeCourse?.id);

      setLoading(false);
    } catch (error) {
      console.error('Error loading courses:', error);
      setLoading(false);
    }
  };

  const handleCourseAction = async (course) => {
    // If course is not available, do nothing
    if (course.status !== 'available') {
      return;
    }

    try {
      setSwitchingCourse(course.id);

      // Set as active course
      await setActiveCourse(null, course.id);
      setActiveCourseId(course.id);

      // Navigate to lessons page for this course
      setTimeout(() => {
        navigate(`/lessons/${course.id}`);
      }, 300);
    } catch (error) {
      console.error('Error switching course:', error);
      setSwitchingCourse(null);
    }
  };

  const getStatusBadge = (course) => {
    if (course.status === 'available') {
      return <span className="status-badge status-available">Available</span>;
    } else if (course.status === 'coming-soon') {
      // Format release date
      const releaseDate = new Date(course.release_date);
      const monthYear = releaseDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      return <span className="status-badge status-coming-soon">Coming {monthYear}</span>;
    } else {
      return <span className="status-badge status-development">In Development</span>;
    }
  };

  const getActionButton = (course) => {
    if (course.status !== 'available') {
      return (
        <button className="course-action-btn disabled" disabled>
          <Bell size={18} />
          Notify Me
        </button>
      );
    }

    const isActive = course.id === activeCourseId;
    const hasProgress = course.lessonsCompleted > 0;

    if (hasProgress) {
      return (
        <button
          className={`course-action-btn ${isActive ? 'active' : ''}`}
          onClick={() => handleCourseAction(course)}
          disabled={switchingCourse === course.id}
        >
          {switchingCourse === course.id ? (
            <>Loading...</>
          ) : (
            <>
              <Play size={18} />
              Continue Learning
              <ArrowRight size={16} className="arrow-icon" />
            </>
          )}
        </button>
      );
    } else {
      return (
        <button
          className="course-action-btn"
          onClick={() => handleCourseAction(course)}
          disabled={switchingCourse === course.id}
        >
          {switchingCourse === course.id ? (
            <>Loading...</>
          ) : (
            <>
              <BookOpen size={18} />
              Start Course
              <ArrowRight size={16} className="arrow-icon" />
            </>
          )}
        </button>
      );
    }
  };

  if (loading) {
    return (
      <div className="courses-page">
        <div className="courses-container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <div className="courses-container">
        {/* Hero Section */}
        <div className="courses-hero">
          <h1 className="hero-title">Choose Your Certification Path</h1>
          <p className="hero-subtitle">
            Master IT certifications through hands-on learning
          </p>
        </div>

        {/* Course Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-card ${course.status !== 'available' ? 'coming-soon' : ''} ${course.id === activeCourseId ? 'active-course' : ''}`}
            >
              {/* Active Course Badge */}
              {course.id === activeCourseId && (
                <div className="active-badge">
                  <Award size={14} />
                  Active Course
                </div>
              )}

              {/* Course Icon */}
              <div className="course-icon">
                {course.icon_emoji || '📚'}
              </div>

              {/* Course Header */}
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                {getStatusBadge(course)}
              </div>

              {/* Course Description */}
              <p className="course-description">
                {course.description}
              </p>

              {/* Course Stats */}
              <div className="course-stats">
                <div className="stat-item">
                  <BookOpen size={16} />
                  <span>{course.total_lessons} lessons</span>
                </div>
                {course.total_flashcards && (
                  <div className="stat-item">
                    <Award size={16} />
                    <span>{course.total_flashcards} flashcards</span>
                  </div>
                )}
                {course.exam_code && (
                  <div className="stat-item exam-code">
                    <span>{course.exam_code}</span>
                  </div>
                )}
              </div>

              {/* Progress Bar (if user has started) */}
              {course.lessonsCompleted > 0 && (
                <div className="course-progress-section">
                  <div className="progress-header">
                    <span className="progress-label">Progress</span>
                    <span className="progress-percentage">{course.progress}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-details">
                    {course.lessonsCompleted} of {course.total_lessons} lessons completed
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="course-action">
                {getActionButton(course)}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="courses-info">
          <div className="info-card">
            <Clock size={24} />
            <h3>More Courses Coming Soon</h3>
            <p>
              We're actively developing new certification courses.
              Click "Notify Me" to get updates when they launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
