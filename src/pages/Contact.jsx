import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Phone, Mail, MapPin, Clock, MessageSquare, Map, Send, Check, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const { contact, heroes } = siteConfig;
  
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
      <section 
        className="bg-dark-section section-padding hero-background-overlay" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          textAlign: 'left',
          backgroundImage: `url(${heroes.contact})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '280px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Subtle dark overlay for text legibility */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}>
            Hitec Innovations
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text-light)' }}>
            Contact Us
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '600px', margin: 0 }}>
            Reach out to Hitec Innovations. Send us a message, locate our Thrissur office, or contact Riffin Kunnath directly.
          </p>
        </div>
      </section>

      {/* ---------------- CONTACT LAYOUT ---------------- */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionHeader 
            label="Get In Touch"
            title="Start a Technical Consultation"
            subtitle="Fill out the contact form below or reach us directly using our Thrissur office coordinates."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* 1. Contact Information Card */}
            <div 
              className="premium-card" 
              style={{ 
                padding: '2.5rem', 
                backgroundColor: 'var(--color-light-bg)',
                border: '1px solid var(--color-light-border)'
              }}
            >
              <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>Office Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><MapPin size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-dark)' }}>Headquarters Address</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem', lineHeight: '1.5' }}>{contact.address}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><Phone size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-dark)' }}>Phone Call Contacts</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>{contact.phone}</a> (Office desk)
                    </p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>
                      <a href="tel:+918281194990" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>+91 82811 94990</a> (Riffin Kunnath)
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><Mail size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-dark)' }}>Email Address</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>
                      <a href={`mailto:${contact.email}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>{contact.email}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><Clock size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-dark)' }}>Operational Hours</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', marginTop: '0.25rem' }}>{contact.hours}</p>
                  </div>
                </div>

                {/* GSTIN Field */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'start', borderTop: '1px solid var(--color-light-border)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><ShieldCheck size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-dark)' }}>GST Registration Details</h4>
                    <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '0.25rem' }}>
                      GSTIN: {contact.gstin}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Contact Form Card */}
            <div 
              className="premium-card" 
              style={{ 
                padding: '2.5rem', 
                backgroundColor: 'var(--color-light-bg)',
                border: '1px solid var(--color-light-border)'
              }}
            >
              <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>Send Us a Message</h3>

              {isSubmitted && (
                <div className="form-success-alert" style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', marginBottom: '1.5rem' }}>
                  <div style={{ color: 'var(--color-success)', display: 'flex', marginTop: '2px' }}><Check size={20} /></div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Message Sent Successfully!</strong>
                    <span>Thank you for reaching out to Hitec Innovations. Riffin Kunnath or a systems engineer will contact you shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
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

                <div className="form-group" style={{ marginBottom: 0 }}>
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

                <div className="form-group" style={{ marginBottom: 0 }}>
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

                <div className="form-group" style={{ marginBottom: 0 }}>
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

                <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

            {/* 3. Find Us — Actual Google Map Card */}
            <div 
              className="premium-card" 
              style={{ 
                padding: '2.5rem', 
                backgroundColor: 'var(--color-light-bg)',
                border: '1px solid var(--color-light-border)'
              }}
            >
              <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-dark)' }}>
                <Map size={22} style={{ color: 'var(--color-primary)' }} /> Find Us
              </h3>
              
              {/* Embedded Google Map iframe */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '350px', 
                  borderRadius: 'var(--border-radius-sm)', 
                  overflow: 'hidden', 
                  border: '1px solid var(--color-light-border)',
                  marginBottom: '1.5rem',
                  backgroundColor: '#eeeeee'
                }}
              >
                <iframe 
                  title="Hitec Innovations Google Maps Location"
                  src="https://maps.google.com/maps?q=35/41/92,%20Ground%20Floor,%20Near%20St.%20Joseph%20Convent%20Boarding,%20Mission%20Quarters,%20Thrissur%20-%20680001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', margin: 0, lineHeight: '1.5' }}>
                  <strong>Address:</strong> {contact.address} (Near St. Joseph Convent Boarding, Mission Quarters)
                </p>
                <a 
                  href="https://maps.google.com/?q=35/41/92,+Ground+Floor,+Near+St.+Joseph+Convent+Boarding,+Mission+Quarters,+Thrissur+-+680001" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  View Location on Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* 4. Digital Visiting Card Card */}
            <div 
              className="premium-card" 
              style={{ 
                padding: '2.5rem', 
                backgroundColor: 'var(--color-light-bg)',
                border: '1px solid var(--color-light-border)',
                textAlign: 'center'
              }}
            >
              <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>Digital Visiting Card</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', marginBottom: '1.5rem' }}>
                Access our contact details, location, and quick links directly on your device.
              </p>
              <a 
                href="https://ibb.co/chCfqs6V" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ width: '100%', maxWidth: '360px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '0 auto' }}
              >
                View Digital Visiting Card &rarr;
              </a>
            </div>

            {/* 5. Social Media — Facebook + YouTube Card */}
            <div 
              className="premium-card" 
              style={{ 
                padding: '2.5rem', 
                backgroundColor: 'var(--color-light-bg)',
                border: '1px solid var(--color-light-border)',
                textAlign: 'center'
              }}
            >
              <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>Social Media</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', marginBottom: '1.5rem' }}>
                Follow our official updates on social platforms.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a 
                  href={contact.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1h-4c-2.5 0-5 1.5-5 4v3z"/>
                  </svg>
                  Facebook
                </a>
                <a 
                  href={contact.socials.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
