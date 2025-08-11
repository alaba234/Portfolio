// src/components/BooksPage.jsx
import React from 'react';

const booksData = [
  { title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', text: 'Shaped my sense of humor and love for speculative fiction.' },
  { title: 'Clean Code', author: 'Robert C. Martin', text: 'Fundamentally changed how I approach writing software.' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', text: 'Provided profound insights into cognitive biases and human decision-making.' },
];

const BooksPage = () => {
  return (
    <div className="bg-dark-theme-bg text-dark-theme-text min-h-screen py-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Books that Shaped Me</h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {booksData.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-neon-green mb-2">{item.title}</h4>
            <p className="text-base text-gray-400">by {item.author}</p>
            <p className="text-gray-300 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;