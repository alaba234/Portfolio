// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Text */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-300 text-lg font-semibold">Software Engineer & Systems Specialist</p>
            <p className="text-gray-500 text-sm mt-2">© 2024 Alex Rivera. All rights reserved.</p>
          </div>
          
          {/* Right Side: Socials and Button */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="GitHub" className="p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-neon-green transition-colors duration-300">
                <FaGithub className="text-white text-xl" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-neon-green transition-colors duration-300">
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a href="#" aria-label="Twitter" className="p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-neon-green transition-colors duration-300">
                <FaTwitter className="text-white text-xl" />
              </a>
              <a href="#" aria-label="Email" className="p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-neon-green transition-colors duration-300">
                <FaEnvelope className="text-white text-xl" />
              </a>
            </div>
            
            <a href="#" className="flex items-center space-x-3 px-6 py-3 text-white font-bold rounded-full bg-gradient-to-r from-neon-green to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md">
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;