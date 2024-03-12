import { useState, useEffect } from 'react';

const TypingAnimation = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (displayText.length > 0) {
      let intervalId;

      intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText.slice(0, -1)); // Remove the last character
      }, delay - 25);

      return () => clearInterval(intervalId);
    } else {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          const letter = text[currentIndex];
          setDisplayText((prevText) => {
            if (letter !== undefined) {
              return prevText + letter;
            } else {
              return prevText + '';
            }
          });
          currentIndex = currentIndex + 1;
        } else {
          clearInterval(intervalId);
        }
      }, delay);

      return () => clearInterval(intervalId);
    }
  }, [text, delay]);

  return displayText;
};

export default TypingAnimation;
