// src/components/Timeline.jsx
import React from 'react';
import TimelineItem from './TimelineItem'; // Import the new component

// This is where you can easily expand your timeline!
const timelineData = [
  // ... your existing timeline data ...
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
];

const Timeline = () => {
  return (
    <div className="relative py-8">
      {/* The main vertical timeline line */}
      <div className="absolute left-1/2 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

      {/* Container for all the timeline events */}
      <div className="space-y-12">
        {timelineData.map((item) => (
          // Render the new TimelineItem component for each item
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;