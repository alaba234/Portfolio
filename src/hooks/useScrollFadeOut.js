// src/hooks/useScrollFadeOut.js
import { useState, useEffect } from 'react';

/**
 * A custom hook to create a scroll-based fade-out effect for a specific element.
 * @param {object} ref - A React ref object attached to the element to observe.
 * @param {number} fadeThreshold - The scroll distance in pixels over which the fade-out occurs.
 * @returns {number} The calculated opacity value (0 to 1).
 */
const useScrollFadeOut = (ref, fadeThreshold = 700) => {
  const [contentOpacity, setContentOpacity] = useState(1);

  useEffect(() => {
    // Wait for the ref to be attached to a DOM element
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const elementRect = element.getBoundingClientRect();
      const scrolledPastAmount = -elementRect.top;

      let newOpacity = 1;
      if (scrolledPastAmount > 0) {
        newOpacity = 1 - (scrolledPastAmount / fadeThreshold);
      }
      
      // Clamp the opacity value
      newOpacity = Math.max(0.2, Math.min(1, newOpacity));
      setContentOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Also run the handler once on mount to set the initial opacity correctly
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref.current, fadeThreshold]); // Dependency now correctly tracks ref.current

  return contentOpacity;
};

export default useScrollFadeOut;