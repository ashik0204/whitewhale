import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu-container">
      <button 
        className="mobile-menu-button" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <nav>
            <ul>
              <li><a href="#" onClick={toggleMenu}>Home</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
