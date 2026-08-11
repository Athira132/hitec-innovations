import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Brands() {
  const { brands } = siteConfig;

  return (
    <div className="page-top-spacer">
      {/* ---------------- HERO BANNER ---------------- */}
      <section className="custom-hero-banner page-top-spacer" style={{ backgroundImage: `url(${siteConfig.heroes.brands})` }}>
        <div className="container">
          <div style={{ maxWidth: '650px' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text-light)' }}>
              CCTV Brands We Work With
            </h1>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Hitec Innovations partners with trusted global leaders in security surveillance and networking.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- BRANDS GRID ---------------- */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            label="Authorized Systems & Hardware"
            title="Brands We Work With"
            subtitle="We integrate, configure, and maintain products from leading security camera manufacturers. By working with established brands, we ensure you receive high-quality feeds and secure mobile access."
          />

          {/* Brands logo/card grid */}
          <div className="grid-4" style={{ gap: '2.5rem', marginBottom: '4rem' }}>
            {brands.map((brand) => (
              <div 
                key={brand.name} 
                className="premium-card" 
                style={{ 
                  textAlign: 'center', 
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '220px',
                  backgroundColor: 'var(--color-light-bg)'
                }}
              >
                {/* Actual Logo Image Box */}
                <div 
                  style={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: 'var(--color-light)',
                    borderRadius: 'var(--border-radius-sm)',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    overflow: 'hidden',
                    border: '1px solid var(--color-light-border)'
                  }}
                >
                  <img 
                    src={brand.imageUrl} 
                    alt={`${brand.name} logo`} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} 
                  />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Brands description value block */}
          <div className="premium-card" style={{ padding: '3rem', backgroundColor: 'var(--color-dark)', color: 'var(--color-text-light)' }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div>
                <span className="section-label" style={{ color: 'var(--color-primary)' }}>Warranty & Security</span>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                  Professional Grade Hardware Support
                </h2>
                <p style={{ color: 'var(--color-text-muted-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  [Explain that Hitec Innovations uses official channels to source CP PLUS, HIKVISION, D-Link, and IMOU products. We do not use unbranded or grey-market cameras to guarantee compliance and protect surveillance recordings from hacker vulnerabilities.]
                </p>
                <p style={{ color: 'var(--color-text-muted-light)', fontSize: '0.95rem' }}>
                  [Detail that manufacturer warranties apply directly to all camera setups, recording DVR/NVR servers, network routers, and power supply units we configure.]
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><ShieldCheck size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-light)' }}>CP PLUS Solutions</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)' }}>[CP PLUS offers versatile analog and IP camera solutions with cost-efficient setups for residential security.]</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><ShieldCheck size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-light)' }}>HIKVISION Surveillance</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)' }}>[Hikvision provides high-end enterprise security camera systems, robust NVRs, and AI smart threat detection.]</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><ShieldCheck size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-light)' }}>D-Link & IMOU Networks</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-light)' }}>[D-Link delivers secure wireless and ethernet networks. IMOU offers smart Wi-Fi cameras with cloud logs.]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- BOTTOM CTA BANNER ---------------- */}
      <section className="bg-dark-section section-padding" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', borderTop: '1px solid var(--color-dark-border)' }}>
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
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Want to Schedule a Camera Inspection?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              [Explain how the customer can request a specific brand setup. E.g. Contact Hitec Innovations. We will review your site and draft a customized quote matching your brand choice.]
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Get a Brand Consultation Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
