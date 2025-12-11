import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './GraphicsDesignerCard.scss';
import LOGO from '../../assets/LOGO.svg';
import demo1 from '../../assets/demo_1.mp4';

function GraphicsDesignerCard() {
  return (
    <div className="graphics-designer-panel">
      <div className="card-container graphics-designer-card">
        <div className="graphics-designer-card-content">
          <div className="graphics-intro">
            <h2 style={{ color: '#FBEDFF' }}>Graphics & Motion Designer</h2>
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
            <video 
              className="demo-video"
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
          
          <div className="find-work">
            <Link to="/projects" className="work-link">
              <p>find all my previous work here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(GraphicsDesignerCard);
