// src/components/CountryModal.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';

/**
 * A modal pop-up to display details about a visited country.
 *
 * @param {Object} props
 * @param {Object} props.content - The data for the country to display.
 * @param {string} props.content.id - The country's ISO Alpha-3 code.
 * @param {string} props.content.properties.name - The country's name.
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
          Travels in {content.properties.name}
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Placeholder image for the country */}
          <img
            src={`https://placehold.co/300x200/555/fff?text=${content.properties.name}`}
            alt={`A view of ${content.properties.name}`}
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          {/* Textbox with mock content */}
          <p className="text-gray-300 w-full md:w-1/2">
            This is a placeholder for your travel memories and experiences in {content.properties.name}. You can describe the places you visited, the food you tried, and the people you met.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
