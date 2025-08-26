import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Mobile optimization script
const mobileOptimizations = () => {
  // Prevent zoom on double tap for iOS
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // Add touch feedback for interactive elements
  const addTouchFeedback = () => {
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .feature-card, .service-detail-card, .project-card, .stat-card, .contact-item');
    
    interactiveElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.style.transform = 'scale(0.98)';
      });
      
      element.addEventListener('touchend', () => {
        element.style.transform = '';
      });
    });
  };

  // Optimize images for mobile
  const optimizeImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
    });
  };

  // Add smooth scrolling for mobile
  const addSmoothScrolling = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // Initialize mobile optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      addTouchFeedback();
      optimizeImages();
      addSmoothScrolling();
    });
  } else {
    addTouchFeedback();
    optimizeImages();
    addSmoothScrolling();
  }
};

// Run mobile optimizations
mobileOptimizations();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
