import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      title: 'Grand Clubhouse',
      description: 'Palatial clubhouse with modern facilities',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0005.jpg',
    },
    {
      title: 'Swimming Pool',
      description: 'Temperature controlled swimming pool',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0007.jpg',
    },
    {
      title: 'Fitness Center',
      description: 'Fully equipped modern gymnasium',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0006.jpg',
    },
    {
      title: 'Yoga & Meditation',
      description: 'Dedicated spaces for wellness activities',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0006.jpg',
    },
    {
      title: 'Landscaped Gardens',
      description: 'Beautifully maintained green spaces',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0003.jpg',
    },
    {
      title: 'Security',
      description: '24/7 security with CCTV surveillance',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0004.jpg',
    },
  ];

  return (
    <section className="amenities" id="amenities">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Amenities</h2>
          <p className="section-subtitle">
            Premium facilities designed for a lifestyle of comfort and luxury
          </p>
        </div>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-image">
                <img src={amenity.image} alt={amenity.title} loading="lazy" />
              </div>
              <div className="amenity-content">
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
