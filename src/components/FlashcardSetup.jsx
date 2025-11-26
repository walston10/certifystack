import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CreditCard, CheckCircle, Circle, Lock, BookOpen } from 'lucide-react';
import { supabase } from '../lib/supabase';
import './FlashcardSetup.css';

// Default domain config for courses without domainConfig
const defaultDomainConfig = {
  color: '#00d9ff',
  icon: 'Book'
};

function FlashcardSetup() {
  const navigate = useNavigate();
  const { courseId: urlCourseId } = useParams();
  const courseId = urlCourseId || 'network-plus';

  const [selectedLessons, setSelectedLessons] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [allFlashcards, setAllFlashcards] = useState({});
  const [domainConfigModule, setDomainConfigModule] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load course data dynamically
  useEffect(() => {
    const loadCourseData = async () => {
      setLoading(true);
      try {
        let lessonsModule, flashcardsModule, configModule;

        switch (courseId) {
          case 'network-plus':
            lessonsModule = await import('../courses/network-plus/data/lessons');
            flashcardsModule = await import('../courses/network-plus/flashcards');
            configModule = await import('../courses/network-plus/data/domainConfig');
            break;
          case 'a-plus-core1':
            lessonsModule = await import('../courses/a-plus-core1/data/lessons');
            flashcardsModule = await import('../courses/a-plus-core1/flashcards');
            configModule = null;
            break;
          case 'a-plus-core2':
            lessonsModule = await import('../courses/a-plus-core2/data/lessons');
            flashcardsModule = await import('../courses/a-plus-core2/flashcards');
            configModule = null;
            break;
          default:
            lessonsModule = await import('../courses/network-plus/data/lessons');
            flashcardsModule = await import('../courses/network-plus/flashcards');
            configModule = await import('../courses/network-plus/data/domainConfig');
        }

        const loadedLessons = lessonsModule.networkPlusLessons ||
                            lessonsModule.aPlusCore1Lessons ||
                            lessonsModule.aPlusCore2Lessons ||
                            lessonsModule.default ||
                            [];

        setLessons(loadedLessons);
        setAllFlashcards(flashcardsModule.allFlashcards || {});
        setDomainConfigModule(configModule);
      } catch (err) {
        console.error('Error loading course data:', err);
        setLessons([]);
        setAllFlashcards({});
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, [courseId]);

  // Load membership tier
  useEffect(() => {
    const loadMembershipTier = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('membership_tier')
            .eq('id', user.id)
            .single();

          setIsPremium(profile?.membership_tier === 'premium');
        }
      } catch (error) {
        console.error('Error loading membership tier:', error);
      }
    };

    loadMembershipTier();
  }, []);

  // Group lessons by domain
  const lessonsByDomain = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.domain]) {
      acc[lesson.domain] = [];
    }
    acc[lesson.domain].push(lesson);
    return acc;
  }, {});

  const getDomainConfig = (domain) => {
    if (domainConfigModule && domainConfigModule.getDomainConfig) {
      return domainConfigModule.getDomainConfig(domain);
    }
    return defaultDomainConfig;
  };

  const isLessonLocked = (lessonId) => {
    return lessonId > 3 && !isPremium;
  };

  const handleUpgrade = () => {
    window.location.href = 'https://buy.stripe.com/3cI8wPewj6FWbwJ1UVcEw01';
  };

  const toggleLesson = (lessonId) => {
    if (isLessonLocked(lessonId)) {
      handleUpgrade();
      return;
    }

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
      setSelectedLessons(prev => prev.filter(id => !domainLessonIds.includes(id)));
    } else {
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
    setSelectedLessons(lessons.map(l => l.id));
  };

  const deselectAll = () => {
    setSelectedLessons([]);
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startStudying = () => {
    if (selectedLessons.length === 0) {
      alert('Please select at least one lesson to study.');
      return;
    }

    const cards = [];
    selectedLessons.forEach(lessonId => {
      const lessonCards = allFlashcards[lessonId];
      if (Array.isArray(lessonCards)) {
        const cardsWithLesson = lessonCards.map(card => ({
          ...card,
          lessonId: lessonId,
          courseId: courseId  // Attach courseId for course-aware progress tracking
        }));
        cards.push(...cardsWithLesson);
      }
    });

    if (cards.length === 0) {
      alert('No flashcards found for selected lessons.');
      return;
    }

    const shuffledCards = shuffleArray(cards);

    navigate('/practice/flashcards', {
      state: {
        cards: shuffledCards,
        sessionTitle: `${selectedLessons.length} Lesson${selectedLessons.length > 1 ? 's' : ''} - ${cards.length} Cards`,
        courseId
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

  if (loading) {
    return (
      <div className="flashcard-setup">
        <div className="setup-container">
          <div className="setup-header">
            <CreditCard size={48} className="header-icon" />
            <div>
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard-setup">
      <div className="setup-container">
        <div className="setup-header">
          <CreditCard size={48} className="header-icon" />
          <div>
            <h1>Flashcard Study Session</h1>
            <p>Select the lessons you want to study</p>
          </div>
        </div>

        <div className="quick-actions">
          <button className="quick-action-btn" onClick={selectAll}>
            Select All
          </button>
          <button className="quick-action-btn" onClick={deselectAll}>
            Deselect All
          </button>
        </div>

        <div className="lesson-selection">
          {Object.entries(lessonsByDomain).map(([domain, domainLessons]) => {
            const domainConfig = getDomainConfig(domain);
            const domainLessonIds = domainLessons.map(l => l.id);
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
                    <span className="domain-icon">{domainConfig.icon || <BookOpen size={20} />}</span>
                    <h3>{domain}</h3>
                    <span className="lesson-count">{domainLessons.length} lessons</span>
                  </div>
                  <div className={`domain-checkbox ${allSelected ? 'checked' : someSelected ? 'partial' : ''}`}>
                    {allSelected ? <CheckCircle size={24} /> : <Circle size={24} />}
                  </div>
                </div>

                <div className="lessons-grid">
                  {domainLessons.map(lesson => {
                    const isSelected = selectedLessons.includes(lesson.id);
                    const locked = isLessonLocked(lesson.id);
                    const cardCount = Array.isArray(allFlashcards[lesson.id]) ? allFlashcards[lesson.id].length : 0;

                    return (
                      <div
                        key={lesson.id}
                        className={`lesson-card ${isSelected ? 'selected' : ''} ${locked ? 'locked' : ''}`}
                        onClick={() => toggleLesson(lesson.id)}
                      >
                        <div className="lesson-checkbox">
                          {locked ? (
                            <Lock size={20} />
                          ) : isSelected ? (
                            <CheckCircle size={20} />
                          ) : (
                            <Circle size={20} />
                          )}
                        </div>
                        <div className="lesson-info">
                          <div className="lesson-title">Lesson {lesson.id}: {lesson.title}</div>
                          <div className="lesson-meta">
                            {locked ? 'Premium Only' : `${cardCount} cards`}
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
