import React, { useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Fuse from 'fuse.js';
import ProjectDisplayCard from '../components/Cards/ProjectDisplayCard';
import RecentProjectBanner from '../components/RecentProjectBanner';
import NavIcon from '../components/NavIcon';
import proj_0 from '../assets/proj_0.png';
import proj_1 from '../assets/proj_1.png';
import proj_2 from '../assets/proj_2.png';
import proj_3 from '../assets/proj_3.png';
import proj_4 from '../assets/proj_4.png';
import styles from './ProjectsPage.module.scss';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie, FaHardHat, FaSearch } from 'react-icons/fa';

const projects = [
  { id: 'corsace-closed-2024-2', name: "Mountain Bike Commercial", image: proj_2, tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }] },
  { id: 'video-storytelling-project-b-3', name: "Travel Commercial", image: proj_3, tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }, { icon: FaPalette, label: "Graphics" }] },
  { id: 'corsace-closed-2024-1', name: "Corsace Manga", image: proj_1, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Product Manager" }] },
  { id: 'corsace-rebrand-2025', name: "Corsace Rebrand 2025", image: proj_4, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Branding" }] },
  { id: 'coming-soon-1', name: "Coming Soon", image: proj_0, tags: [{ icon: FaHardHat, label: "Under Construction" }] },
  { id: 'coming-soon-2', name: "Coming Soon", image: proj_0, tags: [{ icon: FaHardHat, label: "Under Construction" }] },
];

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');

  // Configure Fuse.js for fuzzy searching
  const fuse = useMemo(() => {
    const options = {
      keys: [
        'name',
        'tags.label'
      ],
      threshold: 0.3,
      includeScore: true,
    };
    return new Fuse(projects, options);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) {
      return projects;
    }
    
    const results = fuse.search(searchQuery);
    return results.map(result => result.item);
  }, [searchQuery, fuse]);

  return (
    <Container className={styles.projectsContainer}>
      <RecentProjectBanner />
      
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="search projects by name or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>
      
      <Container className={styles.projectsGridContainer}>
        <div className={styles.projectGrid}>
          {filteredProjects.map((project, b) => (
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
        
        {/* No results message */}
        {filteredProjects.length === 0 && searchQuery.trim() && (
          <div className={styles.noResults}>
            <p>No projects found matching "{searchQuery}"</p>
            <p>Try searching for different keywords or tags</p>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;