import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Sidebar from './components/layout/Sidebar';
import ContactTab from './components/layout/ContactTab';
import MobileNav from './components/layout/MobileNav';
import NavIcon from './components/layout/NavIcon';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

// Loading component
function PageLoader() {
  return (
    <div className="page-loader">
      <p>Loading...</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <div className="app-container">
        <Sidebar />
        <ContactTab />
        <MobileNav />
        <NavIcon />
        
        <main className="main-content" id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:projectId" element={<ProjectDetailPage />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
