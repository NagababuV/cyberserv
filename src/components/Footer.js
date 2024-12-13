import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Call to Action Section */}
        <div className="cta-section">
          <h3>Stay Connected with ServCyber</h3>
          <p>Sign up for our newsletter to receive the latest updates and exclusive resources!</p>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-btn">Subscribe</button>
          </form>
          {submitted && <p className="success-message">Thank you for subscribing!</p>}
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          <ul>
            {/* Update href values with valid URLs or use button for non-navigation links */}
            <li><a href="/privacy-policy">Privacy Policy</a></li> {/* Replace with actual link */}
            <li><a href="/terms-of-service">Terms of Service</a></li> {/* Replace with actual link */}
            <li><a href="/contact-us">Contact Us</a></li> {/* Replace with actual link */}
          </ul>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2024 ServCyber. All Rights Reserved.</p>
          <p className="developer-info">Developed by @tech_NV</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
