// src/components/Timeline.jsx
import React from 'react';

// This is where you can easily expand your timeline!
// Just add a new object to this array for each station in your life.
// The 'alignment' key controls if it appears on the 'left' or 'right' side.
const timelineData = [
  {
    id: 1,
    date: 'Jan 2024 - Present',
    title: 'Masters in Systems Engineering',
    company: 'University of Maryland',
    description: 'Specializing in Electrical Engineering. Thesis on the optimization of a system with Machine Learning.',
    alignment: 'left',
  },
  {
    id: 2,
    date: 'Aug 2023 - Dec 2023',
    title: 'Research Assistant',
    company: 'University of Maryland',
    description: 'Developed a system to simulate embedded systems with real-time data.',
    alignment: 'right',
  },
  {
    id: 3,
    date: 'Dec 2019 - May 2023',
    title: 'Bachelor of Science in Software Engineering',
    company: 'Florida Gulf Coast University',
    description: 'Graduated Cum Laude with a specialization in Embedded Systems.',
    alignment: 'left',
  },
  {
    id: 4,
    date: 'May 2022 - Aug 2022',
    title: 'Software Engineering Intern',
    company: 'Lockheed Martin',
    description: 'Developed and maintained software for an aerospace system.',
    alignment: 'right',
  },
  {
    id: 5,
    date: 'May 2022 - Aug 2022',
    title: 'Software Engineering Intern',
    company: 'Lockheed Martin',
    description: 'Developed and maintained software for an aerospace system.',
    alignment: 'left',
  },

  {
    id: 6,
    date: 'May 2022 - Aug 2022',
    title: 'Software Engineering Intern',
    company: 'Lockheed Martin',
    description: 'Developed and maintained software for an aerospace system.',
    alignment: 'right',
  },

  {
    id: 7,
    date: 'May 2022 - Aug 2022',
    title: 'Software Engineering Intern',
    company: 'Lockheed Martin',
    description: 'Developed and maintained software for an aerospace system.',
    alignment: 'left',
  }

  

  // Add more stations here! The 'alignment' can be 'left' or 'right'.
];

const Timeline = () => {
  return (
    <div className="relative py-8">
      {/* The main vertical timeline line */}
      <div className="absolute left-1/2 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

      {/* Container for all the timeline events */}
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            // Uses Flexbox to align content to the left or right of the central line
            className={`flex items-center w-full relative
              ${item.alignment === 'right' ? 'justify-end lg:pl-16' : 'justify-start lg:pr-16'}`}
          >
            {/* The circular dot on the line */}
            <div
              className={`absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-gradient-to-r from-neon-green to-blue-500 z-10
                ${item.alignment === 'right' ? 'left-1/2 transform -translate-x-1/2' : 'left-1/2 transform -translate-x-1/2'}`}
            ></div>
            
            {/* The event card itself */}
            <div
              className={`bg-gray-800 p-6 rounded-lg shadow-lg flex-1
              border border-gray-700 hover:border-gradient-start transition-colors duration-300
              ${item.alignment === 'right' ? 'lg:ml-auto max-w-full lg:max-w-[calc(50%-2rem)]' : 'lg:mr-auto max-w-full lg:max-w-[calc(50%-2rem)]'}`}
            >
              <p className="text-sm text-gray-400 mb-1">{item.date}</p>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-md text-neon-green mb-2">{item.company}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;