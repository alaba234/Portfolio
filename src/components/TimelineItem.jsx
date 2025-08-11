// src/components/TimelineItem.jsx
import React, { useRef } from 'react';
import useScrollFadeOut from '../hooks/useScrollFadeOut';

const TimelineItem = ({ item }) => {
    const itemRef = useRef(null);
  // Use a factor instead of a fixed pixel value
  const contentOpacity = useScrollFadeOut(itemRef, 0.5);

  return (
    <div
      ref={itemRef}
      style={{ opacity: contentOpacity }}
      className={`flex items-center w-full relative transition-opacity duration-500
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
        <p className="text-md text-gradient-start mb-2">{item.company}</p>
        <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;