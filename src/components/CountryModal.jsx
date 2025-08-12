// src/components/CountryModal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';

/**
 * A modal pop-up to display details about a visited country.
 *
 * @param {Object} props
 * @param {Object} props.content - The data for the country to display.
 * @param {string} props.content.title - The title of the travel experience.
 * @param {string} props.content.description - The description of the travel experience.
 * @param {string} props.content.imageUrl - The URL of an image for the travel experience.
 * @param {function} props.onClose - The function to close the modal.
 * @returns {JSX.Element} The modal pop-up component.
 */
const CountryModal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 transition-colors"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-3xl font-bold text-white mb-4">
          {content.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src={content.imageUrl}
            alt={content.title}
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <p className="text-gray-300 w-full md:w-1/2">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
