import React, { useState, useRef } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS env vars are missing. Please set REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY');
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });

      alert('Thank you for your application! We will review your submission and get back to you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error(err);
      alert('Sorry, there was an issue submitting your application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openings = [
    "BIM Modeling & Coordination",
    "Architectural Drafting & Design",
    "Structural Engineering & Rebar Detailing",
    "MEP Design & BIM Integration",
    "Project Management & Consulting",
    "Construction Technology Specialist"
  ];

  return (
    <main>
      {/* Application Form */}
      <section className="section" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Apply Now</h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="position">Position Applied For *</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select a position</option>
                {openings.map((opening, index) => (
                  <option key={index} value={opening}>{opening}</option>
                ))}
                <option value="Other">Other (please specify in cover letter)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Years of Experience *</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years (Entry Level)</option>
                <option value="2-5">2-5 years (Mid Level)</option>
                <option value="6-10">6-10 years (Senior Level)</option>
                <option value="10+">10+ years (Expert Level)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume/CV *</label>
              <input
                type="file"
                id="resume"
                name="my_file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem'
                }}
              />
              <small style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter *</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows="6"
                required
                placeholder="Tell us about yourself, your experience, and why you want to join Femoza Engineers & Design Consultancy..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ display: 'block', margin: '1rem auto 0', textAlign: 'center' }}>
              {isSubmitting ? 'Submitting…' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Current Openings</h2>

        <div className="services-detail-grid">
          {openings.map((opening, index) => (
            <div key={index} className="service-detail-card">
              <h3>{opening}</h3>
              <p>Join our team and contribute to innovative BIM solutions and cutting-edge construction technology projects.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CareersPage; 