import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#1e3c72', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <h1>ServCyber</h1>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0 }}>
          <li style={{ margin: '0 15px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
          <Link to="/service" style={{ color: '#fff', textDecoration: 'none' }}>Service</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
