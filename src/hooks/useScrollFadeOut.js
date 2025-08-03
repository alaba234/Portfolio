// src/hooks/useScrollFadeOut.js
import { useState, useEffect, useCallback } from 'react';

/**
 * A custom hook for a scroll-based fade-out effect that is responsive.
 * @param {object} ref - A React ref object attached to the element to observe.
 * @param {number} thresholdFactor - A factor (e.g., 0.5) to determine the fade distance as a percentage of the element's height.
 * @returns {number} The calculated opacity value (0 to 1).
 */
const useScrollFadeOut = (ref, thresholdFactor = 0.5) => {
  const [contentOpacity, setContentOpacity] = useState(1);

  // A memoized function to handle the scroll logic
  const handleScroll = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const elementTopRelativeToViewport = elementRect.top;
    
    // Calculate a dynamic threshold based on the element's height
    const dynamicFadeThreshold = elementRect.height * thresholdFactor;

    let newOpacity = 1;
    // Fade out when the top of the element is within the dynamicFadeThreshold of the viewport's top
    if (elementTopRelativeToViewport <= 0) {
      const scrolledPastAmount = -elementTopRelativeToViewport;
      newOpacity = 1 - (scrolledPastAmount / dynamicFadeThreshold);
    }
    
    // Clamp the opacity value between 0.2 and 1
    newOpacity = Math.max(0.2, Math.min(1, newOpacity));
    setContentOpacity(newOpacity);
  }, [ref, thresholdFactor]);

  useEffect(() => {
    if (ref.current) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, handleScroll]);

  return contentOpacity;
};

export default useScrollFadeOut;