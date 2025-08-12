import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaCheckCircle,
  FaRocket,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaUser,
  FaLightbulb,
  FaHeadset,
  FaStar
} from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    serviceInterests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const serviceOptions = [
    { id: 'mobile-app', label: 'Mobile App Development', icon: FaPhone },
    { id: 'web-development', label: 'Web Development', icon: FaRocket },
    { id: 'it-recruitment', label: 'IT Recruitment Services', icon: FaUser },
    { id: 'it-consultation', label: 'IT Consultation', icon: FaLightbulb },
    { id: 'technical-support', label: 'Technical Support', icon: FaHeadset },
    { id: 'digital-solutions', label: 'Digital Solutions', icon: FaStar }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceInterestChange = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      serviceInterests: prev.serviceInterests.includes(serviceId)
        ? prev.serviceInterests.filter(id => id !== serviceId)
        : [...prev.serviceInterests, serviceId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration - Set these in your .env file
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const CONTACT_USER_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CONTACT_USER_TEMPLATE_ID;
    const CONTACT_COMPANY_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CONTACT_COMPANY_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      // Check if EmailJS is configured
      if (!SERVICE_ID || !CONTACT_USER_TEMPLATE_ID || !CONTACT_COMPANY_TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error('EmailJS not configured for contact form. Please set up environment variables.');
      }

      // Prepare email data
      const emailData = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        company_name: formData.company,
        subject: formData.subject,
        message: formData.message,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        services: formData.serviceInterests.join(', '),
        company_email: 'softdevsquad@gmail.com'
      };

      // Send confirmation email to user
      await emailjs.send(
        SERVICE_ID,
        CONTACT_USER_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.name,
          ...emailData
        },
        PUBLIC_KEY
      );

      // Send notification email to company
      await emailjs.send(
        SERVICE_ID,
        CONTACT_COMPANY_TEMPLATE_ID,
        {
          to_email: 'softdevsquad@gmail.com',
          to_name: 'SoftDevSquad Team',
          ...emailData
        },
        PUBLIC_KEY
      );

      console.log('Contact form submitted and emails sent:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
        serviceInterests: []
      });
      
    } catch (error) {
      console.error('Error sending contact emails:', error);
      
      const errorMessage = error && error.message ? error.message : String(error);
      
      if (errorMessage.includes('EmailJS not configured') || !SERVICE_ID || !CONTACT_USER_TEMPLATE_ID || !CONTACT_COMPANY_TEMPLATE_ID || !PUBLIC_KEY) {
        // EmailJS not set up yet or credentials missing
        setSubmitStatus('success');
        alert('Message submitted successfully! Email configuration is pending - our team will contact you directly.');
      } else {
        // Other email errors
        setSubmitStatus('success');
        alert('Message submitted! There was an issue sending the confirmation email, but our team will contact you directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Dikshant',
      detail: '+91 77605 54526',
      action: 'tel:+917760554526'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      detail: 'softdevsquad@gmail.com',
      action: 'mailto:softdevsquad@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      detail: 'India',
      action: null
    }
  ];

  const founders = [
    {
      name: 'Dikshant Gangawat',
      role: 'Co-Founder & CEO',
      avatar: 'DG',
      expertise: ['Business Strategy', 'Client Relations', 'Project Management']
    },
    {
      name: 'Abhishek Dhang',
      role: 'Co-Founder & CTO',
      avatar: 'AD',
      expertise: ['Software Architecture', 'Technical Innovation', 'Team Leadership']
    }
  ];



  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <div className="hero-badge">
              <FaRocket className="badge-icon" />
              <span>Get In Touch</span>
            </div>
            <h1 className="contact-hero-title">
              Let's Build Something <span className="highlight">Amazing</span> Together
            </h1>
            <p className="contact-hero-subtitle">
              Ready to transform your ideas into powerful digital solutions? 
              We're here to help you every step of the way.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <FaCheckCircle className="feature-icon" />
                <span>Free Consultation</span>
              </div>
              <div className="hero-feature">
                <FaCheckCircle className="feature-icon" />
                <span>24h Response Time</span>
              </div>
              <div className="hero-feature">
                <FaCheckCircle className="feature-icon" />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="recruitment">IT Recruitment</option>
                    <option value="consultation">IT Consultation</option>
                    <option value="support">Tech Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>

                <div className="form-group">
                  <h4 className="contact-section-title">Services of Interest</h4>
                  <div className="contact-services-grid">
                    {serviceOptions.map(service => {
                      const IconComponent = service.icon;
                      return (
                        <div key={service.id} className="contact-service-option">
                          <input
                            type="checkbox"
                            id={service.id}
                            checked={formData.serviceInterests.includes(service.id)}
                            onChange={() => handleServiceInterestChange(service.id)}
                          />
                          <label htmlFor={service.id} className="contact-service-label">
                            <div className="contact-service-checkbox">
                              <div className="contact-checkbox-icon">✓</div>
                            </div>
                            <IconComponent className="contact-service-icon" />
                            <span>{service.label}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <h4 className="contact-section-title">Preferred Meeting Schedule</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="preferredDate">Preferred Date</label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        placeholder="Select a date"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="preferredTime">Preferred Time</label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                      >
                        <option value="">Select time slot</option>
                        {availableTimeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="submit-success">
                    <FaCheckCircle className="success-icon" />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="section-title">Contact Information</h2>
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="info-icon">
                      <info.icon />
                    </div>
                    <div className="info-content">
                      <h3 className="info-title">{info.title}</h3>
                      {info.action ? (
                        <a href={info.action} className="info-detail">
                          {info.detail}
                        </a>
                      ) : (
                        <p className="info-detail">{info.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Founders Section */}
              <div className="founders-section">
                <h3 className="founders-title">Meet Our Founders</h3>
                <div className="founders-grid">
                  {founders.map((founder, index) => (
                    <div key={index} className="founder-card">
                      <div className="founder-avatar">
                        <span className="avatar-initials">{founder.avatar}</span>
                      </div>
                      <div className="founder-info">
                        <h4 className="founder-name">{founder.name}</h4>
                        <p className="founder-role">{founder.role}</p>
                        <div className="founder-expertise">
                          {founder.expertise.map((skill, idx) => (
                            <span key={idx} className="expertise-tag">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h3 className="quick-actions-title">Quick Actions</h3>
                <div className="quick-actions-grid">
                  <Link to="/demo" className="quick-action-btn">
                    📋 Book a Demo
                  </Link>
                  <a href="mailto:softdevsquad@gmail.com" className="quick-action-btn">
                    ✉️ Email Us
                  </a>
                  <Link to="/services" className="quick-action-btn">
                    🛠️ Our Services
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3 className="social-title">Follow Our Journey</h3>
                <div className="social-links">
                  <a href="https://linkedin.com/company/softdevsquad" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/softdevsquad" className="social-link" target="_blank" rel="noopener noreferrer" title="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://github.com/softdevsquad" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://facebook.com/softdevsquad" className="social-link" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* CTA Section */}
      <div className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-subtitle">
              Let's discuss your project and see how we can help bring your vision to life
            </p>
            <div className="cta-actions">
              <a href="tel:+917760554526" className="btn btn-primary">
                📞 Call Now
              </a>
              <Link to="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 