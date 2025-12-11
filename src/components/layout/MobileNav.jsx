import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MobileNav.module.scss';

import TYPELOGO from '../../assets/icons/TYPELOGO.svg';

// Import NavIcon assets
import HOME_ICON from '../../assets/icons/home_icon.svg';
import ABOUT_ICON from '../../assets/icons/about_icon.svg';
import GALLERY_ICON from '../../assets/icons/gallery_icon.svg';
import PROJECTS_ICON from '../../assets/icons/projects_icon.svg';

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
      '/home': HOME_ICON,
      '/about': ABOUT_ICON,
      '/gallery': GALLERY_ICON,
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
            <img src={HOME_ICON} alt="Home" />
          </Link>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <img src={ABOUT_ICON} alt="About" />
          </Link>
          <Link 
            to="/gallery" 
            className={`${styles.navLink} ${location.pathname === '/gallery' ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <img src={GALLERY_ICON} alt="Gallery" />
          </Link>
          <Link 
            to="/projects" 
            className={`${styles.navLink} ${location.pathname === '/projects' || location.pathname.startsWith('/project') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            <img src={PROJECTS_ICON} alt="Projects" />
          </Link>
        </nav>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
}

export default React.memo(MobileNav);