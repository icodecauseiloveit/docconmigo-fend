import React, { useState, useEffect } from 'react';
import './_AnimatedText.scss'; // Make sure to adjust the path to your compiled CSS

const benefits = [
  "aumentar tu energía", 
  "alcanzar tu peso ideal",
  "abandonar la inflamación", 
  "regular la diabetes",
  "dominar el estrés",
  "disfrutar un sueño reparador"
];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimated(true);
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % benefits.length);
        setIsAnimated(false);
      }, 1000); // Time to wait before changing the text (in milliseconds)
    }, 2000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`${isAnimated ? 'no' : 'animated-text'}`}>
      <p className="text">{benefits[currentIndex]}</p>
    </div>
  );
};

export default AnimatedText;
