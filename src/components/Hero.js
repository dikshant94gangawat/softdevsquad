import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero bg-pattern">
      <div className="hero-background">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center" alt="Technology Background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FaRocket className="icon-sm" />
              <span>Welcome to SoftDevSquad</span>
            </div>
            
            <h1 className="hero-title fade-in">
              Transform Your Ideas Into 
              <span className="gradient-text" data-text=" Digital Solutions"> Digital Solutions</span>
            </h1>
            
            <p className="hero-description slide-up">
              From stunning mobile apps to powerful websites, we bring your digital vision to life. 
              Our expert team crafts innovative solutions with cutting-edge technologies, 
              delivering premium quality and exceptional user experiences that drive business growth.
            </p>
            
            <div className="hero-stats slide-up">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            
            <div className="hero-actions slide-up">
              <button 
                onClick={scrollToServices}
                className="btn btn-primary btn-lg"
              >
                Get Started
                <FaArrowRight className="icon-sm" />
              </button>
              
              <Link to="/demo" className="btn btn-outline btn-lg">
                <FaPlay className="icon-sm" />
                Book Demo
              </Link>
            </div>
            
            <div className="hero-features slide-up">
              <div className="feature">
                <span className="feature-icon">📱</span>
                <span>Mobile Apps</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌐</span>
                <span>Web Development</span>
              </div>
              <div className="feature">
                <span className="feature-icon">👥</span>
                <span>IT Recruitment</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💡</span>
                <span>Tech Consultation</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            {/* Main Development Showcase */}
            <div className="development-showcase">
              {/* Mobile App Preview */}
              <div className="project-preview mobile-app slide-up">
                <div className="device-frame">
                  <div className="device-header">
                    <div className="device-notch"></div>
                  </div>
                  <div className="device-screen">
                    <div className="app-header">
                      <span className="app-title">ShopEase</span>
                      <div className="app-icon">🛍️</div>
                    </div>
                    <div className="app-content">
                      <div className="product-card">
                        <img 
                          src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80&h=80&fit=crop&crop=center" 
                          alt="iPhone" 
                          className="product-img"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="product-img-fallback" style={{display: 'none'}}>📱</div>
                        <div className="product-info">
                          <span className="product-name">iPhone 15 Pro</span>
                          <span className="product-price">$999</span>
                        </div>
                      </div>
                      <div className="product-card">
                        <img 
                          src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=80&h=80&fit=crop&crop=center" 
                          alt="MacBook" 
                          className="product-img"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="product-img-fallback" style={{display: 'none'}}>💻</div>
                        <div className="product-info">
                          <span className="product-name">MacBook Air</span>
                          <span className="product-price">$1299</span>
                        </div>
                      </div>
                      <div className="app-nav">
                        <span className="nav-dot active">●</span>
                        <span className="nav-dot">●</span>
                        <span className="nav-dot">●</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-label">
                  <span className="project-type">Mobile App</span>
                  <span className="project-tech">React Native</span>
                </div>
              </div>

              {/* Website Preview */}
              <div className="project-preview website slide-up">
                <div className="browser-frame">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="browser-url">
                      <span>🔒 techstartup.com</span>
                    </div>
                  </div>
                  <div className="website-content">
                    <div className="website-header">
                      <div className="logo-container">
                        <div className="logo-icon">⚡</div>
                        <span className="logo">TechStartup</span>
                      </div>
                      <div className="nav-links">
                        <span>Home</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                    </div>
                    <div className="website-hero">
                      <div className="hero-content-web">
                        <img 
                          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=120&h=80&fit=crop&crop=center" 
                          alt="Technology" 
                          className="hero-image-small"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hero-image-fallback" style={{display: 'none'}}>💼</div>
                        <div className="hero-text-small">
                          <span className="hero-title-small">Innovation</span>
                          <span className="hero-subtitle-small">Meets Excellence</span>
                        </div>
                      </div>
                      <div className="hero-button-small">Get Started</div>
                    </div>
                  </div>
                </div>
                <div className="project-label">
                  <span className="project-type">Website</span>
                  <span className="project-tech">React + Node.js</span>
                </div>
              </div>

              {/* Code Editor Preview */}
              <div className="hero-card slide-up">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="card-title">Development.js</span>
                </div>
                <div className="card-content">
                                      <div className="code-line">
                      <span className="code-keyword">const</span>
                      <span className="code-variable"> buildSuccess</span>
                      <span className="code-operator"> = </span>
                      <span className="code-function">async</span>
                      <span className="code-bracket">() =&gt; {"{"}</span>
                    </div>
                                      <div className="code-line code-indent">
                      <span className="code-keyword">return</span>
                      <span className="code-operator"> await </span>
                      <span className="code-function">SoftDevSquad</span>
                      <span className="code-bracket">({"{"}</span>
                    </div>
                  <div className="code-line code-indent-2">
                    <span className="code-property">apps</span>
                    <span className="code-operator">: </span>
                    <span className="code-string">'mobile + web'</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line code-indent-2">
                    <span className="code-property">quality</span>
                    <span className="code-operator">: </span>
                    <span className="code-string">'premium'</span>
                    <span className="code-comma">,</span>
                  </div>
                  <div className="code-line code-indent-2">
                    <span className="code-property">delivery</span>
                    <span className="code-operator">: </span>
                    <span className="code-string">'fast'</span>
                  </div>
                                      <div className="code-line code-indent">
                      <span className="code-bracket">{"}"});</span>
                    </div>
                    <div className="code-line">
                      <span className="code-bracket">{"}"}</span>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="floating-elements">
              <div className="floating-element element-1">
                <FaRocket />
              </div>
              <div className="floating-element element-2">
                💻
              </div>
              <div className="floating-element element-3">
                ⚡
              </div>
              <div className="floating-element element-4">
                📱
              </div>
              <div className="floating-element element-5">
                🌐
              </div>
              <div className="floating-element element-6">
                ⚙️
              </div>
            </div>
            
            {/* Animated Background Grid */}
            <div className="tech-grid">
              <div className="grid-line horizontal"></div>
              <div className="grid-line horizontal"></div>
              <div className="grid-line horizontal"></div>
              <div className="grid-line vertical"></div>
              <div className="grid-line vertical"></div>
              <div className="grid-line vertical"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 