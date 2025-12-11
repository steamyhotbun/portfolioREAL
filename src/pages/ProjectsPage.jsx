import React, { useState, useMemo } from 'react';
import Container from '../components/layout/Container';
import Fuse from 'fuse.js';
import ProjectDisplayCard from '../components/cards/ProjectDisplayCard';
import RecentProjectBanner from '../components/RecentProjectBanner';
import proj_0 from '../assets/images/proj_0.png';
import proj_1 from '../assets/images/proj_1.png';
import proj_2 from '../assets/images/proj_2.png';
import proj_3 from '../assets/images/proj_3.png';
import proj_4 from '../assets/images/proj_4.png';
import proj_5 from '../assets/images/proj_5.jpg';
import styles from './ProjectsPage.module.scss';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie, FaHardHat, FaSearch } from 'react-icons/fa';

const projects = [
  { id: 'corsace-closed-2024-2', name: "Mountain Bike Commercial", image: proj_2, tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Storytelling" }] },
  { id: 'video-storytelling-project-b-3', name: "Travel Commercial", image: proj_3, tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Storytelling" }, { icon: FaPalette, label: "Graphics" }] },
  { id: 'corsace-closed-2024-1', name: "Corsace Manga", image: proj_1, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Product Manager" }] },
  { id: 'corsace-rebrand-2025', name: "Corsace Rebrand 2025", image: proj_4, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Branding" }] },
  { id: 'swiss-poster-miku-2024', name: "Swiss Poster: Hatsune Miku", image: proj_5, tags: [{ icon: FaPalette, label: "Graphics" }] },
  { id: 'coming-soon-1', name: "Coming Soon", image: proj_0, tags: [{ icon: FaHardHat, label: "Under Construction" }] },
];

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    graphics: false,
    video: false,
    product: false
  });

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
    let results = projects;
    
    // Apply tag filters
    const activeFilters = Object.entries(filters)
      .filter(([_, isActive]) => isActive)
      .map(([key]) => key);
    
    if (activeFilters.length > 0) {
      results = results.filter(project => {
        const projectLabels = project.tags.map(tag => tag.label.toLowerCase());
        return activeFilters.some(filter => {
          if (filter === 'graphics') return projectLabels.includes('graphics');
          if (filter === 'video') return projectLabels.includes('video');
          if (filter === 'product') return projectLabels.includes('product manager');
          return false;
        });
      });
    }
    
    // Apply search query
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      const searchIds = new Set(searchResults.map(r => r.item.id));
      results = results.filter(project => searchIds.has(project.id));
    }
    
    return results;
  }, [searchQuery, filters, fuse]);

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

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
        
        {/* Filter Icons */}
        <div className={styles.filterContainer}>
          <div 
            className={`${styles.filterIcon} ${filters.graphics ? styles.active : ''}`}
            onClick={() => handleFilterChange('graphics')}
            data-tooltip="Graphics"
          >
            <FaPalette />
          </div>
          <div 
            className={`${styles.filterIcon} ${filters.video ? styles.active : ''}`}
            onClick={() => handleFilterChange('video')}
            data-tooltip="Video"
          >
            <FaVideo />
          </div>
          <div 
            className={`${styles.filterIcon} ${filters.product ? styles.active : ''}`}
            onClick={() => handleFilterChange('product')}
            data-tooltip="Product"
          >
            <FaUserTie />
          </div>
        </div>
      </div>
      
      <div className={styles.projectsGridContainer}>
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectItem}>
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
      </div>
    </Container>
  );
}

export default React.memo(Projects);