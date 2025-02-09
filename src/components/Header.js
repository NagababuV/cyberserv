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
          <li style={styles.menuItem}>
            <a 
              href="https://cyber-48573129.hubspotpagebuilder.com/blog/trending-services-in-cyber-security" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.link}
            >
              Blog
            </a>
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
    flexWrap: 'wrap',
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
    flexDirection: 'row',
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
  '@media (max-width: 768px)': {
    nav: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    menu: {
      flexDirection: 'column',
      marginTop: '10px',
    },
    menuItem: {
      margin: '10px 0',
    },
  },
};

export default Header;
