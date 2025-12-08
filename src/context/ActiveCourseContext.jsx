import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

const ActiveCourseContext = createContext(null);

// localStorage key for course persistence
const STORAGE_KEY = 'certifystack_active_course';

// Helper to get course from localStorage
const getStoredCourse = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

// Helper to save course to localStorage
const setStoredCourse = (courseId) => {
  try {
    localStorage.setItem(STORAGE_KEY, courseId);
  } catch {
    // localStorage not available
  }
};

export function ActiveCourseProvider({ children }) {
  const { user } = useAuth();
  const [activeCourse, setActiveCourseState] = useState(null);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load all available courses for the dropdown
  const loadAllCourses = useCallback(async () => {
    try {
      const { data: courses, error } = await supabase
        .from('courses')
        .select('*')
        .order('order_index', { ascending: true });

      if (!error && courses) {
        setAllCourses(courses);
      }
    } catch (error) {
      console.error('Error loading courses:', error);
    }
  }, []);

  // Load active course from database (with localStorage fallback)
  const loadActiveCourse = useCallback(async () => {
    if (!user) {
      setActiveCourseState(null);
      setLoading(false);
      return;
    }

    try {
      // First, try localStorage for instant load
      const storedCourseId = getStoredCourse();

      // Get the user's active course from profiles (using correct column name: active_course)
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('active_course')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== '42703' && profileError.code !== 'PGRST116') {
        console.error('Error loading active course from profile:', profileError);
        // Fall back to localStorage if DB fails
        if (storedCourseId) {
          await loadCourseData(storedCourseId);
        }
        setLoading(false);
        return;
      }

      // Priority: DB value > localStorage > default
      const courseId = profile?.active_course || storedCourseId || 'network-plus';

      // Sync localStorage with DB value
      setStoredCourse(courseId);

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
    loadAllCourses();
  }, [loadActiveCourse, loadAllCourses]);

  // Function to change the active course (updates DB, localStorage, and state)
  const setActiveCourse = useCallback(async (courseId) => {
    if (!user) return;

    try {
      // Update localStorage immediately for instant feedback
      setStoredCourse(courseId);

      // Update the database (using correct column name: active_course)
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ active_course: courseId })
        .eq('id', user.id);

      if (updateError) {
        console.error('Error updating active course:', updateError);
        // Don't return - localStorage is already updated, state will still work
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
      allCourses,
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
