import { useState } from 'react';
import './FloorPlans.css';

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState('3bhk');

  const plans = {
    '3bhk': {
      title: '3 BHK Premium Bungalow',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0015.jpg',
      specs: [
        'Built-up Area: Contact for details',
        'Bedrooms: 3',
        'Bathrooms: 3',
        'Living & Dining Area',
        'Kitchen',
        'Private Garden',
      ],
    },
    '4bhk': {
      title: '4 BHK Premium Bungalow',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0015.jpg',
      specs: [
        'Built-up Area: Contact for details',
        'Bedrooms: 4',
        'Bathrooms: 4',
        'Living & Dining Area',
        'Kitchen',
        'Private Garden',
      ],
    },
    '5bhk': {
      title: '5 BHK Premium Bungalow',
      image: '/assets/finalBrochure/The palace Final broucher_pages-to-jpg-0015.jpg',
      specs: [
        'Built-up Area: Contact for details',
        'Bedrooms: 5',
        'Bathrooms: 5',
        'Living & Dining Area',
        'Kitchen',
        'Private Garden',
      ],
    },
  };

  return (
    <section className="floorplans" id="floorplans">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Floor Plans</h2>
          <p className="section-subtitle">
            Choose from thoughtfully designed configurations to suit your lifestyle
          </p>
        </div>

        <div className="floorplans-tabs">
          <button
            className={`tab-button ${activeTab === '3bhk' ? 'active' : ''}`}
            onClick={() => setActiveTab('3bhk')}
          >
            3 BHK
          </button>
          <button
            className={`tab-button ${activeTab === '4bhk' ? 'active' : ''}`}
            onClick={() => setActiveTab('4bhk')}
          >
            4 BHK
          </button>
          <button
            className={`tab-button ${activeTab === '5bhk' ? 'active' : ''}`}
            onClick={() => setActiveTab('5bhk')}
          >
            5 BHK
          </button>
        </div>

        <div className="floorplan-content">
          <div className="floorplan-image">
            <img
              src={plans[activeTab as keyof typeof plans].image}
              alt={plans[activeTab as keyof typeof plans].title}
            />
          </div>
          <div className="floorplan-details">
            <h3>{plans[activeTab as keyof typeof plans].title}</h3>
            <div className="decorative-line"></div>
            <ul className="specs-list">
              {plans[activeTab as keyof typeof plans].specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">Download Brochure</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
