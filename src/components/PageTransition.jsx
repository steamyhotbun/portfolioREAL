import React, { useState, useEffect } from 'react';
import './PageTransition.scss';

const PageTransition = ({ children, trigger }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (trigger) {
      // Start transition
      setIsTransitioning(true);
      setShowContent(false);
      
      // After transition completes, show new content
      setTimeout(() => {
        setShowContent(true);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 600); // Match CSS animation duration
    }
  }, [trigger]);

  return (
    <div className="page-transition-container">
      <div className={`page-content ${showContent ? 'visible' : 'hidden'}`}>
        {children}
      </div>
      <div className={`wipe-overlay ${isTransitioning ? 'active' : ''}`}></div>
    </div>
  );
};

export default PageTransition;
