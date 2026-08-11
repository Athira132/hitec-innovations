import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Award, CheckCircle, Users, ShieldAlert, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Award: Award,
  CheckCircle: CheckCircle,
  Users: Users,
  ShieldAlert: ShieldAlert
};

export default function About() {
  const { aboutIntro, stats, whyChooseUs, heroes, homeImages } = siteConfig;

  return (
    <div className="page-top-spacer">
      {/* Dynamic inline styles for stats and hero layout */}
      <style>{`
        .stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem 1.5rem;
        }
        @media (min-width: 992px) {
          .stats-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: nowrap;
            gap: 1rem;
          }
        }
        .stats-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1 1 0px;
          min-width: 0;
        }
      `}</style>

      {/* ---------------- HERO BANNER ---------------- */}
      <section 
        className="bg-dark-section section-padding" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          textAlign: 'left',
          minHeight: '340px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Subtle radial glow background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at right, hsla(165, 85%, 40%, 0.12) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left side: Heading & Text */}
            <div>
              <span className="section-label" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}>
                Who We Are
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--color-text-light)' }}>
                About Us
              </h1>
              <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '600px', margin: 0, lineHeight: '1.7' }}>
                Learn more about Hitec Innovations, our core philosophies, operational values, and our dedication to secure technology integrations in Kerala.
              </p>
            </div>
            
            {/* Right side: Large rectangular image box showing raw logo image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{ 
                  borderRadius: 'var(--border-radius-md)', 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  border: '1px solid var(--color-dark-border)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  padding: '1.25rem',
                  width: '100%',
                  maxWidth: '440px',
                  aspectRatio: '1.63',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src="/images/logo-raw.png" 
                  alt="Hitec Innovations Brand Stamp" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    borderRadius: 'var(--border-radius-sm)',
                    display: 'block'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INTRODUCTION & STORY ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Image */}
            <div>
              <div 
                style={{ 
                  borderRadius: 'var(--border-radius-md)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)',
                  width: '100%',
                  aspectRatio: '4/3',
                  border: '1px solid var(--color-light-border)'
                }}
              >
                <img 
                  src="/images/service-cctv.jpg" 
                  alt="Hitec Innovations CCTV Installation" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Story Text */}
            <div>
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">The Hitec Innovations Story</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {aboutIntro.introText}
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                We collaborate with residential owners, retail stores, and commercial fleet managers in Thrissur to configure security systems, remote control switches, and real-time fleet locations. We build systems centered on reliability, robust hardware, and ongoing support.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#vision-mission" className="btn btn-primary">Our Core Values</a>
                <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MISSION, VISION & VALUES ---------------- */}
      <section id="vision-mission" className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Corporate Alignment"
            title="Mission, Vision & Core Values"
            subtitle="The fundamental goals guiding Hitec Innovations' operations and services across Kerala."
          />

          <div className="grid-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
            {/* Mission Card */}
            <div className="premium-card" style={{ padding: '3rem' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                <ShieldCheck size={40} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {aboutIntro.mission}
              </p>
            </div>

            {/* Vision Card */}
            <div className="premium-card" style={{ padding: '3rem' }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                <Zap size={40} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {aboutIntro.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATISTICS STRIP ---------------- */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <div className="stats-row">
            {stats.map((stat, idx) => {
              const IconComponent = iconMap[stat.icon] || Award;
              return (
                <div key={idx} className="stats-item">
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComponent size={32} />
                  </div>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-dark)', lineHeight: 1.1 }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', fontWeight: 600, marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Content */}
            <div>
              <span className="section-label">Our Strengths</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>{whyChooseUs.heading}</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                {whyChooseUs.description}
              </p>

              {/* Benefit Blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {whyChooseUs.pillars.map((pillar, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{
                      backgroundColor: 'var(--color-primary-glow)',
                      color: 'var(--color-primary)',
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--border-radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>{pillar.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.4' }}>{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Image */}
            <div>
              <div 
                style={{ 
                  borderRadius: 'var(--border-radius-md)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)',
                  width: '100%',
                  aspectRatio: '4/3',
                  border: '1px solid var(--color-light-border)'
                }}
              >
                <img 
                  src={homeImages.whyChooseUs} 
                  alt="Hitec Innovations Security Engineering" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
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
              Want to partner with Hitec Innovations?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Consult with Riffin Kunnath today to schedule a detailed requirements inspection at your convenience and receive a professional implementation quote.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Get a Free Setup Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
