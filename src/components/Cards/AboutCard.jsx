import React, { useState } from 'react';
import './AboutCard.scss';
import profileImg from '../../assets/profile.png';
import PROFILE_T from '../../assets/PROFILE_T.svg';
import ABOUT_T from '../../assets/ABOUT_t.svg';
import SKILLS_T from '../../assets/SKILLS_T.svg';
import MISSION_T from '../../assets/MISSION_T.svg';
import SKILLS_TAB from '../../assets/SKILLS_TAB.svg';
import ABOUT_TAB from '../../assets/ABOUT_TAB.svg';
import MISSION_TAB from '../../assets/mission_tab.svg';
import SKILLS_TABi from '../../assets/SKILLS_TABi.svg';
import ABOUT_TABi from '../../assets/ABOUT_TABi.svg';
import MISSION_TABi from '../../assets/MISSION_TABi.svg';


import skillsData from '../../../data/skills.json';
import aboutData from '../../../data/about.json';
import missionData from '../../../data/mission.json';

const tabContent = {
  skills: (
    <div className="about-skills">
      <h2>I am constantly learning!</h2>
      <p>{skillsData.description}</p>
    </div>
  ),
  about: (
    <div className="about-info-panel">
      <h2>Who am I?</h2>
      <p>{aboutData.description}</p>
    </div>
  ),
  mission: (
    <div className="about-mission">
      <h2>Chase brilliance; inspire the world</h2>
      <p>{missionData.description}</p>
    </div>
  ),
};

const tabTitles = {
  skills: SKILLS_T,
  about: ABOUT_T,
  mission: MISSION_T,
};


function AboutCard({ activeTab, onTabChange }) {
  const handleTabChange = (tab) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="about-panel">
      <div className="card-container about-card">
        <div className="about-left">
          <div className="about-title profile-title">
            <img src={PROFILE_T} alt="Profile Title" />
          </div>
          <div className="about-profile-img">
            <img src={profileImg} alt="Profile" />
          </div>
          <div className="about-info">
            <div className="about-details">
              <div>
                <span className="about-label">Name:</span> Alden Talavera
              </div>
              <div>
                <span className="about-label">Specialties:</span> Graphics, Video, Media Management
              </div>
              <div>
                <span className="about-label">Likes:</span> Game Design, Drawing, Learning, Dogs
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-title mission-title">
            <img src={tabTitles[activeTab]} alt="Tab Title" />
          </div>
          <div className="about-content">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
      <div className="about-tabs">
        <img
          src={activeTab === 'skills' ? SKILLS_TAB : SKILLS_TABi}
          alt="Skills Tab"
          className={`tab-svg${activeTab === 'skills' ? ' active' : ''}`}
          onClick={() => handleTabChange('skills')}
        />
        <img
          src={activeTab === 'about' ? ABOUT_TAB : ABOUT_TABi}
          alt="About Tab"
          className={`tab-svg${activeTab === 'about' ? ' active' : ''}`}
          onClick={() => handleTabChange('about')}
        />
        <img
          src={activeTab === 'mission' ? MISSION_TAB : MISSION_TABi}
          alt="Mission Tab"
          className={`tab-svg${activeTab === 'mission' ? ' active' : ''}`}
          onClick={() => handleTabChange('mission')}
        />
      </div>
    </div>
  );
}

export default AboutCard;