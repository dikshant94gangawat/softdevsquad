import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <FaCode className="logo-icon" />
            <span className="logo-text">SoftDevSquad</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
                          <li className="nav-item">
              <Link 
                to="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>
              <li className="nav-item dropdown">
                <Link to="/services" className="nav-link dropdown-toggle">
                  Services
                  <span className="dropdown-arrow">▼</span>
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-container">
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Development</h4>
                      <Link to="/services" className="dropdown-link">Mobile App Development</Link>
                      <Link to="/services" className="dropdown-link">Web Development</Link>
                      <Link to="/services" className="dropdown-link">Custom Software Development</Link>
                      <Link to="/services" className="dropdown-link">MVP Development</Link>
                      <Link to="/services" className="dropdown-link">API Development</Link>
                      <Link to="/services" className="dropdown-link">UI/UX Design</Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Technologies</h4>
                      <Link to="/services" className="dropdown-link">React & Node.js</Link>
                      <Link to="/services" className="dropdown-link">React Native</Link>
                      <Link to="/services" className="dropdown-link">JavaScript & TypeScript</Link>
                      <Link to="/services" className="dropdown-link">Python Development</Link>
                      <Link to="/services" className="dropdown-link">Cloud Solutions</Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Business Services</h4>
                      <Link to="/services" className="dropdown-link">IT Recruitment</Link>
                      <Link to="/services" className="dropdown-link">IT Consultation</Link>
                      <Link to="/services" className="dropdown-link">Tech Support</Link>
                      <Link to="/services" className="dropdown-link">Digital Transformation</Link>
                      <Link to="/services" className="dropdown-link">Maintenance & Support</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="/services" className="nav-link dropdown-toggle">
                  Industries
                  <span className="dropdown-arrow">▼</span>
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-container">
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Technology</h4>
                      <Link to="/services" className="dropdown-link">FinTech</Link>
                      <Link to="/services" className="dropdown-link">HealthTech</Link>
                      <Link to="/services" className="dropdown-link">EdTech</Link>
                      <Link to="/services" className="dropdown-link">E-commerce</Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Business</h4>
                      <Link to="/services" className="dropdown-link">Startups</Link>
                      <Link to="/services" className="dropdown-link">SMEs</Link>
                      <Link to="/services" className="dropdown-link">Enterprises</Link>
                      <Link to="/services" className="dropdown-link">Agencies</Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Solutions</h4>
                      <Link to="/services" className="dropdown-link">Custom Solutions</Link>
                      <Link to="/services" className="dropdown-link">SaaS Development</Link>
                      <Link to="/services" className="dropdown-link">Digital Platforms</Link>
                      <Link to="/services" className="dropdown-link">Integration Services</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link to="/about" className="nav-link dropdown-toggle">
                  Company
                  <span className="dropdown-arrow">▼</span>
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-container">
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">About Us</h4>
                      <Link to="/about" className="dropdown-link">Our Story</Link>
                      <Link to="/about" className="dropdown-link">Our Team</Link>
                      <Link to="/about" className="dropdown-link">Mission & Vision</Link>
                      <Link to="/about" className="dropdown-link">Careers</Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Resources</h4>
                      <Link to="/about" className="dropdown-link">Portfolio</Link>
                      <Link to="/about" className="dropdown-link">Case Studies</Link>
                      <Link to="/about" className="dropdown-link">Blog</Link>
                      <Link to="/services" className="dropdown-link">Pricing</Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Support</h4>
                      <Link to="/contact" className="dropdown-link">Help Center</Link>
                      <Link to="/contact" className="dropdown-link">Documentation</Link>
                      <Link to="/contact" className="dropdown-link">API Reference</Link>
                      <Link to="/contact" className="dropdown-link">Contact Support</Link>
                    </div>
                  </div>
                </div>
              </li>
                          <li className="nav-item">
              <Link 
                to="/contact"
                className="nav-link"
              >
                Contact
              </Link>
            </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <Link to="/demo" className="btn btn-primary btn-sm">
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul className="nav-mobile-list">
            <li>
              <Link 
                to="/"
                className="nav-mobile-link"
                onClick={closeMenu}
              >
                🏠 Home
              </Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">🛠️ Services</div>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>Mobile App Development</Link>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>Web Development</Link>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>IT Recruitment</Link>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>IT Consultation</Link>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>Tech Support</Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">🏢 Industries</div>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>FinTech</Link>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>HealthTech</Link>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>E-commerce</Link>
              <Link to="/services" className="nav-mobile-sublink" onClick={closeMenu}>Startups</Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">👥 Company</div>
              <Link to="/about" className="nav-mobile-sublink" onClick={closeMenu}>Our Story</Link>
              <Link to="/about" className="nav-mobile-sublink" onClick={closeMenu}>Our Team</Link>
              <Link to="/about" className="nav-mobile-sublink" onClick={closeMenu}>Portfolio</Link>
              <Link to="/about" className="nav-mobile-sublink" onClick={closeMenu}>Careers</Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className="nav-mobile-link"
                onClick={closeMenu}
              >
                📞 Contact
              </Link>
            </li>
            <li className="mobile-cta-section">
              <Link to="/demo" className="nav-mobile-cta primary" onClick={closeMenu}>
                📋 Book Demo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 