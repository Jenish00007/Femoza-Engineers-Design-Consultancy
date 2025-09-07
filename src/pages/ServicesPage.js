import React from 'react';
import '../App.css';
import servicesVideo from '../assets/Blue Modern House Review Video.mp4';
import Cards from '../components/service-cards/five-card';
import BIM_MODELING_SERVICES from '../assets/BIM_MODELING_SERVICES.png';
import { FaHammer, FaBuilding, FaDraftingCompass, FaMicrochip, FaEye, FaVrCardboard } from 'react-icons/fa';

const ServicesPage = () => {
  const services = {
    bim: [
      { name: 'Precision-Driven BIM', description: 'Transforming concepts into intelligent 3D models with precision-driven BIM solutions for every stage of your project.', image: BIM_MODELING_SERVICES },
      { name: 'High-Quality 3D Models', description: 'We deliver high-quality 3D BIM models that streamline planning, design, and construction with unmatched accuracy.', image: '../assets/High-Quality 3D Models.png' },
      { name: 'Collaborate Better, Eliminate Errors', description: 'Enhance collaboration and reduce costly errors with our advanced 3D Building Information Modeling services.', image: '../assets/Collaborate Better, Eliminate Errors.png' },
      { name: 'Seamless BIM from Concept to Completion', description: 'From concept to construction — our 3D BIM modeling ensures clarity, coordination, and control across your project lifecycle.', image: '../assets/Seamless BIM from Concept to Completion.png' },
      { name: 'Accurate. Integrated. Intelligent.', description: 'Accurate. Integrated. Intelligent. Our 3D BIM models bring your architectural and engineering visions to life.', image: '../assets/Accurate. Integrated. Intelligent.png' }
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

  const FabricationServices = {
    shopDrawing: [
      { name: 'Shop Drawing & Coordination', description: 'Our BIM services support shop drawing creation, clash-free coordination, and accurate material takeoffs for efficient off-site manufacturing.' },
      { name: 'Accurate Coordinated Models', description: 'BIM for Prefabrication & Fabrication: Accurate, coordinated models that streamline off-site construction and manufacturing processes.' },
      { name: 'Precision-Driven Manufacturing', description: 'Enabling precision-driven prefabrication and fabrication through intelligent BIM modelling and coordination.' },
      { name: 'Next-Level Fabrication', description: 'Take your fabrication process to the next level with BIM — reduce waste, improve coordination, and accelerate production with confidence.' }
    ]
  };

  const CADtoBIMConversionServices = {
    cadToBim: [
      { name: '2D to 3D Transformation', description: 'Convert your legacy CAD files into data-rich BIM models ready for modern construction workflows.' },
      { name: 'Intelligent BIM Models', description: 'Transform basic 2D drawings into intelligent, data-rich 3D BIM models that enhance project coordination and accuracy.' },
      { name: 'Enhanced Collaboration', description: 'Upgrade your project workflow with BIM models that improve team collaboration, reduce errors, and streamline communication.' },
      { name: 'Modern Construction Ready', description: 'Make your legacy CAD files construction-ready with modern BIM technology that supports advanced project management and execution.' }
    ]
  };

  const COBieBIMServices = {
    cobieBim: [
      { name: 'Efficient Project Handover', description: 'Our COBie services support efficient project handover, enabling facility managers to access, manage, and maintain building data with confidence.' },
      { name: 'Construction to Operation Bridge', description: 'Bridge the gap between construction and operation with our COBie BIM services — delivering the data you need, when you need it.' },
      { name: 'Simplified Handovers', description: 'Simplify handovers and boost lifecycle efficiency with COBie-ready models tailored for owners, operators, and FM teams.' },
      { name: 'COBie-Compliant Data', description: 'Generate structured, standardized COBie data from your BIM models for seamless facility management and operations.' }
    ]
  };

  const FacadeBIMServices = {
    facadeBim: [
      { name: 'Expert Facade Modelling', description: 'Our expert BIM modelling supports curtain walls, cladding systems, glazing, and bespoke facade components, enhancing collaboration and reducing rework.' },
      { name: '3D Facade Modelling', description: 'Create detailed 3D models of facade elements with precise geometry, materials, and specifications for accurate representation.' },
      { name: 'Clash Coordination', description: 'Identify and resolve conflicts between facade elements and other building systems before construction begins, saving time and costs.' },
      { name: 'Shop Drawing Generation', description: 'Generate accurate shop drawings from BIM models for fabrication and installation with precise specifications and dimensions.' }
    ]
  };

  const ArchitecturalBIMServices = {
    architecturalBim: [
      { name: 'High-Accuracy BIM Models', description: 'We specialize in converting on-site conditions into high-accuracy BIM models, ensuring every pipe, wall, and beam is accounted for.' },
      { name: 'Real-World 3D Representations', description: 'Accurate 3D models reflecting the built environment — capturing every detail for renovation, facility management, and project verification.' },
      { name: 'Smart Digital Models', description: 'Turn your existing building into a smart, editable digital model with our expert As-Built Modelling services.' },
      { name: 'Digital Twin Solutions', description: 'Stay ahead with digital twins of your real-world assets — built with accuracy, delivered with clarity.' }
    ]
  };

  const BIMContentCreationServices = {
    bimContentCreation: [
      { name: 'Custom BIM Content', description: 'Custom BIM content tailored for precision, performance, and seamless integration.' },
      { name: 'High-Quality BIM Families', description: 'High-quality BIM families and objects designed to meet project standards and manufacturer specifications.' },
      { name: 'Intelligent Data-Rich Content', description: 'We create intelligent, data-rich BIM content that enhances design efficiency and coordination.' },
      { name: 'Parametric Models & Libraries', description: 'From parametric models to detailed product libraries — BIM content that works for your workflow.' }
    ]
  };

  const QuantityTakeOffServices = {
    quantityTakeOff: [
      { name: 'Automated Quantity Takeoffs', description: 'Accurate and automated quantity takeoffs for faster, more reliable project planning.' },
      { name: 'BIM-Powered Precision', description: 'Streamlined quantity takeoffs using BIM for precise material estimation and reduced waste.' },
      { name: 'Detailed Quantity Reports', description: 'Get detailed quantity reports that support budgeting, procurement, and on-site execution.' },
      { name: 'Digital-Driven Solutions', description: 'Digitally-driven quantity takeoff solutions that save time, cut costs, and boost accuracy.' }
    ]
  };

  const FiveDBIMCostEstimationServices = {
    fiveDBIMCostEstimation: [
      { name: 'Real-Time Cost Integration', description: 'Accurate, real-time cost estimation with 5D BIM — integrating design and budget seamlessly.' },
      { name: 'Intelligent Project Planning', description: 'Transform your project planning with 5D BIM: intelligent cost estimation aligned with every design change.' },
      { name: 'Dynamic Cost Forecasting', description: 'Leverage the power of 5D BIM for dynamic cost forecasting, precise budgeting, and smarter decision-making.' },
      { name: 'Risk Reduction & Cost Control', description: 'Reduce risks and control costs from concept to construction with advanced 5D BIM estimation.' }
    ]
  };

  const FourDBIMConstructionSimulationServices = {
    fourDBIMConstructionSimulation: [
      { name: 'Visualize Time, Build Smarter.', description: '4D BIM Construction Simulation integrates 3D models with the project timeline, enabling stakeholders to visualize every phase of construction. It enhances planning, improves coordination, and helps identify potential delays before they happen—saving time and reducing costs.' },
      { name: '4D BIM: Bringing Schedules to Life.', description: 'Experience smarter project execution with 4D BIM: simulate construction sequences, detect clashes early, and optimize site logistics through powerful, time-linked visual models.' },
      { name: 'Plan. Simulate. Deliver.', description: 'Transform your construction planning with 4D BIM simulation. Visualize the entire construction sequence, identify potential conflicts, and optimize resource allocation for seamless project delivery.' },
      { name: 'Time-Integrated Construction Insights.', description: 'Gain comprehensive understanding of your project timeline through 4D BIM. Analyze construction sequences, optimize workflows, and make informed decisions that reduce risks and improve efficiency.' }
    ]
  };

  const FacadeBIMServicesAsBuiltModelling = {
    asBuiltModelling: [
      { name: 'Expert As-Built Modelling', description: 'Our expert BIM modelling supports curtain walls, cladding systems, glazing, and bespoke facade components, enhancing collaboration and reducing rework.' },
      { name: '3D As-Built Modelling', description: 'Create detailed 3D models of facade elements with precise geometry, materials, and specifications for accurate representation.' },
      { name: 'Clash Coordination', description: 'Identify and resolve conflicts between facade elements and other building systems before construction begins, saving time and costs.' },
      { name: 'Shop Drawing Generation', description: 'Generate accurate shop drawings from BIM models for fabrication and installation with precise specifications and dimensions.' }
    ]
  };

  const ArchitecturalBIMServicesCADtoBIMConversion = {
    architecturalBim: [
      { name: 'Architectural Drafting Services', description: 'Accurate and detailed architectural drawings that support design development and construction documentation.' },
      { name: '3D Modelling Services', description: 'High-quality 3D architectural models for clear visualization and enhanced design coordination.' },
      { name: '3D Rendering Services', description: 'Photorealistic architectural renders that bring your designs to life with stunning visual impact.' },
      { name: 'Point Cloud Modeling', description: 'Converting scanned data into accurate architectural models for renovation and retrofit projects.' }
    ]
  };

  const MEPBIMServices = {
    mep: [
      { name: 'MEP Clash Detection', description: 'Identifying and resolving conflicts between MEP systems before construction begins to save time and costs.' },
      { name: 'MEP Coordination', description: 'Coordinated MEP layouts that improve efficiency, reduce rework, and ensure seamless integration.' },
      { name: 'MEP 3D Modeling', description: 'Intelligent 3D models for seamless MEP integration and enhanced project coordination.' },
      { name: 'Piping Spool Drawings', description: 'Accurate piping drawings for fabrication and installation with precise specifications and dimensions.' }
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
            Building Smarter.<br />
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

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          We offer advanced 3D BIM (Building Information Modeling) services to bring your construction projects to life with precision and clarity. From conceptual design to detailed coordination, our BIM models enhance visualization, improve collaboration, and streamline project delivery across all phases.
        </p>

        <div className="services-detail-grid">
          {services.bim.map((service, index) => (
            <Cards key={index} project={service} />
          ))}
        </div>
      </section>

      {/* 4D BIM Construction Simulation Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">4D BIM Construction Simulation Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          4D BIM integrates the construction schedule with 3D models, enabling powerful visual simulations of the construction process over time. This allows project teams to identify potential clashes, optimize sequencing, and improve coordination before work begins on-site—reducing risks, delays, and costs.
        </p>

        {/* here 4D BIM Construction Simulation Services */}
        <div className="femoza-services-grid">
          {FourDBIMConstructionSimulationServices.fourDBIMConstructionSimulation.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* 5D BIM Cost Estimation Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">5D BIM Cost Estimation Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          5D BIM integrates cost data with 3D models and time schedules, providing real-time cost estimation and budget control throughout the project lifecycle. This enables stakeholders to make informed financial decisions, optimize resource allocation, and maintain project profitability from concept to completion.
        </p>

        {/* here 5D BIM Cost Estimation Services */}
        <div className="femoza-services-grid">
          {FiveDBIMCostEstimationServices.fiveDBIMCostEstimation.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* Quantity Take-Off Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Quantity Take-Off Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Our advanced quantity take-off services leverage BIM technology to provide precise, automated material calculations and detailed quantity reports. This enables accurate budgeting, efficient procurement planning, and waste reduction throughout the construction process.
        </p>

        {/* here Quantity Take-Off Services */}
        <div className="femoza-services-grid">
          {QuantityTakeOffServices.quantityTakeOff.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* BIM Content Creation Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">BIM Content Creation Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Our BIM content creation services deliver custom, high-quality BIM families, objects, and libraries that enhance design efficiency and project coordination. We create intelligent, data-rich content that seamlessly integrates with your existing workflows and meets industry standards.
        </p>

        {/* here BIM Content Creation Services */}
        <div className="femoza-services-grid">
          {BIMContentCreationServices.bimContentCreation.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* As-Built Modeling Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">As-Built Modeling Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Our as-built modelling services provide detailed, real-world 3D representations of your construction project as it exists on site. Ideal for renovations, retrofits, and documentation.
        </p>

        <div className="femoza-services-grid">
          {ArchitecturalBIMServices.architecturalBim.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* BIM Outsourcing Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">BIM Outsourcing Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          BIM Outsourcing Services: Scalable, cost-effective, and expert BIM support tailored to your project needs.
        </p>

        {/* FacadeBIMServices*/}
        <div className="femoza-services-grid">
          {FacadeBIMServices.facadeBim.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* CAD to BIM Conversion Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">CAD to BIM Conversion Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          CAD to BIM Conversion: Transforming 2D drawings into intelligent 3D BIM models for enhanced accuracy, collaboration, and project efficiency.
        </p>

        {/* 4 cards of CAD to BIM Conversion Services */}
        <div className="femoza-services-grid">
          {CADtoBIMConversionServices.cadToBim.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* BIM For Pre-Fabrication & Fabrication Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">BIM For Pre-Fabrication & Fabrication Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          We provide detailed BIM models tailored for prefabrication and fabrication, helping reduce errors, save time, and improve project delivery.
        </p>

        <div className="femoza-services-grid">
          {FabricationServices.shopDrawing.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* COBie BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">COBie BIM Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          We specialize in generating COBie-compliant data from BIM models, ensuring all asset and facility information is delivered in a structured, standardized format for O&M use.
        </p>

        <div className="femoza-services-grid">
          {COBieBIMServices.cobieBim.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* Facade BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Facade BIM Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          We provide comprehensive facade BIM services including 3D modelling, clash coordination, and shop drawing generation to ensure seamless integration of facade elements.
        </p>

        {/* here Facade BIM Services */}
        <div className="femoza-services-grid">
          {FacadeBIMServicesAsBuiltModelling.asBuiltModelling.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* Architectural BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Architectural BIM Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Comprehensive architectural BIM services that transform your design concepts into precise, coordinated models for seamless construction execution.
        </p>

        {/* here Architectural BIM Services */}
        <div className="femoza-services-grid">
          {ArchitecturalBIMServicesCADtoBIMConversion.architecturalBim.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* Structural BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Structural BIM Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Expert structural BIM services that ensure safe, efficient, and well-coordinated structural designs for optimal construction performance.
        </p>

        <div className="services-detail-grid structural-grid">
          <div className="service-detail-card">
            <div className="service-detail-icon">
              <FaHammer />
            </div>
            <h3>Rebar Detailing</h3>
            <p>Precision reinforcement detailing for concrete structures with accurate placement and scheduling.</p>
          </div>

          <div className="service-detail-card">
            <div className="service-detail-icon">
              <FaBuilding />
            </div>
            <h3>Structural 3D Modeling</h3>
            <p>Comprehensive structural models that improve accuracy, coordination, and construction efficiency.</p>
          </div>

          <div className="service-detail-card">
            <div className="service-detail-icon">
              <FaDraftingCompass />
            </div>
            <h3>Steel Shop Drawings</h3>
            <p>Detailed fabrication drawings for seamless steel construction and precise assembly.</p>
          </div>
        </div>
      </section>

      {/* MEP BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">MEP BIM Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Integrated MEP BIM services that coordinate mechanical, electrical, and plumbing systems for flawless execution and optimal performance.
        </p>

        {/* here MEP BIM Services */}
        <div className="femoza-services-grid">
          {MEPBIMServices.mep.map((service, index) => (
            <Cards key={index} project={service} cardsCount={4} />
          ))}
        </div>
      </section>

      {/* Infra BIM Services */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Infra BIM Services</h2>

        <p className="text-center" style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          Cutting-edge infrastructure BIM services that bring innovation into large-scale projects with future-ready solutions and advanced technology integration.
        </p>

        <div className="services-detail-grid infra-grid">
          <div className="service-detail-card">
            <div className="service-detail-icon">
              <FaMicrochip />
            </div>
            <h3>Sensors</h3>
            <p>IoT integration for smarter infrastructure monitoring, data collection, and predictive maintenance.</p>
          </div>

          <div className="service-detail-card">
            <div className="service-detail-icon">
              <FaEye />
            </div>
            <h3>Augmented Reality (AR)</h3>
            <p>Immersive AR visualization for better decision-making, on-site guidance, and enhanced project understanding.</p>
          </div>

          <div className="service-detail-card">
            <div className="service-detail-icon">
              <FaVrCardboard />
            </div>
            <h3>Virtual Reality (VR)</h3>
            <p>Realistic VR project walkthroughs for enhanced stakeholder engagement and improved project planning.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="cta-section">
          <h2>Building Smarter, Delivering Better</h2>
          <p>
            At Femoza Engineers & Design Consultancy, we are not just service providers — we are partners in building a smarter future.<br /><br />
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