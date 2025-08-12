// src/components/ProjectsSection.jsx
import React, { useRef, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import useScrollFadeOut from "../hooks/useScrollFadeOut";

// Placeholder data for your projects - easily expandable!
const projectsData = [
  {
    id: 1,
    image:
      "/Kraft_3Dimensional_3Klassen.jpg",
    title: "Classification of Data Sets using the Electric Potential",
    description:
      "Research project focuses on finding a new machine learning algorithm to classify data sets based on the electric potential.",
    tags: [
      "Matlab",
      "Python",
      "Machine Learning",
      "Electrostatics",
      "Electromagnetism",
    ],
  },
  {
    id: 2,
    image:"/diy3dscanner.jpg",
    title: "DIY 3D-Scanner",
    description:
      "Embedded systems project for a 3D scanner using a LiDAR sensor.",
    tags: [
      "C",
      "ESP32",
      "Servo-Motors",
      "open3D",
      "Python",
      "LiDAR sensor",
      "CAD",
      "3D Printing",
    ],
  },
  {
    id: 3,
    image:
      "/PCB.png",
    title:
      "LoRa-based system for presence detection in university learning areas",
    description:
      "LoRa Mesh based on Meshtastic for the transmission and visulization with a web interface.",
    tags: [
      "Raspberry Pi Pico",
      "C",
      "Meshtastic",
      "MMWave Sensors",
      "Grafana",
      "NodeJS",
      "LoRa",
      "Web Development",
      "PCB Design",
      "CAD",
      "3D Printing",
      "InfluxDB",
      "BMS",
    ],
  },

  {
    id: 4,
    image:
      "react.png",
    title:
      "Portfolio Website",
    description:
      "This portfolio website showcases my projects, skills, and experience in a modern and responsive design.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Web Development", , "GitHub"],
  },
  {
    id: 5,
    image:
      "/nexus.png",
    title:
      "Version Control Program",
    description:`A version control
                tool that provides clear access to project versions and related metadata for a Nexus Repository.
                It supports Nexus login, offline projects, and ensures usability even without an internet connection.`,
    tags: ["Java", "JavaFX", "REST API", "Nexus Repository", 'Mock-Ups', 'SQLLite', ],
  },
  {
    id: 6,
    image:
      "/expectedResult.png",
    title: "Expected Results Tool",
    description:
      `An application that calculates pressure, gas, and limit values based on user input. 
      The user can enter a variable temperature for two different devices, and the corresponding
       values are calculated and clearly displayed based on the selected device.`,
    tags: ["Python", "Tkinter"],
  },
  {
    id: 7,
    image:
      "/xml.png ",
    title: "Syntage Editor",
    description:`Further development on an exisiting editor for the editing of XML-files based on
    GitHub tickets of different complexities.`,
    tags: ["Java", "XML",],
  },
  {
    id: 8,
    image:
      "WordGenerator.png",
    title: "Tool for the creation of DOC-documents from HTML-files",
    description: `A internal tool originally written as a Python script to convert HTML files into a Word document
      was extended with a graphical user interface. Implementation and testing of the UI for selecting input
      and output paths to simplify its usage.`,
    tags: ["Python", "Tkinter", "HTML", "DOCX", "GitHub"],
  },


  // Add more project objects here!
];

const ProjectsSection = () => {
  // State to manage whether to show all projects or just the first three
  const [showAllProjects, setShowAllProjects] = useState(false);
  const sectionRef = useRef(null); // Create a ref for the section

  // Determine which projects to display
  const projectsToDisplay = showAllProjects
    ? projectsData
    : projectsData.slice(0, 3);

  // Conditionally render the button
  const isButtonVisible = (projectsData || []).length > 3;

  const handleToggleProjects = () => {
    // If we're currently showing all projects, scroll to the top of the section
    // before showing less.
    if (showAllProjects && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // Toggle the state to show/hide projects
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24 min-h-screen"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsToDisplay.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-gradient-start transition-all duration-500"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                {/* Title and Technologies */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {isButtonVisible && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleToggleProjects} // Toggles the state
              className="px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-neon-green to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md"
            >
              {showAllProjects ? "Show Less" : "View All Projects"}{" "}
              {/* Changes button text */}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
