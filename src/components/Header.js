import React from 'react';
import './Header.css';
import twitterIcon from '../imgs/twitterIcon.png';
import telegramIcon from '../imgs/telegramIcon.png';

const Header = () => {
  return (
    <header className="header">
      <a href="https://twitter.com/BasedXWassie" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src={twitterIcon} alt="Twitter" style={{ width: '50px', height: '50px' }} />
      </a>
      <div className="left-links">
        {/* Use the hash symbol (#) to link to IDs within the page */}
        <a href="#holders" className="nav-link">Holders</a>
        {/* Directly link to Uniswap */}
        <a href="https://uniswap.org" target="_blank" rel="noopener noreferrer" className="nav-link">Swap Now</a>
      </div>
      <div className="logo">BASED WASSIE</div>
      <div className="right-links">
        <a href="#tokenomics" className="nav-link">Tokenomics</a>
        {/* Direct link to the SEC website */}
        <a href="https://sec.gov" target="_blank" rel="noopener noreferrer" className="nav-link">Explore</a>
      </div>
      <a href="https://t.me/basewassie" target="_blank" rel="noopener noreferrer" className="social-icon">
        <img src={telegramIcon} alt="Telegram" style={{ width: '50px', height: '50px' }} />
      </a>
    </header>
  );
};

export default Header;
