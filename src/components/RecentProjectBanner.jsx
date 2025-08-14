import styles from './RecentProjectBanner.module.scss';
import RECENT_PROJECTS_T from '../assets/RECENT_PROJECTS_T.svg';

function RecentProjectBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.scroller}>
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={RECENT_PROJECTS_T}
            alt="Recent Projects"
            className={styles.bannerImage}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentProjectBanner;