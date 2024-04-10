import React, { useEffect } from 'react';
import './Snowfall.css';
import kaiHead from '../imgs/snowfall.png'; // Ensure the path is correct

const Snowfall = () => {
  const numberOfHeads = 20; // Choose an appropriate number

  const heads = Array.from({ length: numberOfHeads }).map((_, index) => {
    // Define the ranges to avoid the middle 20%
    const leftMax = window.innerWidth * 0.4; // Left 40%
    const rightMin = window.innerWidth * 0.6; // Right 40%
    let xPosition = Math.random() * leftMax; // Default to left range

    // Randomly choose to position in the right range with a 50% chance
    if (Math.random() > 0.5) {
      xPosition = rightMin + Math.random() * (window.innerWidth - rightMin - 30);
    }

    return {
      id: index,
      xPosition: xPosition,
      delay: Math.random() * 5, // Randomize delay (in seconds)
      duration: 3 + Math.random() * 5, // Randomize duration (in seconds)
    };
  });

  useEffect(() => {
    // Apply styles to snowflakes after component mounts
    heads.forEach(head => {
      const el = document.getElementById(`snowflake-${head.id}`);
      if (el) {
        el.style.left = `${head.xPosition}px`;
        el.style.animationName = 'fall';
        el.style.animationDuration = `${head.duration}s`;
        el.style.animationDelay = `${head.delay}s`;
        el.style.animationTimingFunction = 'linear';
        el.style.animationIterationCount = 'infinite';
      }
    });
  }, []); // Ensures this effect runs once after initial render

  return (
    <div className="snowfall">
      {heads.map(head => (
        <div key={head.id} id={`snowflake-${head.id}`} className="snowflake" style={{ backgroundImage: `url(${kaiHead})`, width: '50px', height: '50px' }}>
          {/* An empty div for the snowflake effect */}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
