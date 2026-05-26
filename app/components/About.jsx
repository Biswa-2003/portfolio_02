'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VALUES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Clean Architecture',
    desc: 'Modular, maintainable codebases built on SOLID principles and clear separation of concerns.',
    color: 'var(--primary)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Performance First',
    desc: 'Optimized queries, lazy loading, caching strategies, and edge deployments for sub-100ms responses.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Security Minded',
    desc: 'JWT auth, HTTP-only cookies, input sanitization and rate-limiting built in from day one.',
    color: '#10b981',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Full Stack Vision',
    desc: 'End-to-end ownership — from DB schema design and REST APIs to polished, animated UIs.',
    color: 'var(--secondary)',
  },
];

const FACTS = [
  { label: 'Location', value: 'Bhubaneswar, India (Remote)' },
  { label: 'Education', value: 'B.Tech CSE — GIET University' },
  { label: 'Current Role', value: 'Junior Software Developer @ Triptales' },
  { label: 'Stack', value: 'Next.js · Node.js · PostgreSQL · React' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      id="about"
      className="position-relative"
      style={{ padding: '100px 0', backgroundColor: 'var(--bg)', overflow: 'hidden' }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 65%)',
        filter: 'blur(80px)', opacity: 0.3, pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container position-relative" style={{ zIndex: 1 }} ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-5 pb-2"
        >
          <span className="d-inline-block py-2 px-4 mb-4 rounded-full glass-panel" style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Who I Am
          </span>
          <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)', letterSpacing: '-0.04em' }}>
            Crafting <span className="text-gradient">Digital Excellence</span>
          </h2>
        </motion.div>

        <div className="row g-5 align-items-start">

          {/* Left — Personal intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="col-lg-5"
          >
            <div className="glass-panel p-4 p-lg-5 h-100" style={{ borderRadius: '24px' }}>

              {/* Availability indicator */}
              <div className="d-flex align-items-center gap-2 mb-4">
                <span style={{ position: 'relative', display: 'inline-flex' }}>
                  <span style={{ position: 'absolute', width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', opacity: 0.5, animation: 'ping 2s infinite' }} />
                  <span style={{ position: 'relative', width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </span>
                <span style={{ color: '#10b981', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Open to Opportunities</span>
              </div>

              <h3 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                Building the web, one system at a time.
              </h3>

              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.85', fontWeight: 400 }}>
                I&apos;m a full-stack developer who cares deeply about the <strong style={{ color: 'var(--text)' }}>craft behind great software</strong> — clean APIs, fast UIs, and architectures that hold up under real-world load. I work across the entire stack with equal comfort in the database layer and the browser.
              </p>
              <p className="mt-3" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.85', fontWeight: 400 }}>
                Currently at <strong style={{ color: 'var(--text)' }}>Triptales Commercials Pvt. Ltd.</strong>, where I architect and ship production features for platforms serving thousands of users.
              </p>

              {/* Quick facts */}
              <ul className="list-unstyled mt-5 d-flex flex-column gap-3">
                {FACTS.map((fact) => (
                  <li key={fact.label} className="d-flex align-items-start gap-3">
                    <svg style={{ flexShrink: 0, marginTop: '3px', color: 'var(--primary)' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                      <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{fact.label}:</strong> {fact.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-5 d-flex gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="text-decoration-none fw-bold d-inline-flex align-items-center gap-2"
                  style={{ padding: '13px 28px', backgroundColor: 'var(--text)', color: 'var(--bg)', borderRadius: '10px', fontSize: '0.9rem', transition: 'opacity 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseOut={e => e.currentTarget.style.opacity = '1'}
                >
                  Get in Touch
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a
                  href="#projects"
                  className="glass-panel text-decoration-none fw-bold d-inline-flex align-items-center gap-2"
                  style={{ padding: '13px 28px', color: 'var(--text)', borderRadius: '10px', fontSize: '0.9rem', transition: 'opacity 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.opacity = '0.75'}
                  onMouseOut={e => e.currentTarget.style.opacity = '1'}
                >
                  See My Work
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Value cards */}
          <div className="col-lg-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="row g-4"
            >
              {VALUES.map((v, i) => (
                <motion.div key={v.title} variants={cardVariant} className="col-12 col-sm-6">
                  <motion.div
                    whileHover={{ y: -6, boxShadow: `0 20px 40px -10px rgba(0,0,0,0.2), 0 0 0 1px ${v.color}30` }}
                    className="glass-panel h-100 p-4"
                    style={{ borderRadius: '20px', position: 'relative', overflow: 'hidden', transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)', cursor: 'default' }}
                  >
                    {/* Background accent glow */}
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '60px', height: '60px', background: v.color, filter: 'blur(30px)', opacity: 0.25, borderRadius: '50%' }} />

                    {/* Icon */}
                    <div
                      className="d-flex align-items-center justify-content-center mb-4"
                      style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', color: v.color, flexShrink: 0 }}
                    >
                      {v.icon}
                    </div>

                    <h5 className="fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--text)', letterSpacing: '-0.01em' }}>{v.title}</h5>
                    <p className="mb-0" style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: '1.65', fontWeight: 400 }}>{v.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="glass-panel mt-4 p-4"
              style={{ borderRadius: '18px' }}
            >
              <p className="mb-3" style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--muted)' }}>Primary Stack</p>
              <div className="d-flex flex-wrap gap-2">
                {['Next.js 14', 'React 18', 'Node.js', 'Express', 'PostgreSQL', 'Redux', 'JWT', 'Docker', 'Framer Motion', 'TypeScript'].map((tech) => (
                  <span
                    key={tech}
                    className="glass-panel"
                    style={{ padding: '6px 14px', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text)', letterSpacing: '0.3px' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes ping { 75%, 100% { transform: scale(2.5); opacity: 0; } }` }} />
    </section>
  );
}
