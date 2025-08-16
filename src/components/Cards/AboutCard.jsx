import React, { useState } from 'react';
import './AboutCard.scss';
import profileImg from '../../assets/profile.png';
import PROFILE_T from '../../assets/PROFILE_T.svg';
import ABOUT_T from '../../assets/ABOUT_t.svg';
import SKILLS_T from '../../assets/SKILLS_T.svg';
import MISSION_T from '../../assets/MISSION_T.svg';
import SKILLS_TAB from '../../assets/SKILLS_TAB.svg';
import ABOUT_TAB from '../../assets/ABOUT_TAB.svg';
import MISSION_TAB from '../../assets/MISSION_TAB.svg';
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
      
      {activeTab === 'mission' && (
        <div className="mission-goals-panel">
          <h2 className="mission-goals-title">Goals</h2>
          
          <div className="mission-goals-container">
            <div className="mission-goals-card">
              <h3 className="mission-goals-card-title">Short Term</h3>
              <p className="mission-goals-card-text">
                I want to get into the streaming and VTubing scene to start my career. I feel 
                it will help me get a good grasp on the streaming and online social media 
                scene. I want to try working for a media company to constantly work on 
                designing assets on a tight schedule to help refine my designing and work 
                process. Learning internet culture and building connections with people with 
                online influence will help my career in the long run.
              </p>
            </div>
            
            <div className="mission-goals-card">
              <h3 className="mission-goals-card-title">Long Term</h3>
              <p className="mission-goals-card-text">
                Using all that I've learned from BCIT, I want to create either a game, manga, 
                or any form of media that can be consumed. I want this piece of media to 
                reflect my growth throughout my life and show my journey in finding my 
                happiness. If whatever I make helps even one person feel happy and inspires 
                them to better themselves, I would consider it a success.
              </p>
            </div>
            
            <div className="mission-goals-card">
              <h3 className="mission-goals-card-title">Future Vision</h3>
              <p className="mission-goals-card-text">
                I also want to eventually host my own media company one day. I love leading 
                projects and working with other talented people to create truly amazing 
                projects. The combination of leadership, creativity, and collaboration 
                excites me about building something meaningful in the media industry.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutCard;