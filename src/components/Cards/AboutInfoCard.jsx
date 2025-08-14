import React from 'react';
import './AboutInfoCard.scss';
import ABOUT_t from '../../assets/ABOUT_t.svg';
import LOGO from '../../assets/LOGO.svg';

function AboutInfoCard() {
  return (
    <div className="about-info-panel">
      <div className="card-container about-info-card">
        <div className="about-info-card-content">
          <div className="about-info-card-header">
            <img src={ABOUT_t} alt="About Me Details" />
          </div>
          
          <div className="about-info-main">
            <div className="about-intro">
              <h2>Graphics & Motion Designer</h2>
              <div className="about-logo">
                <img src={LOGO} alt="Logo" className="logo-image" />
              </div>
              <p>
                When it comes to design, I trend towards designs that convey movement and 
                energy. Inspired heavily by the game UI trends in recent years, my design 
                philosophy is clean and modern with playful energy.
              </p>
              <p className="about-quote">
                I like designing things that make people smile!
              </p>
            </div>
            
            <div className="about-gallery">
              {/* Gallery placeholder - you'll add images here later */}
              <div className="gallery-item">Image 1</div>
              <div className="gallery-item">Image 2</div>
              <div className="gallery-item">Image 3</div>
            </div>
            
            <div className="find-work">
              <p>find all my previous work here</p>
            </div>
            
            <div className="why-work">
              <h3>Why work with me?</h3>
              
              <div className="qualities">
                <div className="quality-item">
                  <h4>• Adaptability</h4>
                  <p>
                    As someone who strives to be compassionate and understanding, I have a good 
                    grasp of working comfortably with many types of people and in various 
                    environments (group, solo, etc.). Constantly growing and putting myself in new 
                    situations means I can adapt quickly to sudden changes and obstacles to 
                    continue working efficiently.
                  </p>
                </div>
                
                <div className="quality-item">
                  <h4>• Personality</h4>
                  <p>
                    Inspired by game design when I was a kid I've always had a keen eye for game 
                    UI/UX and design. I constantly use it to develop my style. I'm committed to 
                    building my designing skills meaning there is always a high-level of polish 
                    with my work.
                  </p>
                </div>
                
                <div className="quality-item">
                  <h4>• Critical Thinking</h4>
                  <p>
                    As someone who constantly tries to understand himself and others, I have 
                    gotten used to looking at situations from several different perspectives. 
                    This allows me to quickly find solutions to difficult problems and 
                    compromises between parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfoCard;
