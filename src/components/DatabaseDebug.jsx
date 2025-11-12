import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

/**
 * Debug component to check what's in the database
 * Add this to your UserProfile page temporarily to see what data exists
 */
function DatabaseDebug() {
  const { user } = useAuth();
  const [debug, setDebug] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const checkDatabase = async () => {
      const results = {};

      // Check user_progress table
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id);

        results.user_progress = {
          success: !error,
          count: data?.length || 0,
          error: error?.message,
          sample: data?.[0],
          allLessonIds: data?.map(d => d.lesson_id)
        };
      } catch (e) {
        results.user_progress = { error: e.message };
      }

      // Check profiles table
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        results.profiles = {
          success: !error,
          error: error?.message,
          data: data
        };
      } catch (e) {
        results.profiles = { error: e.message };
      }

      // Check quiz_attempts table
      try {
        const { data, error } = await supabase
          .from('quiz_attempts')
          .select('*')
          .eq('user_id', user.id);

        results.quiz_attempts = {
          success: !error,
          count: data?.length || 0,
          error: error?.message
        };
      } catch (e) {
        results.quiz_attempts = { error: e.message };
      }

      // Check lab_submissions table
      try {
        const { data, error } = await supabase
          .from('lab_submissions')
          .select('*')
          .eq('user_id', user.id);

        results.lab_submissions = {
          success: !error,
          count: data?.length || 0,
          error: error?.message
        };
      } catch (e) {
        results.lab_submissions = { error: e.message };
      }

      setDebug(results);
      setLoading(false);
    };

    checkDatabase();
  }, [user]);

  if (loading) return <div style={{ padding: '20px', background: '#1a1a2e', margin: '20px', borderRadius: '8px' }}>Loading debug info...</div>;

  return (
    <div style={{
      padding: '20px',
      background: '#1a1a2e',
      margin: '20px',
      borderRadius: '8px',
      border: '2px solid #00d9ff',
      fontFamily: 'monospace',
      fontSize: '12px'
    }}>
      <h3 style={{ color: '#00d9ff', marginTop: 0 }}>🔍 Database Debug Info</h3>
      <div style={{ color: '#fff' }}>
        <p><strong>User ID:</strong> {user?.id}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      {Object.entries(debug).map(([table, info]) => (
        <div key={table} style={{
          marginTop: '15px',
          padding: '10px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '4px'
        }}>
          <h4 style={{ color: '#00d9ff', margin: '0 0 10px 0' }}>{table}</h4>
          {info.error ? (
            <div style={{ color: '#ff4444' }}>❌ Error: {info.error}</div>
          ) : (
            <>
              <div style={{ color: '#4ade80' }}>✅ Success</div>
              {info.count !== undefined && (
                <div style={{ color: '#fff' }}>Records: {info.count}</div>
              )}
              {info.allLessonIds && (
                <div style={{ color: '#fff' }}>
                  Lesson IDs: {JSON.stringify(info.allLessonIds)}
                </div>
              )}
              {info.data && (
                <div style={{ color: '#fff' }}>
                  <details>
                    <summary style={{ cursor: 'pointer', color: '#00d9ff' }}>View data</summary>
                    <pre style={{
                      marginTop: '10px',
                      padding: '10px',
                      background: '#000',
                      overflow: 'auto',
                      maxHeight: '200px'
                    }}>
                      {JSON.stringify(info.data, null, 2)}
                    </pre>
                  </details>
                </div>
              )}
              {info.sample && (
                <div style={{ color: '#fff' }}>
                  <details>
                    <summary style={{ cursor: 'pointer', color: '#00d9ff' }}>View sample record</summary>
                    <pre style={{
                      marginTop: '10px',
                      padding: '10px',
                      background: '#000',
                      overflow: 'auto'
                    }}>
                      {JSON.stringify(info.sample, null, 2)}
                    </pre>
                  </details>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default DatabaseDebug;
