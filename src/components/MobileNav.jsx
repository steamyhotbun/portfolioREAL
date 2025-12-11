import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MobileNav.module.scss';

import HOME from '../assets/HOME.svg';
import ABOUT from '../assets/ABOUT.svg';
import DESIGN from '../assets/DESIGN.svg';
import PROJECTS from '../assets/PROJECTS.svg';
import TITLE from '../assets/TITLE.svg';
import TYPELOGO from '../assets/TYPELOGO.svg';

// Import NavIcon assets
import HOME_ICON from '../assets/HOME_ICON.svg';
import ABOUT_ICON from '../assets/ABOUT_ICON.svg';
import DESIGN_ICON from '../assets/DESIGN_ICON.svg';
import PROJECTS_ICON from '../assets/PROJECTS_ICON.svg';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Get current page icon for the clickable nav button - memoized
  const getCurrentIcon = useMemo(() => {
    let pathname = location.pathname;
    if (pathname.startsWith('/project/')) {
      pathname = '/projects';
    }
    
    const pageIcons = {
      '/': HOME_ICON,
      '/about': ABOUT_ICON,
      '/design': DESIGN_ICON,
      '/projects': PROJECTS_ICON,
    };
    
    return pageIcons[pathname] || HOME_ICON;
  }, [location.pathname]);

  return (
    <>
      <div className={styles.mobileHeader}>
        <div className={styles.logo}>
          <img src={TYPELOGO} alt="Type Logo" />
        </div>
        <button className={styles.navIconButton} onClick={toggleMenu}>
          <img src={getCurrentIcon} alt="Navigation" className={styles.navIcon} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNavLinks}>
          <Link 
            to="/home" 
            className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <img src={HOME} alt="Home" />
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <img src={ABOUT} alt="About" />
          </Link>
          <Link 
            to="/design" 
            className={`${styles.navLink} ${location.pathname === '/design' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <img src={DESIGN} alt="Design" />
          </Link>
          <Link 
            to="/projects" 
            className={`${styles.navLink} ${location.pathname === '/projects' || location.pathname.startsWith('/project') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <img src={PROJECTS} alt="Projects" />
          </Link>
        </nav>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
}

export default React.memo(MobileNav);
