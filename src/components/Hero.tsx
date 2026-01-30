import "./Hero.css";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Top: Full-bleed hero */}
      <div className="hero-main">
        <div className="hero-main-overlay"></div>
        <div className="hero-main-content">
          <div className="hero-logo">
            <img
              src="/assets/ProjectLogo.png"
              alt="The Palace Logo"
              className="hero-logo-img"
            />
          </div>
          <h1 className="hero-title">THE PALACE</h1>
          <div className="hero-divider"></div>
          <p className="hero-tagline">Your Home Defines Your Lifestyle</p>
          <p className="hero-legacy">by Damodardas Group &mdash; Since 1961</p>
        </div>
      </div>

      {/* Bottom: Two project panels */}
      <div className="hero-projects">
        <div
          className="hero-project"
          onClick={() => scrollToSection("about")}
        >
          <div className="hero-project-image">
            <img
              src="/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0003.jpg"
              alt="The Palace - Bungalows"
            />
          </div>
          <div className="hero-project-info">
            <span className="project-label">Luxury Bungalows</span>
            <h2 className="project-name">The Palace</h2>
            <p className="project-config">3, 4 &amp; 5 BHK Premium Bungalows</p>
            <span className="project-link">
              Explore <span className="project-arrow">&rarr;</span>
            </span>
          </div>
        </div>

        <div className="hero-projects-divider"></div>

        <div
          className="hero-project"
          onClick={() => scrollToSection("about")}
        >
          <div className="hero-project-image">
            <img
              src="/assets/the_palace_skyline/The Palace Skyline - BROCHURE 04_pages-to-jpg-0003.jpg"
              alt="The Palace Skyline - Apartments"
            />
          </div>
          <div className="hero-project-info">
            <span className="project-label">Premium Apartments</span>
            <h2 className="project-name">The Palace Skyline</h2>
            <p className="project-config">4 BHK Apartments &amp; Luxury Penthouses</p>
            <span className="project-link">
              Explore <span className="project-arrow">&rarr;</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
