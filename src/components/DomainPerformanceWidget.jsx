import React, { useEffect, useState } from 'react';
import { getDomainStats, getExamStats } from '../services/examService';
import './DomainPerformanceWidget.css';

function DomainPerformanceWidget() {
  const [domainStats, setDomainStats] = useState(null);
  const [examStats, setExamStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const [domains, exams] = await Promise.all([
        getDomainStats(),
        getExamStats()
      ]);

      if (domains.success) {
        setDomainStats(domains.data);
      } else {
        throw new Error(domains.error);
      }

      if (exams.success) {
        setExamStats(exams.data);
      } else {
        throw new Error(exams.error);
      }
    } catch (err) {
      console.error('Error loading stats:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="domain-performance-widget loading">
        <div className="widget-header">
          <h2>Exam Performance Analytics</h2>
        </div>
        <div className="loading-content">
          <div className="spinner"></div>
          <p>Loading your performance data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="domain-performance-widget error">
        <div className="widget-header">
          <h2>Exam Performance Analytics</h2>
        </div>
        <div className="error-content">
          <p>Failed to load analytics: {error}</p>
          <button onClick={loadStats} className="retry-btn">Retry</button>
        </div>
      </div>
    );
  }

  if (!examStats || examStats.totalAttempts === 0) {
    return (
      <div className="domain-performance-widget empty">
        <div className="widget-header">
          <h2>Exam Performance Analytics</h2>
        </div>
        <div className="empty-content">
          <div className="empty-icon">📊</div>
          <p>No exam data yet</p>
          <p className="empty-subtitle">Complete a practice exam to see your performance analytics here</p>
        </div>
      </div>
    );
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return '📈';
      case 'declining': return '📉';
      case 'stable': return '➡️';
      default: return '📊';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'improving': return 'var(--accent-green)';
      case 'declining': return 'var(--error)';
      case 'stable': return 'var(--accent-cyan)';
      default: return 'var(--text-secondary)';
    }
  };

  const getPerformanceColor = (percentage) => {
    if (percentage >= 90) return 'var(--accent-green)';
    if (percentage >= 70) return 'var(--accent-cyan)';
    if (percentage >= 60) return 'var(--warning)';
    return 'var(--error)';
  };

  const weakAreas = domainStats ? Object.values(domainStats).filter(d => d.avgPercentage < 70) : [];

  return (
    <div className="domain-performance-widget">
      <div className="widget-header">
        <h2>Exam Performance Analytics</h2>
        <button onClick={loadStats} className="refresh-btn" title="Refresh data">
          🔄
        </button>
      </div>

      {/* Overall Stats Grid */}
      <div className="overall-stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <div className="stat-label">Total Attempts</div>
            <div className="stat-value">{examStats.totalAttempts}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-label">Average Score</div>
            <div className="stat-value" style={{ color: getPerformanceColor(examStats.avgScore) }}>
              {examStats.avgScore}%
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-label">Best Score</div>
            <div className="stat-value" style={{ color: getPerformanceColor(examStats.bestScore) }}>
              {examStats.bestScore}%
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <div className="stat-label">Avg Time</div>
            <div className="stat-value">{Math.floor(examStats.avgTimeSpent / 60)}m</div>
          </div>
        </div>
      </div>

      {/* Trend Indicator */}
      {examStats.trend && (
        <div className="trend-section">
          <div className="trend-indicator" style={{ borderColor: getTrendColor(examStats.trend) }}>
            <span className="trend-icon">{getTrendIcon(examStats.trend)}</span>
            <span className="trend-text" style={{ color: getTrendColor(examStats.trend) }}>
              {examStats.trendMessage}
            </span>
          </div>
        </div>
      )}

      {/* Pass/Fail Rate */}
      <div className="pass-fail-section">
        <h3>Pass Rate</h3>
        <div className="pass-fail-bar">
          <div
            className="pass-portion"
            style={{ width: `${examStats.passRate}%` }}
            title={`${examStats.passed} passed`}
          >
            {examStats.passRate > 20 && <span>{examStats.passRate}%</span>}
          </div>
          <div
            className="fail-portion"
            style={{ width: `${100 - examStats.passRate}%` }}
            title={`${examStats.failed} failed`}
          >
            {(100 - examStats.passRate) > 20 && <span>{100 - examStats.passRate}%</span>}
          </div>
        </div>
        <div className="pass-fail-labels">
          <span className="pass-label">Passed: {examStats.passed}</span>
          <span className="fail-label">Failed: {examStats.failed}</span>
        </div>
      </div>

      {/* Domain Breakdown */}
      {domainStats && Object.keys(domainStats).length > 0 && (
        <div className="domain-breakdown-section">
          <h3>Performance by Domain</h3>
          <div className="domain-list">
            {Object.entries(domainStats)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([domain, stats]) => (
                <div key={domain} className="domain-stat-item">
                  <div className="domain-stat-header">
                    <div className="domain-stat-info">
                      <span className="domain-code">{domain}</span>
                      <span className="domain-name">{stats.domainName}</span>
                    </div>
                    <div className="domain-stat-score" style={{ color: getPerformanceColor(stats.avgPercentage) }}>
                      {stats.avgPercentage}%
                    </div>
                  </div>
                  <div className="domain-stat-bar">
                    <div
                      className="domain-stat-fill"
                      style={{
                        width: `${stats.avgPercentage}%`,
                        background: getPerformanceColor(stats.avgPercentage)
                      }}
                    ></div>
                  </div>
                  <div className="domain-stat-details">
                    <span>{stats.totalQuestions} questions</span>
                    <span>{stats.totalAttempts} attempts</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Weak Areas Alert */}
      {weakAreas.length > 0 && (
        <div className="weak-areas-alert">
          <div className="alert-header">
            <span className="alert-icon">⚠️</span>
            <h3>Focus Areas</h3>
          </div>
          <p className="alert-description">
            These domains need more practice (below 70%):
          </p>
          <div className="weak-areas-list">
            {weakAreas.map((area) => (
              <div key={area.domain} className="weak-area-item">
                <span className="weak-area-name">{area.domainName}</span>
                <span className="weak-area-score">{area.avgPercentage}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DomainPerformanceWidget;
