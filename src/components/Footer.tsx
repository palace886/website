import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>THE PALACE</h3>
            <p className="footer-tagline">by Damodardas DMC Group</p>
            <p className="footer-description">
              A premium residential project offering 3, 4 & 5 BHK bungalows
              with modern amenities and superior craftsmanship.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#highlights">Features</a></li>
              <li><a href="#floorplans">Floor Plans</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>+91 7877874848</p>
            <p>info@the-palace.in</p>
            <p>www.the-palace.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-rera">
            <p>
              <strong>RERA Registration No:</strong> PR/GJ/VADODARA/VADODARA/Others/RAA03897/301018
            </p>
            <p className="footer-rera-link">
              Visit: <a href="https://www.gujrera.gujarat.gov.in" target="_blank" rel="noopener noreferrer">
                www.gujrera.gujarat.gov.in
              </a>
            </p>
          </div>
          <div className="footer-disclaimer">
            <p>
              Disclaimer: This website is for informational purposes only. The content, images, and
              information provided are subject to change without notice. Please verify all details
              before making any decisions.
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} Damodardas DMC Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
