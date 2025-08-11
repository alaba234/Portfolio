// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsModal from "./components/ProjectsModal";
import TravelsPage from "./components/TravelsPage";
import BooksPage from "./components/BooksPage";
import MusicPage from "./components/MusicPage";
import useActiveSection from "./hooks/useActiveSection";
import ScrollToHash from "./components/ScrollToHash"; // Import the scrollToHash hook
import { useLocation } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const homepageSections = ["home", "about","hobbies", "projects", "skills", "contact"];

  const handleProjectClick = (content) => { 
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);
  const location = useLocation();

    useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // No smooth scroll, jump instantly
        section.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location]);

  useActiveSection(homepageSections);
  return (
    // Your entire application must be wrapped in <Router>
      
    <div className="min-h-screen bg-dark-theme-bg text-dark-theme-text font-sans">
      <ScrollToHash />
      <ScrollToTop />
      <Routes>
          
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection onProjectClick={handleProjectClick} />
              <ContactSection />
              <Footer />
            </>
          }
        />

        <Route path="/travels" element={<TravelsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>

      
      {showModal && modalContent && (
        <ProjectsModal content={modalContent} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
