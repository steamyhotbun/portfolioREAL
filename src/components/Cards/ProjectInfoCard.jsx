import React, { useState, memo } from 'react';
import styles from './ProjectInfoCard.module.scss';
import projectsTabIcon from '../../assets/PROJECTS_t.svg';
import creativeTabIcon from '../../assets/CREATIVE_t.svg';
import developmentTabIcon from '../../assets/DEVELOPMENT_t.svg';
import graphicsTabIcon from '../../assets/GRAPHICS_t.svg';

const ProjectInfoCard = memo(() => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabContent = {
    overview: {
      title: "Project Overview",
      content: [
        {
          heading: "Recent Projects",
          description: "A comprehensive portfolio showcasing diverse skills in graphics design, web development, and creative solutions. Each project demonstrates technical proficiency and creative problem-solving abilities."
        },
        {
          heading: "Featured Work",
          items: [
            "Corsace Closed 2024 - Tournament Graphics & Branding",
            "Interactive Web Applications with React",
            "Mobile-Responsive Design Solutions",
            "Video Content & Motion Graphics",
            "Game UI/UX Design Elements",
            "Photography & Visual Storytelling"
          ]
        }
      ]
    },
    development: {
      title: "Development Projects",
      content: [
        {
          heading: "Web Development",
          description: "Modern web applications built with cutting-edge technologies including React, Node.js, and responsive design principles.",
          items: [
            "React Portfolio Website - Personal branding with interactive components",
            "Tournament Management System - Full-stack application for esports events",
            "Mobile-First Design Approach - Optimized for all device sizes",
            "API Integration & Data Management",
            "Performance Optimization & User Experience"
          ]
        },
        {
          heading: "Technical Skills",
          items: [
            "Frontend: React, JavaScript, SCSS, HTML5",
            "Backend: Node.js, Express, Database Management",
            "Tools: Git, VS Code, npm/yarn, Build Tools",
            "Design: Responsive Web Design, Accessibility Standards"
          ]
        }
      ]
    },
    creative: {
      title: "Creative Projects",
      content: [
        {
          heading: "Graphics & Design",
          description: "Visual identity and branding projects that combine aesthetic appeal with functional design principles.",
          items: [
            "Tournament Branding - Corsace Closed 2024 visual identity",
            "Logo Design & Brand Development",
            "UI/UX Design for Web Applications",
            "Social Media Graphics & Content",
            "Print Design & Marketing Materials"
          ]
        },
        {
          heading: "Video & Motion",
          description: "Dynamic content creation including video editing, motion graphics, and interactive media.",
          items: [
            "Tournament Highlight Videos",
            "Motion Graphics for Web",
            "Interactive Demo Content",
            "Social Media Video Content",
            "Animation & Transitions"
          ]
        }
      ]
    },
    technical: {
      title: "Technical Details",
      content: [
        {
          heading: "Project Architecture",
          description: "Technical implementation details and development methodology for complex projects.",
          items: [
            "Component-Based Architecture with React",
            "State Management with Hooks and Context",
            "SCSS Modules for Scalable Styling",
            "Responsive Grid Systems & Flexbox",
            "Performance Optimization Techniques"
          ]
        },
        {
          heading: "Development Process",
          items: [
            "Agile Development Methodology",
            "Version Control with Git",
            "Code Review & Quality Assurance",
            "Testing & Debugging Strategies",
            "Deployment & Continuous Integration"
          ]
        }
      ]
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = (content) => {
    return content.map((section, index) => (
      <div key={index} className={styles.contentSection}>
        <h3 className={styles.sectionHeading}>{section.heading}</h3>
        {section.description && (
          <p className={styles.sectionDescription}>{section.description}</p>
        )}
        {section.items && (
          <ul className={styles.itemsList}>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <div className={styles.projectInfoCard}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => handleTabChange('overview')}
        >
          <img src={projectsTabIcon} alt="Overview" className={styles.tabIcon} />
          Overview
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'development' ? styles.active : ''}`}
          onClick={() => handleTabChange('development')}
        >
          <img src={developmentTabIcon} alt="Development" className={styles.tabIcon} />
          Development
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'creative' ? styles.active : ''}`}
          onClick={() => handleTabChange('creative')}
        >
          <img src={creativeTabIcon} alt="Creative" className={styles.tabIcon} />
          Creative
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'technical' ? styles.active : ''}`}
          onClick={() => handleTabChange('technical')}
        >
          <img src={graphicsTabIcon} alt="Technical" className={styles.tabIcon} />
          Technical
        </button>
      </div>

      <div className={styles.contentContainer}>
        <h2 className={styles.contentTitle}>{tabContent[activeTab].title}</h2>
        <div className={styles.contentBody}>
          {renderContent(tabContent[activeTab].content)}
        </div>
      </div>
    </div>
  );
});

ProjectInfoCard.displayName = 'ProjectInfoCard';

export default ProjectInfoCard;
