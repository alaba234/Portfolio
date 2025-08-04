import { useState, useEffect } from 'react';

const useTypingEffect = (phrases, typingSpeed = 150, deletingSpeed = 75, delay = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Phase 1: Typing
    if (!isDeleting && charIndex < phrases[phraseIndex].length) {
      const timer = setTimeout(() => {
        setCurrentText(phrases[phraseIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
    
    // Phase 2: Deleting
    if (isDeleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setCurrentText(phrases[phraseIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timer);
    }
    
    // Phase 3: Transition (between typing and deleting)
    if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      const timer = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timer);
    }
    
    // Phase 4: Reset and move to next phrase
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delay]);

  return currentText;
};

export default useTypingEffect;