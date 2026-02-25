import "./Location.css";

const Location = () => {
  const landmarks = [
    "Pioneer Medical College (Adjacent)",
    "Sayajipura",
    "Ajwa-Nimeta Road",
    "Major Connectivity Points",
    "Educational Institutions",
    "Healthcare Facilities",
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
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d118106.70010221665!2d73.17308625!3d22.32210265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395fcfe7ee4a5c19%3A0xd1eb87c3e7d6fbdc!2sThe%20palace%2C%20Sayajipura%20Village%2C%20Madhavpura%2C%20Vadodara%2C%20Gujarat%20390019!3m2!1d22.3299312!2d73.26574839999999!5e0!3m2!1sen!2sin!4v1772030516491!5m2!1sen!2sin"
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
              THE PALACE
              <br />
              Next to Pioneer Medical College,
              <br />
              Sayajipura, Ajwa-Nimeta Road,
              <br />
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
              <p>
                <strong>Phone:</strong> +91 9157878111
              </p>
              <p>
                <strong>Email:</strong> info@the-palace.in
              </p>
              <p>
                <strong>Website:</strong> www.the-palace.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
