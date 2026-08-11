import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Phone, Mail, MapPin, Clock, MessageSquare, Map, Send, Check, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const { contact } = siteConfig;
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Basic email validation helper
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid - trigger success state
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="page-top-spacer">
      {/* ---------------- HERO BANNER ---------------- */}
      <section className="bg-dark-section section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, hsla(354, 75%, 45%, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Reach out to Hitec Innovations. Send us a message, locate our office, or contact Riffin Kunnath directly.
          </p>
        </div>
      </section>

      {/* ---------------- CONTACT LAYOUT ---------------- */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            label="Get In Touch"
            title="Start a Technical Consultation"
            subtitle="Fill out the contact form below or reach us directly using our Thrissur office coordinates. We typically respond within 24 business hours."
          />

          <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
            
            {/* Left Column: Contact details & Map */}
            <div>
              <div 
                className="premium-card" 
                style={{ 
                  padding: '2.5rem', 
                  marginBottom: '2.5rem', 
                  backgroundColor: 'var(--color-light-bg)' 
                }}
              >
                <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Office Information</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><MapPin size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Headquarters Address</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>{contact.address}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><Phone size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Phone (Riffin Kunnath)</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>{contact.phone}</p>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, display: 'inline-block', marginTop: '0.25rem' }}>
                        Call Now &rarr;
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><Mail size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Email Support</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>{contact.email}</p>
                      <a href={`mailto:${contact.email}`} style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, display: 'inline-block', marginTop: '0.25rem' }}>
                        Send Email &rarr;
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><Clock size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Business Hours</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>{contact.hours}</p>
                    </div>
                  </div>

                  {/* GSTIN Field */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start', borderTop: '1px solid var(--color-light-border)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><ShieldCheck size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>GST Registration Details</h4>
                      <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark)', marginTop: '0.25rem' }}>
                        GSTIN: {contact.gstin}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick CTA */}
                <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-light-border)' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>Need immediate assistance?</h4>
                  <a 
                    href={contact.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    style={{ backgroundColor: 'hsl(142, 70%, 45%)', borderColor: 'hsl(142, 70%, 45%)' }}
                  >
                    <MessageSquare size={18} /> Chat on WhatsApp ({contact.whatsapp})
                  </a>
                </div>
              </div>

              {/* Google Maps Visual Placeholder */}
              <div 
                className="img-placeholder" 
                style={{ 
                  minHeight: '280px', 
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: 'var(--color-light-surface)',
                  color: 'var(--color-text-dark)',
                  border: '1px solid var(--color-light-border)'
                }}
              >
                <Map size={36} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', opacity: 0.8 }} />
                <span className="placeholder-title" style={{ color: 'var(--color-dark)', fontSize: '0.9rem' }}>[Google Maps Embed Container - Thrissur]</span>
                <span className="placeholder-size" style={{ color: 'var(--color-text-muted-dark)' }}>Mission Quarters, Thrissur – 680 001</span>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="premium-card" style={{ padding: '2.5rem' }}>
              <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Send Us a Message</h3>

              {isSubmitted && (
                <div className="form-success-alert" style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <div style={{ color: 'var(--color-success)', display: 'flex', marginTop: '2px' }}><Check size={20} /></div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Message Sent Successfully!</strong>
                    <span>Thank you for reaching out to Hitec Innovations. Riffin Kunnath or a systems engineer will contact you shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="e.g. John Doe"
                  />
                  {errors.name && <p className="form-error-msg">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="e.g. john@company.com"
                  />
                  {errors.email && <p className="form-error-msg">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    className="form-control" 
                    placeholder="e.g. CCTV Installation Enquiry"
                  />
                  {errors.subject && <p className="form-error-msg">{errors.subject}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                    className="form-control" 
                    rows="5" 
                    placeholder="[Write your inquiry detail here. Describe your business requirements or request a custom automation integration...]"
                  ></textarea>
                  {errors.message && <p className="form-error-msg">{errors.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
