import React, { useState, lazy, Suspense } from 'react';
import Container from '../components/Container';
import AboutCard from '../components/Cards/AboutCard.jsx';
import PersonalCard from '../components/Cards/PersonalCard.jsx';
// Eagerly import default tab components to avoid render flash
import GraphicsDesignerCard from '../components/Cards/GraphicsDesignerCard.jsx';
import WhyWorkWithMeCard from '../components/Cards/WhyWorkWithMeCard.jsx';

// Lazy load only skills tab components (not default view)
const SkillsCard = lazy(() => import('../components/Cards/SkillsCard.jsx'));

// Lazy load data
const loadSkillsData = () => import('../data/skills.json');

function About() {
  const [activeTab, setActiveTab] = useState('about');
  const [skillsData, setSkillsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = async (tab) => {
    setActiveTab(tab);
    
    // Only load skills data when skills tab is selected
    if (tab === 'skills' && !skillsData) {
      setIsLoading(true);
      try {
        const data = await loadSkillsData();
        setSkillsData(data.default);
      } catch (error) {
        console.error('Failed to load skills data:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderCards = () => {
    switch(activeTab) {
      case 'skills':
        return (
          <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading skills...</div>}>
            {skillsData && Object.entries(skillsData)
              .filter(([category]) => category !== 'description')
              .map(([category, data]) => (
                <div key={category}>
                  <SkillsCard category={category} data={data} />
                </div>
              ))}
          </Suspense>
        );
      case 'about':
        return (
          <>
            {/* About Cards */}
            <div>
              <GraphicsDesignerCard />
            </div>
            <div>
              <WhyWorkWithMeCard />
            </div>
            {/* <div>
              <PersonalCard />
            </div> */}
          </>
        );
      case 'mission':
        return (
          <>
            {/* Mission Cards - Add your mission-specific cards here */}
            {/* Example: <div><MissionCard /></div>, <div><GoalsCard /></div>, etc. */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <div>
        <AboutCard activeTab={activeTab} onTabChange={handleTabChange} skillsData={skillsData} />
      </div>
      
      {renderCards()}
    </Container>
  );
}

export default React.memo(About);