'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const experiences = [
    {
      role: 'Junior Software Developer',
      company: 'Triptales Commercials Private Limited',
      location: 'Bhubaneswar, Odisha, India',
      date: 'Dec 2024 – Present',
      skills: [
        'Next.js', 'Express.js', 'PostgreSQL', 'RESTful APIs', 'CI/CD'
      ],
      points: [
        'Architecting and scaling full-stack core application modules (Matrimony, Property, Jobs) to manage increasing user volume.',
        'Hardening authentication infrastructure by implementing secure, HTTP-only JWT handling and OTP verification workflows.',
        'Designing high-performance PostgreSQL database schemas, utilizing JSONB columns and optimizing B-tree index strategies.',
        'Developing robust, RESTful Node.js / Express.js API layers to serve optimized data to Next.js and React client applications.',
        'Integrating Razorpay payment gateways for encrypted, end-to-end secure transactions.',
      ]
    },
    {
      role: 'Technical Engineer (Trainee)',
      company: 'Tech Mahindra',
      location: 'Bhubaneswar, Odisha, India',
      date: 'Jun 2024 – Nov 2024',
      skills: [
        'React.js', 'JavaScript', 'Frontend Dev', 'Tailwind CSS'
      ],
      points: [
        'Developed and optimized React.js frontend interfaces, improving component rendering performance.',
        'Collaborated with senior engineers to implement interactive UI elements and responsive layouts.',
        'Acquired foundational knowledge in corporate agile environments and version control best practices.',
      ]
    },
    {
      role: 'B.Tech in Computer Science and Engineering',
      company: 'GIET University',
      location: 'Graduation',
      date: '2020 – 2024',
      skills: [
        'Data Structures', 'OOP', 'Database Management', 'Software Eng.'
      ],
      points: [
        'Completed comprehensive coursework in algorithms, operating systems, and computer networks.',
        'Built full-stack academic projects demonstrating practical application of theoretical programming concepts.',
        'Developed strong analytical and problem-solving fundamentals critical for enterprise-level software design.',
      ]
    }
  ];

  return (
    <section id="experience" className="position-relative" style={{ padding: "100px 0", backgroundColor: "var(--bg)", transition: "background-color 0.3s ease", overflow: 'hidden' }}>

      {/* Ultra-Premium Aurora / Fluid Mesh Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <motion.div
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '-20%',
              left: '-10%',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.15), transparent 60%)',
              transformOrigin: 'center center',
            }}
        />
        <motion.div
            animate={{
              rotate: [0, -90, 0],
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '-30%',
              right: '-20%',
              width: '90%',
              height: '90%',
              background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12), transparent 60%)',
              transformOrigin: 'center center',
            }}
        />
        <motion.div
            animate={{
              y: ['-10%', '10%', '-10%'],
              x: ['10%', '-10%', '10%'],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '30%',
              left: '20%',
              width: '60%',
              height: '50%',
              background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent 50%)',
              mixBlendMode: 'screen'
            }}
        />
      </div>

      {/* Floating 3D-like Glass Elements */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div
          animate={{ y: [0, -40, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute', top: '15%', left: '10%',
            width: '120px', height: '120px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0))',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            transform: 'perspective(1000px) rotateX(30deg) rotateY(-20deg)'
          }}
        />
        <motion.div
          animate={{ y: [0, 50, 0], rotate: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            position: 'absolute', bottom: '20%', right: '5%',
            width: '180px', height: '180px',
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(255,255,255,0))',
            border: '1px solid rgba(14, 165, 233, 0.1)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            transform: 'perspective(1000px) rotateX(-20deg) rotateY(20deg)'
          }}
        />
        <motion.div
          animate={{ y: [0, -60, 0], x: [0, 30, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: 'absolute', top: '50%', left: '80%',
            width: '80px', height: '80px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(255,255,255,0))',
            border: '1px solid rgba(16, 185, 129, 0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(5px)',
            transform: 'perspective(1000px) rotateX(40deg) rotateY(15deg)'
          }}
        />
      </div>

      {/* Massive Scroll-Linked Watermark */}
      <motion.div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          x: '-50%',
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
          fontSize: 'clamp(10rem, 25vw, 25rem)',
          fontWeight: 900,
          color: 'var(--text)',
          opacity: 0.03, // Extremely faint so it doesn't distract
          lineHeight: 1,
          pointerEvents: 'none',
          zIndex: 0,
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-0.05em',
        }}
      >
        JOURNEY
      </motion.div>

      <div className="container position-relative z-1" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 text-center"
        >
          <span className="d-inline-block py-1 px-3 mb-3 rounded-pill" style={{ backgroundColor: "var(--card)", color: "var(--primary)", border: "1px solid var(--border)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
            History
          </span>
          <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--text)", letterSpacing: '-0.03em' }}>
            Career Trajectory
          </h2>
          <p className="fs-5 mx-auto" style={{ maxWidth: '650px', lineHeight: '1.6', color: "var(--muted)" }}>
            A formal history of my technical tenure, outlining the environments where I've executed infrastructure migrations and feature development.
          </p>
        </motion.div>

        <div className="position-relative w-100 mx-auto" style={{ maxWidth: "900px" }}>
          {/* Animated Center Line */}
          <div
            className="d-none d-md-block position-absolute h-100"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              backgroundColor: "var(--border)",
              zIndex: 0
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "var(--primary)",
                scaleY: scrollYProgress,
                transformOrigin: "top"
              }}
            />
          </div>

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                className={`d-flex flex-column flex-md-row justify-content-center align-items-center w-100 mb-5 position-relative`}
              >
                {/* Node Tracker on Center Line */}
                <div
                  className="d-none d-md-flex align-items-center justify-content-center position-absolute"
                  style={{
                    left: "50%",
                    top: "40px",
                    transform: "translate(-50%, -50%)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg)",
                    border: "4px solid var(--primary)",
                    boxShadow: "0 0 15px color-mix(in srgb, var(--primary) 40%, transparent)",
                    zIndex: 2,
                    transition: "background-color 0.3s ease, border-color 0.3s ease"
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary)" }}
                  />
                </div>

                {/* Spacer for offset layout */}
                <div className={`d-none d-md-block col-md-5 ${isLeft ? 'order-2' : 'order-1'}`} />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  className={`col-12 col-md-5 ${isLeft ? 'order-1 text-md-end' : 'order-2 text-md-start'}`}
                >
                  <div
                    className="p-4 p-lg-5 rounded-4 position-relative"
                    style={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <span
                      className="d-inline-flex mb-3 px-3 py-1 rounded-pill"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                        color: "var(--primary)",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)"
                      }}
                    >
                      {exp.date}
                    </span>

                    <h4 className="fw-bold mb-2" style={{ fontSize: '1.3rem', color: "var(--text)" }}>{exp.role}</h4>

                    <div className={`d-flex flex-wrap align-items-center gap-2 mb-4 color-muted ${isLeft ? 'justify-content-md-end' : 'justify-content-md-start'}`}>
                      <span className="fw-semibold" style={{ color: "var(--text)" }}>{exp.company}</span>
                      <span style={{ color: 'var(--muted)' }}>•</span>
                      <span style={{ fontSize: "0.9rem", color: 'var(--muted)' }}>{exp.location}</span>
                    </div>

                    <ul className="list-unstyled mb-4 d-flex flex-column gap-3 text-start">
                      {exp.points.map((point, i) => (
                        <li key={i} className="d-flex gap-3 align-items-start" style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                          <svg style={{ flexShrink: 0, marginTop: "4px", color: "var(--primary)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`d-flex flex-wrap gap-2 ${isLeft ? 'justify-content-md-end' : 'justify-content-md-start'}`}>
                      {exp.skills.map(skill => (
                        <span
                          key={skill}
                          style={{
                            fontSize: '0.75rem',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            backgroundColor: 'color-mix(in srgb, var(--border) 40%, transparent)',
                            color: 'var(--text)',
                            border: '1px solid var(--border)',
                            fontWeight: 600,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
