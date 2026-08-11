import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

// Custom inline SVG icons for social media
const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="grid-4 footer-top">
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '2px solid var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img 
                  src={siteConfig.logo} 
                  alt="Hitec Innovations Logo" 
                  style={{
                    width: '88%',
                    height: '88%',
                    objectFit: 'contain',
                    borderRadius: '50%'
                  }} 
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800, 
                  fontSize: '1.1rem', 
                  lineHeight: 1, 
                  color: 'var(--color-text-light)',
                  letterSpacing: '-0.5px'
                }}>
                  HITEC
                </span>
                <span style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.65rem', 
                  fontWeight: 700, 
                  color: 'var(--color-primary)', 
                  letterSpacing: '1px',
                  lineHeight: 1,
                  marginTop: '1px'
                }}>
                  INNOVATIONS
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              {siteConfig.companySlogan}
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={14} style={{ color: 'var(--color-primary)' }} />
              <span><strong>GSTIN:</strong> {siteConfig.contact.gstin}</span>
            </div>
            <div className="footer-social-strip">
              <a href={siteConfig.contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href={siteConfig.contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href={siteConfig.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={siteConfig.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/">Home</Link></li>
              <li className="footer-link-item"><Link to="/about">About Us</Link></li>
              <li className="footer-link-item"><Link to="/services">Services Overview</Link></li>
              <li className="footer-link-item"><Link to="/projects">Projects</Link></li>
              <li className="footer-link-item"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="footer-col-title">Our Services</h3>
            <ul className="footer-links-list">
              {siteConfig.services.map((service) => (
                <li key={service.id} className="footer-link-item">
                  <Link to={`/services/${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="footer-col-title">Get In Touch</h3>
            <div className="footer-contact-details">
              <div>
                <MapPin size={18} />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div>
                <Phone size={18} />
                <span>
                  <strong>Riffin Kunnath:</strong><br />
                  {siteConfig.contact.phone}
                </span>
              </div>
              <div>
                <Mail size={18} />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div>
                <Clock size={18} />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} {siteConfig.companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
