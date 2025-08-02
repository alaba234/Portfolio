// src/components/Timeline.jsx
import React from 'react';
import TimelineItem from './TimelineItem'; // Import the new component

// This is where you can easily expand your timeline!
const timelineData = [
  // ... your existing timeline data ...
  {
    id: 1,
    date: 'March 2025 - Present',
    title: 'Master of Engineering in Systems Engineering and Management with specialization in electrical engineering',
    company: 'Technichal University of Applied Sciences Ulm',
    description: 'In-depth engineering skills in the areas of hardware and software, but also business skills in areas such as finance and human resources.',
    alignment: 'left',
  },
  {
    id: 2,
    date: 'March 2021 - February 2025',
    title: 'Bachelor of Science in Software Engineering (1,3)',
    company: 'Universtiy of Applied Sciences Heilbronn',
    description: 'Specialization in embedded systems.',
    thesis: 'Classification of data sets using the electric potential',
    alignment: 'right',
  },
  {
    id: 3,
    date: 'August 2024 - September 2024',
    title: 'Fulbright scholarship',
    company: 'Virgina Tech',
    description: 'Summer course in Leaders in Entrepreneurship.',
    alignment: 'left',
  },
  {
    id: 4,
    date: 'September 2024 - November 2024',
    title: 'Software Developer',
    company: 'Eviyo GbR',
    description: 'Software developer at a small Start-Up.',
    alignment: 'right',
  },

  {
    id: 5,
    date: 'September 2021 - June 2024',
    title: 'Student Assistant',
    company: 'Hochschule Heilbronn',
    description: 'Student assistant in the subject “Work Techniques and Design Thinking”.',
    alignment: 'left',
  },
  
  {
    id: 6,
    date: 'March 2023 - August 2023',
    title: 'Software Developer Intern',
    company: 'Diehl Defence',
    description: 'Internship  as a software  developer.',
    alignment: 'right',
  },

  {
    id: 7,
    date: 'September 2022 - January 2023',
    title: 'Exchange Semester',
    company: 'Northumbria University ',
    description: 'Exchange Student at Northumbria University in Newcastle Upon Tyne, England.',
    alignment: 'left',
  },

   {
    id: 8,
    date: 'September 2017 - July 2020',
    title: 'High School Diploma (1,9)',
    company: 'Bertha-Benz Schule Sigmaringen',
    description: 'Graduated with a focus on computer science ',
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