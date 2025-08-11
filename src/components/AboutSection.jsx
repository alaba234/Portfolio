// src/components/AboutSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaLaptopCode, FaMicrochip, FaBolt } from "react-icons/fa";
// @ts-ignore
import Timeline from "./Timeline.jsx"; // Import the Timeline component
import useScrollFadeOut from "../hooks/useScrollFadeOut";
import useIsMobile from "../hooks/useIsMobile"; // Import the custom hook
import InteractiveContentSection from "./InteractiveContentSection.jsx"; // Import the new interactive content section

function AboutSection() {
  const aboutImagePath = "/thu.png"; // Make sure this image exists in your public folder!

  const [lineVisible, setLineVisible] = useState(false);

  const sectionRef = useRef(null);
  const isMobile = useIsMobile(); // Use the new hook to detect mobile view

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollOpacity = useScrollFadeOut(sectionRef, 0.9);
  const contentOpacity = isMobile ? 1 : scrollOpacity; // Adjust opacity based on mobile view

  return (
    <section
      id="about"
      className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24 min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Top Section: Text and Image */}
        {/* This is the div controlling the flex layout for the two columns */}
        <div
          ref={sectionRef}
          style={{ opacity: contentOpacity }}
          className="flex flex-col lg:flex-row items-start gap-12 mb-16"
        >
          {" "}
          {/* Assuming you changed items-center to items-start */}
          {/* Left Column: Text Content (this stays the same) */}
          <div
            ref={sectionRef}
            style={{ opacity: contentOpacity }}
            className="flex-1 lg:pr-8 text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-center mb-12">About me</h2>
            <p className="text-md md:text-base leading-relaxed mb-6">
              I'm a passionate software engineer with a unique blend of software
              development and embedded systems expertise.
            </p>
            <p className="text-md md:text-base leading-relaxed mb-6 text-gray-400">
              Currently pursuing my Master's in Systems Engineering (Electrical
              Engineering) while leveraging my Bachelor's degree in Software
              Engineering with an embedded systems specialization.
            </p>
            <p className="text-md md:text-base leading-relaxed mb-8 text-gray-400">
              My dual expertise allows me to bridge the gap between high-level
              software solutions and low-level hardware interactions, creating
              innovative and efficient systems.
            </p>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800 p-4  rounded-lg shadow-lg flex flex-col items-center text-center md:items-start md:text-left border border-gray-700 hover:border-gradient-start transition-colors duration-300">
                <FaLaptopCode className="text-gradient-start text-xl mb-2" />
                <h3 className="font-bold text-base mb-2">
                  Software Development
                </h3>
                <p className="text-sm text-gray-400">
                  Modern software design, development, and deployment
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center md:items-start md:text-left border border-gray-700 hover:border-gradient-start transition-colors duration-300">
                <FaMicrochip className="text-gradient-start text-xl mb-2" />
                <h3 className="font-bold text-base mb-2">Embedded Systems</h3>
                <p className="text-sm text-gray-400">
                  Hardware-software integration and real-time system development
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center md:items-start md:text-left border border-gray-700 hover:border-gradient-start transition-colors duration-300">
                <FaBolt className="text-gradient-start text-xl mb-2" />
                <h3 className="font-bold text-base mb-2">
                  Systems Engineering
                </h3>
                <p className="text-sm text-gray-400">
                  Advanced electrical engineering concepts and system
                  optimization
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 md:gap-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col  border border-gray-700 hover:border-gradient-start transition-colors duration-300 w-full min-w-[200px]">
                <h3 className="text-2xl font-bold text-gradient-start mb-2">
                  Bachelor Thesis
                </h3>
                <p className="text-base text-gray-300">
                  Classification of data sets using the electric potential
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col  border border-gray-700 hover:border-gradient-start transition-colors duration-300 w-full min-w-[200px]">
                <h3 className="text-2xl font-bold text-gradient-start mb-2">
                  20+
                </h3>
                <p className="text-base text-gray-300">Mentored Students</p>
              </div>
            </div>
          </div>
          {/* Right Column: Image with Badges - UNCOMMENT THIS BLOCK */}
          <div className="relative w-full h-64 lg:h-[250px] flex justify-center items-center lg:w-1/3 lg:flex-shrink-0 lg:flex-grow-0 lg:mt-24">
            <img
              src={aboutImagePath}
              alt="About Me"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
            {/* Master's Student Badge */}
            <div className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md flex items-center gap-2">
              <span className="text-gradient-start">🎓</span> Master's Student
            </div>
          </div>
          {/* END OF UNCOMMENTED BLOCK */}
        </div>

        <div className="mt-16 mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-12">
            My Journey
          </h2>
          <Timeline />
        </div>
         <div id="hobbies" className="mt-16 w-full">
         <InteractiveContentSection />
      </div>
      </div>
    </section>
  );
}

export default AboutSection;
