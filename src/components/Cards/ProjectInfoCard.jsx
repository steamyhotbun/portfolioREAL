import React, { useState, memo } from 'react';
import styles from './ProjectInfoCard.module.scss';
import projectsTabIcon from '../../assets/PROJECTS_t.svg';
import creativeTabIcon from '../../assets/CREATIVE_t.svg';
import developmentTabIcon from '../../assets/DEVELOPMENT_t.svg';
import graphicsTabIcon from '../../assets/GRAPHICS_t.svg';
import projectsData from '../../../data/projects.json';

const ProjectInfoCard = memo(() => {
  const [activeTab, setActiveTab] = useState('overview');

  const { tabContent } = projectsData;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = (content) => {
    return content.map((section, index) => (
      <div key={index} className={styles.contentSection}>
        <h3 className={styles.sectionHeading}>{section.heading}</h3>
        {section.description && (
          <p className={styles.sectionDescription}>{section.description}</p>
        )}
        {section.items && (
          <ul className={styles.itemsList}>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <div className={styles.projectInfoCard}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => handleTabChange('overview')}
        >
          <img src={projectsTabIcon} alt="Overview" className={styles.tabIcon} />
          Overview
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'development' ? styles.active : ''}`}
          onClick={() => handleTabChange('development')}
        >
          <img src={developmentTabIcon} alt="Development" className={styles.tabIcon} />
          Development
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'creative' ? styles.active : ''}`}
          onClick={() => handleTabChange('creative')}
        >
          <img src={creativeTabIcon} alt="Creative" className={styles.tabIcon} />
          Creative
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'technical' ? styles.active : ''}`}
          onClick={() => handleTabChange('technical')}
        >
          <img src={graphicsTabIcon} alt="Technical" className={styles.tabIcon} />
          Technical
        </button>
      </div>

      <div className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>{tabContent[activeTab].title}</h2>
        <div className={styles.contentBody}>
          {renderContent(tabContent[activeTab].content)}
        </div>
      </div>
    </div>
  );
});

ProjectInfoCard.displayName = 'ProjectInfoCard';

export default ProjectInfoCard;
