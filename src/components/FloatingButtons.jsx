import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FloatingButtons() {
  // Official WhatsApp SVG icon (clearly recognizable)
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.331 1.97 13.864 1.045 11.23 1.045c-5.437 0-9.862 4.372-9.866 9.802-.001 1.714.457 3.39 1.32 4.892l-.994 3.63 3.738-.98zm11.368-6.407c-.3-.15-1.774-.875-2.046-.975-.272-.1-.47-.15-.667.15-.197.3-.762.975-.934 1.175-.172.2-.343.225-.643.075-.3-.15-1.266-.467-2.41-1.485-.89-.791-1.49-1.77-1.665-2.07-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.667-1.608-.913-2.201-.241-.578-.487-.5-.667-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.774-.725 2.022-1.425.247-.699.247-1.299.172-1.425-.074-.124-.272-.2-.572-.35z"/>
    </svg>
  );

  return (
    <>
      <style>{`
        .hitec-floating-widget {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 2000;
          pointer-events: none; /* Let container be transparent to clicks */
        }
        
        .hitec-floating-btn {
          pointer-events: auto; /* Re-enable clicks for buttons */
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          cursor: pointer;
          border: none;
          text-decoration: none;
        }
        
        .hitec-floating-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
        }
        
        .hitec-floating-btn.whatsapp-widget {
          background-color: #25d366; /* WhatsApp official green */
        }
        
        .hitec-floating-btn.call-widget {
          background-color: var(--color-primary, #e60023); /* Primary tech red */
        }
        
        .hitec-floating-btn .widget-tooltip {
          position: absolute;
          right: 120%;
          background-color: var(--color-dark, #121212);
          color: #ffffff;
          padding: 0.4rem 0.8rem;
          border-radius: var(--border-radius-sm, 4px);
          font-size: 0.8rem;
          font-family: var(--font-heading, sans-serif);
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateX(10px);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-dark-border);
        }
        
        .hitec-floating-btn:hover .widget-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
        
        @media (max-width: 768px) {
          .hitec-floating-widget {
            bottom: 1.5rem;
            right: 1.5rem;
            gap: 0.65rem;
          }
          .hitec-floating-btn {
            width: 48px;
            height: 48px;
          }
          .hitec-floating-btn .widget-tooltip {
            display: none; /* Hide tooltips on mobile/tablet viewports */
          }
        }
      `}</style>
      
      <div className="hitec-floating-widget">
        {/* TOP BUTTON — WHATSAPP */}
        <a 
          href={siteConfig.contact.whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hitec-floating-btn whatsapp-widget"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
          <span className="widget-tooltip">WhatsApp: {siteConfig.contact.whatsapp}</span>
        </a>
        
        {/* SECOND BUTTON — CALL */}
        <a 
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} 
          className="hitec-floating-btn call-widget"
          aria-label="Call Riffin Kunnath"
        >
          <Phone size={22} fill="currentColor" style={{ strokeWidth: 0 }} />
          <span className="widget-tooltip">Call: {siteConfig.contact.phone}</span>
        </a>
      </div>
    </>
  );
}
