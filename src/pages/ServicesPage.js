import React from 'react';
import '../App.css';
import servicesVideo from '../assets/services_video.mp4';

const ServicesPage = () => {
  const services = {
    bim: [
      { name: '3D BIM Modeling', description: 'Detailed, intelligent 3D models for precise project visualization.' },
      { name: '4D BIM – Construction Simulation', description: 'Time-linked models for accurate scheduling and project phasing.' },
      { name: '5D BIM Cost Estimation', description: 'Integrated cost modeling to keep budgets transparent and on track.' },
      { name: 'Quantity Take-Off', description: 'Accurate material and resource quantification for efficient planning.' },
      { name: 'BIM Content Creation', description: 'Custom BIM objects and libraries for better project workflows.' },
      { name: 'As-Built Modeling', description: 'Verified models representing the final built conditions.' },
      { name: 'BIM Outsourcing Services', description: 'Cost-effective outsourcing for reliable and scalable BIM support.' },
      { name: 'CAD to BIM Conversion', description: 'Converting 2D drawings into intelligent BIM models.' },
      { name: 'BIM for Pre-Fabrication & Fabrication', description: 'Enhancing precision and reducing errors in off-site manufacturing.' },
      { name: 'COBie BIM Services', description: 'Streamlined data management for efficient facility operations.' },
      { name: 'Façade BIM Services', description: 'Accurate façade modeling for design, coordination, and construction.' }
    ],
    architectural: [
      { name: 'Architectural Drafting Services', description: 'Accurate drawings to support design and execution.' },
      { name: '3D Modeling Services', description: 'High-quality architectural models for clear visualization.' },
      { name: '3D Rendering Services', description: 'Photorealistic renders that bring designs to life.' },
      { name: 'Point Cloud Modeling', description: 'Converting scanned data into accurate architectural models.' }
    ],
    structural: [
      { name: 'Rebar Detailing', description: 'Precision reinforcement detailing for concrete structures.' },
      { name: 'Structural 3D Modeling', description: 'Comprehensive models to improve structural accuracy and coordination.' },
      { name: 'Steel Shop Drawings', description: 'Detailed fabrication drawings for seamless steel construction.' }
    ],
    mep: [
      { name: 'MEP Clash Detection', description: 'Identifying and resolving conflicts before construction begins.' },
      { name: 'MEP Coordination', description: 'Coordinated MEP layouts to improve efficiency and avoid rework.' },
      { name: 'MEP 3D Modeling', description: 'Intelligent models for seamless MEP integration.' },
      { name: 'Piping Spool Drawings', description: 'Accurate drawings for fabrication and installation.' }
    ],
    infra: [
      { name: 'Sensors', description: 'IoT integration for smarter infrastructure monitoring.' },
      { name: 'Augmented Reality (AR)', description: 'Immersive visualization for better decision-making.' },
      { name: 'Virtual Reality (VR)', description: 'Realistic project walkthroughs for enhanced project understanding.' }
    ]
  };

  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src={servicesVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Our Services</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="hero-title">
            Building Smarter.<br/>
            Delivering Better.
          </h1>
          <p className="hero-description">
            At Femoza Engineers & Design Consultancy, we deliver end-to-end BIM (Building Information Modeling)
            solutions that transform how construction projects are planned, designed, and executed.
            Our comprehensive services span the entire project lifecycle, from initial concept to final construction.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="glass-card text-center">
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
            Our services are tailored to ensure accuracy, efficiency, sustainability, and cost-effectiveness
            across every stage of construction. From concept to completion, our services are designed to
            minimize risks, optimize resources, and deliver superior outcomes.
          </p>
        </div>
      </section>

      {/* BIM Modeling Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">BIM Modeling Services</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Our BIM solutions simplify complex construction processes, improve collaboration, and reduce risks.
        </p>

        <div className="services-detail-grid">
          {services.bim.map((service, index) => (
            <div key={index} className="service-detail-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Architectural BIM Services</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          We merge creativity with functionality, ensuring designs are visually stunning and structurally sound.
        </p>

        <div className="services-detail-grid">
          {services.architectural.map((service, index) => (
            <div key={index} className="service-detail-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Structural BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Structural BIM Services</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Our structural solutions guarantee safe, efficient, and well-coordinated designs.
        </p>

        <div className="services-detail-grid">
          {services.structural.map((service, index) => (
            <div key={index} className="service-detail-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEP BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">MEP BIM Services</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          We integrate mechanical, electrical, and plumbing systems into a unified model for flawless execution.
        </p>

        <div className="services-detail-grid">
          {services.mep.map((service, index) => (
            <div key={index} className="service-detail-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infra BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Infra BIM Services</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Bringing innovation into large-scale infrastructure with future-ready solutions.
        </p>

        <div className="services-detail-grid">
          {services.infra.map((service, index) => (
            <div key={index} className="service-detail-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="cta-section">
          <h2>Building Smarter, Delivering Better</h2>
          <p>
            At Femoza Engineers & Design Consultancy, we are not just service providers — we are partners in building a smarter future.<br/><br/>
            Our commitment to excellence, innovation, and client success drives everything we do.
            Let us help you transform your construction projects with the power of advanced BIM technology.
          </p>
          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <a href="/#contact" className="btn btn-primary">Start Your Project</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage; 