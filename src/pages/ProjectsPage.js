import React from 'react';
import '../App.css';
import projectsVideo from '../assets/Projects.mp4';
import luxuryvilla from '../assets/luxury-villa-projects.png';
import housing from '../assets/housing-projects.png';
import mixeduse from '../assets/mixed-use-projects.png';
import architecturalBim from '../assets/artitectural_bim_services.png';
import structuralBim from '../assets/Structural BIM Services.png';
import mepBim from '../assets/MEP BIM Services.png';
import infraBim from '../assets/Infra BIM Services.png';
import scanToBim from '../assets/Scan to BIM Services.png';
import bimModeling from '../assets/BIM_MODELING_SERVICES.png';

const ProjectsPage = () => {
  const projectCategories = [
    {
      title: "Residential & Housing Developments",
      description: "We provide BIM solutions that ensure design accuracy, sustainable construction, and cost efficiency for housing projects. From luxury villas to large-scale residential complexes, our models bring clarity and detail to every phase of development.",
      projects: [
        { name: "Luxury Villa Complex", details: "High-end residential development with sustainable design features", image: luxuryvilla },
        { name: "Affordable Housing Project", details: "200-unit development with optimized construction workflows", image: housing },
        { name: "Mixed-Use Residential", details: "Combined residential and retail spaces with integrated MEP systems", image: mixeduse }
      ]
    },
    {
      title: "Commercial Buildings",
      description: "Our expertise in Architectural and Structural BIM supports modern commercial spaces, including office towers, retail outlets, and mixed-use developments. We focus on functionality, aesthetics, and smooth execution.",
      projects: [
        { name: "Corporate Headquarters", details: "40-story office tower with advanced structural coordination", image: architecturalBim },
        { name: "Shopping Mall Complex", details: "Large-scale retail development with complex MEP integration", image: structuralBim },
        { name: "Business Park", details: "Multi-building commercial campus with unified BIM workflow", image: bimModeling }
      ]
    },
    {
      title: "Industrial & Manufacturing Facilities",
      description: "With MEP BIM and Pre-Fabrication Services, we support complex industrial projects that require efficiency, safety, and detailed coordination across systems.",
      projects: [
        { name: "Manufacturing Plant", details: "Specialized equipment modeling with safety compliance", image: mepBim },
        { name: "Warehouse Facility", details: "Large-scale storage facility with automated systems integration", image: structuralBim },
        { name: "Processing Center", details: "Industrial facility with complex piping and electrical systems", image: bimModeling }
      ]
    },
    {
      title: "Infrastructure Projects",
      description: "Through Infra BIM, AR, VR, and sensor integration, we contribute to future-ready infrastructure, including transportation, utilities, and public facilities. Our solutions ensure scalability and durability in every build.",
      projects: [
        { name: "Highway Bridge", details: "Major transportation infrastructure with environmental analysis", image: infraBim },
        { name: "Public Transit Station", details: "Modern transit hub with integrated smart systems", image: structuralBim },
        { name: "Utility Infrastructure", details: "Large-scale utility network with IoT integration", image: mepBim }
      ]
    },
    {
      title: "Renovations & Retrofits",
      description: "Using Scan to BIM and As-Built Modeling, we help clients upgrade existing structures with accurate data-driven models, minimizing risks and unexpected costs.",
      projects: [
        { name: "Historic Building Renovation", details: "Heritage structure restoration with modern BIM techniques", image: scanToBim },
        { name: "Office Building Retrofit", details: "Energy-efficient upgrades with minimal disruption", image: architecturalBim },
        { name: "Industrial Facility Modernization", details: "Equipment upgrades with precise as-built modeling", image: bimModeling }
      ]
    }
  ];

  const projectBenefits = [
    {
      icon: "🔧",
      title: "BIM-powered workflows for reduced errors and better collaboration"
    },
    {
      icon: "🌱",
      title: "Sustainable design principles built into every project"
    },
    {
      icon: "⚡",
      title: "Faster delivery without compromising on quality"
    }
  ];

  return (
    <main>
      {/* Hero Section with Video Background */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src={projectsVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Our Projects</span>
            <span className="eyebrow-line"></span>
          </div>
          <h1 className="hero-title">
            Precision, Innovation,<br/>
            and Quality
          </h1>
          <p className="hero-description">
            At Femoza Engineers & Design Consultancy, every project tells a story of precision, innovation, and quality.
            Our portfolio showcases the transformative power of BIM technology across diverse construction sectors,
            from residential developments to large-scale infrastructure projects.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="glass-card text-center">
          <h3 style={{ color: 'var(--orange-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
            Transforming Ideas into Reality
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
            Our portfolio reflects our ability to handle projects of all sizes — residential, commercial, industrial, 
            and infrastructure — with accuracy and efficiency. Each project demonstrates our commitment to delivering 
            BIM-driven solutions that exceed expectations.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      {projectCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <h2 className="section-title">{category.title}</h2>
          <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            {category.description}
          </p>
          
          <div className="projects-grid">
            {category.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.name} />
                  ) : (
                    <div className="project-image-placeholder">
                      <div className="placeholder-icon">🏗️</div>
                      <div className="placeholder-text">Project Image</div>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{ 
                      color: 'var(--orange-primary)', 
                      fontSize: '0.9rem', 
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {category.title.split(' ')[0]} Project
                    </span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Why Our Projects Stand Out */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Why Our Projects Stand Out</h2>
        <p className="text-center" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Our approach combines cutting-edge technology with proven methodologies to deliver exceptional results.
        </p>
        
        <div className="features-grid">
          {projectBenefits.map((benefit, index) => (
            <div key={index} className="why-choose-card">
              <div className="feature-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Project Impact Stats */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Project Impact</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50M+</div>
            <div className="stat-label">Sq Ft Modeled</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">30%</div>
            <div className="stat-label">Average Cost Savings</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">On-Time Delivery</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="cta-section">
          <h2>Let's Build Together</h2>
          <p>
            We don't just deliver projects — we deliver trust, innovation, and measurable results. 
            Explore our portfolio to see how Femoza Engineers & Design Consultancy has been shaping smarter construction across industries.<br/><br/>
            Each project represents our commitment to excellence, innovation, and delivering solutions that exceed expectations.
          </p>
          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <a href="/#contact" className="btn btn-primary">Start Your Project</a>
            <a href="/services" className="btn btn-secondary">View Our Services</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage; 