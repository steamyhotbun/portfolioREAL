import React from 'react';
import styles from './RecentProjectBanner.module.scss';
import RECENT_PROJECTS_T from '../assets/icons/RECENT_PROJECTS_T.svg';

function RecentProjectBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.scroller}>
        {[...Array(15)].map((_, i) => (
          <img
            loading="lazy"
            key={i}
            src={RECENT_PROJECTS_T}
            alt="Recent Projects"
            className={styles.bannerImage}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <img
            loading="lazy"
            key={`duplicate-${i}`}
            src={RECENT_PROJECTS_T}
            alt="Recent Projects"
            className={styles.bannerImage}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(RecentProjectBanner);