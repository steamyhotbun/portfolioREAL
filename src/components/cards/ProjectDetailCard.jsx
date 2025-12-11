import React from 'react';
import styles from './ProjectDetailCard.module.scss';
import pi_1 from '../../assets/images/p_i1.webp';
import pi_2 from '../../assets/images/p_i2.jpg';

const ProjectDetailCard = ({ projectData, activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'combined':
        return (
          <div className={styles.cardWrapper}>
            <div className={styles.purpleAccent}></div>
            <div className={styles.combinedCard}>
              <div className={styles.twoColumnLayout}>
                {/* Left Column - Goal and Links */}
                <div className={styles.leftColumn}>
                  <h2 className={styles.sectionTitle}>Project Goal</h2>
                  <p className={styles.cardText}>{projectData.details.goal}</p>
                  
                  {/* Manga images under Project Goal */}
                  {projectData.id === 'corsace-closed-2024-1' && (
                    <div className={styles.mangaImagesSection}>
                      <img src={pi_1} alt="Corsace Manga 1" className={styles.smallMangaImage} loading="lazy" />
                      <img src={pi_2} alt="Corsace Manga 2" className={styles.smallMangaImage} loading="lazy" />
                    </div>
                  )}
                  
                  {projectData.links?.external && (
                    <>
                      <h3 className={styles.sectionTitle} style={{ marginTop: '32px' }}>External Links</h3>
                      <div className={styles.linksSection}>
                        {projectData.links.external.map((link, index) => (
                          <div key={index} className={styles.linkItem}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                              {link.title}
                            </a>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Right Column - Technical Info */}
                <div className={styles.rightColumn}>
                  <h2 className={styles.sectionTitle}>Tools Used</h2>
                  {projectData.details.technical && (
                    <div className={styles.techGrid}>
                      {projectData.details.technical.map((tech, index) => (
                        <span key={index} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  )}
                  
                  {projectData.details.contributors && (
                    <>
                      <h3 className={styles.sectionTitle} style={{ marginTop: '32px' }}>Contributors</h3>
                      <div className={styles.contributorsList}>
                        {projectData.details.contributors.map((contributor, index) => (
                          <div key={index} className={styles.contributorItem}>
                            <span className={styles.contributorName}>{contributor.name}</span>
                            <span className={styles.contributorRole}>{contributor.role}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {projectData.info && (
                    <div className={styles.projectMeta}>
                      {projectData.info.duration && (
                        <p><strong>Duration:</strong> {projectData.info.duration}</p>
                      )}
                      {projectData.totalHours && (
                        <p><strong>Total Hours:</strong> {projectData.totalHours} hours</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Project Process */}
              {projectData.details.narrative && Object.keys(projectData.details.narrative).length > 0 && (
                <div className={styles.processSection}>
                  <h2 className={styles.sectionTitle}>Project Process</h2>
                  {Object.entries(projectData.details.narrative).map(([phase, content]) => (
                    <div key={phase} className={styles.processItem}>
                      <h4 className={styles.processPhaseTitle}>
                        {phase.charAt(0).toUpperCase() + phase.slice(1)}
                      </h4>
                      <p className={styles.processPhaseText}>
                        {typeof content === 'string' ? content : content.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      
      case 'goal':
        return (
          <div className={styles.cardWrapper}>
            <div className={styles.purpleAccent}></div>
            <div className={styles.projectDetailCard}>
              <h2 className={styles.cardTitle}>Project Goal</h2>
              <p className={styles.cardText}>{projectData.details.goal}</p>
            </div>
          </div>
        );

      case 'details':
        return (
          <>
            <h2 className={styles.processTitle}>Project Process</h2>
            {projectData.details.goal && (
              <div className={styles.processContainer}>
                {/* Process Cards - matching the simple goal format */}
                {projectData.details.narrative && Object.entries(projectData.details.narrative).map(([phase, content]) => (
                  <div key={phase} className={styles.cardWrapper}>
                    <div className={styles.purpleAccent}></div>
                    <div className={styles.processCard}>
                      <h3 className={styles.processCardTitle}>
                        {phase.charAt(0).toUpperCase() + phase.slice(1)}
                      </h3>
                      <p className={styles.processCardText}>
                        {typeof content === 'string' ? content : content.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        );

      case 'timeline':
        return (
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Project Timeline</h2>
            {projectData.details.actions && (
              <div className={styles.timelineSection}>
                {projectData.details.actions.map((action, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelinePeriod}>{action.period}</div>
                    <div className={styles.timelineTask}>{action.task}</div>
                    <div className={styles.timelineHours}>{action.hours}</div>
                  </div>
                ))}
              </div>
            )}
            <div className={styles.projectInfo}>
              <p><strong>Total Duration:</strong> {projectData.info?.duration}</p>
              <p><strong>Total Hours:</strong> {projectData.totalHours} hours</p>
            </div>
          </div>
        );

      case 'contributors':
        return (
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Contributors</h2>
            {projectData.details.contributors && (
              <div className={styles.contributorsSection}>
                {projectData.details.contributors.map((contributor, index) => (
                  <div key={index} className={styles.contributorItem}>
                    <div className={styles.contributorName}>{contributor.name}</div>
                    <div className={styles.contributorRole}>{contributor.role}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'technical':
        return (
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Tools & Technologies</h2>
            {projectData.details.technical && (
              <div className={styles.technicalSection}>
                <div className={styles.techList}>
                  {projectData.details.technical.map((tech, index) => (
                    <span key={index} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'links':
        return (
          <>
            <h2 className={styles.linksTitle}>External Links</h2>
            {projectData.links?.external && (
              <div className={styles.linksContainer}>
                {projectData.links.external.map((link, index) => (
                  <div key={index} className={styles.cardWrapper}>
                    <div className={styles.purpleAccent}></div>
                    <div className={styles.linkCard}>
                      <h3 className={styles.linkTitle}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.title}
                        </a>
                      </h3>
                      <p className={styles.linkDescription}>{link.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {projectData.references?.sources && (
              <>
                <h3 className={styles.referencesTitle}>References</h3>
                <div className={styles.linksContainer}>
                  {projectData.references.sources.map((source, index) => (
                    <div key={index} className={styles.cardWrapper}>
                      <div className={styles.purpleAccent}></div>
                      <div className={styles.linkCard}>
                        <h4 className={styles.linkTitle}>
                          <a href={source.url} target="_blank" rel="noopener noreferrer">
                            {source.title}
                          </a>
                        </h4>
                        <p className={styles.linkDescription}>{source.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        );

      default:
        return (
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Project Details</h2>
            <p className={styles.cardText}>Select a tab to view project information.</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.projectDetailPanel}>
      {renderContent()}
    </div>
  );
};

export default ProjectDetailCard;
