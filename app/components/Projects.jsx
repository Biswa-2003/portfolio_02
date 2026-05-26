'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Animation variants ─── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 72,
    rotateX: 32,
    scale: 0.9,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 52,
      damping: 13,
      opacity: { duration: 0.45, ease: 'easeOut' },
      filter: { duration: 0.45, ease: 'easeOut' },
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-80px' });

  const projects = [
    {
      title: 'Real-Time Chat Ecosystem',
      desc: 'Engineered a high-performance, real-time messaging platform with web sockets, presence indicators, message persistence, and rich media support.',
      stack: 'Next.js · Socket.io · Node.js · MongoDB',
      link: 'https://github.com/Biswa-2003',
      image: '/real_time_chat_ecosystem.png',
      alt: 'Chat App Interface',
      metrics: { 'Latency': '<20ms', 'Connections': '10k+ WebSockets' },
      accent: 'var(--primary)',
    },
    {
      title: 'Contact Management Ecosystem',
      desc: 'Architected a robust Contact Management system featuring secure authentication, paginated search, and multi-file upload orchestration.',
      stack: 'Next.js · Node.js · Express · PostgreSQL',
      link: 'https://github.com/Biswa-2003/Contact_manegment',
      image: '/contact_management.png',
      alt: 'Contact Management UI',
      metrics: { 'Latency': '<50ms', 'Auth': 'JWT / OTP' },
      accent: '#10b981',
    },
    {
      title: 'Matrimony Platform',
      desc: 'Engineered a scalable matchmaking application with JWT authorization pipelines, dynamic image cropping, and unstructured profiles mapped to JSONB.',
      stack: 'Next.js · App Router · Express · PostgreSQL',
      link: '#',
      image: '/matrimony_platform.png',
      alt: 'Matrimony preview',
      metrics: { 'Uptime': '99.99%', 'Database': 'JSONB Hybrid' },
      accent: '#f59e0b',
    },
    {
      title: 'Intelligent AI Chatbot Assistant',
      desc: 'Engineered a highly responsive AI-driven chatbot powered by large language models, featuring contextual memory, specialized tool execution, and secure user sessions.',
      stack: 'Next.js · Python · LangChain · OpenAI',
      link: '#',
      image: '/ai_chatbot.png',
      alt: 'AI Chatbot Architecture',
      metrics: { 'Inference': '<800ms', 'Context': '128k Tokens' },
      accent: 'var(--secondary)',
    },
    {
      title: 'SaaS Professional Portfolio',
      desc: 'Developed a fully responsive, enterprise-tier developer portfolio utilizing strict component modularity and CSS variables for theming.',
      stack: 'Next.js · React · Framer Motion',
      link: '#',
      image: '/saas_portfolio.png',
      alt: 'Portfolio website preview',
      metrics: { 'Performance': '100/100', 'Motion': '60FPS' },
      accent: '#fb7185',
    },
    {
      title: 'AI Voice Chat Bot',
      desc: 'Production-grade bilingual AI voice agent enabling real-time natural conversations in English & Hindi. Features automatic language detection, mid-conversation switching, sentiment analysis, and three enterprise business scenarios with scope enforcement.',
      stack: 'Python · LiveKit Agents · OpenAI GPT-4o · Deepgram · ElevenLabs',
      link: 'https://github.com/Biswa-2003/Ai_voice_chat_bot',
      image: '/ai_chatbot.png',
      alt: 'AI Voice Chat Bot',
      metrics: { 'Languages': 'EN + HI', 'LLM': 'GPT-4o' },
      accent: '#a78bfa',
    },
  ];

  return (
    <section
      id="projects"
      className="position-relative overflow-hidden"
      style={{ padding: '100px 0', backgroundColor: 'var(--bg)', transition: 'background-color 0.3s ease' }}
    >
      {/* ── Ambient background orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-10%', left: '-8%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        style={{
          position: 'absolute', bottom: '-15%', right: '-10%',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.2) 0%, transparent 65%)',
          filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
        opacity: 0.25,
      }} />

      <div className="container position-relative" style={{ zIndex: 1 }} ref={containerRef}>

        {/* ── Section header ── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-5 pb-2 text-center text-lg-start d-flex flex-column flex-lg-row justify-content-between align-items-lg-end"
        >
          <div style={{ maxWidth: '750px' }}>
            <span
              className="d-inline-flex align-items-center gap-2 py-2 px-4 mb-4 glass-panel"
              style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '100px' }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary)', animation: 'pulse-subtle 2s infinite' }} />
              Production Case Studies
            </span>
            <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)', letterSpacing: '-0.04em' }}>
              Engineered <span className="text-gradient">Architectures</span>
            </h2>
            <p className="fs-5 mb-0" style={{ lineHeight: '1.7', color: 'var(--muted)', maxWidth: '600px', fontWeight: 400 }}>
              Deep-tech deployments focusing on backend scalability, high-availability orchestration, and polished user experiences.
            </p>
          </div>

          <motion.a
            href="https://github.com/Biswa-2003"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02, boxShadow: '0 20px 40px var(--primary-glow)' }}
            whileTap={{ scale: 0.97 }}
            className="d-none d-lg-flex align-items-center gap-3 px-5 py-3 text-decoration-none fw-bold mt-4 mt-lg-0"
            style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--text)', color: 'var(--bg)', borderRadius: '12px', flexShrink: 0, transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <svg fill="currentColor" viewBox="0 0 1024 1024" height="20" width="20"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/></svg>
            View All Repos
          </motion.a>
        </motion.div>

        {/* ── Cards grid — stagger + 3D flip reveal ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="row g-5"
          style={{ perspective: '1400px', perspectiveOrigin: '50% 0%' }}
        >
          {projects.map((p, i) => {
            const tags = p.stack.split('·').map(t => t.trim());
            const num = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="col-12 col-xl-6"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.article
                  className="h-100 d-flex flex-column glass-panel"
                  whileHover={{
                    y: -16,
                    scale: 1.018,
                    rotateX: -2.5,
                    boxShadow: `0 32px 64px -16px rgba(0,0,0,0.55), 0 0 0 1.5px ${p.accent}, 0 0 50px ${p.accent}30`,
                    transition: { type: 'spring', stiffness: 220, damping: 22 }
                  }}
                  style={{
                    overflow: 'hidden',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                  }}
                >
                  {/* macOS toolbar */}
                  <div style={{
                    width: '100%', backgroundColor: 'rgba(255,255,255,0.03)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center',
                    padding: '12px 20px', gap: '8px'
                  }}>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                    <div className="ms-3 glass-panel px-3 py-1" style={{ fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.8px', borderRadius: '100px', flex: 1, maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p.link.includes('github') ? `github.com/Biswa-2003` : 'production.system.v1'}
                    </div>
                    {/* Project number */}
                    <span style={{ marginLeft: 'auto', fontSize: '0.65rem', fontWeight: 800, color: p.accent, fontFamily: 'var(--font-heading)', letterSpacing: '1px', opacity: 0.8 }}>
                      {num}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="position-relative" style={{ width: '100%', aspectRatio: '16/10', backgroundColor: '#000', overflow: 'hidden' }}>
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                      style={{ width: '100%', height: '100%', position: 'relative' }}
                    >
                      {p.image && (
                        <Image
                          src={p.image}
                          alt={p.alt}
                          fill
                          priority={i < 2}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: 'cover', opacity: 0.88 }}
                        />
                      )}
                      {/* Colour-tinted gradient overlay */}
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${p.accent}22 0%, transparent 50%)` }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 45%)' }} />
                    </motion.div>

                    {/* Accent stripe at top of image */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
                  </div>

                  {/* Content */}
                  <div className="p-4 p-lg-5 d-flex flex-column flex-grow-1 position-relative">

                    {/* Title row */}
                    <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
                      <h3 className="fw-bold mb-0" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{p.title}</h3>
                      <span
                        className="d-flex align-items-center gap-2 flex-shrink-0"
                        style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: p.accent, backgroundColor: `${p.accent}18`, padding: '5px 12px', borderRadius: '100px', letterSpacing: '1px', border: `1px solid ${p.accent}30` }}
                      >
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: p.accent, animation: 'ping 2s infinite' }} />
                        Live
                      </span>
                    </div>

                    <p className="mb-4 flex-grow-1" style={{ fontSize: '0.98rem', lineHeight: '1.75', color: 'var(--muted)', fontWeight: 400 }}>
                      {p.desc}
                    </p>

                    {/* Metrics */}
                    <div className="row g-0 mb-4 overflow-hidden" style={{ borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--glass)' }}>
                      {Object.entries(p.metrics).map(([key, value], idx) => (
                        <div
                          key={idx}
                          className={`col p-3 ${idx !== Object.entries(p.metrics).length - 1 ? 'border-end' : ''}`}
                          style={{ borderColor: 'var(--border)' }}
                        >
                          <span style={{ display: 'block', fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>{key}</span>
                          <span className="fw-bold" style={{ fontSize: '1.05rem', color: p.accent }}>{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {tags.map((tag, ti) => (
                        <span
                          key={ti}
                          style={{ fontSize: '0.72rem', padding: '5px 13px', borderRadius: '100px', color: 'var(--text)', fontWeight: 600, letterSpacing: '0.4px', backgroundColor: 'var(--glass)', border: '1px solid var(--border)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA button */}
                    <motion.a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ backgroundColor: p.accent, color: '#fff', borderColor: p.accent, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-decoration-none text-center d-flex justify-content-center align-items-center gap-3 mt-auto fw-bold"
                      style={{
                        padding: '15px',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        borderRadius: '12px',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                      }}
                    >
                      View Project
                      <motion.svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </motion.svg>
                    </motion.a>
                  </div>
                </motion.article>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes ping { 75%, 100% { transform: scale(2.2); opacity: 0; } }` }} />
    </section>
  );
}
