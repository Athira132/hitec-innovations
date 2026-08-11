import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { ArrowLeft, Check, Image as ImageIcon, ArrowRight } from 'lucide-react';

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

  // Find related projects
  const relatedProjects = siteConfig.projects.filter(p => 
    p.category.toLowerCase().includes(service.title.split(' ')[0].toLowerCase()) ||
    service.title.toLowerCase().includes(p.category.split(' ')[0].toLowerCase())
  );

  return (
    <div className="page-top-spacer">
      {/* ---------------- SERVICE HERO ---------------- */}
      <section className="bg-dark-section section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, hsla(354, 75%, 45%, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <ArrowLeft size={14} /> Back to All Services
          </Link>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
            {service.title}
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '700px' }}>
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* ---------------- INTRODUCTION & DESCRIPTION ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Column: Description content */}
            <div>
              <span className="section-label">Service Overview</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Professional Implementations</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                {service.longDesc}
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
                [Hitec Innovations provides tailored, professional installations in Thrissur and across Kerala. All hardware integrations are customized to protect property security, vehicle status telemetry, and smart controllers securely.]
              </p>

              {/* Specific Benefits list */}
              <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '1rem' }}>
                Core Areas & Focus
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <div style={{ color: 'var(--color-primary)', display: 'flex', marginTop: '3px' }}><Check size={18} /></div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual placeholder */}
            <div>
              <div className="img-placeholder tall" style={{ minHeight: '380px', boxShadow: 'var(--shadow-md)' }}>
                <ImageIcon size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                <span className="placeholder-title" style={{ fontSize: '0.95rem' }}>{service.imagePlaceholder}</span>
                <span className="placeholder-size">Recommended: 800 x 1000 px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICE SECTIONS / CAPABILITIES ---------------- */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Technical Scope"
            title="Service Deliverables & Modules"
            subtitle={`Specific installation, config, and maintenance items Hitec Innovations covers for ${service.title}.`}
          />

          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {service.sections.map((sec, idx) => (
              <div key={idx} className="premium-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--color-primary-glow)',
                  lineHeight: 1,
                  marginBottom: '1rem'
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="card-title" style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{sec.name}</h3>
                <p className="card-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)', flexGrow: 1 }}>{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RELATED PROJECTS / CASE STUDIES ---------------- */}
      {relatedProjects.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <SectionHeader 
              label="Proven Success"
              title="Related Deployments"
              subtitle="Case studies illustrating our professional technology installations in Kerala."
            />
            <div className="grid-3" style={{ gap: '2rem' }}>
              {relatedProjects.map((project) => (
                <div key={project.id} className="premium-card" style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    {project.category}
                  </span>
                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                  <p className="card-desc" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.shortDesc}</p>
                  <Link to="/projects" className="btn-text">
                    Explore Project <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Ready to Discuss your {service.title}?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              [Contact Riffin Kunnath today to schedule a detailed requirements inspection at your convenience and receive a professional implementation quote.]
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
