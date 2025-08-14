import styles from './InfoCard.module.scss';
import cardPhoto from '../../assets/1_Home.png';
import INTRO_T from '../../assets/INTRO_T.svg';
import LearnMoreTab from '../LearnMoreTab';

function InfoCard() {
  return (
    <div className={styles['card-container']} style={{ position: 'relative' }}>
      <div className={styles['card-content']}>
        <div className="about-title info-title" style={{ position: 'absolute', top: '-10px', left: '80%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <img src={INTRO_T} alt="Info Title" />
        </div>
        <img src={cardPhoto} alt="Card" className={styles.photo} />
        <div className={styles.text}>
          <h1>Alden Talavera</h1>
          <p>
            A BCIT New Media and Web Development student focused in graphical and motion design. Experienced in media and product management, I chase my passion to create media that inspires, impresses and innovates.
          </p>
        </div>
      </div>
      <LearnMoreTab />
    </div>
  );
}

export default InfoCard;