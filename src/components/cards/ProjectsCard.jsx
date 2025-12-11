import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './ProjectsCard.module.scss';
import projectsList from '../../data/projectsList.json';
import projects_t from '../../assets/icons/projects_t.svg';
import SeeAllTab from '../ui/SeeAllTab';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie, FaHardHat } from 'react-icons/fa';

// Import project images
import proj_0 from '../../assets/images/proj_0.png';
import proj_1 from '../../assets/images/proj_1.png';
import proj_2 from '../../assets/images/proj_2.png';
import proj_3 from '../../assets/images/proj_3.png';
import proj_4 from '../../assets/images/proj_4.png';
import proj_5 from '../../assets/images/proj_5.jpg';

const imageMap = {
  'proj_0': proj_0,
  'proj_1': proj_1,
  'proj_2': proj_2,
  'proj_3': proj_3,
  'proj_4': proj_4,
  'proj_5': proj_5,
};

const iconMap = {
  'FaPalette': FaPalette,
  'FaCode': FaCode,
  'FaVideo': FaVideo,
  'FaGamepad': FaGamepad,
  'FaCamera': FaCamera,
  'FaMobile': FaMobile,
  'FaUserTie': FaUserTie,
  'FaHardHat': FaHardHat,
};

function ProjectsCard() {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 15000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const lastProject = projectsList[projectsList.length - 1];
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <div className={styles.carouselContainer}>
            <div className={styles.titleWrapper}>
              <img src={projects_t} alt="Projects Title" />
            </div>
            {isMobile ? (
              <Link to={`/project/${lastProject.id}`} className={styles.mobileProjectDisplay}>
                <div className={styles.mobileProjectImage}>
                  <img
                    src={imageMap[lastProject.image]}
                    alt={lastProject.name}
                  />
                </div>
                <div className={styles.mobileProjectInfo}>
                  <h3>{lastProject.name}</h3>
                  <div className={styles.projectTags}>
                    {lastProject.tags.map((tag, index) => {
                      const IconComponent = iconMap[tag.icon];
                      return (
                        <span key={index} className={styles.tag}>
                          {IconComponent && <IconComponent />} {tag.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Link>
            ) : (
              <div className={styles.carouselWrapper}>
                <div className={styles.embla} ref={emblaRef}>
                  <div className={styles.emblaContainer}>
                    {projectsList.map((project, index) => (
                    <div key={project.id} className={styles.emblaSlide}>
                      <Link to={`/project/${project.id}`} className={styles.projectCarouselItem}>
                        <img
                          src={imageMap[project.image]}
                          alt={project.name}
                          className={styles.photo}
                          loading="lazy"
                        />
                        <div className={styles.projectOverlay}>
                          <h3 className={styles.projectName}>{project.name}</h3>
                          <div className={styles.projectTags}>
                            {project.tags.map((tag, tagIndex) => {
                              const IconComponent = iconMap[tag.icon];
                              return (
                                <span key={tagIndex} className={styles.tag}>
                                  {IconComponent && <IconComponent />} {tag.label}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                  </div>
                  <button className={styles.emblaPrev} onClick={scrollPrev} aria-label="Previous project">‹</button>
                  <button className={styles.emblaNext} onClick={scrollNext} aria-label="Next project">›</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <SeeAllTab />
      </div>
    </div>
  );
}

export default ProjectsCard;
