import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './InteractiveNavbar.module.scss';
import NavBase from '../../assets/icons/nav_base.svg';
import NavHome from '../../assets/icons/nav_home.svg';
import NavAbout from '../../assets/icons/nav_about.svg';
import NavGallery from '../../assets/icons/nav_gallery.svg';
import NavProjects from '../../assets/icons/nav_projects.svg';

const InteractiveNavbar = () => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    if (path === '/projects' && location.pathname.startsWith('/project/')) {
      return true;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className={styles.navbarContainer}>
      {/* Base decorative SVG - always visible */}
      <img src={NavBase} alt="" className={styles.navBase} loading="eager" />
      
      {/* HOME - Top section */}
      <Link to="/" className={styles.navLink}>
        <img 
          src={NavHome} 
          alt="Home" 
          className={`${styles.navSection} ${styles.navHome} ${isActiveRoute('/') && location.pathname === '/' ? styles.active : ''}`}
          loading="eager"
        />
      </Link>

      {/* ABOUT - Second section */}
      <Link to="/about" className={styles.navLink}>
        <img 
          src={NavAbout} 
          alt="About" 
          className={`${styles.navSection} ${styles.navAbout} ${isActiveRoute('/about') ? styles.active : ''}`}
          loading="lazy"
        />
      </Link>

      {/* GALLERY/DESIGN - Third section */}
      <Link to="/gallery" className={styles.navLink}>
        <img 
          src={NavGallery} 
          alt="Gallery" 
          className={`${styles.navSection} ${styles.navGallery} ${isActiveRoute('/gallery') ? styles.active : ''}`}
          loading="lazy"
        />
      </Link>

      {/* PROJECTS - Bottom section */}
      <Link to="/projects" className={styles.navLink}>
        <img 
          src={NavProjects} 
          alt="Projects" 
          className={`${styles.navSection} ${styles.navProjects} ${isActiveRoute('/projects') || isActiveRoute('/project') ? styles.active : ''}`}
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default InteractiveNavbar;
