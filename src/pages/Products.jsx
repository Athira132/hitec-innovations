import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Check, Cpu, Award, Zap, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const { products } = siteConfig;

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
            Products & Solutions
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Explore our proprietary hardware controllers, edge telemetry gateways, and web monitoring analytics software suite.
          </p>
        </div>
      </section>

      {/* ---------------- PRODUCT CATALOG ---------------- */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            label="Proprietary Technology"
            title="Industrial Hardware & Software Solutions"
            subtitle="Hitec Innovations engineers proprietary hardware gateways and custom software dashboards designed to interface telemetry loops securely."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {products.map((product, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={product.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '4rem',
                    alignItems: 'start'
                  }}
                >
                  <div className="grid-2" style={{ gap: '4rem', gridTemplateAreas: isEven ? '"content visual"' : '"visual content"' }}>
                    
                    {/* Content Column */}
                    <div style={{ gridArea: 'content' }}>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>
                        {product.tagline}
                      </span>
                      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                        {product.title}
                      </h2>
                      <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                        {product.desc}
                      </p>

                      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                        {/* Features Column */}
                        <div>
                          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '0.75rem' }}>
                            Core Features
                          </h4>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {product.features.map((feature, fIdx) => (
                              <li key={fIdx} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted-dark)' }}>
                                <div style={{ color: 'var(--color-primary)', display: 'flex', marginTop: '2px' }}><Check size={14} /></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits Column */}
                        <div>
                          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '0.75rem' }}>
                            Key Benefits
                          </h4>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {product.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted-dark)' }}>
                                <div style={{ color: 'var(--color-primary)', display: 'flex', marginTop: '2px' }}><Check size={14} /></div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Applications */}
                      <div style={{ backgroundColor: 'var(--color-light-bg)', padding: '1.25rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-light-border)' }}>
                        <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>
                          Primary Applications
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {product.applications.map((app, aIdx) => (
                            <span 
                              key={aIdx} 
                              style={{ 
                                fontSize: '0.75rem', 
                                backgroundColor: 'var(--color-light-surface)', 
                                padding: '0.35rem 0.75rem', 
                                borderRadius: 'var(--border-radius-sm)',
                                fontWeight: 500
                              }}
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual Graphic Column */}
                    <div style={{ gridArea: 'visual' }}>
                      <div className="img-placeholder" style={{ minHeight: '380px', boxShadow: 'var(--shadow-md)' }}>
                        <ImageIcon size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                        <span className="placeholder-title" style={{ fontSize: '0.95rem' }}>{product.imagePlaceholder}</span>
                        <span className="placeholder-size">Recommended: 1000 x 700 px</span>
                      </div>
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
              Require a Custom Hardware or Firmware Integration?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              [Urge the user to inquire. E.g. Hitec Innovations can customize telemetry firmware, design tailored hardware interfaces, and deliver custom white-label client applications matching your branding.]
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Discuss Product Customizations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
