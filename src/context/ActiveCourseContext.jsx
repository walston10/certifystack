import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const ActiveCourseContext = createContext(null);

export function ActiveCourseProvider({ children }) {
  const { user } = useAuth();
  const [activeCourse, setActiveCourseState] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load active course from database
  const loadActiveCourse = useCallback(async () => {
    if (!user) {
      setActiveCourseState(null);
      setLoading(false);
      return;
    }

    try {
      // Get the user's active course from profiles
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('active_course_id')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Error loading active course from profile:', profileError);
        setLoading(false);
        return;
      }

      const courseId = profile?.active_course_id || 'network-plus';

      // Get the full course data
      const { data: course, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

      if (courseError) {
        console.error('Error loading course data:', courseError);
        // Fallback to a default course object
        setActiveCourseState({
          id: courseId,
          short_name: courseId === 'network-plus' ? 'Network+' :
                      courseId === 'a-plus-core1' ? 'A+ Core 1' :
                      courseId === 'a-plus-core2' ? 'A+ Core 2' :
                      courseId === 'security-plus' ? 'Security+' : 'Course',
          icon_emoji: '📚'
        });
      } else {
        setActiveCourseState(course);
      }
    } catch (error) {
      console.error('Error in loadActiveCourse:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Load on mount and when user changes
  useEffect(() => {
    loadActiveCourse();
  }, [loadActiveCourse]);

  // Function to change the active course (updates DB and state)
  const setActiveCourse = useCallback(async (courseId) => {
    if (!user) return;

    try {
      // Update the database first
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ active_course_id: courseId })
        .eq('id', user.id);

      if (updateError) {
        console.error('Error updating active course:', updateError);
        return;
      }

      // Get the full course data
      const { data: course, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

      if (courseError) {
        console.error('Error loading new course data:', courseError);
        // Fallback
        setActiveCourseState({
          id: courseId,
          short_name: courseId === 'network-plus' ? 'Network+' :
                      courseId === 'a-plus-core1' ? 'A+ Core 1' :
                      courseId === 'a-plus-core2' ? 'A+ Core 2' :
                      courseId === 'security-plus' ? 'Security+' : 'Course',
          icon_emoji: '📚'
        });
      } else {
        setActiveCourseState(course);
      }
    } catch (error) {
      console.error('Error setting active course:', error);
    }
  }, [user]);

  // Refresh function to reload from DB
  const refreshActiveCourse = useCallback(() => {
    return loadActiveCourse();
  }, [loadActiveCourse]);

  return (
    <ActiveCourseContext.Provider value={{
      activeCourse,
      setActiveCourse,
      refreshActiveCourse,
      loading
    }}>
      {children}
    </ActiveCourseContext.Provider>
  );
}

export function useActiveCourse() {
  const context = useContext(ActiveCourseContext);
  if (!context) {
    throw new Error('useActiveCourse must be used within an ActiveCourseProvider');
  }
  return context;
}
