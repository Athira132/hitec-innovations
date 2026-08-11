import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SectionHeader from '../components/SectionHeader';
import { Award, CheckCircle, Users, ShieldAlert, ArrowRight, ShieldCheck, Target, Heart, Check, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Award: Award,
  CheckCircle: CheckCircle,
  Users: Users,
  ShieldAlert: ShieldAlert
};

export default function About() {
  const { aboutIntro, stats, whyChooseUs, team } = siteConfig;

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
            About Us
          </h1>
          <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Learn more about Hitec Innovations, our core philosophies, operational values, and the expert engineering team driving our success.
          </p>
        </div>
      </section>

      {/* ---------------- INTRODUCTION & STORY ---------------- */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            {/* Left Image */}
            <div>
              <div className="img-placeholder tall" style={{ minHeight: '400px', boxShadow: 'var(--shadow-md)' }}>
                <ImageIcon size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                <span className="placeholder-title">[Our Corporate Story Image]</span>
                <span className="placeholder-size">Recommended: 800 x 1000 px</span>
              </div>
            </div>

            {/* Right Story Text */}
            <div>
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">The Hitec Innovations Story</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                {aboutIntro.introText}
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                [Provide an extended narrative detailing the technology focus of Hitec Innovations. Explain how your passion for reliable installations, quality CCTV cameras, automated gate motors, GPS trackers, and smart home solutions guides every project you execute in Kerala.]
              </p>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
                [Detail how you collaborate with residential owners, retail stores, and commercial fleet managers in Thrissur to configure security systems, remote control switches, and real-time fleet locations.]
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
            label="Corporate Philosophy"
            title="Mission, Vision & Core Values"
            subtitle="The fundamental pillars that define how Hitec Innovations designs software, builds hardware, and supports clients."
          />
          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {/* Mission */}
            <div className="premium-card">
              <div className="card-icon-wrapper">
                <Target size={24} />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-desc">{aboutIntro.mission}</p>
            </div>

            {/* Vision */}
            <div className="premium-card">
              <div className="card-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-desc">{aboutIntro.vision}</p>
            </div>

            {/* Values */}
            <div className="premium-card">
              <div className="card-icon-wrapper">
                <Heart size={24} />
              </div>
              <h3 className="card-title">Our Values</h3>
              <p className="card-desc">
                [Detail your company values here. E.g. integrity in system reports, transparency in cloud subscription pricing, strict access control, and constant engineering improvement.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATISTICS STRIP ---------------- */}
      <section style={{ padding: '3.5rem 0', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            {stats.map((stat, idx) => {
              const IconComponent = iconMap[stat.icon] || Award;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
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
              <span className="section-label">Company Advantages</span>
              <h2 className="section-title">{whyChooseUs.heading}</h2>
              <p style={{ color: 'var(--color-text-muted-dark)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
                {whyChooseUs.description}
              </p>

              {/* Benefit list */}
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
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted-dark)' }}>{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="img-placeholder tall" style={{ minHeight: '400px', boxShadow: 'var(--shadow-md)' }}>
                <ImageIcon size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                <span className="placeholder-title">[Advantages Visual Placeholder]</span>
                <span className="placeholder-size">Recommended: 800 x 1000 px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TEAM PREVIEW ---------------- */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-light-bg)', borderTop: '1px solid var(--color-light-border)', borderBottom: '1px solid var(--color-light-border)' }}>
        <div className="container">
          <SectionHeader 
            label="Our Experts"
            title="Technical Team Members"
            subtitle="Meet the engineers, systems architects, and support professionals at Hitec Innovations."
          />
          <div className="grid-4" style={{ gap: '2rem' }}>
            {team.map((member, idx) => (
              <div key={idx} className="premium-card" style={{ padding: 0, overflow: 'hidden', textAlign: 'center' }}>
                <div className="img-placeholder square" style={{ borderRadius: '16px 16px 0 0', border: 'none', borderBottom: '1px solid var(--color-light-border)' }}>
                  <Users size={32} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
                  <span className="placeholder-title" style={{ fontSize: '0.75rem' }}>[Photo Placeholder]</span>
                  <span className="placeholder-size">600 x 600 px</span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{member.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                    {member.role}
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                    {Object.keys(member.socials).map((network) => (
                      <a 
                        key={network} 
                        href={member.socials[network]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--border-radius-md)',
                          backgroundColor: 'var(--color-light-bg)',
                          color: 'var(--color-text-muted-dark)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}
                      >
                        {network.slice(0, 2)}
                      </a>
                    ))}
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
              Interested in Joining Our Team?
            </h2>
            <p style={{ color: 'var(--color-text-muted-light)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              [Describe career opportunities or general call-to-actions for collaborating on technical projects with Hitec Innovations.]
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
              Get In Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
