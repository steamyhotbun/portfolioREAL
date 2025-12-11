import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './NavIcon.module.scss';

import HOME_ICON from '../assets/HOME_ICON.svg';
import ABOUT_ICON from '../assets/ABOUT_ICON.svg';
import DESIGN_ICON from '../assets/DESIGN_ICON.svg';
import PROJECTS_ICON from '../assets/PROJECTS_ICON.svg';

const pageIcons = {
  '/': ABOUT_ICON,
  '/home': HOME_ICON,
  '/about': ABOUT_ICON,
  '/design': DESIGN_ICON,
  '/projects': PROJECTS_ICON,
};

function NavIcon() {
  const location = useLocation();
  
  const currentIcon = React.useMemo(() => {
    let pathname = location.pathname;
    if (pathname.startsWith('/project/')) {
      pathname = '/projects';
    }
    return pageIcons[pathname];
  }, [location.pathname]);

  if (!currentIcon) return null;

  return (
    <div className={styles.navIcon}>
      <img src={currentIcon} alt="Current Page" className={styles.icon} />
    </div>
  );
}

export default React.memo(NavIcon);
