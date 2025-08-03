// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side: Text */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-300 text-lg font-semibold">Software Engineer & Systems Engineer</p>
            <p className="text-gray-500 text-sm mt-2">© 2025 Johannes Hirt. All rights reserved.</p>
          </div>
          
          {/* Right Side: Socials and Button */}
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;