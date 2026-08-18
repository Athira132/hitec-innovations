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

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
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
            <div style={{ marginBottom: '1.25rem' }}>
              <Link to="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
                <div style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 3px 8px rgba(0, 0, 0, 0.35)',
                  flexShrink: 0
                }}>
                  <img 
                    src={siteConfig.logo} 
                    alt="Hitec Innovations" 
                    style={{
                      width: '82%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block'
                    }} 
                  />
                </div>
              </Link>
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
              <a href={siteConfig.contact.socials.youtube} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
                <Youtube size={16} />
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
