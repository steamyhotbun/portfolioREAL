import React from 'react';
import Container from '../components/layout/Container';
import ProjectsCard from '../components/cards/ProjectsCard';
import InfoCard from '../components/cards/InfoCard';

function HomePage() {
  return (
    <Container style={{ marginTop: '50px' }}>
      <div>
        <ProjectsCard />
      </div>

      <div>
        <InfoCard />
      </div>
    </Container>
  );
}

export default HomePage;
