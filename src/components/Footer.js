import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaArrowUp, FaUsers } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'IT Recruitment',
    'IT Consultation',
    'Tech Support',
    'Digital Services'
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/softdevsquad'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/softdevsquad'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/softdevsquad'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FaCode className="logo-icon" />
              <span className="logo-text">SoftDevSquad</span>
            </Link>
            <div className="footer-description">
              <p>Transforming ideas into powerful digital solutions. We're your trusted partner for a full spectrum of IT services, including:</p>
              <ul className="footer-services-list">
                <li>App and Web Development</li>
                <li>IT Recruitment</li>
                <li>Consultation & Tech Support</li>
              </ul>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:softdevsquad@gmail.com">softdevsquad@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+917760554526">+91 77605 54526</a>
              </div>
              <div className="contact-item founders-item">
                <FaUsers className="contact-icon" />
                <div className="founders-info">
                  <span className="founders-label">Founders:</span>
                  <div className="founders-avatars">
                    <div className="founder-card">
                      <div className="founder-avatar">
                        <span className="founder-initials">DG</span>
                      </div>
                      <span className="founder-name">Purva Sharma</span>
                    </div>
                    <div className="founder-card">
                      <div className="founder-avatar">
                        <span className="founder-initials">AD</span>
                      </div>
                      <span className="founder-name">Ashima Sarkar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3 className="section-title">Quick Links</h3>
              <ul className="footer-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/demo" className="footer-link">Book Demo</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="section-title">Our Services</h3>
              <ul className="footer-list">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="footer-link">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="section-title">Company</h3>
              <ul className="footer-list">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                                              <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Careers</a></li>
                  <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Blog</a></li>
                  <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Case Studies</a></li>
                  <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                  <li><a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="section-title">Get Started</h3>
              <p className="section-description">
                Ready to start your project? Let's discuss how we can help you achieve your goals.
              </p>
              <div className="footer-cta">
                <Link 
                  to="/contact"
                  className="btn btn-primary"
                >
                  Start Your Project
                </Link>
                <Link to="/demo" className="btn btn-outline">
                  Book Demo
                </Link>
              </div>
              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} SoftDevSquad. All rights reserved.</p>
              <p>Founded by Purva Sharma & Ashima Sarkar</p>
            </div>
            
            <div className="footer-bottom-links">
                        <a href="#" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Privacy</a>
          <a href="#" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Terms</a>
          <a href="#" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Cookies</a>
            </div>
            
            <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 