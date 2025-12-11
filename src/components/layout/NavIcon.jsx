import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './NavIcon.module.scss';

import HOME_ICON from '../../assets/icons/home_icon.svg';
import ABOUT_ICON from '../../assets/icons/about_icon.svg';
import GALLERY_ICON from '../../assets/icons/gallery_icon.svg';
import PROJECTS_ICON from '../../assets/icons/projects_icon.svg';

const pageIcons = {
  '/': HOME_ICON,
  '/home': HOME_ICON,
  '/about': ABOUT_ICON,
  '/gallery': GALLERY_ICON,
  '/projects': PROJECTS_ICON,
};

function NavIcon() {
  const location = useLocation();
  
  const getCurrentIconData = React.useMemo(() => {
    let pathname = location.pathname;
    if (pathname.startsWith('/project/')) {
      pathname = '/projects';
    }
    
    const iconData = {
      '/': { src: HOME_ICON, className: styles.homeIcon },
      '/home': { src: HOME_ICON, className: styles.homeIcon },
      '/about': { src: ABOUT_ICON, className: styles.aboutIcon },
      '/gallery': { src: GALLERY_ICON, className: styles.galleryIcon },
      '/projects': { src: PROJECTS_ICON, className: styles.projectsIcon },
    };
    
    return iconData[pathname];
  }, [location.pathname]);

  if (!getCurrentIconData) return null;

  return (
    <div className={styles.navIcon}>
      <img src={getCurrentIconData.src} alt="Current Page" className={getCurrentIconData.className} />
    </div>
  );
}

export default React.memo(NavIcon);