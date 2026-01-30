import './Highlights.css';

const Highlights = () => {
  const highlights = [
    {
      title: 'Gated Community',
      description: 'Secure and safe environment with 24/7 security',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      title: 'Modern Amenities',
      description: 'Premium facilities for a luxurious lifestyle',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      title: 'Prime Location',
      description: 'Next to Pioneer Medical College, excellent connectivity',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    {
      title: 'Premium Construction',
      description: 'High-quality materials and superior craftsmanship',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    {
      title: 'Spacious Layouts',
      description: 'Well-designed 3, 4 & 5 BHK bungalows',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 3v18"/>
          <path d="M9 9h12"/>
        </svg>
      )
    },
    {
      title: 'Landscaped Gardens',
      description: 'Beautifully maintained green spaces',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
          <circle cx="6.5" cy="11.5" r="1.5"/>
          <circle cx="9.5" cy="7.5" r="1.5"/>
          <circle cx="14.5" cy="7.5" r="1.5"/>
          <circle cx="17.5" cy="11.5" r="1.5"/>
        </svg>
      )
    },
  ];

  return (
    <section className="highlights" id="highlights">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Project Highlights</h2>
          <p className="section-subtitle">
            Experience contemporary living with premium amenities and modern infrastructure
          </p>
        </div>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                {highlight.icon}
              </div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
