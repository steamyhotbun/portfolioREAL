import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './GraphicsDesignerCard.module.scss';
import LOGO from '../../assets/icons/LOGO.svg';
import demo1 from '../../assets/videos/demo_1.mp4';

function GraphicsDesignerCard() {
  return (
    <div className={styles.graphicsDesignerPanel}>
      <div className={styles.purpleAccent}></div>
      <div className={`${styles.cardContainer} ${styles.graphicsDesignerCard}`}>
        <div className={styles.graphicsDesignerCardContent}>
          <div className={styles.videoSection}>
            <video 
              className={styles.demoVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
              loading="lazy"
            >
              <source src={demo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className={styles.textSection}>
            <h2 style={{ color: '#FBEDFF' }}>Graphics & Motion Designer</h2>
            <div className={styles.aboutLogo}>
              <img src={LOGO} alt="Logo" className={styles.logoImage} />
            </div>
            <p>
              When it comes to design, I trend towards designs that convey movement and 
              energy. Inspired heavily by the game UI trends in recent years, my design 
              philosophy is clean and modern with playful energy.
            </p>
            <p className={styles.aboutQuote}>
              I like designing things that make people smile!
            </p>
            <div className={styles.findWork}>
              <Link to="/projects" className={styles.workLink}>
                <p>find all my previous work here</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(GraphicsDesignerCard);
