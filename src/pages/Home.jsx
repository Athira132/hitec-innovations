import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { 
  Award, CheckCircle, Users, ShieldAlert, ArrowRight, ShieldCheck, 
  Settings, Zap, Check 
} from 'lucide-react';

const iconMap = {
  Award: Award,
  CheckCircle: CheckCircle,
  Users: Users,
  ShieldAlert: ShieldAlert
};

export default function Home() {
  const { homeHero, aboutIntro, stats, services, projects, processes, whyChooseUs, ctaBanner, brands, homeImages } = siteConfig;

  return (
    <div>
      <style>{`
        .brands-marquee-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          align-items: center;
          justify-items: center;
        }
        @media (min-width: 768px) {
          .brands-marquee-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .brand-logo-card {
          width: 100%;
          max-width: 180px;
          height: 80px;
          background-color: var(--color-light);
          border: 1px solid var(--color-light-border);
          border-radius: var(--border-radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          padding: 0.5rem;
        }
        .brand-logo-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-sm);
          transform: translateY(-2px);
        }
        .brand-logo-img {
          max-width: 85%;
          max-height: 85%;
          object-fit: contain;
        }
        
        /* Stats Row - single row on desktop, 2x2 on mobile */
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
      
      {/* ---------------- SECTION 1: HERO BANNER (UNCHANGED) ---------------- */}
      <section className="bg-dark-section page-top-spacer" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '5rem' }}>
        {/* Glow Effects */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, hsla(354, 75%, 45%, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 0' }}>
          <span className="section-label" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '1.5rem' }}>
            {siteConfig.companyName}
          </span>
          <div className="grid-2" style={{ alignItems: 'start' }}>
            {/* Left Column: Text Content */}
            <div style={{ paddingRight: '1rem' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', 
                fontWeight: 800, 
                lineHeight: 1.1, 
                marginBottom: '1.5rem',
                letterSpacing: '-1px'
              }}>
                {homeHero.heading}
              </h1>
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--color-text-muted-light)', 
                marginBottom: '2.5rem',
                maxWidth: '560px',
                lineHeight: '1.7'
              }}>
                {homeHero.subheading}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary">
                  {homeHero.primaryCTA}
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  {homeHero.secondaryCTA}
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div>
              <div 
                style={{ 
                  borderRadius: 'var(--border-radius-md)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-lg)',
                  width: '100%',
                  aspectRatio: '16/10',
                  border: '1px solid var(--color-dark-border)',
                  display: 'block'
                }}
              >
                <img 
                  src="https://i.ibb.co/MxLNCnpg/image.png" 
                  alt="Hitec Innovations Technology Infrastructure" 
                  loading="eager"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: ABOUT / INTRODUCTION ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Side: Image */}
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
                  src={homeImages.aboutHome} 
                  alt="About Hitec Innovations" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Side: Introduction Content */}
            <div>
              <span className="section-label">{aboutIntro.label}</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>{aboutIntro.heading}</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {aboutIntro.introText}
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                {aboutIntro.detailedDesc}
              </p>

              {/* Core Values Tab Preview */}
              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Our Mission</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.4' }}>{aboutIntro.mission}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Our Vision</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.4' }}>{aboutIntro.vision}</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: STATISTICS STRIP ---------------- */}
      <section style={{ backgroundColor: 'var(--color-light-bg)', padding: '3.5rem 0', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
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

      {/* ---------------- SECTION 4: SERVICES SECTION ---------------- */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader 
            label="Our Core Services"
            title="Premium Technological Solutions"
            subtitle="Explore our main business installations. We deploy high-performance surveillance, gates, GPS, and home automation systems."
          />
          <div className="grid-4" style={{ gap: '2rem' }}>
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                shortDesc={service.shortDesc}
                icon={service.id === "cctv-installation" ? "Shield" : service.id === "gate-automation" ? "Settings" : service.id === "vehicle-tracking" ? "Cpu" : "Cloud"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: CCTV BRANDS SECTION ---------------- */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Trusted Partners"
            title="Brands We Work With"
            subtitle="We integrate products from reliable global brands, ensuring hardware durability and secure cloud support."
          />
          
          <div className="brands-marquee-grid">
            {brands.map((brand) => (
              <div key={brand.name} className="brand-logo-card">
                <img src={brand.image} alt={brand.name} className="brand-logo-img" />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services/cctv-installation" className="btn-text">
              View Brand Partnership details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: WHY CHOOSE US ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Content */}
            <div>
              <span className="section-label">Company Advantages</span>
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
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--border-radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={20} />
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
                  alt="Hitec Innovations Diagnostics" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: HOW WE WORK ---------------- */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Our Method"
            title="How We Approach Our Projects"
            subtitle="Our structured development cycle ensures every installation delivers maximum security and convenience."
          />
          <div className="grid-3" style={{ gap: '3rem', position: 'relative' }}>
            {processes.map((process, idx) => (
              <div key={idx} style={{ position: 'relative', textAlign: 'center' }}>
                {/* Step Number */}
                <div style={{ 
                  fontFamily: 'var(--font-heading)',
                  fontSize: '4.5rem',
                  fontWeight: 800,
                  color: 'var(--color-light-surface)',
                  lineHeight: 1,
                  marginBottom: '1rem'
                }}>
                  {process.number}
                </div>
                {/* Heading */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.75rem' }}>
                  {process.title}
                </h3>
                {/* Description */}
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', maxWidth: '280px', margin: '0 auto', lineHeight: '1.5' }}>
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------------- SECTION 9: BOTTOM CTA BANNER ---------------- */}
      <section className="bg-dark-section section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, hsla(354, 75%, 45%, 0.1) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '650px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              {ctaBanner.title}
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              {ctaBanner.subtitle}
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              {ctaBanner.buttonText} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
