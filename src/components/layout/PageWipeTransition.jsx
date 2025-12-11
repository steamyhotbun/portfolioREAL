import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, memo } from 'react';
import './PageWipeTransition.scss';

const PageWipeTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [wipeKey, setWipeKey] = useState(0);

  useEffect(() => {
    setIsTransitioning(true);
    setWipeKey(prev => prev + 1);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="page-transition-wrapper">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname} 
            className="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{
              duration: isTransitioning ? 0 : 0.2,
              delay: isTransitioning ? 0 : 0.05,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <motion.div
        className="pink-wipe-overlay"
        key={wipeKey}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{
          display: isTransitioning ? 'block' : 'none'
        }}
      />
    </>
  );
};

export default memo(PageWipeTransition);
