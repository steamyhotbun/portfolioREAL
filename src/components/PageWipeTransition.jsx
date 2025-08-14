import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, memo } from 'react';
import './PageWipeTransition.scss';

const PageWipeTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="page-transition-wrapper">
      <AnimatePresence mode="wait">
        <motion.div 
          key={location.pathname} 
          className="page-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{
            duration: isTransitioning ? 0 : 0.1,
            delay: isTransitioning ? 0 : 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{
            opacity: isTransitioning ? 0 : undefined
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      <motion.div
        className="pink-wipe-overlay"
        key={`transition-${location.pathname}`}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{ 
          display: isTransitioning ? 'block' : 'none',
          backgroundColor: '#D3A7E0' 
        }}
      />
    </div>
  );
};

export default memo(PageWipeTransition);
