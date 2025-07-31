// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-theme-bg text-light-theme-text
                    dark:bg-dark-theme-bg dark:text-dark-theme-text">
      <Navbar />
      <HeroSection />
      {/* Add more content here to make the page scrollable */}
      <AboutSection />
      <div className="h-screen bg-gray-300 dark:bg-gray-800 flex items-center justify-center text-3xl">
        Even More Content
      </div>
    </div>
  );
}

export default App;