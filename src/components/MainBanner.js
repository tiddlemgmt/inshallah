import React from 'react';
import './MainBanner.css';
import logoImage from '../imgs/kaiBald.png';

function MainBanner() {
  // Function to handle click event
  const handleSwapNowClick = () => {
    window.location.href = 'https://uniswap.com'; 
  };

  return (
    <div className="main-banner">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="main-logo"/>
      </div>
    </div>
  );
}

export default MainBanner;
