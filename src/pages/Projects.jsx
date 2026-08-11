import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Calendar, User, Cpu, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const { projects } = siteConfig;

  return (
    <div className="page-top-spacer">
      {/* ---------------- HERO BANNER ---------------- */}
      <section className="custom-hero-banner page-top-spacer" style={{ backgroundImage: `url(${siteConfig.heroes.projects})` }}>
        <div className="container">
          <div style={{ maxWidth: '650px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text-light)' }}>
              Projects & Portfolio
            </h1>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Explore our real-world tech implementations across CCTV, automated gates, GPS vehicle tracking, and smart home systems.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS GRID ---------------- */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            label="Case Studies"
            title="Our Implementation Portfolio"
            subtitle="Hitec Innovations delivers robust, high-performance systems. Browse through our select client projects to view the technology stacks and outcomes."
          />

          {/* Grid Layout: 3 columns desktop, 2 columns tablet, 1 column mobile */}
          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="premium-card" 
                style={{ 
                  padding: 0, 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%' 
                }}
              >
                {/* Photo Placeholder */}
                <div className="img-placeholder" style={{ borderRadius: '16px 16px 0 0', border: 'none', borderBottom: '1px solid var(--color-light-border)' }}>
                  <ImageIcon size={32} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
                  <span className="placeholder-title" style={{ fontSize: '0.8rem' }}>{project.imagePlaceholder}</span>
                  <span className="placeholder-size">Recommended: 800 x 500 px</span>
                </div>

                {/* Details Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Category Label */}
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
                    {project.category}
                  </span>

                  <h3 className="card-title" style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                    {project.title}
                  </h3>

                  <p className="card-desc" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    {project.longDesc}
                  </p>

                  {/* Metadata Specs strip */}
                  <div 
                    style={{ 
                      marginTop: 'auto', 
                      paddingTop: '1.25rem', 
                      borderTop: '1px solid var(--color-light-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted-dark)' }}>
                      <User size={14} style={{ color: 'var(--color-primary)' }} />
                      <span><strong>Client:</strong> {project.client}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted-dark)' }}>
                      <Calendar size={14} style={{ color: 'var(--color-primary)' }} />
                      <span><strong>Year:</strong> {project.year}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted-dark)' }}>
                      <Cpu size={14} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
                      <span><strong>Stack:</strong> {project.techStack}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BOTTOM CTA BANNER ---------------- */}
      <section className="bg-dark-section section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, hsla(165, 85%, 40%, 0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Have a Similar Project in Mind?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              [Explain how to start a new project. E.g. Contact Hitec Innovations today. We will match you with a technical lead to audit your project requirements and draft a formal scope document.]
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Start Your Project Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
