import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0003.jpg', alt: 'Entrance View' },
    { src: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0004.jpg', alt: 'Clubhouse Exterior' },
    { src: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0005.jpg', alt: 'Grand Lobby' },
    { src: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0006.jpg', alt: 'Amenities' },
    { src: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0007.jpg', alt: 'Swimming Pool' },
    { src: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0010.jpg', alt: 'Bungalow Exterior' },
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Explore the visual journey of The Palace
          </p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(image.src)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="view-text">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Gallery view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
