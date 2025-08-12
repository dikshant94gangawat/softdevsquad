import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGoogle, 
  FaArrowLeft, 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock,
  FaUser,
  FaSignInAlt
} from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // Google OAuth Configuration
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID';

  useEffect(() => {
    const initializeGapi = () => {
      try {
        // Check if gapi is available globally
        if (typeof window.gapi === 'undefined') {
          console.log('Google API not loaded - skipping initialization');
          return;
        }

        window.gapi.load('auth2', {
          callback: () => {
            try {
              window.gapi.auth2.init({
                client_id: GOOGLE_CLIENT_ID,
              });
              console.log('Google Auth initialized successfully');
            } catch (error) {
              console.error('Error initializing Google Auth:', error);
            }
          },
          onerror: (error) => {
            console.error('Error loading Google Auth2:', error);
          }
        });
      } catch (error) {
        console.error('Error in Google API initialization:', error);
      }
    };

    // Only initialize if we have a valid client ID
    if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_ID !== 'YOUR_GOOGLE_CLIENT_ID') {
      try {
        // Add Google API script if not present
        if (!document.querySelector('script[src*="apis.google.com"]')) {
          const script = document.createElement('script');
          script.src = 'https://apis.google.com/js/api.js';
          script.onload = () => {
            setTimeout(initializeGapi, 100);
          };
          script.onerror = () => {
            console.error('Failed to load Google API script');
          };
          document.head.appendChild(script);
        } else {
          setTimeout(initializeGapi, 100);
        }
      } catch (error) {
        console.error('Error setting up Google API:', error);
      }
    }
  }, [GOOGLE_CLIENT_ID]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (formData.email !== 'demo@softdevsquad.com') {
        setError('Invalid email or password. Try demo@softdevsquad.com');
        return;
      }
      
      alert('Sign in successful! Welcome to SoftDevSquad');
      
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID') {
      alert('Google Sign-In is not configured yet. Please set up your Google OAuth credentials.');
      return;
    }

    // Check if gapi is available
    if (typeof window.gapi === 'undefined') {
      alert('Google API is not loaded. Please refresh the page and try again.');
      return;
    }

    setIsGoogleLoading(true);
    setError('');

    try {
      // Check if auth2 is initialized
      if (!window.gapi.auth2) {
        throw new Error('Google Auth2 not loaded');
      }

      const authInstance = window.gapi.auth2.getAuthInstance();
      
      if (!authInstance) {
        throw new Error('Google Auth not initialized. Please refresh the page and try again.');
      }

      const result = await authInstance.signIn();
      const profile = result.getBasicProfile();
      const idToken = result.getAuthResponse().id_token;

      // Extract user information
      const userInfo = {
        googleId: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail(),
        imageUrl: profile.getImageUrl(),
        idToken: idToken
      };

      console.log('Google Sign-In Success:', userInfo);
      
      // Here you would typically send the idToken to your backend for verification
      // For now, we'll just show a success message
      alert(`Welcome ${userInfo.name}! Google Sign-In successful.`);
      
      // Optionally redirect or update app state
      // navigate('/dashboard');

    } catch (error) {
      console.error('Google Sign-In Error:', error);
      
      if (error && error.error === 'popup_closed_by_user') {
        setError('Sign-in was cancelled');
      } else if (error && error.message && error.message.includes('not initialized')) {
        setError('Google Sign-In is loading. Please wait a moment and try again.');
      } else {
        setError('Google Sign-In failed. Please try again.');
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        {/* Header */}
        <div className="signin-header">
          <Link to="/" className="back-link">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="signin-content">
          {/* Left Side - Welcome */}
          <div className="signin-welcome">
            <div className="welcome-content">
              <div className="brand-section">
                <div className="brand-icon">
                  <FaUser />
                </div>
                <h1>Welcome Back</h1>
                <p>Sign in to your SoftDevSquad account and continue your digital transformation journey</p>
              </div>
              
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">🚀</span>
                  <span>Access your project dashboard</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💬</span>
                  <span>Direct communication with your team</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Real-time project progress tracking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span>Secure and encrypted data access</span>
                </div>
              </div>
              
              <div className="help-section">
                <p>Need help? <Link to="/contact">Contact our support team</Link></p>
                <p>Don't have an account? <Link to="/demo">Book a demo</Link></p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="signin-form-section">
            <div className="form-container">
              <div className="form-header">
                <FaSignInAlt className="form-icon" />
                <h2>Sign In</h2>
                <p>Enter your credentials to access your account</p>
              </div>

              {error && (
                <div className="error-alert">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="signin-form">
                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-container">
                    <FaLock className="input-icon" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Form Options */}
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <Link to="/forgot-password" className="forgot-link">
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="signin-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <FaSignInAlt />
                      Sign In
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="divider">
                  <span>or</span>
                </div>

                {/* Google Sign In */}
                <button 
                  type="button" 
                  className="google-btn"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading || isGoogleLoading || !GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID'}
                >
                  {isGoogleLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Signing in with Google...
                    </>
                  ) : (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID') ? (
                    <>
                      <FaGoogle />
                      Google Sign-In (Setup Required)
                    </>
                  ) : (
                    <>
                      <FaGoogle />
                      Continue with Google
                    </>
                  )}
                </button>
              </form>

              {/* Demo Credentials */}
              <div className="demo-info">
                <h4>Demo Credentials</h4>
                <p><strong>Email:</strong> demo@softdevsquad.com</p>
                <p><strong>Password:</strong> Any password</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 