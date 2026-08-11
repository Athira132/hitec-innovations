import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { ArrowLeft, Check, ArrowRight, ShieldCheck, Settings, Eye, Zap } from 'lucide-react';

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

  // Get service specific hero image
  let heroBg = '';
  if (service.id === 'cctv-installation') heroBg = siteConfig.heroes.cctv;
  else if (service.id === 'gate-automation') heroBg = siteConfig.heroes.gate;
  else if (service.id === 'vehicle-tracking') heroBg = siteConfig.heroes.tracking;
  else if (service.id === 'home-automation') heroBg = siteConfig.heroes.homeAuto;

  return (
    <div className="page-top-spacer">
      
      {/* ---------------- SECTION 1: UNIQUE HERO BACKGROUND ---------------- */}
      <section 
        className="bg-dark-section section-padding hero-background-overlay" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          textAlign: 'left',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '340px',
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
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>
            <ArrowLeft size={14} /> Back to All Services
          </Link>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1, color: 'var(--color-text-light)' }}>
            {service.title}
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.15rem', maxWidth: '700px', margin: 0 }}>
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 2: INTRODUCTION ---------------- */}
      <section className="section-padding" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="section-label">Professional Engineering</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Introduction</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {service.longDesc}
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Hitec Innovations configures and deploys security cameras, gate automation modules, GPS trackers, and smart hubs to guarantee premium operation. Our certified technician team carries out physical mounts, torque limits calibration, telemetry signals, and network backups in Thrissur and across Kerala.
              </p>
            </div>
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
                  src={service.image} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONDITIONAL TEMPLATES ACCORDING TO SERVICE ID ---------------- */}

      {/* A. CCTV INSTALLATION DETAIL */}
      {service.id === 'cctv-installation' && (
        <>
          {/* Solutions & Residential/Commercial CCTV */}
          <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
            <div className="container">
              <SectionHeader 
                label="Security Solutions"
                title="CCTV Solutions & Applications"
                subtitle="We inspect your premises and engineer tailored surveillance loops for homes and offices."
              />
              
              <div className="grid-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
                <div className="premium-card" style={{ padding: '2.5rem' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}><ShieldCheck size={28} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>Residential CCTV</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.5' }}>
                    Protect your villa, backyard, and entrances. We install smart high-definition cameras with continuous recording and link them to your phone for remote feeds and movement push-alerts.
                  </p>
                </div>
                <div className="premium-card" style={{ padding: '2.5rem' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}><Settings size={28} /></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>Commercial CCTV</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.5' }}>
                    Maintain full operation visibility at warehouses, retail showrooms, and office blocks. We deploy dome/bullet cameras, configure multi-terabyte NVR storage blocks, and set up network matrices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Installation, Config & Maintenance */}
          <section className="section-padding">
            <div className="container">
              <SectionHeader 
                label="Methodology"
                title="Installation, Configuration & Support"
                subtitle="Our engineers follow standard checklist guides to guarantee hardware stability and signal quality."
              />
              <div className="grid-3" style={{ gap: '2rem' }}>
                {service.sections.slice(3, 5).map((sec, idx) => (
                  <div key={idx} className="premium-card" style={{ padding: '2rem' }}>
                    <h3 className="card-title" style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{sec.name}</h3>
                    <p className="card-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.5' }}>{sec.desc}</p>
                  </div>
                ))}
                <div className="premium-card" style={{ padding: '2rem' }}>
                  <h3 className="card-title" style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Why Choose Hitec Innovations</h3>
                  <p className="card-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.5' }}>
                    We provide authorized hardware warranties, tidy rack cabling, local support in Thrissur, and prompt responses to service tickets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CCTV BRANDS - STRICTLY INSIDE CCTV INSTALLATION */}
          <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
            <div className="container">
              <SectionHeader 
                label="Authorized Hardware Integration"
                title="Brands We Work With"
                subtitle="We integrate products only from trusted global security surveillance brands, guaranteeing hardware warranties."
              />
              <div className="grid-4" style={{ gap: '2rem' }}>
                {siteConfig.brands.map((brand) => (
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
                      backgroundColor: 'var(--color-light)',
                      border: '1px solid var(--color-light-border)'
                    }}
                  >
                    <div style={{ width: '130px', height: '60px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyPosition: 'center' }}>
                      <img src={brand.image} alt={brand.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: 'var(--color-dark)' }}>{brand.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* B. GATE AUTOMATION DETAIL */}
      {service.id === 'gate-automation' && (
        <>
          {/* Solutions & Applications (with Supplied Image 2) */}
          <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
            <div className="container">
              <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
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
                      src={service.image2} 
                      alt="Gate Motor Calibration" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <span className="section-label">Perimeter Automation</span>
                  <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Gate Automation Solutions</h2>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Hitec Innovations deploys automatic sliding gates, heavy-duty swing motors, and parking barriers. We integrate RFID cards, remote keyfobs, passcode consoles, and photodiode loops to prevent gate doors from closing on active vehicles.
                  </p>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    All motor gears are calibrated according to gate dimensions, total weights, and sliding cycle rates to prevent overheating and ensure silent operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features, Applications, Installation, Support */}
          <section className="section-padding">
            <div className="container">
              <SectionHeader 
                label="Scope of Delivery"
                title="Automatic Gate Systems & Processes"
                subtitle="We oversee the mechanical integration and electrical configuration of smart motors."
              />
              <div className="grid-3" style={{ gap: '2rem' }}>
                {service.sections.slice(1, 4).map((sec, idx) => (
                  <div key={idx} className="premium-card" style={{ padding: '2rem' }}>
                    <h3 className="card-title" style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{sec.name}</h3>
                    <p className="card-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.5' }}>{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* C. VEHICLE TRACKING DETAIL */}
      {service.id === 'vehicle-tracking' && (
        <>
          {/* Solutions & GPS Tracking (with Supplied Image 2) */}
          <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
            <div className="container">
              <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                <div>
                  <span className="section-label">Fleet Telematics</span>
                  <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Vehicle Tracking Solutions</h2>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Secure your individual car or coordinate your commercial fleet vehicles. We install low-draw GPS tracking transceivers inside the dashboard, wire them securely into vehicle ignition channels, and configure cloud telemetry panels.
                  </p>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    This allows fleet operators to log real-time locations, check speed violations, monitor idle durations, and trigger geofence alerts or remote engine immobilization.
                  </p>
                </div>
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
                      src={service.image2} 
                      alt="GPS Fleet Dashboard" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GPS Tracking, Real-time monitoring, Vehicle security, Fleet monitoring */}
          <section className="section-padding">
            <div className="container">
              <SectionHeader 
                label="Module Specs"
                title="GPS Tracking & Fleet Monitoring"
                subtitle="High-precision telemetry solutions that optimize logistical routes and secure vehicles."
              />
              <div className="grid-3" style={{ gap: '2rem' }}>
                {service.sections.map((sec, idx) => (
                  <div key={idx} className="premium-card" style={{ padding: '2rem' }}>
                    <h3 className="card-title" style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{sec.name}</h3>
                    <p className="card-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.5' }}>{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* D. HOME AUTOMATION DETAIL */}
      {service.id === 'home-automation' && (
        <>
          {/* Smart Home solutions (with Supplied Image 2) */}
          <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
            <div className="container">
              <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
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
                      src={service.image2} 
                      alt="Smart Switch Installation" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <span className="section-label">Smart Living Spaces</span>
                  <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Smart Home Solutions</h2>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Hitec Innovations integrates lighting controls, smart locks, video door intercom systems, and appliances into a single connected dashboard. We place wireless switch inserts behind standard physical boards, making them smart without altering your home aesthetics.
                  </p>
                  <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    This allows you to control lights, adjust schedules, lower energy consumption, and arm security sensors remotely via mobile apps or voice assistants.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Smart Security, Smart control, Convenience, Energy-related features */}
          <section className="section-padding">
            <div className="container">
              <SectionHeader 
                label="Connected Assets"
                title="Smart Controls & Convenience"
                subtitle="We design intelligent living scenes customized to your comfort and energy plans."
              />
              <div className="grid-4" style={{ gap: '2rem' }}>
                {service.sections.map((sec, idx) => (
                  <div key={idx} className="premium-card" style={{ padding: '1.5rem' }}>
                    <h3 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{sec.name}</h3>
                    <p className="card-desc" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-dark)', lineHeight: '1.5' }}>{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ---------------- SECTION 3: COMMON BENEFITS STRIP ---------------- */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Service Value"
            title="Key Benefits"
            subtitle={`Why Hitec Innovations' ${service.title} integration stands out.`}
          />
          <div className="grid-2" style={{ gap: '2rem' }}>
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="premium-card" style={{ display: 'flex', gap: '1rem', alignItems: 'start', padding: '2rem' }}>
                <div style={{ color: 'var(--color-primary)', display: 'flex', marginTop: '3px' }}><ShieldCheck size={24} /></div>
                <div style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)', lineHeight: '1.6' }}>
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: BOTTOM CTA BANNER ---------------- */}
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
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--color-text-light)' }}>
              Ready to Discuss your {service.title}?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              Contact Riffin Kunnath today to schedule a detailed requirements inspection at your convenience and receive a professional implementation quote.
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
