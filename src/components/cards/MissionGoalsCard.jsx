import React from 'react';
import styles from './MissionGoalsCard.module.scss';

function MissionGoalsCard() {
  const goals = [
    {
      title: "Short Term",
      description: "I want to get into the streaming and VTubing scene to start my career. I feel it will help me get a good grasp on the streaming and online social media scene. I want to try working for a media company to constantly work on designing assets on a tight schedule to help refine my designing and work process. Learning internet culture and building connections with people with online influence will help my career in the long run."
    },
    {
      title: "Long Term",
      description: "Using all that I've learned from BCIT, I want to create either a game, manga, or any form of media that can be consumed. I want this piece of media to reflect my growth throughout my life and show my journey in finding my happiness. If whatever I make helps even one person feel happy and inspires them to better themselves, I would consider it a success."
    },
    {
      title: "Future Vision",
      description: "I also want to eventually host my own media company one day. I love leading projects and working with other talented people to create truly amazing projects. The combination of leadership, creativity, and collaboration excites me about building something meaningful in the media industry."
    }
  ];

  return (
    <div className={styles.missionGoalsPanel}>
      <h2 className={styles.missionGoalsTitle}>Goals</h2>
      
      <div className={styles.missionGoalsContainer}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.missionCardWrapper}>
            <div className={styles.missionPurpleAccent}></div>
            <div className={styles.missionGoalsCard}>
              <h3 className={styles.missionGoalsCardTitle}>{goal.title}</h3>
              <p className={styles.missionGoalsCardText}>{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionGoalsCard;
