import React, { createContext, useContext, useState, useCallback } from 'react';

const TransitionContext = createContext();

export const usePageTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a TransitionProvider');
  }
  return context;
};

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);

  const startTransition = useCallback((route) => {
    setNextRoute(route);
    setIsTransitioning(true);
  }, []);

  const endTransition = useCallback(() => {
    setIsTransitioning(false);
    setNextRoute(null);
  }, []);

  const value = {
    isTransitioning,
    nextRoute,
    startTransition,
    endTransition,
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
};
