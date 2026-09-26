import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import TechStackSection from './components/TechStackSection';
import SocialLinksSection from './components/SocialLinksSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="portfolio-container">
      <HeroSection darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <div className="portfolio-grid">
        <div className="portfolio-column">
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
        </div>
        <div className="portfolio-column">
          <ExperienceSection />
          <SocialLinksSection />
          <ContactSection />
        </div>
      </div>

      <footer className="portfolio-footer">
        <p>© 2026 Marvin Pescos. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
