// src/components/SkillsSection.jsx
import React, { useRef, useState, useEffect } from 'react';
import { FaCode, FaMicrochip, FaLaptopCode } from 'react-icons/fa';
import useScrollFadeOut from '../hooks/useScrollFadeOut'; 

// Data for the skills cards - easily expandable!
const skillsData = [
  {
    title: 'Software Engineering',
    icon: <FaCode className="text-2xl text-white mr-2" />,
    skills: [
      { name: 'Python', percentage: '80%' },
      { name: 'Java', percentage: '90%' },
      { name: 'JavaScript/TypeScript', percentage: '70%' },
      { name: 'React/Next.js', percentage: '70%' },
      { name: 'SQL', percentage: '100%' },
      { name: 'IBM Rhapsody', percentage: '70%' },
      { name: 'GraphQL', percentage: '60%' },
      { name: 'Git/GitHub', percentage: '90%' },
      {name: 'Matlab', percentage: '90%' },
      { name: 'Docker', percentage: '70%' },
      {name: 'Machine Learning', percentage: '80%' },
      { name: 'Gradle', percentage: '80%' },
    ],
  },
  {
    title: 'Embedded Systems',
    icon: <FaMicrochip className="text-2xl text-white mr-2" />,
    skills: [
      { name: 'C', percentage: '70%' },
      { name: 'Microcontrollers(Arduino, Raspberry Pi, ESP, AT)', percentage: '80%' },
      { name: 'FPGA/Verilog', percentage: '10%' },
      { name: 'Real-time Systems', percentage: '83%' },
      { name: 'PCB Design', percentage: '80%' },
      {name: 'CAD', percentage: '70%' },
      {name: 'Integrated Sensors', percentage: '90%' },
    ],
  },
  
];

const expertiseData = [
  'English proficiency C1',
  'French proficiency B2',
  'Academic Research',
  'Teamwork',
  'Problem Solving',
  'SCRUM Methodology',
  'CI/CD',
  'DevOps Practices',
];

const SkillsSection = () => {
  const skillsContainerRef = useRef(null); // Ref for the main skills container
  const otherSkillsCard = useRef(null); // Ref for the other skills card
  const skillCardsOpacity = useScrollFadeOut(skillsContainerRef, 0.5); // Use the custom hook for scroll fade-out effect
  const otherSkillsOpacity = useScrollFadeOut(otherSkillsCard, 0.5); // Use the custom hook for scroll fade-out effect

  const [hasBeenViewed, setHasBeenViewed] = useState(false); // State to trigger animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasBeenViewed) {
            setHasBeenViewed(true);
            observer.disconnect(); // Stop observing after it's been viewed once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (skillsContainerRef.current) {
      observer.observe(skillsContainerRef.current);
    }

    return () => {
      if (skillsContainerRef.current) {
        observer.unobserve(skillsContainerRef.current);
      }
    };
  }, [hasBeenViewed]);

  return (
    <section id="skills" className="bg-dark-theme-bg text-dark-theme-text py-16 px-8 md:px-16 lg:px-24 min-h-screen flex items-center justify-center">
      <div ref={skillsContainerRef} className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">My Expertise</h2>

        {/* Top Two Skills Cards */}
        <div style={{opacity: skillCardsOpacity}} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {skillsData.map((card) => (
            <div key={card.title} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gradient-start transition-colors duration-300">
              <div className="flex items-center mb-6">
                {card.icon}
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
              <ul className="space-y-4">
                {card.skills.map((skill, index) => (
                  <li key={skill.name}>
                    <div className="flex justify-between items-center text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-neon-green">{skill.percentage}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-neon-green to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: hasBeenViewed ? skill.percentage : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Cross-Domain Expertise Card */}
        <div ref={otherSkillsCard} style={{opacity: otherSkillsOpacity}} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gradient-start transition-colors duration-300">
          <div className="flex items-center mb-6">
            <FaLaptopCode className="text-2xl text-white mr-2" />
            <h3 className="text-2xl font-bold">Other skills</h3>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            In addition to my core skills, I have a diverse set of expertise that enhances my 
            ability to contribute effectively in various domains. Here are some of the key areas where I excel.  
          </p>
          <div className="flex flex-wrap gap-4">
            {expertiseData.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-gray-700 text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;