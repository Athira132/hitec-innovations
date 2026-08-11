import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FloatingButtons() {
  return (
    <div className="floating-actions-container">
      {/* WhatsApp Button */}
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="Contact Hitec Innovations on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="tooltip">WhatsApp: {siteConfig.contact.whatsapp}</span>
      </a>

      {/* General Contact Button */}
      <Link
        to="/contact"
        className="floating-btn contact"
        aria-label="Contact Page"
      >
        <Mail size={24} />
        <span className="tooltip">Get in Touch</span>
      </Link>
    </div>
  );
}
