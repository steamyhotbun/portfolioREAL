import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDisplayCard.scss';

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
      className="project-display-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: projectId ? 'pointer' : 'default' }}
    >
      <img src={image} alt={name} className="project-image" />
      {hovered && (
        <div className="project-overlay">
          <span className="project-name">{name}</span>
        </div>
      )}
      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, index) => {
            const IconComponent = tag.icon;
            return (
              <div key={index} className="project-tag-wrapper" data-tooltip={tag.label}>
                <IconComponent className="project-tag-icon" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default React.memo(ProjectDisplayCard);