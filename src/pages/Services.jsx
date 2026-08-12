import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const { services, heroes } = siteConfig;

  return (
    <div className="page-top-spacer">
      {/* ---------------- HERO BANNER ---------------- */}
      <section 
        className="bg-dark-section section-padding hero-background-overlay" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          textAlign: 'left',
          backgroundImage: `url(${heroes.projects})`,
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
            Our Core Services
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '600px', margin: 0 }}>
            Discover our high-performance technology portfolios designed to secure premises, automate gateways, track vehicles, and configure smart living spaces.
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

          <style>{`
            .services-list-grid {
              display: grid;
              grid-template-columns: 1.1fr 0.9fr;
              gap: 4rem;
              align-items: center;
            }
            .services-list-grid.even {
              grid-template-areas: "content visual";
            }
            .services-list-grid.odd {
              grid-template-areas: "visual content";
            }
            .services-visual-area {
              grid-area: visual;
            }
            .services-content-area {
              grid-area: content;
            }
            @media (max-width: 991px) {
              .services-list-grid {
                grid-template-columns: 1fr;
                grid-template-areas: "visual" "content" !important;
                gap: 2rem;
              }
            }
          `}</style>

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
                    overflow: 'hidden'
                  }}
                >
                  <div className={`services-list-grid ${isEven ? 'even' : 'odd'}`}>
                    {/* Visual Card Column */}
                    <div className="services-visual-area">
                      <div 
                        style={{ 
                          borderRadius: 'var(--border-radius-md)', 
                          overflow: 'hidden', 
                          boxShadow: 'var(--shadow-sm)',
                          width: '100%',
                          aspectRatio: '3/2',
                          border: '1px solid var(--color-light-border)'
                        }}
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="services-content-area">
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '1rem' }}>
                        {service.title}
                      </h3>
                      <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
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
                        Explore Landing Page <ArrowRight size={16} />
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
          background: 'radial-gradient(circle, hsla(354, 75%, 45%, 0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Need a Custom Technology Implementation?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Consult with Hitec Innovations today. We will schedule a direct site consultation in Thrissur to inspect your gate, vehicle, or camera requirements and draft a formal scope document.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Start Your Service Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
