import React, { createContext, useContext, useState, useEffect } from 'react';

const TourContext = createContext();

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};

export const TourProvider = ({ children }) => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  useEffect(() => {
    // Check if user has seen the tour before
    const tourCompleted = localStorage.getItem('certifystack_tour_completed');
    if (!tourCompleted) {
      // Show welcome modal after a brief delay
      const timer = setTimeout(() => {
        setShowWelcome(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  const startTour = () => {
    setShowWelcome(false);
    setTourActive(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const endTour = () => {
    setTourActive(false);
    setCurrentStep(0);
    localStorage.setItem('certifystack_tour_completed', 'true');
    setHasSeenTour(true);
  };

  const skipTour = () => {
    setShowWelcome(false);
    localStorage.setItem('certifystack_tour_completed', 'true');
    setHasSeenTour(true);
  };

  const restartTour = () => {
    setCurrentStep(0);
    setTourActive(true);
  };

  const value = {
    showWelcome,
    setShowWelcome,
    tourActive,
    currentStep,
    hasSeenTour,
    startTour,
    nextStep,
    prevStep,
    endTour,
    skipTour,
    restartTour,
  };

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
};
