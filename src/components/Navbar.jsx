// src/components/Navbar.jsx
import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure this path is correct
    link.download = 'Johannes_Hirt_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <nav className="sticky top-0 z-50 w-full px-4 md:px-16 lg:px-12 py-2
                    bg-dark-theme-bg dark:bg-dark-theme-bg bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm
                    text-light-theme-text dark:text-dark-theme-text transition-colors duration-300">
      {/* Changed justify-between to justify-center and added a gap-x */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-16 md:gap-x-24 lg:gap-x-32 max-w-6xl mx-auto w-full">
        {/* Left side: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-11 lg:gap-x-12 mb-4 md:mb-0">
          <a href="#home" className="hover:text-nav-link-hover text-base transition-colors">Home</a>
          <a href="#about" className="hover:text-nav-link-hover text-base transition-colors">About</a>
          <a href="#skills" className="hover:text-nav-link-hover text-base transition-colors">Skills</a>
          <a href="#projects" className="hover:text-nav-link-hover text-base transition-colors">Projects</a>
          <a href="#contact" className="hover:text-nav-link-hover text-base transition-colors">Contact</a>
        </div>

        {/* Right side: Theme Toggle and Resume Button */}
        <div className="flex items-center gap-x-10">
          {/* Theme toggle button }
          <button
            onClick={toggleTheme}
            className="bg-transparent border-none text-light-theme-text dark:text-dark-theme-text cursor-pointer p-2 rounded-full
                       hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          > 
            {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button> */}
          <button onClick={downloadResume} className="px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-neon-green
        to-blue-500 hover:scale-105
         transform transition-transform duration-300 shadow-md">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;