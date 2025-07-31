// src/components/ProjectsSection.jsx
import React, { use, useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import useScrollFadeOut from '../hooks/useScrollFadeOut'; 




// Placeholder data for your projects - easily expandable!
const projectsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fit=crop&w=800&q=80',
    title: 'E-Commerce Platform',
    technologies: ['React', 'Node.js'],
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1549492429-1667d4f9b8c0?fit=crop&w=800&q=80',
    title: 'IoT Smart Home Hub',
    technologies: ['C++', 'Arduino'],
    description: 'Embedded system for home automation with sensor integration, wireless communication, and mobile app control interface.',
    tags: ['C++', 'Arduino', 'Raspberry Pi', 'MQTT', 'ReactNative', 'Firebase'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1610484732126-72f88b56d3c3?fit=crop&w=800&q=80',
    title: 'Analytics Dashboard',
    technologies: ['Python', 'React'],
    description: 'Real-time data visualization platform with machine learning insights, predictive analytics, and interactive reporting capabilities.',
    tags: ['Python', 'React', 'D3.js', 'Flask', 'PostgreSQL', 'TensorFlow'],
  },
  // Add more project objects here!
];



const ProjectsSection = () => {
const sectionRef = useRef(null); // Create a ref
const contentOpacity = useScrollFadeOut(sectionRef,700); // Use the custom hook for scroll fade-out effect

  return (
    <section ref={sectionRef} id="projects" className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24 min-h-screen">
      <div className="container mx-auto max-w-6xl"  style={{ opacity: contentOpacity }}>
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-gradient-start transition-colors duration-300">
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                {/* Title and Technologies */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-gray-700 text-neon-green font-semibold">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300 font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Projects Button */}
        <div className="flex justify-center mt-8">
          <a href="#projects" className="px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-neon-green to-blue-500 hover:scale-105 transform transition-transform duration-300 shadow-md">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;