import React, { memo } from 'react';
import styles from './WhyWorkWithMeCard.module.scss';

function WhyWorkWithMeCard() {
  return (
    <div className={styles.whyWorkPanel}>
      <div className={styles.whyWorkTwoColumn}>
        {/* Left Column - Why Work With Me */}
        <div className={styles.whyWorkColumn}>
          <h2 className={styles.whyWorkTitle}>Why Work With Me?</h2>
          
          <div className={styles.whyWorkContainer}>
            <div className={styles.cardWrapper}>
              <div className={styles.purpleAccent}></div>
              <div className={styles.whyWorkCard}>
                <h3 className={styles.whyWorkCardTitle}>Adaptability</h3>
                <p className={styles.whyWorkCardText}>
                  As someone who strives to be compassionate and understanding, I have a good 
                  grasp of working comfortably with many types of people and in various 
                  environments (group, solo, etc.). Constantly growing and putting myself in new 
                  situations means I can adapt quickly to sudden changes and obstacles to 
                  continue working efficiently.
                </p>
              </div>
            </div>
            
            <div className={styles.cardWrapper}>
              <div className={styles.purpleAccent}></div>
              <div className={styles.whyWorkCard}>
                <h3 className={styles.whyWorkCardTitle}>Personality</h3>
                <p className={styles.whyWorkCardText}>
                  Inspired by game design when I was a kid I've always had a keen eye for game 
                  UI/UX and design. I constantly use it to develop my style. I'm committed to 
                  building my designing skills meaning there is always a high-level of polish 
                  with my work.
                </p>
              </div>
            </div>
            
            <div className={styles.cardWrapper}>
              <div className={styles.purpleAccent}></div>
              <div className={styles.whyWorkCard}>
                <h3 className={styles.whyWorkCardTitle}>Critical Thinking</h3>
                <p className={styles.whyWorkCardText}>
                  As someone who constantly tries to understand himself and others, I have 
                  gotten used to looking at situations from several different perspectives. 
                  This allows me to quickly find solutions to difficult problems and 
                  compromises between parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Core Values */}
        <div className={styles.whyWorkColumn}>
          <h2 className={styles.whyWorkTitle}>Core Values</h2>
          
          <div className={styles.whyWorkContainer}>
            <div className={styles.cardWrapper}>
              <div className={styles.purpleAccent}></div>
              <div className={styles.whyWorkCard}>
                <h3 className={styles.whyWorkCardTitle}>Empathy</h3>
                <p className={styles.whyWorkCardText}>
                  Feelings are very important to me. Sharing and understanding people's feelings 
                  help me find new perspectives in life and grow as a person. By understanding 
                  people's feelings, I can have deeper connections with others, enabling me to 
                  create friendly, respectful, and positive work environments.
                </p>
              </div>
            </div>
            
            <div className={styles.cardWrapper}>
              <div className={styles.purpleAccent}></div>
              <div className={styles.whyWorkCard}>
                <h3 className={styles.whyWorkCardTitle}>Compassion</h3>
                <p className={styles.whyWorkCardText}>
                  Compassion is important to me as I recognize not everything goes to plan during 
                  a project. Having compassion keeps the workplace positive even in times of 
                  misfortune. Being that positive safe space people can confide in is a great 
                  asset. The rapport built through compassion will be remembered and improve my 
                  credibility.
                </p>
              </div>
            </div>
            
            <div className={styles.cardWrapper}>
              <div className={styles.purpleAccent}></div>
              <div className={styles.whyWorkCard}>
                <h3 className={styles.whyWorkCardTitle}>Growth</h3>
                <p className={styles.whyWorkCardText}>
                  The drive for personal growth fuels me when it comes to work. To grow means 
                  constantly challenging myself to learn new things, try new ideas, and push 
                  the limits of my imagination. It's a powerful motivator not only to do the 
                  best job I can but to constantly improve the quality of my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WhyWorkWithMeCard);
