// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import './App.css'; // Import your global styles
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-theme-bg text-light-theme-text
                    dark:bg-dark-theme-bg dark:text-dark-theme-text">
      <Navbar />
      <HeroSection />
      {/* Add more content here to make the page scrollable */}
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;