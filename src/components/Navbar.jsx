// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { IoPersonOutline, IoSparklesOutline, IoMailOutline } from 'react-icons/io5';
import { FaFolderOpen, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { useTheme } from '../ThemeContext';

function Navbar() {
  // Theme context
  const { theme, toggleTheme } = useTheme();

  // State for active section highlight
  const [activeSection, setActiveSection] = useState('home');

  // State for mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // State for dynamic mobile menu height
  const [menuHeight, setMenuHeight] = useState(0);

  // Ref for mobile menu DOM node
  const menuRef = useRef(null);

  // Download resume handler
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Johannes_Hirt_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Track active section for highlight
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Update menu height dynamically for mobile menu animation
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [menuOpen]);

  // Common link styles
  const commonLinkClasses =
    "flex items-center gap-x-2 text-gray-300 hover:text-nav-link-hover transition-colors duration-300 text-lg";
  const activeIconClasses = "text-neon-green";
  const activeTextClasses =
    "bg-clip-text bg-gradient-to-r from-neon-green to-blue-500 text-transparent font-bold";

  return (
    <>
      {/* Navbar container */}
      <nav
        className="md:fixed md:top-0 z-50 w-full px-4 py-4 md:px-16 lg:px-24
                   bg-dark-theme-bg dark:bg-dark-theme-bg bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm"
      >
        <div className="container mx-auto flex justify-center items-center relative">
          
          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-x-8 px-6 py-2 rounded-full
                       bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg"
          >
            {/* Home Link */}
            <a href="#home" className={commonLinkClasses}>
              <AiOutlineHome size={18} className={activeSection === 'home' ? activeIconClasses : ''} />
              <span className={activeSection === 'home' ? activeTextClasses : ''}>Home</span>
            </a>
            {/* About Link */}
            <a href="#about" className={commonLinkClasses}>
              <IoPersonOutline size={18} className={activeSection === 'about' ? activeIconClasses : ''} />
              <span className={activeSection === 'about' ? activeTextClasses : ''}>About</span>
            </a>
            {/* Skills Link */}
            <a href="#skills" className={commonLinkClasses}>
              <IoSparklesOutline size={18} className={activeSection === 'skills' ? activeIconClasses : ''} />
              <span className={activeSection === 'skills' ? activeTextClasses : ''}>Skills</span>
            </a>
            {/* Projects Link */}
            <a href="#projects" className={commonLinkClasses}>
              <FaFolderOpen size={18} className={activeSection === 'projects' ? activeIconClasses : ''} />
              <span className={activeSection === 'projects' ? activeTextClasses : ''}>Projects</span>
            </a>
            {/* Contact Link */}
            <a href="#contact" className={commonLinkClasses}>
              <IoMailOutline size={18} className={activeSection === 'contact' ? activeIconClasses : ''} />
              <span className={activeSection === 'contact' ? activeTextClasses : ''}>Contact</span>
            </a>
          </div>

          {/* Resume Button (desktop only) */}
          <div className="hidden md:flex items-center absolute right-0">
            <button
              onClick={downloadResume}
              className="px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-neon-green
                         to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md flex items-center gap-x-2"
            >
              <FaDownload size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Hamburger Menu Button (mobile only) */}
          <div className="md:hidden absolute right-4 top-8">
           <div className="md:hidden ml-auto mr-4">
             <button
               onClick={() => setMenuOpen(!menuOpen)}
               className="text-white text-2xl"
               aria-label="Toggle menu"
             >
               {menuOpen ? <FaTimes /> : <FaBars />}
             </button>
           </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out`}
          style={{
            maxHeight: menuOpen ? menuHeight : 0,
          }}
        >
          <div className="flex flex-col items-center gap-y-6 mt-2 p-2 bg-gray-900 rounded-lg shadow-lg">
            {/* Mobile Home Link */}
            <a href="#home" onClick={() => setMenuOpen(false)} className={commonLinkClasses}>
              <AiOutlineHome size={18} />
              <span>Home</span>
            </a>
            {/* Mobile About Link */}
            <a href="#about" onClick={() => setMenuOpen(false)} className={commonLinkClasses}>
              <IoPersonOutline size={18} />
              <span>About</span>
            </a>
            {/* Mobile Skills Link */}
            <a href="#skills" onClick={() => setMenuOpen(false)} className={commonLinkClasses}>
              <IoSparklesOutline size={18} />
              <span>Skills</span>
            </a>
            {/* Mobile Projects Link */}
            <a href="#projects" onClick={() => setMenuOpen(false)} className={commonLinkClasses}>
              <FaFolderOpen size={18} />
              <span>Projects</span>
            </a>
            {/* Mobile Contact Link */}
            <a href="#contact" onClick={() => setMenuOpen(false)} className={commonLinkClasses}>
              <IoMailOutline size={18} />
              <span>Contact</span>
            </a>
            {/* Mobile Resume Button */}
            <button
              onClick={() => {
                downloadResume();
                setMenuOpen(false);
              }}
              className="mt-4 px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-neon-green
                         to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md flex items-center gap-x-2"
            >
              <FaDownload size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Push page content down based on menu height */}
      <div
        className="transition-all duration-500 ease-in-out"
        style={{ marginTop: menuOpen ? "10px" : "40px" }} // 40px = navbar height
      />
    </>
  );
}

export default Navbar;
