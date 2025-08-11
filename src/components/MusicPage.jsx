// src/components/MusicPage.jsx
import React from 'react';

const musicData = [
  { title: 'The Wall', artist: 'Pink Floyd', genre: 'Progressive Rock', text: 'An epic concept album that I can listen to on repeat.' },
  { title: 'L.A. Woman', artist: 'The Doors', genre: 'Blues Rock', text: 'The perfect late-night driving album.' },
  { title: 'Kind of Blue', artist: 'Miles Davis', genre: 'Jazz', text: 'A timeless masterpiece that inspires my creativity.' },
];

const MusicPage = () => {
  return (
    <div className="bg-dark-theme-bg text-dark-theme-text min-h-screen py-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Favorite Music</h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {musicData.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h4 className="text-2xl font-bold text-neon-green mb-2">{item.title}</h4>
            <p className="text-base text-gray-400">{item.artist} ({item.genre})</p>
            <p className="text-gray-300 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;