import React, { memo } from 'react';
import './WhyWorkWithMeCard.scss';

function WhyWorkWithMeCard() {
  return (
    <div className="why-work-panel">
      <h2 className="why-work-title">Why Work With Me?</h2>
      
      <div className="why-work-container">
        <div className="why-work-card">
          <h3 className="why-work-card-title">Adaptability</h3>
          <p className="why-work-card-text">
            As someone who strives to be compassionate and understanding, I have a good 
            grasp of working comfortably with many types of people and in various 
            environments (group, solo, etc.). Constantly growing and putting myself in new 
            situations means I can adapt quickly to sudden changes and obstacles to 
            continue working efficiently.
          </p>
        </div>
        
        <div className="why-work-card">
          <h3 className="why-work-card-title">Personality</h3>
          <p className="why-work-card-text">
            Inspired by game design when I was a kid I've always had a keen eye for game 
            UI/UX and design. I constantly use it to develop my style. I'm committed to 
            building my designing skills meaning there is always a high-level of polish 
            with my work.
          </p>
        </div>
        
        <div className="why-work-card">
          <h3 className="why-work-card-title">Critical Thinking</h3>
          <p className="why-work-card-text">
            As someone who constantly tries to understand himself and others, I have 
            gotten used to looking at situations from several different perspectives. 
            This allows me to quickly find solutions to difficult problems and 
            compromises between parties.
          </p>
        </div>
      </div>

      <h2 className="why-work-title core-values-title">Core Values</h2>
      
      <div className="why-work-container">
        <div className="why-work-card">
          <h3 className="why-work-card-title">Empathy</h3>
          <p className="why-work-card-text">
            Feelings are very important to me. Sharing and understanding people's feelings 
            help me find new perspectives in life and grow as a person. By understanding 
            people's feelings, I can have deeper connections with others, enabling me to 
            create friendly, respectful, and positive work environments.
          </p>
        </div>
        
        <div className="why-work-card">
          <h3 className="why-work-card-title">Compassion</h3>
          <p className="why-work-card-text">
            Compassion is important to me as I recognize not everything goes to plan during 
            a project. Having compassion keeps the workplace positive even in times of 
            misfortune. Being that positive safe space people can confide in is a great 
            asset. The rapport built through compassion will be remembered and improve my 
            credibility.
          </p>
        </div>
        
        <div className="why-work-card">
          <h3 className="why-work-card-title">Growth</h3>
          <p className="why-work-card-text">
            The drive for personal growth fuels me when it comes to work. To grow means 
            constantly challenging myself to learn new things, try new ideas, and push 
            the limits of my imagination. It's a powerful motivator not only to do the 
            best job I can but to constantly improve the quality of my work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(WhyWorkWithMeCard);
