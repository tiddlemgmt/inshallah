import React from 'react';
import './Tokenomics.css';
import swapIconLeft from '../imgs/snowfall.png';
import swapIconRight from '../imgs/snowfall.png';

function Tokenomics() {
  const tokenAddress = "0x..."; // Replace with your actual token address
  const totalSupply = "2,222,222,222";
  const basescanUrl = "https://basescan.com/"; // Append your token's actual path
  const handleSwapNowClick = () => {
    window.location.href = 'https://uniswap.com'; 
  };

  return (
    <div id="tokenomics" className="tokenomics">
      <h2>Tokenomics</h2>
      <p className="emphasis">Token Address: <span>{tokenAddress}</span></p>
      <p>Total Supply: {totalSupply}</p>
      <p className='emphasis'>The contract is <span>RENOUNCED</span> and liquidity is <span>BURNT</span>.</p>
      <button className="swap-now-button" onClick={handleSwapNowClick}>
        <img src={swapIconLeft} alt="" className="swap-icon" />
        Swap Now
        <img src={swapIconRight} alt="" className="swap-icon" />
      </button>
    </div>
  );
}

export default Tokenomics;
