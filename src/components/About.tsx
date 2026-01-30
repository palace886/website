import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-header text-center">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Two landmark developments by Damodardas Group, crafted with a legacy spanning over 75 years
        </p>
      </div>

      {/* Sub-section 1: The Palace (Bungalows) */}
      <div className="about-sub about-palace">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img
                src="/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0003.jpg"
                alt="The Palace Exterior"
              />
            </div>
            <div className="about-text">
              <span className="about-label">Luxury Bungalows</span>
              <h3 className="about-title">The Palace</h3>
              <div className="decorative-line"></div>
              <p className="about-description">
                The Palace is a fast-growing township with all modern amenities,
                designed to give your standard of living an upgrade. A perfect blend
                of contemporary living and timeless elegance.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <h4>Location</h4>
                  <p>Next to Pioneer Medical College, Sayajipura, Vadodara</p>
                </div>
                <div className="detail-item">
                  <h4>Configurations</h4>
                  <p>3, 4 & 5 BHK Premium Bungalows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="about-divider">
        <div className="divider-line"></div>
        <span className="divider-icon">&#9830;</span>
        <div className="divider-line"></div>
      </div>

      {/* Sub-section 2: The Palace Skyline (Apartments) */}
      <div className="about-sub about-skyline">
        <div className="container">
          <div className="about-content about-content--reversed">
            <div className="about-text">
              <span className="about-label">Premium Apartments</span>
              <h3 className="about-title">The Palace Skyline</h3>
              <div className="decorative-line"></div>
              <p className="about-description">
                Live above standards. The Palace Skyline is a separate high-rise
                within the same campus, offering spacious 4 BHK apartments and
                exclusive penthouses crowned in sky.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <h4>Configuration</h4>
                  <p>4 BHK Apartments &amp; Luxury Penthouses</p>
                </div>
                <div className="detail-item">
                  <h4>Carpet Area</h4>
                  <p>1,500 sq.ft. onwards</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="/assets/the_palace_skyline/The Palace Skyline - BROCHURE 04_pages-to-jpg-0003.jpg"
                alt="The Palace Skyline Exterior"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
