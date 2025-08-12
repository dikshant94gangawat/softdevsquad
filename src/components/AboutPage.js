import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaCheckCircle,
  FaAward,
  FaCode,
  FaClock
} from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver for our clients.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve exceptional results together.'
    },
    {
      icon: FaCheckCircle,
      title: 'Quality',
      description: 'We never compromise on quality and always deliver solutions that exceed expectations.'
    }
  ];

  const achievements = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const whyChooseUs = [
    {
      icon: FaRocket,
      title: 'Proven Track Record',
      description: '100+ successful projects delivered across various industries with consistent quality.'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Skilled professionals with deep expertise in cutting-edge technologies and best practices.'
    },
    {
      icon: FaCheckCircle,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to keep your systems running smoothly.'
    },
    {
      icon: FaAward,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure bug-free, high-performance solutions.'
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on schedule without compromising quality.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation Focus',
      description: 'We stay ahead of technology trends to provide future-ready solutions for your business.'
    }
  ];

  const team = [
    {
      name: 'Dikshant Gangawat',
      role: 'Co-Founder & CEO',
      description: 'Visionary leader with expertise in business strategy and client relations.',
      avatar: 'DG'
    },
    {
      name: 'Abhishek Dhang',
      role: 'Co-Founder & CTO',
      description: 'Technical expert specializing in software architecture and innovation.',
      avatar: 'AD'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-badge">
              <FaRocket className="badge-icon" />
              <span>Our Story</span>
            </div>
            <h1 className="about-hero-title">
              About <span className="highlight">SoftDevSquad</span>
            </h1>
            <p className="about-hero-subtitle">
              We're a passionate team of technology experts dedicated to transforming 
              ideas into powerful digital solutions that drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="story-title">Our Journey</h2>
              <p className="story-text">
                Founded with a vision to bridge the gap between innovative technology and business success, 
                SoftDevSquad began as a small team of passionate developers who believed in the power of 
                custom solutions.
              </p>
              <p className="story-text">
                Today, we've grown into a trusted technology partner for businesses worldwide, delivering 
                comprehensive IT services that span from mobile app development to strategic consultation. 
                Our commitment to excellence and client success remains at the heart of everything we do.
              </p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <FaAward className="highlight-icon" />
                  <span>Quality First Approach</span>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <span>Cutting-edge Technology</span>
                </div>
                <div className="highlight-item">
                  <FaClock className="highlight-icon" />
                  <span>On-time Delivery</span>
                </div>
              </div>
            </div>
            <div className="story-stats">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <span className="achievement-number">{achievement.number}</span>
                  <span className="achievement-label">{achievement.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide us in everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Discover what makes SoftDevSquad the right choice for your technology needs
            </p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">
                  <item.icon />
                </div>
                <h3 className="why-choose-title">{item.title}</h3>
                <p className="why-choose-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Founders</h2>
            <p className="section-subtitle">
              The visionaries behind SoftDevSquad
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  <span className="avatar-initials">{member.avatar}</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and success in the digital age.
            </p>
            <div className="mission-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaUsers className="btn-icon" />
                Join Our Journey
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 