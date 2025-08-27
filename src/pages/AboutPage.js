import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import aboutUsImage from '../assets/about_us.png';

const AboutPage = () => {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${aboutUsImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>About Femoza</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="hero-title">
            Building the Future of<br/>
            Construction Technology
          </h1>
          <p className="hero-description">
            Femoza Engineers & Design Consultancy is at the forefront of BIM innovation,
            transforming how construction projects are conceived, designed, and executed.
            With over a decade of experience in the industry, we've built our reputation
            on precision, innovation, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section" style={{ 
        padding: '3rem 1rem',
        maxWidth: '100%'
      }}>
        <div className="about-content" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div className="about-text" style={{ 
            maxWidth: '100%',
            width: '100%'
          }}>
            <h3 style={{ 
              color: 'var(--orange-primary)', 
              marginBottom: '1.5rem',
              fontSize: 'clamp(1.5rem, 5vw, 1.8rem)',
              textAlign: 'center',
              fontWeight: '600',
              lineHeight: '1.3'
            }}>Let’s Know About Us</h3>
            <p style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.1rem)',
              lineHeight: '1.8',
              marginBottom: '1rem',
              textAlign: 'left',
              maxWidth: '100%'
            }}>
              Our team’s experience of having executed more than 20 Projects, including the complete 2D, 3D, BOM and engineering deliverables like P&ID, Piping Isometrics, Pipeline flow line drawings, 3D Modeling and As-Built Projects for the major customers in India and abroad, including Laser Scan Point Cloud Projects.<br></br><br></br>
              We have owned all the necessary CAD software, AutoCAD, REVIT, E3D, MicroStation, MS Office, CAD /CAM/ Plant Engineering Software. Complete with an FTP Server with a firewall and dedicated Internet facilities for communication needs.
            </p>
          </div>
          <div className="about-image" style={{ 
            display: 'none'
          }}>
            [Company Image Placeholder]
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Why Choose Empire</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>

        <div className="features-grid mt-3">
          <div className="why-choose-card">
            <h3>✓ Sustainable Design</h3>
            <p>We prioritize eco-friendly and future-ready solutions that minimize environmental impact while maximizing efficiency.</p>
          </div>
          <div className="why-choose-card">
            <h3>✓ Affordable Pricing</h3>
            <p>Premium quality BIM services without the premium cost. We believe advanced technology should be accessible to all.</p>
          </div>
          <div className="why-choose-card">
            <h3>✓ Top Quality</h3>
            <p>Every detail is refined with precision and care. Our quality assurance process ensures exceptional deliverables.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Our Expert Team</h2>
        <div className="glass-card text-center">
          <h3 style={{ color: 'var(--orange-primary)', marginBottom: '1rem' }}>Building Beyond Expectations</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Our team consists of certified BIM professionals, licensed architects, structural engineers,
            and construction technology specialists. Whether it's residential, commercial, or large-scale
            infrastructure, we turn complex concepts into clear, actionable designs.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            With Femoza Engineers & Design Consultancy, you don't just build — you build smarter.
            <strong style={{ color: 'var(--orange-primary)' }}> Creating Solutions. Shaping Futures.</strong>
          </p>
          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage; 