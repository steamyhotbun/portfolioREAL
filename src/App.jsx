import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.css';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import NavIcon from './components/NavIcon';
import PageWipeTransition from './components/PageWipeTransition';

// Lazy load
const Home = lazy(() => import('./pages/HomePage.jsx'));
const About = lazy(() => import('./pages/AboutPage.jsx'));
const Projects = lazy(() => import('./pages/ProjectsPage.jsx'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage.jsx'));
const Design = lazy(() => import('./pages/DesignPage.jsx'));

// Loading component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px',
    color: '#666'
  }}>
    Loading...
  </div>
);

function App () {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <MobileNav />
        <NavIcon />
        <div className="main-content">
          <PageWipeTransition>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path='/' element={<About />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/design' element={<Design />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/project/:projectId' element={<ProjectDetailPage />} />
                <Route path='*' element={<About />} />
              </Routes>
            </Suspense>
          </PageWipeTransition>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App