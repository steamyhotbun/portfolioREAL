import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ProjectsCard.scss';
import PROJECTS_T from '../../assets/PROJECTS_t.svg';
import SeeAllTab from '../SeeAllTab';
import { useState, useEffect } from 'react';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie } from 'react-icons/fa';

import proj_1 from '../../assets/proj_1.png';
import proj_2 from '../../assets/proj_2.png';
import proj_3 from '../../assets/proj_3.png';
import proj_4 from '../../assets/proj_4.png';

const projects = [
  { 
    id: 'mountain-bike-commercial', 
    name: "Mountain Bike Commercial", 
    image: proj_2, 
    tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }] 
  },
  { 
    id: 'travel-commercial', 
    name: "Travel Commercial", 
    image: proj_3, 
    tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCode, label: "Development" }] 
  },
  { 
    id: 'corsace-manga', 
    name: "Corsace Manga", 
    image: proj_1, 
    tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Product Manager" }] 
  },
  { 
    id: 'corsace-rebrand-2025', 
    name: "Corsace Rebrand 2025", 
    image: proj_4, 
    tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Creative Lead" }] 
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 1 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
};

function ProjectsCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Projects Title - Positioned to overlap the card like before */}
      <div className="projects-title-wrapper" style={{ 
        position: 'absolute',
        top: '-15px',
        left: '18%',
        zIndex: 15,
        transform: 'rotate(-0.02turn)',
        pointerEvents: 'none'
      }}>
        <img src={PROJECTS_T} alt="Projects Title" style={{ height: '60px', objectFit: 'contain' }} />
      </div>
      
      <div className="card-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="card-content" style={{ justifyContent: 'center', position: 'relative' }}>
          <div className="carousel-container">
          {isMobile ? (
            <div className="mobile-project-display">
              <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                <img
                  src={projects[projects.length - 1].image}
                  alt={projects[projects.length - 1].name}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block',
                    transform: 'none'
                  }}
                />
              </div>
              <div className="mobile-project-info">
                <h3>{projects[projects.length - 1].name}</h3>
                <div className="project-tags">
                  {projects[projects.length - 1].tags.map((tag, index) => (
                    <span key={index} className="tag">
                      <tag.icon /> {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Carousel
              responsive={responsive}
              arrows
              showDots
              infinite={true}
              autoPlay={true}
              removeArrowOnDeviceType={[]}
            >
              {projects.map((project, index) => (
                <div key={index} className="carousel-item-gap">
                  <div className="project-carousel-item">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="photo"
                    />
                    <div className="project-overlay">
                      <h3 className="project-name">{project.name}</h3>
                      <div className="project-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag">
                            <tag.icon /> {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
      <SeeAllTab />
    </div>
    </div>
  );
}

export default ProjectsCard;