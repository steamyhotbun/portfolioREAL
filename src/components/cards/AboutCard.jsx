import React, { useState, useEffect, useRef } from 'react';
import styles from './AboutCard.module.scss';
import profileImg from '../../assets/images/profile.png';
import PROFILE_T from '../../assets/icons/PROFILE_T.svg';
import ABOUT_T from '../../assets/icons/ABOUT_t.svg';
import SKILLS_T from '../../assets/icons/SKILLS_T.svg';
import MISSION_T from '../../assets/icons/MISSION_T.svg';
import SKILLS_TAB from '../../assets/icons/SKILLS_TAB.svg';
import ABOUT_TAB from '../../assets/icons/ABOUT_TAB.svg';
import MISSION_TAB from '../../assets/icons/MISSION_TAB.svg';

import aboutData from '../../data/about.json';
import missionData from '../../data/mission.json';

function AboutCard({ activeTab, onTabChange, skillsData }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      if (onTabChange) {
        onTabChange(tab);
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const tabContent = {
    skills: (
      <div className={styles.aboutSkills}>
        <h2>I am constantly learning!</h2>
        <p>{skillsData?.description || 'Loading skills information...'}</p>
      </div>
    ),
    about: (
      <div className={styles.aboutInfoPanel}>
        <h2>Who am I?</h2>
        <p>{aboutData.description}</p>
      </div>
    ),
    mission: (
      <div className={styles.aboutMission}>
        <h2>Chase brilliance; inspire someone</h2>
        <p>{missionData.description}</p>
      </div>
    ),
  };

  const tabTitles = {
    skills: SKILLS_T,
    about: ABOUT_T,
    mission: MISSION_T,
  };

  return (
    <div className={styles.aboutPanel}>
      <div className={`${styles.cardContainer} ${styles.aboutCard}`}>
        <div className={styles.aboutLeft}>
          <div className={`${styles.aboutTitle} ${styles.profileTitle}`}>
            <img src={PROFILE_T} alt="Profile Title" />
          </div>
          <div className={styles.aboutProfileImg}>
            <img src={profileImg} alt="Profile" />
          </div>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutDetails}>
              <div>
                <span className={styles.aboutLabel}>Name:</span> Alden Talavera
              </div>
              <div>
                <span className={styles.aboutLabel}>Specialties:</span> Graphics, Video,
              </div>
              <div>
                Media Management
              </div>
              <div>
                <span className={styles.aboutLabel}>Likes:</span> Game Design, Drawing,
              </div>
              <div>
                Learning, Dogs
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutRight}>
          <div className={`${styles.aboutTitle} ${styles.missionTitle}`}>
            <img src={tabTitles[activeTab]} alt="Tab Title" loading="lazy" />
          </div>
          <div className={`${styles.aboutContent} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
            {tabContent[activeTab]}
          </div>
          <div className={styles.aboutTabs}>
            <img
              src={SKILLS_TAB}
              alt="Skills Tab"
              className={`${styles.tabSvg}${activeTab === 'skills' ? ` ${styles.active}` : ''}`}
              onClick={() => handleTabChange('skills')}
              loading="lazy"
            />
            <img
              src={ABOUT_TAB}
              alt="About Tab"
              className={`${styles.tabSvg}${activeTab === 'about' ? ` ${styles.active}` : ''}`}
              onClick={() => handleTabChange('about')}
              loading="lazy"
            />
            <img
              src={MISSION_TAB}
              alt="Mission Tab"
              className={`${styles.tabSvg}${activeTab === 'mission' ? ` ${styles.active}` : ''}`}
              onClick={() => handleTabChange('mission')}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AboutCard);