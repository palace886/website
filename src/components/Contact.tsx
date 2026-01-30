import { useState, FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple mailto implementation for formality
    const subject = encodeURIComponent('Enquiry from The Palace Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:info@the-palace.in?subject=${subject}&body=${body}`;

    setSubmitMessage('Thank you for your enquiry. We will contact you soon.');
    setIsSubmitting(false);

    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us to schedule a site visit or for any enquiries
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message or requirements"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              {submitMessage && <p className="submit-message">{submitMessage}</p>}
            </form>
          </div>
          <div className="contact-info-box">
            <h3>Get In Touch</h3>
            <div className="decorative-line"></div>
            <div className="info-item">
              <h4>Address</h4>
              <p>
                THE PALACE<br />
                Next to Pioneer Medical College,<br />
                Sayajipura, Ajwa-Nimeta Road,<br />
                Vadodara
              </p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 7877874848</p>
            </div>
            <div className="info-item">
              <h4>Email</h4>
              <p>info@the-palace.in</p>
            </div>
            <div className="info-item">
              <h4>Website</h4>
              <p>www.the-palace.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
