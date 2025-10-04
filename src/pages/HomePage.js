// import React, { useState, useRef } from 'react';
import React from 'react';
import '../App.css';
import heroVideo from '../assets/10s.mp4';
import ServicesCarousel from '../components/ServicesCarousel';
import { Link } from 'react-router-dom';

// Import service images
import bimModelingImg from '../assets/image15.jpeg';
import architecturalImg from '../assets/image13.jpeg';
import structuralImg from '../assets/image10.jpeg';
import mepImg from '../assets/image16.jpeg';
import infraImg from '../assets/image17.jpeg';
import scanToBimImg from '../assets/image12.jpeg';
import ArchBimImg from '../assets/image11.jpeg';

const HomePage = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const carouselRef = useRef(null);

  const services = [
    {
      image: bimModelingImg,
      title: "Oil & Gas Sectors",
      description: "Seamless 3D modeling, smarter design, safer construction, and efficient asset management for flawless planning and execution."
    },
    {
      image: architecturalImg,
      title: "Petro Chemical Services", 
      description: "Innovative designs provides efficient design, safer construction, and streamlined project management."
    },
    {
      image: structuralImg,
      title: "BIM in Pipeline Services",
      description: "Pipeline Services leverages 3D digital models for accurate design and efficient construction"
    },
    {
      image: mepImg,
      title: "3D and 4D Rending Services",
      description: "Our photo-realistic renderings delivers accurate visualizations for planning and project execution."
    },
    {
      image: infraImg,
      title: "Structural BIM Services",
      description: "Comprehensive infrastructure modeling for large-scale and public development projects."
    },
    {
      image: scanToBimImg,
      title: "Point to Cloud Modelling Services",
      description: "Converting point cloud data into accurate BIM models for renovations and retrofits."
    },
     {
      image: ArchBimImg,
      title: "Architecutral Bim Services",
      description: "Provides precise 3D models for efficient design and documentation."
    }
  ];

  // const nextSlide = () => {
  //   setCurrentSlide(prev => prev >= services.length - 1 ? 0 : prev + 1);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(prev => prev <= 0 ? services.length - 1 : prev - 1);
  // };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-container">
          <video 
            className="hero-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>BIM Empowerment</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="hero-title">
            Design Smarter.<br/>
            Build Better.
          </h1>
          <p className="hero-description">
            Femoza Engineers & Design Consultancy leverages cutting-edge BIM technology to streamline your project lifecycle,
            from initial concept to final construction. Our expertise spans architectural, structural, and MEP systems,
            ensuring every detail is perfectly coordinated and optimized for efficiency.
          </p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="glass-card text-center">
          <h3 style={{ color: 'var(--orange-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
            Designing the Future, Building with Precision
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
            Femoza Engineers & Design Consultancy is where innovative design meets technical excellence. We leverage the full power of
            Building Information Modeling (BIM) to create intelligent, data-rich 3D models that drive better decision-making,
            reduce errors, and accelerate project delivery.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Our Core Services</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          We provide specialized BIM solutions to meet every project demand.
        </p>
        
        <ServicesCarousel services={services} />
        
        {/* <div className="services-carousel">
          <button className="carousel-btn carousel-btn-left" onClick={prevSlide} aria-label="Previous services">←</button>
          <div className="carousel-container" ref={carouselRef}>
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="feature-card carousel-card">
                  
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn carousel-btn-right" onClick={nextSlide} aria-label="Next services">→</button>
        </div> */}
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link to="/services" className="btn btn-primary">Explore All Services</Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Why Partner With Empire?</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          We deliver more than just models; we deliver confidence and clarity.
        </p>
        
        <div className="features-grid">
          <div className="why-choose-card">
            <div className="feature-icon">✓</div>
            <h3>Build Smarter & Greener</h3>
            <p>Our data-driven approach prioritizes eco-friendly materials and sustainable design for future-ready buildings.</p>
          </div>
          <div className="why-choose-card">
            <div className="feature-icon">✓</div>
            <h3>Uncompromising Quality, Affordable Price</h3>
            <p>Get premium, detail-oriented service without the premium cost, maximizing your project's value.</p>
          </div>
          <div className="why-choose-card">
            <div className="feature-icon">✓</div>
            <h3>Guaranteed On-Time Delivery</h3>
            <p>We respect your timeline. Our efficient processes ensure your project stays on track, every time.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="cta-section">
          <h2>Ready to Build Beyond Expectations?</h2>
          <p>
            Whether you're planning a residential complex, a commercial space, or major infrastructure, 
            we provide the clarity and precision you need to succeed. Let's discuss your project and build a smarter future together.
          </p>
          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary">Contact Us Today</a>
            <Link to="/projects" className="btn btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong><br/>
                <Link to="/contact">hello@fedc.in</Link>
              </div>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <div>
                <strong>Phone</strong><br/>
                +91 9108101524
              </div>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Address</strong><br/>
                Door No: 25-2-124/52, Vishaws Crown<br/>
                Building,Kankanady, Mangalore-575002<br/>
                Karnataka, India
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form onSubmit={(e) => {e.preventDefault(); alert('Thank you for your message! We will get back to you soon.');}}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Project inquiry, consultation, etc." />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project requirements..."></textarea>
              </div>
              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage; 