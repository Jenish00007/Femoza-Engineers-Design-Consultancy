import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './components/Logo';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import brochurePdf from './assets/brochure.pdf';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setShowBackToTop(window.scrollY > 300);
      setIsScrolled(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="logo-container" onClick={() => window.location.assign('/') }>
            <Logo />
            <div className="logo-text">Femoza Engineers & Design Consultancy</div>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li><Link to="/" className="nav-link" onClick={handleNavigate}>Home</Link></li>
            <li><Link to="/services" className="nav-link" onClick={handleNavigate}>Services</Link></li>
            <li><Link to="/projects" className="nav-link" onClick={handleNavigate}>Projects</Link></li>
            <li><Link to="/careers" className="nav-link" onClick={handleNavigate}>Careers</Link></li>
            <li><Link to="/about" className="nav-link" onClick={handleNavigate}>About Us</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={handleNavigate}>Contact</Link></li>
          </ul>

          <Link to="/contact" className="nav-cta" onClick={handleNavigate}>Contact Now</Link>

          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer */}
      <footer className="footer-dark">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo-group" onClick={() => window.location.assign('/')}>
                <Logo />
                <div className="footer-brand">Femoza Engineers & Design Consultancy</div>
              </div>
              <p className="footer-text">
                <strong style={{ color: 'var(--orange-primary)' }}>Creating Solutions. Shaping Futures.</strong><br/>
                Transforming construction through innovative BIM solutions.
                Delivering precision, efficiency, and excellence in every project.
              </p>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about" onClick={handleNavigate}>About Us</Link></li>
                <li><Link to="/contact" onClick={handleNavigate}>Contact Us</Link></li>
                <li><Link to="/careers" onClick={handleNavigate}>Careers</Link></li>
                <li><Link to="/services" onClick={handleNavigate}>Our Services</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/" onClick={handleNavigate}>Home</Link></li>
                <li><Link to="/services" onClick={handleNavigate}>Services</Link></li>
                <li><Link to="/projects" onClick={handleNavigate}>Projects</Link></li>
                <li><Link to="/contact" onClick={handleNavigate}>Get Quote</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <div className="footer-contact">
                <h4 className="footer-title">Contact Info</h4>
                <p>📍 Door No: 25-2-124/52, Vishaws Crown<br/>
                   Building, Kankanady, Mangalore-575002<br/>
                   Karnataka, India</p>
                <p>📞 +91 9108101524</p>
                <p>📧 hello@fedc.in</p>
              </div>
              

              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span>💼</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Femoza Engineers & Design Consultancy. All rights reserved. | Made with <span className="heart">♥</span> for better construction.</p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
