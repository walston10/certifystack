import { Suspense, lazy, useMemo } from 'react';

/**
 * ActivityLoader - Dynamically loads course-specific activities
 *
 * This component provides a scalable way to load interactive activities
 * for any course and lesson combination.
 */
function ActivityLoader({ courseId, lessonId, ...activityProps }) {
  // Dynamically import the activity component based on course and lesson
  const ActivityComponent = useMemo(() => {
    try {
      // Dynamic import path based on course and lesson
      return lazy(() => import(`../../courses/${courseId}/activities/lesson-${String(lessonId).padStart(2, '0')}/index.js`));
    } catch (error) {
      console.error(`Failed to load activity for ${courseId}/lesson-${lessonId}:`, error);
      return null;
    }
  }, [courseId, lessonId]);

  // If no activity component found, show placeholder
  if (!ActivityComponent) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: 'var(--text-muted)'
      }}>
        <p>No interactive activity available for this lesson yet.</p>
      </div>
    );
  }

  // Render activity with suspense for lazy loading
  return (
    <Suspense
      fallback={
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          <p>Loading activity...</p>
        </div>
      }
    >
      <ActivityComponent {...activityProps} />
    </Suspense>
  );
}

export default ActivityLoader;
