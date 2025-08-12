import React from 'react';
import { FaGlobeAmericas, FaBookOpen, FaMusic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const hobbies = [
  {
    icon: <FaGlobeAmericas size={40} />,
    label: 'Travels',
    link: '/travels',
    img: './bilboHouse.jpg', // replace with your image
  },
  {
    icon: <FaBookOpen size={40} />,
    label: 'Books',
    link: '/books',
    img: './books.jpg', // replace with your image
  },
  {
    icon: <FaMusic size={40} />,
    label: 'Music',
    link: '/music',
    img: './ofMonstersAndMen.jpg', // replace with your image
  },
];

const InteractiveContentSection = () => {
  return (
    <div
      id="hobbies"
      className="relative w-full bg-dark-theme-bg py-16 px-8 md:px-6 lg:px-24"
    >
      <h3 className="text-4xl font-bold text-center text-white mb-12">
       Get to know me
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hobbies.map(({ icon, label, link, img }) => (
          <Link
            key={label}
            to={link}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            {/* Background Image */}
            <img
              src={img}
              alt={label}
              className="w-full h-56 object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="text-gradient-start mb-2">{icon}</div>
              <h4 className="text-white text-xl font-bold">{label}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InteractiveContentSection;
