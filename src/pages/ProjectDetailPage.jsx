import React, { useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavIcon from '../components/NavIcon';
import ProjectDetailCard from '../components/Cards/ProjectDetailCard';
import MangaViewer from '../components/MangaViewer';
import PdfViewer from '../components/PdfViewer';
import YouTubePlayer from '../components/YouTubePlayer';
import styles from './ProjectDetailPage.module.scss';
import proj_1 from '../assets/proj_1.png';
import proj_2 from '../assets/proj_2.png';
import proj_3 from '../assets/proj_3.png';
import proj_4 from '../assets/proj_4.png';
import pi_1 from '../assets/p_i1.webp';
import pi_2 from '../assets/p_i2.jpg';
import demo_1 from '../assets/demo_1.mp4';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie } from 'react-icons/fa';
import projectDetailsData from '../../data/projectDetails.json';

// Icon mapping for JSON data
const iconMap = {
  FaPalette,
  FaCode,
  FaVideo,
  FaGamepad,
  FaCamera,
  FaMobile,
  FaUserTie
};

// Image mapping for JSON data
const imageMap = {
  proj_1,
  proj_2,
  proj_3,
  proj_4
};

// Convert JSON data to component-ready format
const convertProjectData = (data) => {
  const converted = {};
  Object.keys(data).forEach(key => {
    if (key === 'projectOrder') {
      converted[key] = data[key];
      return;
    }
    
    const project = { ...data[key] };
    
    // Convert image reference
    if (project.image && imageMap[project.image]) {
      project.image = imageMap[project.image];
    }
    
    // Convert tag icons
    if (project.tags) {
      project.tags = project.tags.map(tag => ({
        ...tag,
        icon: iconMap[tag.icon] || tag.icon
      }));
    }
    
    converted[key] = project;
  });
  return converted;
};

const projectsData = convertProjectData(projectDetailsData);
const projectOrder = projectDetailsData.projectOrder;
function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];
  const [activeTab, setActiveTab] = useState('details');
  const contentRef = useRef(null);

  const currentIndex = projectOrder.indexOf(projectId);
  const previousProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;

  const handlePreviousProject = () => {
    if (previousProject) {
      navigate(`/project/${previousProject}`);
    }
  };

  const handleNextProject = () => {
    if (nextProject) {
      navigate(`/project/${nextProject}`);
    }
  };

  if (!project) {
    return (
      <Container>
        <h2>Project not found</h2>
        <Link to="/projects">← Back to Projects</Link>
      </Container>
    );
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <Container className={styles.projectDetailContainer}>
      {/* Large Project Title */}
      <div className={styles.mainTitleContainer}>
        <h1 className={styles.mainProjectTitle}>{project.info.projectNumber}: {project.title}</h1>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectTags}>
              {project.tags.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <div key={index} className={styles.tagWrapper} data-tooltip={tag.label}>
                    <IconComponent className={styles.tagIcon} />
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className={styles.projectInfo}>
            <div className={styles.personalThoughts}>
              <p className={styles.thoughtsText}>{project.personalThoughts}</p>
            </div>
          </div>
          
          
          <div className={styles.actionButtons}>
            <button 
              className={`${styles.actionBtn} ${activeTab === 'links' ? styles.active : ''}`}
              onClick={() => handleTabChange('links')}
            >
              LINKS
            </button>
            <button 
              className={`${styles.actionBtn} ${activeTab === 'details' ? styles.active : ''}`}
              onClick={() => handleTabChange('details')}
            >
              DETAILS
            </button>
            <button 
              className={`${styles.actionBtn} ${activeTab === 'info' ? styles.active : ''}`}
              onClick={() => handleTabChange('info')}
            >
              TECHNICAL
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className={styles.navigationControls}>
        <div className={styles.projectNavigation}>
          {previousProject && (
            <button 
              onClick={handlePreviousProject}
              className={styles.navBtn}
            >
              ← Previous Project
            </button>
          )}
          {nextProject && (
            <button 
              onClick={handleNextProject}
              className={styles.navBtn}
            >
              Next Project →
            </button>
          )}
        </div>
        <Link to="/projects" className={styles.backLink}>Back to Projects Page</Link>
      </div>
      
      {/* Project Detail Cards with Tab Functionality */}
      <div ref={contentRef}>
        {activeTab === 'details' && (
          <>
            <ProjectDetailCard projectData={project} activeTab="goal" />
            <ProjectDetailCard projectData={project} activeTab="details" />
          </>
        )}
        {activeTab === 'links' && (
        <>
          {/* PDF Viewer - Only for Corsace Manga project */}
          {project.id === 'corsace-closed-2024-1' && (
            <>
              <PdfViewer 
                pdfUrl="https://drive.google.com/file/d/1ULJsLhs7MlaHCGahJvAumVEpg_qBMFwI/view?usp=drive_link"
                title="Corsace Manga"
              />
              <div style={{ display: 'flex', flexDirection: 'row', gap: 24, justifyContent: 'center', margin: '32px 0' }}>
                <img src={pi_1} alt="Corsace Manga 1" style={{ maxWidth: 240, width: '100%', borderRadius: 16 }} />
                <img src={pi_2} alt="Corsace Manga 2" style={{ maxWidth: 240, width: '100%', borderRadius: 16 }} />
              </div>
            </>
          )}
          {/* Intro Bumper Video - Only for Corsace Rebrand project */}
          {project.id === 'corsace-rebrand-2025' && (
            <div style={{ marginBottom: '20px' }}>
              <video 
                autoPlay
                muted
                loop
                controls 
                style={{ 
                  width: '100%', 
                  maxWidth: '800px', 
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
                }}
              >
                <source src={demo_1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {/* YouTube Player - Only for Mountain Bike Commercial project */}
          {project.id === 'corsace-closed-2024-2' && (
            <YouTubePlayer 
              videoUrl="https://youtu.be/dz1HDiWA__U?si=IhuiYqJcOQJ0ckqd"
              title="Mountain Bike Commercial"
            />
          )}
          {/* YouTube Player - Only for Travel Commercial project */}
          {project.id === 'video-storytelling-project-b-3' && (
            <YouTubePlayer 
              videoUrl="https://www.youtube.com/watch?v=7Y2b2igMHSk"
              title="Travel Commercial"
            />
          )}
          <ProjectDetailCard projectData={project} activeTab="links" />
        </>
      )}
      {activeTab === 'info' && (
        <>
          <ProjectDetailCard projectData={project} activeTab="technical" />
          <ProjectDetailCard projectData={project} activeTab="timeline" />
          <ProjectDetailCard projectData={project} activeTab="contributors" />
        </>
      )}
      </div>
    </Container>
  );
}

export default ProjectDetailPage;
