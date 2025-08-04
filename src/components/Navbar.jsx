// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { IoPersonOutline, IoSparklesOutline, IoMailOutline } from 'react-icons/io5';
import { FaFolderOpen, FaDownload } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [activeSection, setActiveSection] = useState('home');

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Johannes_Hirt_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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

    sections.forEach((section) => {
        observer.observe(section);
    });

    return () => {
        sections.forEach((section) => {
            observer.unobserve(section);
        });
    };
  }, []);

  const commonLinkClasses = "flex items-center gap-x-1 text-gray-300 hover:text-nav-link-hover transition-colors duration-300";
  const activeIconClasses = "text-neon-green";
  const activeTextClasses = "bg-clip-text bg-gradient-to-r from-neon-green to-blue-500 text-transparent font-bold";

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 md:px-16 lg:px-24
                    bg-dark-theme-bg dark:bg-dark-theme-bg bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center items-center relative">
        {/* Centered Navigation Links */}
        <div className="flex justify-center items-center gap-x-6 md:gap-x-8 lg:gap-x-12 px-6 py-2 rounded-full
                        bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg">
          <a href="#home" className={commonLinkClasses}>
            <AiOutlineHome size={18} className={activeSection === 'home' ? activeIconClasses : ''} />
            <span className={activeSection === 'home' ? activeTextClasses : ''}>Home</span>
          </a>
          <a href="#about" className={commonLinkClasses}>
            <IoPersonOutline size={18} className={activeSection === 'about' ? activeIconClasses : ''} />
            <span className={activeSection === 'about' ? activeTextClasses : ''}>About</span>
          </a>
          <a href="#skills" className={commonLinkClasses}>
            <IoSparklesOutline size={18} className={activeSection === 'skills' ? activeIconClasses : ''} />
            <span className={activeSection === 'skills' ? activeTextClasses : ''}>Skills</span>
          </a>
          <a href="#projects" className={commonLinkClasses}>
            <FaFolderOpen size={18} className={activeSection === 'projects' ? activeIconClasses : ''} />
            <span className={activeSection === 'projects' ? activeTextClasses : ''}>Projects</span>
          </a>
          <a href="#contact" className={commonLinkClasses}>
            <IoMailOutline size={18} className={activeSection === 'contact' ? activeIconClasses : ''} />
            <span className={activeSection === 'contact' ? activeTextClasses : ''}>Contact</span>
          </a>
        </div>
        
        {/* Right-aligned Resume Button */}
        <div className="absolute right-0 flex items-center">
          <button onClick={downloadResume} className="px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-neon-green
        to-blue-500 hover:scale-105
         transform transition-transform duration-300 shadow-md flex items-center gap-x-2">
            <FaDownload size={16} />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;