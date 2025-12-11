import { Link } from 'react-router-dom';
import styles from './SeeAllTab.module.scss';
import see_all from '../../assets/icons/see_all.svg';

function SeeAllTab() {
  return (
    <Link to="/projects" className={styles.seeAllTab}>
      <div className={styles.tabBox}>
        <img 
          src={see_all} 
          alt="See All Projects" 
          className={styles.tabImage}
        />
      </div>
    </Link>
  );
}

export default SeeAllTab;
