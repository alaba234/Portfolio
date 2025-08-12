// src/components/BooksPage.jsx
import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Data for the books, updated to include image URLs and a description
const booksData = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    imageUrl: 'https://placehold.co/200x300/555/fff?text=Atomic+Habits',
    description: 'A practical guide to building good habits and breaking bad ones.',
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    imageUrl: 'https://placehold.co/200x300/555/fff?text=Rich+Dad',
    description: 'An eye-opener on wealth, assets, and financial literacy.',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    imageUrl: 'https://placehold.co/200x300/555/fff?text=The+Alchemist',
    description: 'A magical journey of following one\'s dreams.',
  },
  {
    title: 'Eat That Frog',
    author: 'Brian Tracy',
    imageUrl: 'https://placehold.co/200x300/555/fff?text=Eat+That+Frog',
    description: 'A motivational book on overcoming procrastination.',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    imageUrl: 'https://placehold.co/200x300/555/fff?text=Thinking+Fast+and+Slow',
    description: 'Profound insights into cognitive biases and human decision-making.',
  },
];



const BooksPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/", { state: { scrollTo: "hobbies" } });
  };
  return (
    <div className="bg-dark-theme-bg text-dark-theme-text min-h-screen py-16 px-8 md:px-16 lg:px-24">
      {/* Page Title and Subtitle, styled to match the image */}
      <div className="text-center mb-12">
        <button
                  onClick={handleBackClick}
                  className="text-white hover:text-gradient-start transition-colors duration-300"
                >
                  <FaArrowLeft size={24} />
                </button>
        <h2 className="text-4xl font-bold text-white mb-2">
          Books That Shaped My Journey
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          These books have influenced my perspectives, motivation, and self-growth.
        </p>
      </div>

      {/* Horizontal scrollable container for the book cards */}
      <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4">
        {booksData.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-64 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700"
          >
            {/* Book cover image */}
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            {/* Book title */}
            <h4 className="text-xl font-bold text-gradient-start mb-1">{item.title}</h4>
            {/* Author */}
            <p className="text-base text-gray-400 mb-2">{item.author}</p>
            {/* Description */}
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
