import React from 'react';
import './styles.css';
import Header from './components/Header';
import SlidingText from './components/SlidingText';
import Gallery from './components/Gallery';
import SocialLinks from './components/SocialLinks';
import Snowfall from './components/Snowfall';
import MainBanner from './components/MainBanner';
import Tokenomics from './components/Tokenomics';

function App() {
  const flameGifUrl = "https://i.ibb.co/phk1py9/WASSIE-CAROUSEL.png"; // Replace with your actual URL

  return (
    <div className="App">
      <Snowfall />
      <Header />
      <MainBanner/>
      <Tokenomics/>
      <SlidingText messages={[
        "EID MUBARAK ☪️☪️☪️",
        <img src={flameGifUrl} alt="Flame" style={{ height: '3em' }} />,
        "EID MUBARAK ☪️☪️☪️",
        <img src={flameGifUrl} alt="Flame" style={{ height: '3em' }} />,
      ]} />
      <Gallery />
      <SocialLinks />
    </div>
  );
}

export default App;
