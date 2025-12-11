import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectDisplayCard.module.scss';

function ProjectDisplayCard({ image, name, tags = [], projectId }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (projectId) {
      navigate(`/project/${projectId}`);
    }
  };

  return (
    <div
      className={styles.projectDisplayCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: projectId ? 'pointer' : 'default' }}
    >
      <img src={image} alt={name} className={styles.projectImage} />
      {hovered && (
        <div className={styles.projectOverlay}>
          <span className={styles.projectName}>{name}</span>
        </div>
      )}
      {tags.length > 0 && (
        <div className={styles.projectTags}>
          {tags.map((tag, index) => {
            const IconComponent = tag.icon;
            return (
              <div key={index} className={styles.projectTagWrapper} data-tooltip={tag.label}>
                <IconComponent className={styles.projectTagIcon} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default React.memo(ProjectDisplayCard);