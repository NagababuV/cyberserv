import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>ServCyber</h1>
        <ul style={styles.menu}>
          <li style={styles.menuItem}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/about" style={styles.link}>About</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </li>
          <li style={styles.menuItem}>
            <Link to="/service" style={styles.link}>Service</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1e3c72',
    color: '#fff',
    padding: '10px 0',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping for smaller screens
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    margin: '0',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row', // Default is horizontal
    listStyleType: 'none',
    margin: '0',
    padding: '0',
  },
  menuItem: {
    margin: '0 10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  '@media (max-width: 768px)': { // Responsive for smaller screens
    nav: {
      flexDirection: 'column', // Stack items vertically
      alignItems: 'center',
    },
    menu: {
      flexDirection: 'column', // Vertical menu for mobile
      marginTop: '10px',
    },
    menuItem: {
      margin: '10px 0', // Add spacing between items
    },
  },
};

export default Header;
