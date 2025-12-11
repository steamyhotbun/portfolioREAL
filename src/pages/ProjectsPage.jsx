import React, { useState, useMemo } from 'react';
import Container from '../components/Container';
import Fuse from 'fuse.js';
import ProjectDisplayCard from '../components/Cards/ProjectDisplayCard';
import RecentProjectBanner from '../components/RecentProjectBanner';
import NavIcon from '../components/NavIcon';
import proj_0 from '../assets/proj_0.png';
import proj_1 from '../assets/proj_1.png';
import proj_2 from '../assets/proj_2.png';
import proj_3 from '../assets/proj_3.png';
import proj_4 from '../assets/proj_4.png';
import proj_5 from '../assets/proj_5.jpg';
import styles from './ProjectsPage.module.scss';
import { FaPalette, FaCode, FaVideo, FaGamepad, FaCamera, FaMobile, FaUserTie, FaHardHat, FaSearch } from 'react-icons/fa';

const projects = [
  { id: 'corsace-closed-2024-2', name: "Mountain Bike Commercial", image: proj_2, tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }] },
  { id: 'video-storytelling-project-b-3', name: "Travel Commercial", image: proj_3, tags: [{ icon: FaVideo, label: "Video" }, { icon: FaCamera, label: "Production" }, { icon: FaPalette, label: "Graphics" }] },
  { id: 'corsace-closed-2024-1', name: "Corsace Manga", image: proj_1, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Product Manager" }] },
  { id: 'corsace-rebrand-2025', name: "Corsace Rebrand 2025", image: proj_4, tags: [{ icon: FaPalette, label: "Graphics" }, { icon: FaUserTie, label: "Branding" }] },
  { id: 'swiss-poster-miku-2024', name: "Swiss Poster: Hatsune Miku", image: proj_5, tags: [{ icon: FaPalette, label: "Graphics" }] },
  { id: 'coming-soon-1', name: "Coming Soon", image: proj_0, tags: [{ icon: FaHardHat, label: "Under Construction" }] },
];

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
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
    let filtered = projects;
    
    // Apply tag filters
    const activeFilterTags = Object.entries(activeFilters)
      .filter(([_, isActive]) => isActive)
      .map(([filter]) => filter.charAt(0).toUpperCase() + filter.slice(1));
    
    if (activeFilterTags.length > 0) {
      filtered = filtered.filter(project =>
        project.tags.some(tag => 
          activeFilterTags.some(filterTag => 
            tag.label.toLowerCase().includes(filterTag.toLowerCase())
          )
        )
      );
    }
    
    // Apply search query
    if (!searchQuery.trim()) {
      return filtered;
    }
    
    const results = fuse.search(searchQuery);
    const searchFiltered = results.map(result => result.item);
    
    // Return intersection of tag filtered and search filtered
    return filtered.filter(project => searchFiltered.includes(project));
  }, [searchQuery, activeFilters, fuse]);

  const toggleFilter = (filterName) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  return (
    <Container className={styles.projectsContainer}>
      <RecentProjectBanner />
      
      {/* Search Bar with Filters */}
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
            className={`${styles.filterIcon} ${activeFilters.graphics ? styles.active : ''}`}
            onClick={() => toggleFilter('graphics')}
            data-tooltip="Graphics"
          >
            <FaPalette />
          </div>
          <div 
            className={`${styles.filterIcon} ${activeFilters.video ? styles.active : ''}`}
            onClick={() => toggleFilter('video')}
            data-tooltip="Video"
          >
            <FaVideo />
          </div>
          <div 
            className={`${styles.filterIcon} ${activeFilters.product ? styles.active : ''}`}
            onClick={() => toggleFilter('product')}
            data-tooltip="Product"
          >
            <FaUserTie />
          </div>
        </div>
      </div>
      
      <Container className={styles.projectsGridContainer}>
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
      </Container>
    </Container>
  );
}

export default React.memo(Projects);