import { Link } from 'react-router-dom';
import styles from './LearnMoreTab.module.scss';
import learn_more from '../../assets/icons/learn_more.svg';

function LearnMoreTab() {
  return (
    <Link to="/about" className={styles.learnMoreTab}>
      <div className={styles.tabBox}>
        <img 
          src={learn_more} 
          alt="Learn More" 
          className={styles.tabImage}
        />
      </div>
    </Link>
  );
}

export default LearnMoreTab;
