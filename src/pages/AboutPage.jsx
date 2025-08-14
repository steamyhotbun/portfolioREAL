import { Container } from 'react-bootstrap';
import { useState, lazy, Suspense } from 'react';
import AboutCard from '../components/Cards/AboutCard.jsx';
import PersonalCard from '../components/Cards/PersonalCard.jsx';

// Lazy load heavy components
const SkillsCard = lazy(() => import('../components/Cards/SkillsCard.jsx'));
const GraphicsDesignerCard = lazy(() => import('../components/Cards/GraphicsDesignerCard.jsx'));
const WhyWorkWithMeCard = lazy(() => import('../components/Cards/WhyWorkWithMeCard.jsx'));

// Lazy load data
const loadSkillsData = () => import('../../data/skills.json');

function About() {
  const [activeTab, setActiveTab] = useState('about');
  const [skillsData, setSkillsData] = useState(null);

  const handleTabChange = async (tab) => {
    setActiveTab(tab);
    
    // Only load skills data when skills tab is selected
    if (tab === 'skills' && !skillsData) {
      try {
        const data = await loadSkillsData();
        setSkillsData(data.default);
      } catch (error) {
        console.error('Failed to load skills data:', error);
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
          <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
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
          </Suspense>
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
        <AboutCard activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      
      {renderCards()}
    </Container>
  );
}

export default About;