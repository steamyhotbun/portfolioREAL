import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfoCard.module.scss';
import cardPhoto from '../../assets/images/1_Home.png';
import LearnMoreTab from '../ui/LearnMoreTab';

function InfoCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <img src={cardPhoto} alt="Alden Talavera" className={styles.photo} loading="lazy" />
          <div className={styles.text}>
            <h1>chase brilliance; inspire someone</h1>
            <p>
              Focused in graphical and motion design I strive to be a storyteller. Experienced in media and product management, I chase my passion to create media that inspires, impresses and innovates.
            </p>
          </div>
        </div>
        <LearnMoreTab />
      </div>
    </div>
  );
}

export default InfoCard;
