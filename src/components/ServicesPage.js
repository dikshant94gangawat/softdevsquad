import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMobile, 
  FaLaptopCode, 
  FaUsers, 
  FaCogs, 
  FaCloud, 
  FaPalette,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      price: 'Contact for Price',
      duration: '2-4 months'
    },
    {
      icon: FaLaptopCode,
      title: 'Website Development',
      description: 'Modern, responsive websites and web applications',
      features: ['React/Next.js', 'WordPress', 'E-commerce', 'Custom CMS'],
      price: 'Contact for Price',
      duration: '1-3 months'
    },
    {
      icon: FaUsers,
      title: 'IT Recruitment',
      description: 'Find and hire top tech talent for your organization',
      features: ['Developer Sourcing', 'Technical Interviews', 'Background Checks', 'Onboarding Support'],
      price: 'Contact for Price',
      duration: '2-6 weeks'
    },
    {
      icon: FaCogs,
      title: 'Tech Consultation',
      description: 'Strategic technology guidance for your business growth',
      features: ['Architecture Review', 'Tech Stack Selection', 'Performance Optimization', 'Security Audit'],
      price: 'Contact for Price',
      duration: 'Flexible'
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS/Azure Setup', 'Cloud Migration', 'DevOps', 'Monitoring'],
      price: 'Contact for Price',
      duration: '1-2 months'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'User-centered design for exceptional digital experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Contact for Price',
      duration: '2-4 weeks'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your requirements and define project scope'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create detailed roadmap and technical specifications'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution with regular updates and feedback'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Deploy, test, and provide ongoing support'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'SoftDevSquad delivered our mobile app ahead of schedule with exceptional quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Innovation Labs',
      text: 'Their consultation helped us choose the right tech stack and saved us months.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCorp',
      text: 'Outstanding website development with great attention to user experience.',
      rating: 5
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="services-hero-content">
            <div className="hero-badge">
              <FaRocket className="badge-icon" />
              <span>Professional IT Services</span>
            </div>
            <h1 className="services-hero-title">
              Our <span className="highlight">Services</span>
            </h1>
            <p className="services-hero-subtitle">
              Comprehensive technology solutions to accelerate your business growth. 
              From concept to deployment, we've got you covered.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-main">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              End-to-end technology services tailored to your business needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="service-meta">
                  <div className="service-price">{service.price}</div>
                  <div className="service-duration">{service.duration}</div>
                </div>

                <Link to="/contact" className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real feedback from satisfied customers
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-subtitle">
              Let's discuss how our services can help grow your business
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Get Started
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 