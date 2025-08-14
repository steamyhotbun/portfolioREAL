import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ProjectsCard.scss';
import PROJECTS_T from '../../assets/PROJECTS_T.svg';
import SeeAllTab from '../SeeAllTab';
import { useState, useEffect } from 'react';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie } from 'react-icons/fa';

import proj_1 from '../../assets/proj_1.png';
import proj_2 from '../../assets/proj_2.png';
import proj_3 from '../../assets/proj_3.png';

// Project data with proper images
const projects = [
  { 
    id: 'corsace-manga', 
    name: "Corsace Manga", 
    image: proj_1, 
    tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Product Manager" }] 
  },
  { 
    id: 'mountain-bike-commercial', 
    name: "Mountain Bike Commercial", 
    image: proj_2, 
    tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }] 
  },
  { 
    id: 'corsace-closed-2024', 
    name: "Project B Commercial", 
    image: proj_3, 
    tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCode, label: "Development" }] 
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
    <div className="card-container" style={{ position: 'relative', zIndex: 10 }}>
      <div className="card-content" style={{ justifyContent: 'center', position: 'relative' }}>
        <div className="about-title projects-title" style={{ position: 'absolute', top: '-80px', left: '-2%', transform: 'translateX(-50%)', transform: 'rotate(-0.02turn)', zIndex: 10 }}>
          <img src={PROJECTS_T} alt="Projects Title" />
        </div>
        <div className="carousel-container">
          {isMobile ? (
            // Static display for mobile - shows latest project with info
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
            //desktop carousel with project data
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
  );
}

export default ProjectsCard;