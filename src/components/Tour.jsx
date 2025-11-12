import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useTour } from '../context/TourContext';
import './Tour.css';

const tourSteps = [
  {
    id: 'courses',
    title: 'Choose Your Certification',
    description: 'Browse and select from our comprehensive collection of IT certification courses including Network+, Security+, and more.',
    target: '[href="/courses"]',
    placement: 'bottom',
    route: '/courses'
  },
  {
    id: 'lessons',
    title: 'Study Structured Lessons',
    description: 'Each course is broken down into digestible lessons with detailed explanations, diagrams, and key concepts.',
    target: '[href="/lessons"]',
    placement: 'bottom',
    route: '/lessons'
  },
  {
    id: 'labs',
    title: 'Practice in Virtual Labs',
    description: 'Get hands-on experience with interactive labs that simulate real-world scenarios and exam environments.',
    target: '[href="/labs"]',
    placement: 'bottom',
    route: '/labs'
  },
  {
    id: 'flashcards',
    title: 'Master with Flashcards',
    description: 'Reinforce your knowledge using our intelligent flashcard system. Select lessons and study at your own pace.',
    target: '[href="/practice"]',
    placement: 'bottom',
    route: '/practice'
  },
  {
    id: 'practice-exams',
    title: 'Take Practice Exams',
    description: 'Test your readiness with full-length practice exams and quizzes that mirror the real certification tests.',
    target: '[href="/practice"]',
    placement: 'bottom',
    route: '/practice'
  },
  {
    id: 'progress',
    title: 'Track Your Progress',
    description: 'Monitor your learning journey with XP points, completion tracking, and performance analytics.',
    target: '.xp-section, .profile-stats',
    placement: 'left',
    route: '/dashboard'
  },
  {
    id: 'ai-tutor',
    title: 'Get AI-Powered Help',
    description: 'Stuck on a concept? Our AI tutor is available 24/7 to answer questions and provide personalized explanations.',
    target: '[href="/ai-tutor"]',
    placement: 'bottom',
    route: '/ai-tutor'
  }
];

function Tour() {
  const { tourActive, currentStep, nextStep, prevStep, endTour } = useTour();
  const [highlightRect, setHighlightRect] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();
  const location = useLocation();

  const currentTourStep = tourSteps[currentStep];
  const isLastStep = currentStep === tourSteps.length - 1;
  const isFirstStep = currentStep === 0;

  useEffect(() => {
    if (!tourActive || !currentTourStep) return;

    // Navigate to the correct route if needed
    if (currentTourStep.route && location.pathname !== currentTourStep.route) {
      navigate(currentTourStep.route);
    }

    // Wait for navigation and DOM update
    const timer = setTimeout(() => {
      const targetElement = document.querySelector(currentTourStep.target);

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setHighlightRect({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        });

        // Calculate tooltip position
        const tooltipOffset = 20;
        let tooltipTop = rect.top;
        let tooltipLeft = rect.left;

        switch (currentTourStep.placement) {
          case 'bottom':
            tooltipTop = rect.bottom + tooltipOffset;
            tooltipLeft = rect.left + (rect.width / 2);
            break;
          case 'top':
            tooltipTop = rect.top - tooltipOffset;
            tooltipLeft = rect.left + (rect.width / 2);
            break;
          case 'left':
            tooltipTop = rect.top + (rect.height / 2);
            tooltipLeft = rect.left - tooltipOffset;
            break;
          case 'right':
            tooltipTop = rect.top + (rect.height / 2);
            tooltipLeft = rect.right + tooltipOffset;
            break;
          default:
            break;
        }

        setTooltipPosition({ top: tooltipTop, left: tooltipLeft });

        // Scroll element into view
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Element not found, use fallback positioning
        setHighlightRect(null);
        setTooltipPosition({ top: window.innerHeight / 2, left: window.innerWidth / 2 });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [tourActive, currentStep, currentTourStep, location.pathname, navigate]);

  if (!tourActive || !currentTourStep) return null;

  const handleNext = () => {
    if (isLastStep) {
      endTour();
    } else {
      nextStep();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="tour-overlay" onClick={endTour}>
        {/* Highlight spotlight */}
        {highlightRect && (
          <div
            className="tour-spotlight"
            style={{
              top: highlightRect.top - 8,
              left: highlightRect.left - 8,
              width: highlightRect.width + 16,
              height: highlightRect.height + 16,
            }}
          />
        )}
      </div>

      {/* Tooltip */}
      <div
        className={`tour-tooltip tour-tooltip-${currentTourStep.placement}`}
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="tour-close" onClick={endTour} aria-label="Close tour">
          <X size={20} />
        </button>

        <div className="tour-content">
          <div className="tour-step-counter">
            Step {currentStep + 1} of {tourSteps.length}
          </div>

          <h3 className="tour-title">{currentTourStep.title}</h3>
          <p className="tour-description">{currentTourStep.description}</p>

          <div className="tour-actions">
            {!isFirstStep && (
              <button className="tour-btn tour-btn-prev" onClick={prevStep}>
                <ChevronLeft size={20} />
                Previous
              </button>
            )}

            <button className="tour-btn tour-btn-next" onClick={handleNext}>
              {isLastStep ? 'Finish' : 'Next'}
              {!isLastStep && <ChevronRight size={20} />}
            </button>
          </div>

          <button className="tour-skip" onClick={endTour}>
            Skip tour
          </button>
        </div>

        {/* Progress dots */}
        <div className="tour-progress">
          {tourSteps.map((_, index) => (
            <div
              key={index}
              className={`tour-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tour;
