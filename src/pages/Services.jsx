import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function Services() {
  const { services } = siteConfig;

  return (
    <div className="page-top-spacer">
      {/* ---------------- HERO BANNER ---------------- */}
      <section className="bg-dark-section section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, hsla(165, 85%, 40%, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Our Services
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Discover our high-performance technology portfolios designed to scale digital systems, secure applications, and automate operations.
          </p>
        </div>
      </section>

      {/* ---------------- DETAILED SERVICES LIST ---------------- */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            label="Service Portfolios"
            title="Advanced Engineering Capabilities"
            subtitle="We provide specialized engineering services backed by strict quality assurance, robust protocols, and modern code practices."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id} 
                  className="premium-card" 
                  style={{ 
                    padding: '2.5rem', 
                    borderRadius: 'var(--border-radius-lg)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '3rem',
                    alignItems: 'center'
                  }}
                >
                  {/* Outer grid for desktop layout changes */}
                  <div className="grid-2" style={{ gap: '3rem', alignItems: 'center', width: '100%', gridTemplateAreas: isEven ? '"content visual"' : '"visual content"' }}>
                    {/* Visual Card Column */}
                    <div style={{ gridArea: 'visual' }}>
                      <div className="img-placeholder" style={{ minHeight: '300px', boxShadow: 'var(--shadow-sm)' }}>
                        <ImageIcon size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                        <span className="placeholder-title" style={{ fontSize: '0.85rem' }}>{service.imagePlaceholder}</span>
                        <span className="placeholder-size">Recommended: 900 x 600 px</span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div style={{ gridArea: 'content' }}>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '1rem' }}>
                        {service.title}
                      </h3>
                      <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                        {service.longDesc}
                      </p>

                      {/* Benefits Pillars */}
                      <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.75rem' }}>
                        Key Benefits
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted-dark)' }}>
                            <div style={{ color: 'var(--color-primary)', display: 'flex' }}><Check size={16} /></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to={`/services/${service.id}`} className="btn btn-primary">
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
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
              Need a Custom Technology Implementation?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              [Urge the user to get in touch. E.g. Hitec Innovations specializes in designing customized telemetry pipelines, dashboard servers, and localized gateway firmware tailored to your specifications.]
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Consult with Our Engineers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
