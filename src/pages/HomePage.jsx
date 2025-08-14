import { Container } from 'react-bootstrap';
import InfoCard from '../components/Cards/InfoCard';
import ProjectsCard from '../components/Cards/ProjectsCard';

function Home() {
  return (
    <Container style={{ marginTop: '50px' }}>
      <div>
        <ProjectsCard/>
      </div>

      <div>
        <InfoCard/>
      </div>
    </Container>
  );
}

export default Home;