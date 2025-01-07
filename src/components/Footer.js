import React, { useState } from 'react';
//import './Footer.css'; // Add this line if you have custom styling for the footer

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://13.51.6.95:8080/api/leads/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe. Please try again.');
      }

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
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
              className="email-input"
            />
            <button type="submit" className="cta-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Subscribe'}
            </button>
          </form>
          {submitted && <p className="success-message" >Thank you for subscribing!</p>}
          {error && <p className="error-message">{error}</p>}
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
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
