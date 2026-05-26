'use client';

import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const containerRef = useRef(null);
  const year = new Date().getFullYear();

  return (
    <footer id="contact" style={{ backgroundColor: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative Top Border */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, var(--primary-glow) 50%, transparent 100%)" }} />

      {/* Decorative Grid Overlay Footer */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at 100% 100%, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 100% 100%, black 10%, transparent 80%)',
          pointerEvents: 'none', zIndex: 0,
          opacity: 0.1
        }}
      />

      {/* Dynamic Background Glows */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0
        }}
      />

      <div className="container position-relative z-1" ref={containerRef} style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="row g-5 align-items-center">
          {/* LEFT — Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-lg-5"
          >
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="position-relative d-flex align-items-center justify-content-center">
                <span style={{ position: "absolute", width: "12px", height: "12px", background: "#10b981", borderRadius: "50%", opacity: 0.5, animation: "ping 2s infinite" }} />
                <span style={{ position: "relative", width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              </span>
              <span
                className="fw-bold"
                style={{ color: '#10b981', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 800 }}
              >
                Systems Online / Production Ready
              </span>
            </div>

            <h2 className="display-3 fw-bold mb-5" style={{ fontFamily: "var(--font-heading)", color: 'var(--text)', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
              Let's engineer<br /><span className="text-gradient">the future</span> of your system.
            </h2>

            <ul className="list-unstyled mb-5 d-flex flex-column gap-4" style={{ fontSize: '1.1rem' }}>
              <li className="d-flex align-items-center gap-3">
                <div className="glass-panel p-2 rounded-lg" style={{ borderRadius: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <a href="mailto:biswajitpanda130203@gmail.com" className="text-decoration-none fw-bold text-gradient" style={{ transition: 'all 0.3s' }}>biswajitpanda130203@gmail.com</a>
              </li>
              <li className="d-flex align-items-center gap-3">
                <div className="glass-panel p-2 rounded-lg" style={{ borderRadius: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <a href="tel:+91966864753" className="text-decoration-none fw-bold" style={{ color: 'var(--text)' }}>+91 96686 64753</a>
              </li>
              <li className="d-flex align-items-center gap-3">
                <div className="glass-panel p-2 rounded-lg" style={{ borderRadius: '10px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span className="fw-bold" style={{ color: 'var(--text)' }}>India, Remote Distributed</span>
              </li>
            </ul>

            <div className="d-flex flex-wrap gap-2 mb-5">
              {['Infrastructure', 'Cloud Architecture', 'Secure Auth', 'Full-Stack Eng.'].map(skill => (
                <span
                  key={skill}
                  className="glass-panel px-3 py-2"
                  style={{
                    fontSize: '0.7rem',
                    borderRadius: '100px',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="d-flex gap-3">
              {[
                {
                  name: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/biswajit-panda-b66a41256/',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  )
                },
                {
                  name: 'GitHub',
                  url: 'https://github.com/Biswa-2003',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  )
                },
                {
                  name: 'Twitter / X',
                  url: 'https://twitter.com/',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                }
              ].map((social, i) => (
                <MagneticButton
                  key={i}
                  href={social.url}
                  className="d-flex align-items-center justify-content-center glass-panel text-decoration-none"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    color: 'var(--text)',
                    transition: "box-shadow 0.4s, border-color 0.4s, color 0.3s"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 20px var(--primary-glow)";
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                >
                  {social.icon}
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="col-lg-7"
          >
            <div
              className="p-4 p-md-5 position-relative glass-panel"
              style={{
                borderRadius: '32px',
                boxShadow: "0 40px 100px -30px rgba(0,0,0,0.5)"
              }}
            >
              <div
                style={{
                  position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
                  background: 'linear-gradient(90deg, transparent, var(--primary), transparent)'
                }}
              />
              <div className="d-flex align-items-center gap-3 mb-4">
                <div style={{ width: '14px', height: '14px', border: '3px solid var(--primary)', borderRadius: '4px' }} />
                <h3 className="h3 fw-bold mb-0" style={{ fontFamily: "var(--font-heading)", color: 'var(--text)', letterSpacing: '-0.02em' }}>Secure Connection Portal</h3>
              </div>
              <p className="mb-5 fs-5" style={{ color: "var(--muted)", fontWeight: 400 }}>Initialize data transmission for project collaboration or enterprise inquiry.</p>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#020617', position: 'relative', zIndex: 1 }}>
        <div className="container py-4 d-flex flex-wrap justify-content-between align-items-center gap-3 fw-medium" style={{ fontSize: '0.85rem', letterSpacing: '0.5px', color: "#64748b" }}>
          <div>© {year} Biswajit Panda. All system protocols reserved.</div>
          <div className="d-flex gap-4">
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#f8fafc'} onMouseOut={e => e.currentTarget.style.color = '#64748b'}>Privacy Policy</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#f8fafc'} onMouseOut={e => e.currentTarget.style.color = '#64748b'}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
