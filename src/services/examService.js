import { supabase } from '../lib/supabase';

/**
 * Save a completed exam attempt to Supabase
 */
export async function saveExamAttempt(examState, results, settings) {
  try {
    const user = await supabase.auth.getUser();
    if (!user.data.user) {
      throw new Error('No authenticated user');
    }

    const userId = user.data.user.id;

    // Calculate time spent
    const timeSpent = Math.floor((Date.now() - examState.startTime) / 1000);

    // Prepare exam attempt data
    const examAttemptData = {
      user_id: userId,
      course_id: settings.courseId || 'network-plus',
      exam_mode: settings.mode || 'full',
      exam_domain: settings.selectedDomain || null,
      total_questions: results.totalQuestions,
      total_correct: results.totalCorrect,
      total_incorrect: results.totalIncorrect,
      percentage: results.percentage,
      scaled_score: results.scaledScore,
      passed: results.passed,
      earned_points: results.earnedPoints || results.totalCorrect,
      total_possible_points: results.totalPossiblePoints || results.totalQuestions,
      time_started: new Date(examState.startTime).toISOString(),
      time_completed: new Date().toISOString(),
      time_spent_seconds: timeSpent,
      exam_state: {
        questions: examState.questions.map(q => ({
          id: q.id,
          type: q.type || 'mcq',
          domain: q.domain,
          objective: q.objective
        })),
        answers: examState.answers,
        markedForReview: examState.markedForReview,
        mode: settings.mode
      }
    };

    // Insert exam attempt
    const { data: examAttempt, error: examError } = await supabase
      .from('exam_attempts')
      .insert([examAttemptData])
      .select()
      .single();

    if (examError) throw examError;

    // Save domain performance breakdown
    const domainPerformanceData = Object.entries(results.domainScores).map(([domain, score]) => ({
      user_id: userId,
      exam_attempt_id: examAttempt.id,
      domain: domain,
      domain_name: getDomainName(domain),
      total_questions: score.total,
      correct_answers: score.correct,
      percentage: score.percentage
    }));

    const { error: domainError } = await supabase
      .from('domain_performance')
      .insert(domainPerformanceData);

    if (domainError) throw domainError;

    return { success: true, examAttemptId: examAttempt.id };

  } catch (error) {
    console.error('Error saving exam attempt:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get all exam attempts for current user
 */
export async function getExamAttempts(limit = 10, courseId = null) {
  try {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return { data: [], error: null };

    let query = supabase
      .from('exam_attempts')
      .select('*')
      .eq('user_id', user.data.user.id);

    // Filter by courseId if provided
    if (courseId) {
      query = query.eq('course_id', courseId);
    }

    const { data, error } = await query
      .order('created_at', { ascending: false })
      .limit(limit);

    return { data: data || [], error };
  } catch (error) {
    console.error('Error fetching exam attempts:', error);
    return { data: [], error };
  }
}

/**
 * Get domain performance statistics for current user
 */
export async function getDomainStats() {
  try {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return { success: true, data: {}, error: null };

    const { data, error } = await supabase
      .from('domain_performance')
      .select('*')
      .eq('user_id', user.data.user.id);

    if (error) throw error;

    // Aggregate by domain
    const domainStats = {};

    if (data && data.length > 0) {
      data.forEach(record => {
        if (!domainStats[record.domain]) {
          domainStats[record.domain] = {
            domain: record.domain,
            domainName: record.domain_name,
            totalAttempts: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            avgPercentage: 0,
            bestPercentage: 0,
            latestPercentage: 0
          };
        }

        const stats = domainStats[record.domain];
        stats.totalAttempts += 1;
        stats.totalQuestions += record.total_questions;
        stats.totalCorrect += record.correct_answers;
        stats.bestPercentage = Math.max(stats.bestPercentage, record.percentage);
        stats.latestPercentage = record.percentage; // Last one processed
      });

      // Calculate averages
      Object.values(domainStats).forEach(stats => {
        stats.avgPercentage = Math.round(
          (stats.totalCorrect / stats.totalQuestions) * 100
        );
      });
    }

    return { success: true, data: domainStats, error: null };
  } catch (error) {
    console.error('Error fetching domain stats:', error);
    return { success: false, data: {}, error: error.message };
  }
}

/**
 * Get user's exam statistics summary
 */
export async function getExamStats() {
  try {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return { success: true, data: null, error: null };

    const { data, error } = await supabase
      .from('exam_attempts')
      .select('*')
      .eq('user_id', user.data.user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Calculate statistics
    const stats = {
      totalAttempts: data?.length || 0,
      passed: data?.filter(a => a.passed).length || 0,
      failed: data?.filter(a => !a.passed).length || 0,
      avgScore: 0,
      bestScore: 0,
      latestScore: 0,
      avgTimeSpent: 0,
      passRate: 0,
      trend: 'stable', // 'improving', 'declining', 'stable'
      trendMessage: 'Not enough data to determine trend'
    };

    if (data && data.length > 0) {
      stats.avgScore = Math.round(
        data.reduce((sum, a) => sum + a.percentage, 0) / data.length
      );
      stats.bestScore = Math.max(...data.map(a => a.percentage));
      stats.latestScore = data[0].percentage; // Most recent (already sorted DESC)
      stats.avgTimeSpent = Math.round(
        data.reduce((sum, a) => sum + a.time_spent_seconds, 0) / data.length
      );
      stats.passRate = Math.round((stats.passed / data.length) * 100);

      // Calculate trend (compare last 3 vs previous 3)
      if (data.length >= 6) {
        const recent3 = data.slice(0, 3).reduce((sum, a) => sum + a.percentage, 0) / 3;
        const previous3 = data.slice(3, 6).reduce((sum, a) => sum + a.percentage, 0) / 3;
        if (recent3 > previous3 + 5) {
          stats.trend = 'improving';
          stats.trendMessage = 'Your scores are improving!';
        } else if (recent3 < previous3 - 5) {
          stats.trend = 'declining';
          stats.trendMessage = 'Your scores are declining. Keep practicing!';
        } else {
          stats.trend = 'stable';
          stats.trendMessage = 'Your performance is consistent';
        }
      } else if (data.length >= 2) {
        const diff = data[0].percentage - data[1].percentage;
        if (diff > 5) {
          stats.trend = 'improving';
          stats.trendMessage = 'Latest score shows improvement!';
        } else if (diff < -5) {
          stats.trend = 'declining';
          stats.trendMessage = 'Latest score is lower. Review weak areas!';
        } else {
          stats.trend = 'stable';
          stats.trendMessage = 'Performance is stable';
        }
      }
    }

    return { success: true, data: stats, error: null };
  } catch (error) {
    console.error('Error fetching exam stats:', error);
    return { success: false, data: null, error: error.message };
  }
}

/**
 * Get exam history with trend data for charts
 */
export async function getExamHistory(limit = 10) {
  try {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return { data: [], error: null };

    const { data, error } = await supabase
      .from('exam_attempts')
      .select('id, exam_mode, percentage, passed, created_at, time_spent_seconds')
      .eq('user_id', user.data.user.id)
      .order('created_at', { ascending: false })
      .limit(limit);

    return { data: data || [], error };
  } catch (error) {
    console.error('Error fetching exam history:', error);
    return { data: [], error };
  }
}

// Helper function
function getDomainName(domain) {
  const domainNames = {
    '1.0': 'Networking Concepts',
    '2.0': 'Network Implementation',
    '3.0': 'Network Operations',
    '4.0': 'Network Security',
    '5.0': 'Network Troubleshooting'
  };
  return domainNames[domain] || `Domain ${domain}`;
}
