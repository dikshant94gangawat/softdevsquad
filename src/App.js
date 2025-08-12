import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import BookDemo from './components/BookDemo';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<BookDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 