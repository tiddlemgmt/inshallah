import React from 'react';
import './SocialLinks.css'; // Ensure this CSS file exists

function SocialLinks() {
  return (
    <div className="social-links-container">
      <div className="social-links">
        {/* Existing social media profile links */}
        <a href="https://twitter.com/BasedXWassie" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://t.me/basewassie" target="_blank" rel="noopener noreferrer">Telegram</a>
        {/* Add more social media links as needed */}
      </div>
      <p className="disclaimer">
        Disclaimer: This is just a meme coin with no intrinsic value. We are just bullish on base
      </p>
    </div>
  );
}

export default SocialLinks;
