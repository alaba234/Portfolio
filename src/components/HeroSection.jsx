// src/components/HeroSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import SocialLinks from './SocialLinks';
import { FaPlay } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import useScrollFadeOut from '../hooks/useScrollFadeOut';

function HeroSection() {
  const profileImagePath = '/Passfoto.jpeg';
  const sectionRef = useRef(null); // Create a ref
  const { theme } = useTheme();

  const [profileVisible, setProfileVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProfileVisible(true);
    }, 300);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 800);

    const timer3 = setTimeout(() => {
      setSocialVisible(true);
    }, 1300);

    const timer4 = setTimeout(() => {
      setButtonsVisible(true);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const contentOpacity = useScrollFadeOut(sectionRef, 700); // Use the custom hook

  return (
    <section ref={sectionRef} className="flex-grow flex flex-col items-center justify-center text-center p-8 relative overflow-hidden pt-24">
      {/* Profile Image with conditional animation */}
      <div
        className="relative z-10 flex flex-col items-center w-full"
        style={{ opacity: contentOpacity }} // Apply the calculated opacity
      >
      <div
        className={`relative mb-16 md:mb-20 w-36 h-36 md:w-48 md:h-48 transition-all duration-700 ease-out
                    ${profileVisible ? 'opacity-100 scale-75' : 'opacity-0 scale-50'}`}
      >
        <img
          src={profileImagePath}
          alt="Profile"
          className="w-full h-full rounded-full object-cover border-4 border-gradient-start shadow-2xl"
        />
        <div className="absolute inset-0 rounded-full border-2 border-gradient-start animate-pulse-border"></div>
      </div>

      {/* Full-width Neon Green Loading Line - POSITIONED ABSOLUTELY TO BREAK OUT OF CONTAINER */}
      <div className="w-full max-w-7xl mx-auto mb-6"> {/* or max-w-6xl */}
        <div className={`bg-neon-green rounded-full h-0.5 md:h-1
                   transition-all duration-1000 ease-in-out transform origin-left
                   ${textVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
        </div>
      </div>

      {/* Main Content (Title, Description) with conditional animation */}
      <div className={`relative text-center max-w-5xl mx-auto mb-12 transition-all duration-700 ease-out
                    ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h1 className="text-3xl md:text-4xl lg:text- font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Systems Engineer with specialization in Electrical Engineering Student
        </h1>

        <p className="text-base md:text-lg text-gray-400 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Innovating at the intersection of software and embedded systems. Building
          next-generation solutions with cutting-edge technology.
        </p>
      </div>

      {/* Social Links with conditional animation */}
      <div
        className={`transition-all duration-700 ease-out
                    ${socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SocialLinks />
      </div>

      {/* Action Buttons with conditional animation */}
      <div
        className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-8
                    transition-all duration-700 ease-out
                    ${buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <button className="bg-btn-green hover:bg-btn-green-hover text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center">
          <FaPlay size={20} className="mr-2" /> View My Work
        </button>
        <button className="border border-dark-gray-button-border dark:border-border-dark
                           hover:border-gradient-start text-light-theme-text dark:text-dark-theme-text
                           hover:text-gradient-start px-8 py-3 rounded-lg transition-all transform hover:scale-105
                           w-full sm:w-auto bg-dark-gray-button dark:bg-gray-800 hover:bg-dark-gray-button-hover dark:hover:bg-gray-700">
          Get In Touch
        </button>
      </div>

    
      
    </div>
    </section>
  );
}

export default HeroSection;