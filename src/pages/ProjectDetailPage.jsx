import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavIcon from '../components/NavIcon';
import ProjectDetailCard from '../components/Cards/ProjectDetailCard';
import MangaViewer from '../components/MangaViewer';
import PdfViewer from '../components/PdfViewer';
import YouTubePlayer from '../components/YouTubePlayer';
import styles from './ProjectDetailPage.module.scss';
import proj_1 from '../assets/proj_1.png';
import proj_2 from '../assets/proj_2.png';
import pi_1 from '../assets/p_i1.webp';
import pi_2 from '../assets/p_i2.jpg';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie } from 'react-icons/fa';

const projectsData = {
  'corsace-closed-2024-1': {
    id: 'corsace-closed-2024-1',
    title: 'Corsace Manga',
    image: proj_1,
    startDate: 'March 9th, 2024',
    endDate: 'July 19th, 2024',
    totalHours: '73',
    tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Product Manager" }],
    description: 'A creative manga project to promote an online gaming tournament and build a fanbase.',
    details: {
      goal: 'To launch a creative project to promote an online gaming tournament and build a fanbase',
      narrative: {
        planning: {
          description: 'Started when I caught wind of Bae and Brandon joking about making a manga while I was social media manager. I was already working with Julia on character design for our tournament promotion. Knowing Bae\'s artistic talent and Brandon\'s management skills, I approached them to make it reality.',
          points: [
            'Spent a week on logistics (timeframe, topic, publishing, workload)',
            'Acted as product owner and company voice',
            'Ensured script aligned with company goals and character design philosophies',
            'Used Clip Paint Studio for storyboarding and GIMP for rough panel editing'
          ]
        },
        scriptwriting: {
          description: 'Focused on keeping artists happy by preserving their ideas while steering away from excessive workload.',
          points: [
            'Worked through 3 script versions with editing and proofreading in Google Docs',
            'Chose themes of change, staff turnover, and finding purpose',
            'Represented the harsh realities of running a gaming company in the osu! sphere'
          ]
        },
        storyboarding: {
          description: 'Collaborated heavily with all artists on visual planning.',
          points: [
            'Drew rough panels and crude sketches with motion arrows and emotion notes',
            'Built actual sets in Minecraft for team participation and agreement',
            'Ensured everyone could visualize and agree on story locations'
          ]
        },
        drawing: {
          description: 'Acted as scrum master during production phase.',
          points: [
            'Checked in with artists every other day',
            'Maintained constant availability for input and assistance',
            'Proofread and quality-assured pages during creation to save time'
          ]
        },
        publishing: {
          description: 'Investigated online publishing options after story completion.',
          points: [
            'Initially contacted MangaDex, got forwarded to Namicomi',
            'Prepared for publishing when tournament launched',
            'Jumped at opportunity to print physical books',
            'Handled book typography using Photoshop'
          ]
        }
      },
      actions: [
        { period: 'Mar 9th – Mar 16th', task: 'Organization, planning', hours: '20 hours' },
        { period: 'Mar 16th – April 20th', task: 'Scriptwriting and Storyboarding', hours: '20 hours' },
        { period: 'April 23rd – May 20th', task: 'Scrum Meetings, Drawing Process', hours: '20 hours' },
        { period: 'June 1st – June 14th', task: 'Online and Book Publishing', hours: '12 hours' },
        { period: 'July 19th', task: 'Cover Typography', hours: '1 hour' }
      ],
      contributors: [
        { name: 'Alden', role: 'Designer, Writer, Editor, Media/Creative Organizer' },
        { name: 'Brandon (Fulserish)', role: 'Writer, Planner' },
        { name: 'Bae (Honbae)', role: 'Lead Artist, Planner' },
        { name: 'Julia (Nemururin)', role: 'Character Designer' },
        { name: 'Mary (PeachMio)', role: 'Artist' },
        { name: 'Liyah', role: 'Artist' },
        { name: 'Piggy', role: 'Artist' }
      ],
      technical: ['Figma', 'GIMP', 'Clip Paint Studio', 'Photoshop', 'Google Docs'],
      outcome: 'Community reception was amazing; it was an awesome experience as people contacting from all over the gaming scene to congratulate us and say how much they appreciated it. The books were sold at a gaming event and sold instantly, which we were ecstatic about. It also got 3rd in Namicomi\'s popularity of the month which earned us a free Japanese translation. This project is what made me decide to join this program.'
    },
    links: {
      external: [
        {
          title: 'Corsace Website',
          description: 'Official Corsace company website',
          url: 'https://corsace.io/'
        },
        {
          title: 'Corsace Twitch',
          description: 'Live streaming and tournament broadcasts',
          url: 'https://www.twitch.tv/corsace'
        },
        {
          title: 'Corsace YouTube',
          description: 'Tournament highlights and content',
          url: 'https://www.youtube.com/@Corsace'
        },
        {
          title: 'Corsace Manga - PDF',
          description: 'Read the complete manga (PDF)',
          url: 'https://drive.google.com/file/d/1ULJsLhs7MlaHCGahJvAumVEpg_qBMFwI/view?usp=drive_link'
        }
      ]
    },
    info: {
      projectNumber: '4',
      program: 'New Media Design & Web Development Program - BCIT School of Business',
      duration: '4 months, 3 weeks (March 9th - July 19th, 2024)',
      category: 'Creative Design & Publishing',
      status: 'Completed - Published & Printed'
    }
  },
  'corsace-closed-2024-2': {
    id: 'corsace-closed-2024-2',
    title: 'Mountain Bike Commercial',
    image: proj_2,
    startDate: 'January 23rd, 2025',
    endDate: 'February 27th, 2025',
    totalHours: '13',
    tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }],
    description: 'A promotional commercial for a fictitious mountain bike company using provided footage and self-produced video.',
    details: {
      goal: 'Produce a commercial for a fictitious company using a mixture of provided footage and self-produced video to advertise and promote the brand',
      narrative: {
        planning: 'Our team brainstormed ideas for our fictitious company\'s brand and how to reflect their personality in the commercial. After reviewing the provided footage, we decided the tone should be cool, laidback, and fun while maintaining professionalism.',
        preparation: 'We identified two focal points: keeping the viewer entertained and leaving an impactful impression. The company personality should be understood without being explicitly stated. We planned a semi-casual, raw interview to invoke authenticity.',
        filming: 'Set up three-point lighting and dressed the actor. I played a professional dirt biker being interviewed about the company\'s bikes. The character was laid-back and cool to match the brand. All answers were improvised for authenticity.',
        editing: 'Used Adobe Premiere Pro to interlace action shots with interview footage. Applied color correction, created dynamic transitions, and aligned cuts with music timing for optimal pacing.',
        refinement: 'Created the final company logo using a clean, italicized font with speed lines. Added a glitch effect to transition between logo and website information, matching the gritty nature of the footage.'
      },
      actions: [
        { period: 'Jan 30 – Feb 3', task: 'Brainstorm talking points, writing interview prompts', hours: '2 hours' },
        { period: 'Feb 3', task: 'Set up and film all video footage, acting as interviewer', hours: '3 hours' },
        { period: 'Feb 5', task: 'Compiling film/shots to be used', hours: '1 hour' },
        { period: 'Feb 15-17', task: 'Create first draft/structure of commercial', hours: '1 hour' },
        { period: 'Feb 17-22', task: 'Completing commercial', hours: '2 hours' },
        { period: 'Feb 21', task: 'Creating logo and adding company information', hours: '1 hour' },
        { period: 'Feb 22-27', task: 'Final edits and refinement', hours: '3 hours' }
      ],
      contributors: [
        { name: 'Alden Talavera', role: 'Planning, Editing, Acting, Filming' },
        { name: 'Yuhan Liu', role: 'Planning, Sound Design, Filming' },
        { name: 'Ella Bohn', role: 'Planning, Editing, Filming' }
      ],
      technical: ['Adobe Premiere Pro', 'Adobe Illustrator'],
      outcome: 'The commercial successfully displayed personality and the editing paired with music created an entertaining video spectacle that left an impact on the class. Feedback noted the filmed audio had an echoey feel due to the shotgun mic used.'
    },
    links: {
      external: [
        {
          title: 'Planning Document',
          url: 'https://docs.google.com/document/d/1wqj9uDbTRjWfT6pM4mfVQ3XVW1QSXcAps_mdiyW67UA/edit?usp=sharing'
        },
        {
          title: 'Final Video',
          url: 'https://youtu.be/dz1HDiWA__U?si=IhuiYqJcOQJ0ckqd'
        }
      ]
    },
    info: {
      projectNumber: '1',
      program: 'New Media Design & Web Development Program - BCIT School of Business',
      duration: '1 month, 4 days (January 23rd - February 27th, 2025)',
      category: 'Video Production & Commercial Design',
      status: 'Completed - Presented'
    }
  },
};

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectsData[projectId];
  const [activeTab, setActiveTab] = useState('details');

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
  };

  return (
    <Container className={styles.projectDetailContainer}>
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
            <div className={styles.infoRow}>
              <span className={styles.label}>Project Title:</span>
              <span className={styles.value}>{project.title}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Start Date:</span>
              <span className={styles.value}>{project.startDate}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>End Date:</span>
              <span className={styles.value}>{project.endDate}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Total Hours:</span>
              <span className={styles.value}>{project.totalHours}</span>
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
              INFO
            </button>
          </div>
        </div>
      </div>
      
      {/* Project Detail Cards with Tab Functionality */}
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
          {/* YouTube Player - Only for Mountain Bike Commercial project */}
          {project.id === 'corsace-closed-2024-2' && (
            <YouTubePlayer 
              videoUrl="https://youtu.be/dz1HDiWA__U?si=IhuiYqJcOQJ0ckqd"
              title="Mountain Bike Commercial"
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
      
      <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>
    </Container>
  );
}

export default ProjectDetailPage;
