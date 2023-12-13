import React from 'react';
import Image from 'next/image';

// Este sería tu componente ImageGallery
const ImageGallery = ({ images, setCurrentImage }) => {
  return (
    <div className="gallery-container" style={{ position: 'absolute', width: '100%', top: '100%', zIndex: 10 }}>
      <div className="gallery-grid" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {images.map((img, index) => (
          <div key={index} onClick={() => setCurrentImage(img)} style={{ cursor: 'pointer' }}>
            <Image src={'/' + img} width={100} height={100} className="gallery-image" alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;