import React, { useState } from 'react';
import Container from '../components/layout/Container';
import styles from './GalleryPage.module.scss';
import g1 from '../assets/images/g1.jpg';
import g2 from '../assets/images/g2.png';
import g3 from '../assets/images/g3.png';
import g4 from '../assets/images/g4.png';
import g5 from '../assets/images/g5.jpeg';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: g1, alt: 'Gallery Image 1' },
    { src: g2, alt: 'Gallery Image 2' },
    { src: g3, alt: 'Gallery Image 3' },
    { src: g4, alt: 'Gallery Image 4' },
    { src: g5, alt: 'Gallery Image 5' }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <Container className={styles.galleryContainer}>
      <div className={styles.galleryCard}>
        <h2 className={styles.galleryTitle}>
          Design Exploration
        </h2>
        
        <div className={styles.galleryText}>
          <p>
            design dump
          </p>

          <div className={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={styles.galleryItem}
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </Container>
  );
}

export default React.memo(Gallery);