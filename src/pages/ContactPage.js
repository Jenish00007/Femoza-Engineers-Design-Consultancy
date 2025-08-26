import React, { useRef, useState } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      alert('Thanks! Your message has been sent.');
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert('Sorry, there was an issue sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ background: '#FFFFFF' }}>
      {/* Intro */}
      <section className="section" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
        <h2 className="section-title">Let’s Build Something Great Together</h2>
        <p style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)' }}>
          At Femoza Engineers & Design Consultancy, we're here to answer your questions, discuss your projects, and explore how our expertise can support your vision.
          Whether you're a client, partner, or professional seeking opportunities, we'd love to hear from you.
        </p>
      </section>

      {/* Contact Details and Actions */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="contact-content">
          {/* Left column: Get in Touch */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Office Address</strong><br />
                Door No: 25-2-124/52, Vishaws Crown<br/>
                Building, Kankanady, Mangalore-575002<br/>
                Karnataka, India
              </div>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <div>
                <strong>Phone</strong><br />
                <a href="tel:+919108101524">
                  +91 9108101524
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong><br />
                <a href="mailto:hello@fedc.in">
                  hello@fedc.in
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>🕒</span>
              <div>
                <strong>Business Hours</strong><br />
                Monday – Friday: 9:00 AM – 6:00 PM<br />
                Saturday: 10:00 AM – 2:00 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>

          {/* Right column: Contact Form + Socials */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="to_email" value="hello@fedc.in" />
              <div className="form-group">
                <label htmlFor="contact_fullName">Full Name *</label>
                <input
                  type="text"
                  id="contact_fullName"
                  name="user_name"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact_email">Email Address *</label>
                <input
                  type="email"
                  id="contact_email"
                  name="user_email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact_message">Message *</label>
                <textarea
                  id="contact_message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ display: 'inline-block', marginTop: '0.5rem' }}>
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            </form>

            <div className="social-links" style={{ marginTop: '1rem' }}>
              <a className="social-link" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" ry="3" stroke="currentColor" strokeWidth="2"/>
                  <rect x="7" y="10" width="2" height="6" fill="currentColor"/>
                  <circle cx="8" cy="7" r="1.2" fill="currentColor"/>
                  <rect x="12" y="12" width="2" height="4" fill="currentColor"/>
                  <rect x="16" y="12" width="2" height="4" fill="currentColor"/>
                  <rect x="14" y="12" width="2" height="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a className="social-link" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" ry="3" stroke="currentColor" strokeWidth="2"/>
                  <rect x="11" y="8" width="2" height="8" fill="currentColor"/>
                  <rect x="9.5" y="8" width="5" height="2" fill="currentColor"/>
                  <rect x="10" y="12" width="3" height="2" fill="currentColor"/>
                </svg>
              </a>
              <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
                </svg>
              </a>
              <a className="social-link" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" ry="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;