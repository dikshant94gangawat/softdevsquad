import React, { useState, useEffect, useRef } from 'react';
import { 
  FaMobile, 
  FaGlobe, 
  FaUsers, 
  FaLightbulb, 
  FaCog, 
  FaArrowRight, 
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaHeadset
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'Transform your ideas into powerful mobile applications for iOS and Android platforms with cutting-edge technology.',
      features: [
        'Native iOS & Android Development',
        'Cross-Platform Solutions (React Native)',
        'UI/UX Design & Prototyping',
        'App Store Optimization & Publishing',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      color: '#3b82f6',
      colorRgb: '59, 130, 246',
      badge: 'Most Popular',
      deliveryTime: '2-4 months',
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter']
    },
    {
      icon: <FaGlobe />,
      title: 'Web Development',
      description: 'Create stunning, responsive websites and web applications that engage users and drive business growth.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'SEO Optimization',
        'Performance & Security'
      ],
      color: '#10b981',
      colorRgb: '16, 185, 129',
      badge: 'High Demand',
      deliveryTime: '1-3 months',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      icon: <FaUsers />,
      title: 'IT Recruitment',
      description: 'Connect with top tech talent or find your dream job with our specialized IT recruitment and staffing services.',
      features: [
        'Technical Talent Acquisition',
        'Skill Assessment & Screening',
        'Contract & Permanent Placement',
        'Remote Team Building',
        'Salary Benchmarking',
        'Ongoing Support & Retention'
      ],
      color: '#f59e0b',
      colorRgb: '245, 158, 11',
      badge: 'Expert Network',
      deliveryTime: '1-4 weeks',
      technologies: ['Global Network', 'AI Matching', 'Skills Testing']
    },
    {
      icon: <FaLightbulb />,
      title: 'IT Consultation',
      description: 'Strategic technology consulting to help your business make informed decisions and accelerate digital transformation.',
      features: [
        'Technology Strategy Planning',
        'Digital Transformation Roadmap',
        'Architecture Design & Review',
        'Performance Audit & Optimization',
        'Security Assessment',
        'Cost Optimization Analysis'
      ],
      color: '#8b5cf6',
      colorRgb: '139, 92, 246',
      badge: 'Strategic',
      deliveryTime: '2-6 weeks',
      technologies: ['Cloud', 'DevOps', 'Microservices', 'AI/ML']
    },
    {
      icon: <FaCog />,
      title: 'Technical Support',
      description: 'Comprehensive 24/7 technical support and maintenance services to keep your systems running at peak performance.',
      features: [
        '24/7 Monitoring & Support',
        'System Maintenance & Updates',
        'Bug Fixes & Troubleshooting',
        'Performance Monitoring',
        'Security Patch Management',
        'Backup & Disaster Recovery'
      ],
      color: '#ef4444',
      colorRgb: '239, 68, 68',
      badge: '24/7 Available',
      deliveryTime: 'Immediate',
      technologies: ['Monitoring Tools', 'Cloud Platforms', 'DevOps']
    },
    {
      icon: <FaRocket />,
      title: 'Digital Solutions',
      description: 'End-to-end digital solutions including cloud services, DevOps, automation, and digital marketing strategies.',
      features: [
        'Cloud Migration & Management',
        'DevOps & CI/CD Implementation',
        'Process Automation',
        'Digital Marketing Strategy',
        'Analytics & Reporting',
        'Integration Solutions'
      ],
      color: '#06b6d4',
      colorRgb: '6, 182, 212',
      badge: 'Comprehensive',
      deliveryTime: '1-6 months',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    }
  ];

  const stats = [
    { number: 150, suffix: '+', label: 'Projects Completed', icon: <FaCheckCircle /> },
    { number: 98, suffix: '%', label: 'Client Satisfaction', icon: <FaStar /> },
    { number: 50, suffix: '+', label: 'Expert Developers', icon: <FaUsers /> },
    { number: 24, suffix: '/7', label: 'Support Available', icon: <FaHeadset /> }
  ];

  const benefits = [
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security and reliability standards'
    },
    {
      icon: <FaChartLine />,
      title: 'Scalable Solutions',
      description: 'Future-proof solutions that grow with your business'
    },
    {
      icon: <FaHeadset />,
      title: 'Expert Support',
      description: 'Dedicated support from our team of experts'
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateNumber(stat.number, `stat-${index}`);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumber = (target, key) => {
    let current = 0;
    const increment = target / 60; // 60 frames for 1 second
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 16); // ~60fps
  };

  const scrollToServicesTop = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    navigate('/contact');
  };

  return (
    <section id="services" className="services section" ref={sectionRef}>
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <div className="header-badge">
            <FaStar className="badge-icon" />
            <span>Premium Services</span>
          </div>
          <h2 className="section-title">
            Our <span className="gradient-text">Expert Services</span>
          </h2>
          <p className="section-description">
            We deliver comprehensive technology solutions that drive business growth and digital transformation. 
            From innovative mobile apps to strategic IT consulting, our expert team provides end-to-end services 
            tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-main">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card ${activeService === index ? 'active' : ''} ${isVisible ? 'animate-in' : ''}`}
                style={{ 
                  '--service-color': service.color,
                  '--service-color-rgb': service.colorRgb,
                  '--animation-delay': `${index * 0.1}s`
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(0)}
              >
                {service.badge && (
                  <div className="service-badge">
                    {service.badge}
                  </div>
                )}
                
                <div className="service-icon-container">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <div className="service-meta">
                    <div className="delivery-time">
                      <span className="meta-label">Delivery:</span>
                      <span className="meta-value">{service.deliveryTime}</span>
                    </div>
                  </div>

                  <ul className="service-features">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="service-feature">
                        <FaCheckCircle className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="service-feature more-features">
                        <span>+{service.features.length - 4} more features</span>
                      </li>
                    )}
                  </ul>

                  <div className="service-technologies">
                    <span className="tech-label">Technologies:</span>
                    <div className="tech-tags">
                      {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-footer">
                  <Link to="/services" className="service-cta">
                    <span>Learn More</span>
                    <FaArrowRight className="cta-icon" />
                  </Link>
                  <button 
                    onClick={handleStartProject}
                    className="service-cta-secondary"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="services-stats">
          <div className="stats-container">
            <div className="stats-header">
              <h3>Why Choose SoftDevSquad?</h3>
              <p>Trusted by businesses worldwide for delivering exceptional results</p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-item ${isVisible ? 'animate-in' : ''}`}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">
                    {animatedStats[`stat-${index}`] || 0}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="services-benefits">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className={`benefit-item ${isVisible ? 'animate-in' : ''}`}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Ready to Transform Your Business?</h3>
              <p>
                Let's discuss your project and create a custom solution that drives results. 
                Our team of experts is ready to help you achieve your digital goals.
              </p>
            </div>
            <div className="cta-actions">
              <button onClick={handleStartProject} className="cta-button primary">
                <span>Start Your Project</span>
                <FaRocket className="cta-icon" />
              </button>
              <Link to="/services" className="cta-button secondary">
                <span>View All Services</span>
                <FaArrowRight className="cta-icon" />
              </Link>
            </div>
          </div>
          <div className="cta-decoration">
            <div className="decoration-item item-1"><FaRocket /></div>
            <div className="decoration-item item-2"><FaLightbulb /></div>
            <div className="decoration-item item-3"><FaStar /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 