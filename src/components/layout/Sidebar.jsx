import styles from './Sidebar.module.scss';
import InteractiveNavbar from './InteractiveNavbar';
import NavProfileSVG from '../../assets/icons/nav_profile.svg';

function Sidebar() {
  return (
    <aside className={styles.sidebar} role="navigation" aria-label="Main navigation">
      {/* Profile Graphic */}
      <div className={styles.navProfile}>
        <img src={NavProfileSVG} alt="Profile" />
      </div>

      {/* Interactive Combined Navbar */}
      <InteractiveNavbar />

      {/* Contact Section */}
      <div className={styles.contact}>
        {/* Contact content will go here */}
      </div>
    </aside>
  );
}

export default Sidebar;
