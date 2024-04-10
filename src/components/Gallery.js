import React from 'react';
import './Gallery.css'; // Make sure to update the CSS file with the new styles
// Import images
import baldNigga1 from '../imgs/baldnigga1.png';
import baldNigga2 from '../imgs/baldnigga2.png';
import baldNigga3 from '../imgs/baldnigga3.png';
import baldNigga4 from '../imgs/baldnigga4.png';
import baldNigga5 from '../imgs/baldnigga5.png';
import baldNigga6 from '../imgs/baldnigga6.png';
import baldNigga7 from '../imgs/baldnigga7.png';
import baldNigga8 from '../imgs/baldnigga8.png';
import baldNigga9 from '../imgs/baldnigga9.png';
import baldNigga10 from '../imgs/baldnigga10.png';
import baldNigga11 from '../imgs/baldnigga11.png';
import baldNigga12 from '../imgs/baldnigga12.png';
import baldNigga13 from '../imgs/baldnigga13.png';
import baldNigga14 from '../imgs/baldnigga14.png';
import baldNigga15 from '../imgs/baldnigga15.png';

function Gallery() {
  const images = [
    baldNigga1, baldNigga2, baldNigga3, baldNigga4, baldNigga5,
  ];

  return (
    <div id="holders" className="gallery-container">
      <h2 className="gallery-header">Meet The Holders</h2>
      <div className="gallery-grid">
        {images.map((image, index ) => (
          <div key={index} className="gallery-item" style={{ backgroundImage: `url(${image})` }}>
            <div className="image-overlay">
              <p className="image-description">WASSIE📈🟢 #{index + 42069}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
