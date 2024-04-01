import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed, className }: { text: string, speed: number, className?: string }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, text]);

  return <span className={className}>{currentText}</span>;
};

export default Typewriter;