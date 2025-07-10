import React from 'react';
import logo from '../assets/logo/logo2.png';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartItems }) => {
  const location = useLocation();
  const totalItems = cartItems.length;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="logo" height="30" />
        <span className="navbar-title">GoDrone</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/checkout" className="navbar-link">
        Keranjang {totalItems > 0 && `(${totalItems})`}
        </Link>
        <Link to="/login" className="navbar-link">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
