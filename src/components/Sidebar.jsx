import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import ContactTab from './ContactTab';

import TitleSVG from '../assets/TITLE.svg';
import TypeLogoSVG from '../assets/TYPELOGO.svg';
import HomeSVG from '../assets/HOME.svg';
import AboutSVG from '../assets/about.svg';
import DesignSVG from '../assets/DESIGN.svg';
import ProjectsSVG from '../assets/projects.svg';

const navItems = [
  { to: '/home', label: 'HOME', icon: HomeSVG },
  { to: '/about', label: 'ABOUT', icon: AboutSVG },
  { to: '/design', label: 'DESIGN', icon: DesignSVG },
  { to: '/projects', label: 'PROJECTS', icon: ProjectsSVG },
];

function Sidebar() {
  const location = useLocation();
  return (
    <aside className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <img src={TypeLogoSVG} alt="Type Logo" />
        <img src={TitleSVG} alt="Title Logo" />
      </div>
      <nav>
        {navItems.map((item, a) => (
          <Link
            key={item.to}
            to={item.to}
            className={styles['nav-link']}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={location.pathname === item.to ? styles.active : ''}
            />
          </Link>
        ))}
         <ContactTab />
      </nav>
    </aside>
  );
}

export default Sidebar;