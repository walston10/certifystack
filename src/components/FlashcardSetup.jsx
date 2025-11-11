import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, Circle } from 'lucide-react';
import { networkPlusLessons } from '../courses/network-plus/data/lessons';
import { allFlashcards } from '../courses/network-plus/flashcards';
import { getDomainConfig } from '../courses/network-plus/data/domainConfig';
import './FlashcardSetup.css';

function FlashcardSetup() {
  const navigate = useNavigate();
  const [selectedLessons, setSelectedLessons] = useState([]);
  // const [studyMode, setStudyMode] = useState('all'); // 'all', 'new', 'review' - Future feature

  // Group lessons by domain
  const lessonsByDomain = networkPlusLessons.reduce((acc, lesson) => {
    if (!acc[lesson.domain]) {
      acc[lesson.domain] = [];
    }
    acc[lesson.domain].push(lesson);
    return acc;
  }, {});

  const toggleLesson = (lessonId) => {
    setSelectedLessons(prev =>
      prev.includes(lessonId)
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const toggleDomain = (domain) => {
    const domainLessonIds = lessonsByDomain[domain].map(l => l.id);
    const allSelected = domainLessonIds.every(id => selectedLessons.includes(id));

    if (allSelected) {
      // Deselect all lessons in this domain
      setSelectedLessons(prev => prev.filter(id => !domainLessonIds.includes(id)));
    } else {
      // Select all lessons in this domain
      setSelectedLessons(prev => {
        const newSelection = [...prev];
        domainLessonIds.forEach(id => {
          if (!newSelection.includes(id)) {
            newSelection.push(id);
          }
        });
        return newSelection;
      });
    }
  };

  const selectAll = () => {
    setSelectedLessons(networkPlusLessons.map(l => l.id));
  };

  const deselectAll = () => {
    setSelectedLessons([]);
  };

  const startStudying = () => {
    if (selectedLessons.length === 0) {
      alert('Please select at least one lesson to study.');
      return;
    }

    // Gather flashcards from selected lessons
    const cards = [];
    selectedLessons.forEach(lessonId => {
      const lessonCards = allFlashcards[lessonId];
      if (Array.isArray(lessonCards)) {
        cards.push(...lessonCards);
      }
    });

    if (cards.length === 0) {
      alert('No flashcards found for selected lessons.');
      return;
    }

    // Navigate to flashcard practice with selected cards
    navigate('/practice/flashcards', {
      state: {
        cards: cards,
        sessionTitle: `${selectedLessons.length} Lesson${selectedLessons.length > 1 ? 's' : ''} • ${cards.length} Cards`
      }
    });
  };

  const getTotalCards = () => {
    let total = 0;
    selectedLessons.forEach(lessonId => {
      const lessonCards = allFlashcards[lessonId];
      if (Array.isArray(lessonCards)) {
        total += lessonCards.length;
      }
    });
    return total;
  };

  return (
    <div className="flashcard-setup">
      <div className="setup-container">
        {/* Header */}
        <div className="setup-header">
          <CreditCard size={48} className="header-icon" />
          <div>
            <h1>Flashcard Study Session</h1>
            <p>Select the lessons you want to study</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="quick-action-btn" onClick={selectAll}>
            Select All
          </button>
          <button className="quick-action-btn" onClick={deselectAll}>
            Deselect All
          </button>
        </div>

        {/* Study Mode Options (Future feature) */}
        {/* <div className="study-mode-section">
          <h3>Study Mode</h3>
          <div className="mode-options">
            <button
              className={`mode-btn ${studyMode === 'all' ? 'active' : ''}`}
              onClick={() => setStudyMode('all')}
            >
              All Cards
            </button>
            <button
              className={`mode-btn ${studyMode === 'new' ? 'active' : ''}`}
              onClick={() => setStudyMode('new')}
            >
              New Only
            </button>
            <button
              className={`mode-btn ${studyMode === 'review' ? 'active' : ''}`}
              onClick={() => setStudyMode('review')}
            >
              Review Due
            </button>
          </div>
        </div> */}

        {/* Lesson Selection by Domain */}
        <div className="lesson-selection">
          {Object.entries(lessonsByDomain).map(([domain, lessons]) => {
            const domainConfig = getDomainConfig(domain);
            const domainLessonIds = lessons.map(l => l.id);
            const allSelected = domainLessonIds.every(id => selectedLessons.includes(id));
            const someSelected = domainLessonIds.some(id => selectedLessons.includes(id));

            return (
              <div key={domain} className="domain-section">
                <div
                  className="domain-header"
                  onClick={() => toggleDomain(domain)}
                  style={{ borderColor: domainConfig.color }}
                >
                  <div className="domain-info">
                    <span className="domain-icon">{domainConfig.icon}</span>
                    <h3>{domain}</h3>
                    <span className="lesson-count">{lessons.length} lessons</span>
                  </div>
                  <div className={`domain-checkbox ${allSelected ? 'checked' : someSelected ? 'partial' : ''}`}>
                    {allSelected ? <CheckCircle size={24} /> : <Circle size={24} />}
                  </div>
                </div>

                <div className="lessons-grid">
                  {lessons.map(lesson => {
                    const isSelected = selectedLessons.includes(lesson.id);
                    const cardCount = Array.isArray(allFlashcards[lesson.id]) ? allFlashcards[lesson.id].length : 0;

                    return (
                      <div
                        key={lesson.id}
                        className={`lesson-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleLesson(lesson.id)}
                      >
                        <div className="lesson-checkbox">
                          {isSelected ? <CheckCircle size={20} /> : <Circle size={20} />}
                        </div>
                        <div className="lesson-info">
                          <div className="lesson-title">Lesson {lesson.id}: {lesson.title}</div>
                          <div className="lesson-meta">
                            {cardCount} cards
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Summary */}
        <div className="setup-footer">
          <div className="selection-summary">
            <div className="summary-item">
              <span className="summary-label">Lessons Selected:</span>
              <span className="summary-value">{selectedLessons.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Total Cards:</span>
              <span className="summary-value">{getTotalCards()}</span>
            </div>
          </div>
          <div className="footer-actions">
            <button
              className="btn-cancel"
              onClick={() => navigate('/practice')}
            >
              Cancel
            </button>
            <button
              className="btn-start"
              onClick={startStudying}
              disabled={selectedLessons.length === 0}
            >
              Start Studying
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashcardSetup;
