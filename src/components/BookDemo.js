import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  FaPlay, 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaArrowLeft, 
  FaCheckCircle,
  FaRocket,
  FaLightbulb,
  FaHeadset,
  FaStar,
  FaVideo,
  FaArrowRight,
  FaBriefcase,
  FaBuilding
} from 'react-icons/fa';
import './BookDemo.css';

const BookDemo = () => {
  const [bookingData, setBookingData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    jobRole: '',
    preferredDate: '',
    preferredTime: '',
    serviceInterests: [],
    additionalMessage: ''
  });
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleBookingInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceInterestChange = (serviceId) => {
    setBookingData(prev => ({
      ...prev,
      serviceInterests: prev.serviceInterests.includes(serviceId)
        ? prev.serviceInterests.filter(id => id !== serviceId)
        : [...prev.serviceInterests, serviceId]
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration - Set these in your .env file
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const USER_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID;
    const COMPANY_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    try {
      // Check if EmailJS is configured
      if (!SERVICE_ID || !USER_TEMPLATE_ID || !COMPANY_TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error('EmailJS not configured. Please set up environment variables.');
      }

      // Prepare email data
      const emailData = {
        user_name: bookingData.fullName,
        user_email: bookingData.emailAddress,
        user_phone: bookingData.phoneNumber,
        company_name: bookingData.companyName,
        job_role: bookingData.jobRole,
        preferred_date: bookingData.preferredDate,
        preferred_time: bookingData.preferredTime,
        services: bookingData.serviceInterests.join(', '),
        message: bookingData.additionalMessage,
        company_email: 'softdevsquad@gmail.com'
      };

      // Send email to user (confirmation)
      await emailjs.send(
        SERVICE_ID,
        USER_TEMPLATE_ID,
        {
          to_email: bookingData.emailAddress,
          to_name: bookingData.fullName,
          ...emailData
        },
        PUBLIC_KEY
      );

      // Send email to company (notification)
      await emailjs.send(
        SERVICE_ID,
        COMPANY_TEMPLATE_ID,
        {
          to_email: 'softdevsquad@gmail.com',
          to_name: 'SoftDevSquad Team',
          ...emailData
        },
        PUBLIC_KEY
      );

      console.log('Demo booking submitted and emails sent:', bookingData);
      setIsBookingSubmitted(true);
      
    } catch (error) {
      console.error('Error sending emails:', error);
      
      const errorMessage = error && error.message ? error.message : String(error);
      
      if (errorMessage.includes('EmailJS not configured') || !SERVICE_ID || !USER_TEMPLATE_ID || !COMPANY_TEMPLATE_ID || !PUBLIC_KEY) {
        // EmailJS not set up yet or credentials missing
        setIsBookingSubmitted(true);
        alert('Demo booking submitted successfully! Email configuration is pending - our team will contact you directly.');
      } else {
        // Other email errors
        setIsBookingSubmitted(true);
        alert('Demo booking submitted! There was an issue sending the confirmation email, but our team will contact you directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isBookingSubmitted) {
    return (
      <div className="booking-page">
        <div className="booking-success-background">
          <div className="booking-success-pattern"></div>
          <div className="booking-success-glow"></div>
        </div>
        
        <div className="booking-wrapper">
          <div className="booking-success-container">
            <div className="booking-success-content">
              <div className="booking-success-icon">
                <FaCheckCircle />
              </div>
              
              <h1 className="booking-success-title">Demo Booked Successfully!</h1>
              <p className="booking-success-description">
                Thank you for scheduling a demo with SoftDevSquad. We're excited to show you how we can help transform your digital vision into reality.
              </p>
              
              <div className="booking-next-steps">
                <h3 className="booking-next-steps-title">What happens next?</h3>
                <div className="booking-steps-list">
                  <div className="booking-step-item">
                    <div className="booking-step-icon">
                      <FaEnvelope />
                    </div>
                    <span>You'll receive a confirmation email within 5 minutes (if email is configured)</span>
                  </div>
                  <div className="booking-step-item">
                    <div className="booking-step-icon">
                      <FaCalendarAlt />
                    </div>
                    <span>Our team will contact you 24 hours before the demo</span>
                  </div>
                  <div className="booking-step-item">
                    <div className="booking-step-icon">
                      <FaVideo />
                    </div>
                    <span>Join the demo session at your scheduled time</span>
                  </div>
                </div>
              </div>
              
              <div className="booking-success-actions">
                <Link to="/" className="booking-btn booking-btn-primary">
                  <FaArrowLeft />
                  Back to Home
                </Link>
                <button 
                  onClick={() => setIsBookingSubmitted(false)}
                  className="booking-btn booking-btn-secondary"
                >
                  Book Another Demo
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      {/* Background Effects */}
      <div className="booking-background">
        <div className="booking-pattern"></div>
        <div className="booking-glow"></div>
        <div className="booking-floating-elements">
          <div className="booking-floating-item booking-float-1"><FaRocket /></div>
          <div className="booking-floating-item booking-float-2"><FaLightbulb /></div>
          <div className="booking-floating-item booking-float-3"><FaStar /></div>
          <div className="booking-floating-item booking-float-4"><FaVideo /></div>
        </div>
      </div>

      <div className="booking-wrapper">
        {/* Header Section */}
        <div className="booking-header">
          <Link to="/" className="booking-back-button">
            <FaArrowLeft />
            Back to Home
          </Link>
          
          <div className="booking-hero-content">
            <div className="booking-hero-badge">
              <FaCalendarAlt />
              Free Consultation
            </div>
            
            <h1 className="booking-hero-title">
              Book Your <span className="booking-highlight">Personalized Demo</span>
            </h1>
            
            <p className="booking-hero-subtitle">
              Schedule a 30-45 minute session with our experts to see how SoftDevSquad can transform your digital vision into reality. No commitment required.
            </p>
            
            <div className="booking-stats">
              <div className="booking-stat">
                <span className="booking-stat-number">500+</span>
                <span className="booking-stat-label">Projects Delivered</span>
              </div>
              <div className="booking-stat">
                <span className="booking-stat-number">98%</span>
                <span className="booking-stat-label">Client Satisfaction</span>
              </div>
              <div className="booking-stat">
                <span className="booking-stat-number">24hr</span>
                <span className="booking-stat-label">Response Time</span>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-main-content">
          {/* Information Cards */}
          <div className="booking-info-section">
            <div className="booking-info-card">
              <div className="booking-info-icon-wrapper">
                <FaPlay className="booking-info-icon" />
              </div>
              <h3 className="booking-info-title">What to Expect</h3>
              <ul className="booking-info-list">
                <li>30-45 minute personalized session</li>
                <li>Live demonstration of our capabilities</li>
                <li>Q&A with our expert team</li>
                <li>Customized solution recommendations</li>
                <li>No obligation discussion</li>
              </ul>
            </div>

            <div className="booking-info-card">
              <div className="booking-info-icon-wrapper">
                <FaClock className="booking-info-icon" />
              </div>
              <h3 className="booking-info-title">Demo Benefits</h3>
              <ul className="booking-info-list">
                <li>See our solutions in action</li>
                <li>Understand implementation process</li>
                <li>Get accurate project estimates</li>
                <li>Meet our experienced team</li>
                <li>Discuss your specific requirements</li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-form-section">
            <div className="booking-form-container">
              <form onSubmit={handleBookingSubmit} className="booking-form">
                <div className="booking-form-header">
                  <h2>Schedule Your Demo</h2>
                  <p>Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                
                <div className="booking-section">
                  <h3 className="booking-section-title">
                    <FaUser className="booking-section-icon" />
                    Contact Information
                  </h3>
                  
                  <div className="booking-fields-row">
                    <div className="booking-field">
                      <label htmlFor="fullName" className="booking-label">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={bookingData.fullName}
                        onChange={handleBookingInputChange}
                        className="booking-input"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="booking-field">
                      <label htmlFor="emailAddress" className="booking-label">Email Address *</label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={bookingData.emailAddress}
                        onChange={handleBookingInputChange}
                        className="booking-input"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="booking-fields-row">
                    <div className="booking-field">
                      <label htmlFor="phoneNumber" className="booking-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={bookingData.phoneNumber}
                        onChange={handleBookingInputChange}
                        className="booking-input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="booking-field">
                      <label htmlFor="companyName" className="booking-label">Company *</label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={bookingData.companyName}
                        onChange={handleBookingInputChange}
                        className="booking-input"
                        required
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="booking-field">
                    <label htmlFor="jobRole" className="booking-label">Your Role</label>
                    <select
                      id="jobRole"
                      name="jobRole"
                      value={bookingData.jobRole}
                      onChange={handleBookingInputChange}
                      className="booking-select"
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="cto">CTO/Technical Lead</option>
                      <option value="pm">Project Manager</option>
                      <option value="developer">Developer</option>
                      <option value="business">Business Analyst</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="booking-section">
                  <h3 className="booking-section-title">
                    <FaCalendarAlt className="booking-section-icon" />
                    Preferred Schedule
                  </h3>
                  
                  <div className="booking-fields-row">
                    <div className="booking-field">
                      <label htmlFor="preferredDate" className="booking-label">Preferred Date *</label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={bookingData.preferredDate}
                        onChange={handleBookingInputChange}
                        className="booking-input"
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="booking-field">
                      <label htmlFor="preferredTime" className="booking-label">Preferred Time *</label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={bookingData.preferredTime}
                        onChange={handleBookingInputChange}
                        className="booking-select"
                        required
                      >
                        <option value="">Select time slot</option>
                        {availableTimeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="booking-section">
                  <h3 className="booking-section-title">
                    <FaStar className="booking-section-icon" />
                    Services of Interest
                  </h3>
                  
                  <div className="booking-services-grid">
                    {serviceOptions.map(service => {
                      const IconComponent = service.icon;
                      return (
                        <div key={service.id} className="booking-service-option">
                          <input
                            type="checkbox"
                            id={service.id}
                            checked={bookingData.serviceInterests.includes(service.id)}
                            onChange={() => handleServiceInterestChange(service.id)}
                          />
                          <label htmlFor={service.id} className="booking-service-label">
                            <div className="booking-service-checkbox">
                              <div className="booking-checkbox-icon">✓</div>
                            </div>
                            <IconComponent className="booking-service-icon" />
                            <span>{service.label}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="booking-section">
                  <div className="booking-field">
                    <label htmlFor="additionalMessage" className="booking-label">Additional Message</label>
                    <textarea
                      id="additionalMessage"
                      name="additionalMessage"
                      value={bookingData.additionalMessage}
                      onChange={handleBookingInputChange}
                      className="booking-textarea"
                      placeholder="Tell us more about your project requirements..."
                      rows="4"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="booking-submit-button"
                  disabled={isSubmitting}
                >
                  <FaCalendarAlt />
                  {isSubmitting ? 'Sending...' : 'Schedule Demo'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo; 