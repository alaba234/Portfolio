// src/components/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mb-12 text-light-theme-text dark:text-dark-theme-text">
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors hover:scale-110 transform"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors hover:scale-110 transform"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:your-email@example.com"
        aria-label="Send me an Email"
        className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors hover:scale-110 transform"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
}

export default SocialLinks;