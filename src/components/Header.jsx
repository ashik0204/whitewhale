import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import whaleLogo from '../assets/white_whaling_logo.jpeg';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
            <Link to="/">
              <img src={whaleLogo} className="logo" alt="White Whaling logo" />
            </Link>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {isHomePage ? (
              <>
                <li><a href="#about" className="nav-link" onClick={closeMenu}>About Us</a></li>
                <li><a href="#features" className="nav-link" onClick={closeMenu}>Features</a></li>
                <li><a href="#pricing" className="nav-link" onClick={closeMenu}>Pricing</a></li>
                <li><Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link></li>
                <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
              </>
            ) : (
              <>
                <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link></li>
                <li><a href="/#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
              </>
            )}
            <li><Link to="/admin/login" className="nav-link admin-link" onClick={closeMenu}>Admin</Link></li>
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