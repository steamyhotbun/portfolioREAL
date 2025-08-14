import { Link } from 'react-router-dom';
import styles from './LearnMoreTab.module.scss';
import LEARN_MORE from '../assets/LEARN_MORE.svg';

function LearnMoreTab() {
  return (
    <Link to="/about" className={styles.learnMoreTab}>
      <div className={styles.tabBox}>
        <img 
          src={LEARN_MORE} 
          alt="Learn More" 
          className={styles.tabImage}
        />
      </div>
    </Link>
  );
}

export default LearnMoreTab;
