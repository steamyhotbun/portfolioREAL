import { Container } from 'react-bootstrap';
import ProjectDisplayCard from '../components/Cards/ProjectDisplayCard';
import RecentProjectBanner from '../components/RecentProjectBanner';
import NavIcon from '../components/NavIcon';
import proj_1 from '../assets/proj_1.png';
import proj_2 from '../assets/proj_2.png';
import styles from './ProjectsPage.module.scss';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie } from 'react-icons/fa';

const projects = [
  { id: 'corsace-closed-2024-1', name: "Corsace Manga", image: proj_1, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Product Manager" }] },
  { id: 'corsace-closed-2024-2', name: "Mountain Bike Commercial", image: proj_2, tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }] },
  { id: 'corsace-closed-2024-3', name: "Corsace Closed 2024", image: proj_1, tags: [{ icon: FaVideo, label: "Video" }] },
  { id: 'corsace-closed-2024-4', name: "Corsace Closed 2024", image: proj_1, tags: [{ icon: FaGamepad, label: "Game" }] },
  { id: 'corsace-closed-2024-5', name: "Corsace Closed 2024", image: proj_1, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaCamera, label: "Photography" }] },
  { id: 'corsace-closed-2024-6', name: "Corsace Closed 2024", image: proj_1, tags: [{ icon: FaCode, label: "Code" }] },
];

function Projects() {
  return (
    <Container className={styles.projectsContainer}>
      <RecentProjectBanner />
      <Container className={styles.projectsGridContainer}>
        <div className={styles.projectGrid}>
          {projects.map((project, b) => (
            <div key={b} className={styles.projectItem}>
              <ProjectDisplayCard
                image={project.image}
                name={project.name}
                tags={project.tags}
                projectId={project.id}
              />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;