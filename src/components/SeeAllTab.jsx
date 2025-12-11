import { Link } from 'react-router-dom';
import styles from './SeeAllTab.module.scss';
import SEE_ALL from '../assets/SEE_ALL.svg';

function SeeAllTab() {
  return (
    <Link to="/projects" className={styles.seeAllTab}>
      <div className={styles.tabBox}>
        <img 
          src={SEE_ALL} 
          alt="See All Projects" 
          className={styles.tabImage}
        />
      </div>
    </Link>
  );
}

export default SeeAllTab;