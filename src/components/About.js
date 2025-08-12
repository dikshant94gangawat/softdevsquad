import React from 'react';
import { FaCheckCircle, FaRocket, FaUsers, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Reliability',
      description: 'We deliver on our promises with consistent, high-quality results.'
    }
  ];

  const achievements = [
    '100+ Successful Projects Delivered',
    '50+ Satisfied Clients Worldwide',
    '5+ Years of Industry Experience',
    '24/7 Technical Support',
    'Expert Team of Developers',
    'Cutting-edge Technology Stack'
  ];

  return (
    <section id="about" className="about section bg-pattern">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title fade-in">
              About <span className="gradient-text">SoftDevSquad</span>
            </h2>
            
            <div className="about-description slide-up">
              <p>
                Founded with a vision to bridge the gap between innovative technology and business success, 
                SoftDevSquad has emerged as a trusted partner for companies seeking digital transformation. 
                Our team of passionate developers, designers, and consultants brings together years of 
                experience and expertise to deliver exceptional solutions.
              </p>
              
              <p>
                We believe that technology should empower businesses, not complicate them. That's why we 
                focus on creating user-friendly, scalable, and robust solutions that drive real business value. 
                From startups to enterprise-level organizations, we've helped companies across various 
                industries achieve their digital goals.
              </p>
              
              <p>
                Our comprehensive approach combines technical excellence with strategic thinking, ensuring 
                that every solution we deliver aligns with our clients' long-term objectives. We're not 
                just service providers; we're your technology partners committed to your success.
              </p>
            </div>

            <div className="about-achievements slide-up">
              <h3>Why Choose Us?</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <FaCheckCircle className="achievement-icon" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-card slide-up">
              <div className="card-header">
                <h3>Our Mission</h3>
              </div>
              <div className="card-content">
                <p>
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and success in the digital age.
                </p>
              </div>
            </div>

            <div className="about-card slide-up">
              <div className="card-header">
                <h3>Our Vision</h3>
              </div>
              <div className="card-content">
                <p>
                  To be the leading technology partner that transforms ideas into digital realities, 
                  creating lasting impact for businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title text-center fade-in">Our Core Values</h3>
          <div className="values-grid grid grid-4 slide-up">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-showcase">
          <h3 className="projects-title text-center fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h3>
          <p className="projects-subtitle text-center slide-up">
            Discover some of our most innovative and successful projects that showcase our technical expertise
          </p>
          
          <div className="projects-grid slide-up">
            <div className="project-card" data-category="mobile">
              <div className="project-image mobile-app-bg">
                <div className="project-overlay">
                  <div className="project-icons">
                    <span className="tech-icon">📱</span>
                    <span className="tech-icon">⚛️</span>
                    <span className="tech-icon">🔥</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">Mobile App</div>
                <h4 className="project-name">EcoTracker Pro</h4>
                <p className="project-description">
                  A comprehensive sustainability tracking app with AI-powered recommendations and real-time analytics.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="web">
              <div className="project-image web-app-bg">
                <div className="project-overlay">
                  <div className="project-icons">
                    <span className="tech-icon">💻</span>
                    <span className="tech-icon">🌐</span>
                    <span className="tech-icon">⚡</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">Web Platform</div>
                <h4 className="project-name">CloudSync Dashboard</h4>
                <p className="project-description">
                  Enterprise-grade data visualization platform with real-time collaboration and advanced security features.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">AWS</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="ai">
              <div className="project-image ai-app-bg">
                <div className="project-overlay">
                  <div className="project-icons">
                    <span className="tech-icon">🤖</span>
                    <span className="tech-icon">🧠</span>
                    <span className="tech-icon">📊</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">AI Solution</div>
                <h4 className="project-name">SmartAnalytics AI</h4>
                <p className="project-description">
                  Machine learning platform that predicts market trends and automates business intelligence workflows.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">Docker</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="blockchain">
              <div className="project-image blockchain-bg">
                <div className="project-overlay">
                  <div className="project-icons">
                    <span className="tech-icon">🔗</span>
                    <span className="tech-icon">💎</span>
                    <span className="tech-icon">🔒</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">Blockchain</div>
                <h4 className="project-name">SecureChain Finance</h4>
                <p className="project-description">
                  Decentralized finance platform with smart contracts, multi-chain support, and enhanced security protocols.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">Solidity</span>
                  <span className="tech-tag">Web3.js</span>
                  <span className="tech-tag">Ethereum</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="iot">
              <div className="project-image iot-bg">
                <div className="project-overlay">
                  <div className="project-icons">
                    <span className="tech-icon">🌐</span>
                    <span className="tech-icon">📡</span>
                    <span className="tech-icon">⚙️</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">IoT Platform</div>
                <h4 className="project-name">SmartHome Hub</h4>
                <p className="project-description">
                  Comprehensive IoT ecosystem connecting smart devices with advanced automation and energy optimization.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">Arduino</span>
                  <span className="tech-tag">MQTT</span>
                  <span className="tech-tag">Firebase</span>
                </div>
              </div>
            </div>

            <div className="project-card" data-category="ecommerce">
              <div className="project-image ecommerce-bg">
                <div className="project-overlay">
                  <div className="project-icons">
                    <span className="tech-icon">🛒</span>
                    <span className="tech-icon">💳</span>
                    <span className="tech-icon">📈</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">E-Commerce</div>
                <h4 className="project-name">MarketPlace Pro</h4>
                <p className="project-description">
                  Next-generation e-commerce platform with AI-powered recommendations and seamless payment integration.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">Stripe</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About; 