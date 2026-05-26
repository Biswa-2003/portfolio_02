'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const navRef = useRef(null);

  const sections = useMemo(
    () => ['home', 'about', 'skills', 'projects', 'experience', 'contact'],
    []
  );

  const isActiveSection = (id) => (activeSection === id ? 'active' : '');

  const smoothScrollTo = (hash, offset = 80) => {
    let target = null;
    try {
      target = document.querySelector(hash);
    } catch {
      target = null;
    }
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const absoluteY = rect.top + window.pageYOffset - offset;

    window.scrollTo({
      top: absoluteY,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const click = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (!href || href === '#') return;

      e.preventDefault();
      smoothScrollTo(href, 80);

      const nav = document.getElementById('nav');
      if (nav?.classList.contains('show')) {
        const toggler = document.querySelector('[data-bs-toggle="collapse"][data-bs-target="#nav"]');
        toggler?.dispatchEvent(new Event('click', { bubbles: true }));
      }
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);

  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((en) => en.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { root: null, rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg navbar-blur ${scrolled ? 'is-scrolled' : ''}`}
      style={{ padding: scrolled ? '10px 0' : '16px 0', transition: 'padding 0.3s ease' }}
    >
      <div className="container-wide container">
        <a className="navbar-brand d-flex align-items-center gap-3 text-decoration-none" href="#home" onClick={(e) => { e.preventDefault(); smoothScrollTo('#home'); }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--primary) 0%, rgba(14, 165, 233, 0.4) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.4rem',
            boxShadow: '0 4px 20px var(--primary-glow)',
            border: '1px solid rgba(255,255,255,0.15)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            B
          </div>
          <span className="brand-name text-gradient" style={{ fontFamily: "var(--font-heading)", fontSize: '1.45rem', fontWeight: 800, letterSpacing: '0.5px' }}>BISWAJIT</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ boxShadow: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a href="#home" className={`nav-link ${isActiveSection('home')}`} style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActiveSection('about')}`} href="#about" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActiveSection('skills')}`} href="#skills" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Skills</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActiveSection('projects')}`} href="#projects" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActiveSection('experience')}`} href="#experience" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Experience</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActiveSection('contact')}`} href="#contact" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</a>
            </li>
            <li className="nav-item d-flex align-items-center ms-lg-4 mt-3 mt-lg-0">
              <a className="glass-panel px-4 py-2 text-decoration-none" href="#contact" style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--primary)', borderRadius: '100px' }}>
                Initiate Portal
              </a>
            </li>
            <li className="nav-item d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
              <button
                onClick={toggleTheme}
                className="btn d-flex align-items-center justify-content-center"
                style={{
                  width: '38px', height: '38px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--card)',
                  color: 'var(--text)',
                  transition: 'all 0.3s ease'
                }}
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
