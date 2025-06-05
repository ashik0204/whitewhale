import { useState } from 'react';
import whaleLogo from '../assets/white_whaling_logo.jpeg'; // Make sure path is correct
import './Header.css';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-logo">
            <img src={whaleLogo} className="logo" alt="White Whaling logo" />
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About Us</a></li>
            <li><a href="#features" className="nav-link" onClick={closeMenu}>Features</a></li>
            <li><a href="#pricing" className="nav-link" onClick={closeMenu}>Pricing</a></li>
            <li><a href="#blog" className="nav-link" onClick={closeMenu}>Blog</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}