import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, category, shortDesc, imagePlaceholder }) {
  return (
    <div className="premium-card" style={{ padding: 0, overflow: 'hidden' }}>
      {/* Visual Image Container */}
      <div className="img-placeholder" style={{ borderRadius: '16px 16px 0 0', border: 'none', borderBottom: '1px solid var(--color-light-border)' }}>
        <ImageIcon size={32} style={{ opacity: 0.4, marginBottom: '0.5rem' }} />
        <span className="placeholder-title" style={{ fontSize: '0.8rem' }}>{imagePlaceholder}</span>
        <span className="placeholder-size">Recommended: 800 x 500 px</span>
      </div>

      {/* Content Container */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span 
          style={{ 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            fontWeight: 700, 
            color: 'var(--color-primary)', 
            marginBottom: '0.5rem',
            letterSpacing: '1px'
          }}
        >
          {category}
        </span>
        <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{title}</h3>
        <p className="card-desc" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{shortDesc}</p>
        <Link to="/projects" className="btn-text" style={{ marginTop: 'auto' }}>
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
