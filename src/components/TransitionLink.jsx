import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePageTransition } from '../contexts/TransitionContext';

const TransitionLink = ({ to, children, className, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { startTransition } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    
    // Don't transition if we're already on the target page
    if (location.pathname === to) {
      return;
    }

    // Start the transition
    startTransition(to);
    
    // Navigate after a short delay to let the transition start
    setTimeout(() => {
      navigate(to);
    }, 300);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default TransitionLink;
