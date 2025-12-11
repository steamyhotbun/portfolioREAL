import React, { useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import ProjectDetailCard from '../components/cards/ProjectDetailCard';
import PdfViewer from '../components/PdfViewer';
import YouTubePlayer from '../components/YouTubePlayer';
import styles from './ProjectDetailPage.module.scss';
import proj_1 from '../assets/images/proj_1.png';
import proj_2 from '../assets/images/proj_2.png';
import proj_3 from '../assets/images/proj_3.png';
import proj_4 from '../assets/images/proj_4.png';
import proj_5 from '../assets/images/proj_5.jpg';
import pi_1 from '../assets/images/p_i1.webp';
import pi_2 from '../assets/images/p_i2.jpg';
import demo_1 from '../assets/videos/demo_1.mp4';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie } from 'react-icons/fa';
import projectDetailsData from '../data/projectDetails.json';

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
  proj_4,
  proj_5
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
      {/* Main Card with Media */}
      <div className={styles.cardWrapper}>
        <div className={styles.purpleAccent}></div>
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            {/* Project Title inside card */}
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <span className={styles.projectNumber}>{project.info.projectNumber}</span>
            
            {/* Media Section - Show appropriate media for each project */}
            <div className={styles.mediaSection}>
              {/* YouTube Player - Mountain Bike Commercial */}
              {project.id === 'corsace-closed-2024-2' && (
                <YouTubePlayer 
                  videoUrl="https://youtu.be/dz1HDiWA__U?si=IhuiYqJcOQJ0ckqd"
                  title="Mountain Bike Commercial"
                />
              )}
              {/* YouTube Player - Travel Commercial */}
              {project.id === 'video-storytelling-project-b-3' && (
                <YouTubePlayer 
                  videoUrl="https://www.youtube.com/watch?v=7Y2b2igMHSk"
                  title="Travel Commercial"
                />
              )}
              {/* PDF Viewer - Corsace Manga */}
              {project.id === 'corsace-closed-2024-1' && (
                <div className={styles.mangaLayout}>
                  <div className={styles.mangaColumn}>
                    <PdfViewer 
                      pdfUrl="https://drive.google.com/file/d/1ULJsLhs7MlaHCGahJvAumVEpg_qBMFwI/view?usp=drive_link"
                      title="Corsace Manga"
                    />
                  </div>
                  <div className={styles.textColumn}>
                    <p className={styles.mangaText}>{project.personalThoughts}</p>
                  </div>
                </div>
              )}
              {/* Video - Corsace Rebrand */}
              {project.id === 'corsace-rebrand-2025' && (
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <video 
                    autoPlay
                    muted
                    loop
                    controls 
                    style={{ 
                      width: '100%', 
                      maxWidth: '800px', 
                      height: 'auto',
                      borderRadius: '8px'
                    }}
                  >
                    <source src={demo_1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              {/* Image - Swiss Poster Miku */}
              {project.id === 'swiss-poster-miku-2024' && (
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src={proj_5}
                    alt="Swiss Poster: Hatsune Miku"
                    style={{ 
                      width: '100%', 
                      maxWidth: '600px', 
                      height: 'auto',
                      borderRadius: '8px'
                    }}
                  />
                </div>
              )}
            </div>
          
            {/* Personal Thoughts - Hidden for manga project since it's shown in the layout */}
            {project.id !== 'corsace-closed-2024-1' && (
              <div className={styles.projectInfo}>
                <div className={styles.personalThoughts}>
                  <p className={styles.thoughtsText}>{project.personalThoughts}</p>
                </div>
              </div>
            )}
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
      
      {/* Combined Details Card - 2 Column Layout with Project Process */}
      <ProjectDetailCard projectData={project} activeTab="combined" />
    </Container>
  );
}

export default ProjectDetailPage;
