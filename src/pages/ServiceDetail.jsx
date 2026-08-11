import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { ArrowLeft, Check, ShieldCheck, Cpu, Settings, Activity, ArrowRight, Video, Lock, Radio } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Find specific service details
  const service = siteConfig.services.find(s => s.id === serviceId);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="page-top-spacer container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Service Not Found</h2>
        <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '2rem' }}>
          The requested service page does not exist or has been relocated.
        </p>
        <Link to="/services" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>
    );
  }

  // Get route-specific hero background image
  let heroBg = "";
  if (serviceId === "cctv-installation") heroBg = siteConfig.heroes.cctv;
  else if (serviceId === "gate-automation") heroBg = siteConfig.heroes.gate;
  else if (serviceId === "vehicle-tracking") heroBg = siteConfig.heroes.tracking;
  else if (serviceId === "home-automation") heroBg = siteConfig.heroes.automation;
  else heroBg = siteConfig.heroes.home;

  return (
    <div className="page-top-spacer">
      
      {/* ---------------- SECTION 1: HERO BANNER (Cinematic + left-gradient) ---------------- */}
      <section className="custom-hero-banner" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <div style={{ maxWidth: '650px' }}>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>
              <ArrowLeft size={14} /> Back to All Services
            </Link>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1, color: 'var(--color-text-light)' }}>
              {service.title}
            </h1>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', lineHeight: '1.6' }}>
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: INTRODUCTION ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="section-label">Overview</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
                Professional Systems Engineering
              </h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                {service.longDesc}
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                [Hitec Innovations provides tailored, professional installations in Thrissur and across Kerala. All hardware integrations are customized to protect property security, vehicle status telemetry, and smart controllers securely.]
              </p>
            </div>
            <div>
              <div 
                className="img-placeholder tall" 
                style={{ 
                  minHeight: '320px', 
                  backgroundImage: `url(${heroBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 'var(--border-radius-md)',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  borderRadius: 'var(--border-radius-md)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: SOLUTIONS ---------------- */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Integrations"
            title={`${service.title} Solutions`}
            subtitle="We engineer specialized configurations designed for residential comfort and commercial security standards."
          />

          <div className="grid-3" style={{ gap: '2rem' }}>
            {service.sections.slice(0, 3).map((item, idx) => (
              <div key={idx} className="premium-card" style={{ padding: '2rem' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                  {idx === 0 ? <Video size={32} /> : idx === 1 ? <Settings size={32} /> : <Lock size={32} />}
                </div>
                <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.name}</h3>
                <p className="card-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: FEATURES ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="section-label">Specifications</span>
              <h2 className="section-title">Key Capabilities & Features</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '2rem', fontSize: '1rem' }}>
                Explore the hardware functionalities and smart triggers we build directly into our systems:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {service.sections.slice(2).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '3px' }}><ShieldCheck size={20} /></div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.25rem' }}>{item.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-dark)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="premium-card" style={{ padding: '2.5rem', backgroundColor: 'var(--color-dark)', color: 'var(--color-text-light)' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                  Hardware Performance Standards
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted-light)' }}>
                    <span style={{ color: 'var(--color-primary)' }}>&#10003;</span>
                    Industrial weatherproofing rating on all outdoor cameras and controllers.
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted-light)' }}>
                    <span style={{ color: 'var(--color-primary)' }}>&#10003;</span>
                    Reliable local storage and battery backups to withstand power fluctuations.
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted-light)' }}>
                    <span style={{ color: 'var(--color-primary)' }}>&#10003;</span>
                    End-to-end encryption on smart hubs to prevent network breaches.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: CCTV BRANDS (ONLY under CCTV Installation) ---------------- */}
      {serviceId === "cctv-installation" && (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-text-light)', borderTop: '1px solid var(--color-dark-border)', borderBottom: '1px solid var(--color-dark-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-label" style={{ color: 'var(--color-primary)' }}>Official Surviellance Gear</span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-text-light)', marginTop: '0.5rem' }}>CCTV BRANDS</h2>
              <p style={{ color: 'var(--color-text-muted-light)', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
                Hitec Innovations installs and configures high-grade security cameras and NVR recording decks from leading global manufacturers.
              </p>
            </div>

            <div className="cctv-brands-grid">
              {siteConfig.cctvBrands.map((brand) => (
                <div key={brand.name} className="cctv-brand-card">
                  <div className="cctv-brand-img-container">
                    <img src={brand.imageUrl} alt={`${brand.name} official brand logo`} />
                  </div>
                  <h3 className="cctv-brand-name">{brand.name}</h3>
                  <p className="cctv-brand-desc">{brand.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- SECTION 6: INSTALLATION / WORK PROCESS ---------------- */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Timeline"
            title="Our Process Roadmap"
            subtitle="How Hitec Innovations approaches systems audits, wiring routing, hardware setup, and delivery."
          />
          
          <div className="grid-3" style={{ gap: '3rem' }}>
            {siteConfig.processes.map((step) => (
              <div key={step.number} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', fontWeight: 800, color: 'var(--color-light-surface)', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {step.number}
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', maxWidth: '280px', margin: '0 auto', lineHeight: '1.5' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: BENEFITS ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div className="img-placeholder tall" style={{ minHeight: '320px', backgroundColor: 'var(--color-light-surface)', border: '1px solid var(--color-light-border)' }}>
                <ShieldCheck size={48} style={{ color: 'var(--color-primary)', opacity: 0.8, marginBottom: '1rem' }} />
                <span className="placeholder-title" style={{ color: 'var(--color-dark)' }}>Verified Quality Standards</span>
                <span className="placeholder-size" style={{ color: 'var(--color-text-muted-dark)' }}>Hitec Innovations - Thrissur</span>
              </div>
            </div>
            <div>
              <span className="section-label">Advantages</span>
              <h2 className="section-title">Value & Long-term Benefits</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Integrating these professional smart systems into your building or logistic routes offers immediate and long-term security gains:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><Check size={18} /></div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)', lineHeight: '1.5' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: BOTTOM CTA BANNER ---------------- */}
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
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Interested in a custom {service.title}?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              [Contact Riffin Kunnath today to schedule a detailed requirements inspection at your convenience and receive a professional implementation quote.]
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Get a Free Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
