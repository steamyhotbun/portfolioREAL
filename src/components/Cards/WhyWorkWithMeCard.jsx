import React, { memo } from 'react';
import './WhyWorkWithMeCard.scss';

function WhyWorkWithMeCard() {
  return (
    <div className="why-work-panel">
      <div className="card-container why-work-card">
        <div className="why-work-card-content">
          <div className="why-work-section">
            <h3 style={{ color: '#FBEDFF' }}>Why work with me?</h3>
            
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
  );
}

export default memo(WhyWorkWithMeCard);
