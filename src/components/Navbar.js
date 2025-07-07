import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo2.png';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <img src={logo} alt="GoDrone Logo" style={styles.logo} />
        <h2 style={styles.brand}>GoDrone</h2>
      </div>
      <div style={styles.right}>
        <Link to="/" style={styles.link}>Beranda</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#343A40',
    color: 'white',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 20,
    marginRight: 10,
    marginLeft: -10,
  },
  brand: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  right: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
