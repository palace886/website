import './Location.css';

const Location = () => {
  const landmarks = [
    'Pioneer Medical College (Adjacent)',
    'Sayajipura',
    'Ajwa-Nimeta Road',
    'Major Connectivity Points',
    'Educational Institutions',
    'Healthcare Facilities',
  ];

  return (
    <section className="location" id="location">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Location</h2>
          <p className="section-subtitle">
            Strategically located for excellent connectivity and convenience
          </p>
        </div>
        <div className="location-content">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0!2d73.1!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzAwLjAiTiA3M8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Palace Location"
            ></iframe>
          </div>
          <div className="location-details">
            <h3>Address</h3>
            <div className="decorative-line"></div>
            <p className="address-text">
              THE PALACE<br />
              Next to Pioneer Medical College,<br />
              Sayajipura, Ajwa-Nimeta Road,<br />
              Vadodara
            </p>
            <h3>Nearby Landmarks</h3>
            <div className="decorative-line"></div>
            <ul className="landmarks-list">
              {landmarks.map((landmark, index) => (
                <li key={index}>{landmark}</li>
              ))}
            </ul>
            <div className="contact-info">
              <p><strong>Phone:</strong> +91 7877874848</p>
              <p><strong>Email:</strong> info@the-palace.in</p>
              <p><strong>Website:</strong> www.the-palace.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
