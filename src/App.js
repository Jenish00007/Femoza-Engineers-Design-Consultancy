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
                <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <svg fill="#AD1E00" height="16" width="16" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                    <path d="M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7
	l141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8
	c0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z"/>
                  </svg>
                  <span>
                    Door No: 25-2-124/52,Vishaws Crown
                    Building, Kankanady, Mangalore-575002<br/>
                    Karnataka, India
                  </span>
                </p>
                <p>📞 +91 9108101524</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0,3-1.343,3-3V16.2z"></path>
                    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
                    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                  </svg>
                  <Link to="/contact" onClick={handleNavigate}>hello@fedc.in</Link>
                </p>
              </div>
              

              
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter / X">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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
