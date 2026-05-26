'use client';

import { useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaDatabase, FaJava } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiExpress,
  SiCss3,
  SiBootstrap,
  SiJsonwebtokens,
  SiHtml5,
  SiVercel,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiEslint,
  SiGithubactions,
  SiDocker,
  SiOpenai,
  SiAnthropic,
  SiGooglecloud
} from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import TechMesh3D from './TechMesh3D';

export default function Skills() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const groups = [
    {
      key: 'languages',
      label: 'Core Languages',
      items: [
        { icon: <SiHtml5 />, name: 'HTML5', desc: 'Semantic Data Structuring' },
        { icon: <SiCss3 />, name: 'CSS3', desc: 'Responsive CSS Architecture' },
        { icon: <FaReact />, name: 'JavaScript', desc: 'ES6+ Logic & Async' },
        { icon: <FaJava />, name: 'Java', desc: 'JVM Object-Oriented Pipelines' },
        { icon: <SiPostgresql />, name: 'SQL', desc: 'Relational Schema Design' },
      ],
    },
    {
      key: 'frontend',
      label: 'Frontend Ecology',
      items: [
        { icon: <FaReact />, name: 'React', desc: 'Component State & Lifecycle' },
        { icon: <SiNextdotjs />, name: 'Next.js', desc: 'Server-Side Rendering & App Router' },
        { icon: <SiRedux />, name: 'Redux', desc: 'Global State Management' },
        { icon: <SiBootstrap />, name: 'Bootstrap / CSS', desc: 'Grid Frameworks & Modularity' },
      ],
    },
    {
      key: 'backend',
      label: 'Backend & APIs',
      items: [
        { icon: <FaNodeJs />, name: 'Node.js', desc: 'Event-Driven Runtime' },
        { icon: <SiExpress />, name: 'Express', desc: 'RESTful API Routing' },
        { icon: <SiJsonwebtokens />, name: 'JWT', desc: 'Secure Authentication' },
      ],
    },
    {
      key: 'database',
      label: 'Databases',
      items: [
        { icon: <SiPostgresql />, name: 'PostgreSQL', desc: 'Transactions & JSONB' },
        { icon: <FaDatabase />, name: 'pgAdmin', desc: 'Query Optimization' },
      ],
    },
    {
      key: 'tools',
      label: 'DevOps & Tooling',
      items: [
        { icon: <SiGit />, name: 'Git', desc: 'Version Control Pipelines' },
        { icon: <FaGithub />, name: 'GitHub', desc: 'Code Review & Collaboration' },
        { icon: <SiDocker />, name: 'Docker', desc: 'Containerization' },
        { icon: <SiVisualstudiocode />, name: 'VS Code', desc: 'Integrated Development' },
        { icon: <SiPostman />, name: 'Postman', desc: 'Endpoint Testing' },
        { icon: <SiVercel />, name: 'Vercel', desc: 'Edge Deployments' },
        { icon: <SiEslint />, name: 'ESLint', desc: 'Static Code Analysis' },
        { icon: <SiGithubactions />, name: 'CI/CD ', desc: 'Automated GitHub Workflows' },
      ],
    },
    {
      key: 'ai',
      label: 'AI Integrations & LLMs',
      items: [
        { icon: <SiOpenai />, name: 'ChatGPT', desc: 'GPT-4 / Conversational AI' },
        { icon: <BsRobot />, name: 'Antigravity AI', desc: 'Agentic Workflows' },
        { icon: <SiAnthropic />, name: 'Claude', desc: 'Claude 3 / Opus' },
        { icon: <SiGooglecloud />, name: 'AI Tooling', desc: 'Prompt Engineering & APIs' },
      ],
    },
  ];

  const [active, setActive] = useState(groups[0].key);
  const current = useMemo(() => groups.find((g) => g.key === active) || groups[0], [active]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    show: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="position-relative overflow-hidden" style={{ minHeight: "100vh", padding: "100px 0", backgroundColor: "var(--bg)", transition: "background-color 0.3s ease" }}>
      
      <TechMesh3D />

      <div className="container position-relative" style={{ zIndex: 1 }} ref={containerRef}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-5 pb-3"
        >
          <span className="d-inline-block py-2 px-4 mb-4 rounded-full glass-panel" style={{ color: "var(--primary)", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
            Technological Stack
          </span>
          <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--text)", letterSpacing: "-0.04em" }}>
            The <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="mx-auto" style={{ maxWidth: '700px', fontSize: "1.25rem", color: "var(--muted)", lineHeight: '1.7', fontWeight: 400 }}>
            A high-performance architecture built on battle-tested frameworks and cutting-edge paradigms for enterprise-ready production.
          </p>
        </motion.div>

        {/* Technical Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="d-flex flex-wrap justify-content-center gap-3 mb-5"
        >
          {groups.map((g) => {
            const isActive = active === g.key;
            return (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={g.key}
                className="position-relative border-0"
                onClick={() => setActive(g.key)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  backgroundColor: isActive ? "var(--text)" : "rgba(0, 0, 0, 0)",
                  color: isActive ? "var(--bg)" : "var(--muted)",
                  fontWeight: isActive ? 600 : 500,
                  transition: "all 0.2s ease",
                  outline: "none"
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="position-absolute"
                    style={{ inset: 0, borderRadius: "8px", zIndex: -1 }}
                  />
                )}
                <span className="position-relative z-1">{g.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* High-End Clean Grid */}
        <motion.div
          key={active}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="row g-4"
          style={{ minHeight: '350px', pointerEvents: 'auto' }}
        >
          {current.items.map((it, i) => (
            <motion.div key={`${it.name}-${i}`} variants={itemVariant} className="col-12 col-sm-6 col-lg-4">
              <motion.div
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px var(--primary-glow)",
                  borderColor: "var(--primary)"
                }}
                className="h-100 p-4 glass-panel"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  borderRadius: '16px',
                  transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Accent */}
                <div style={{ position: 'absolute', top: -20, right: -20, width: '60px', height: '60px', background: 'var(--primary-glow)', filter: 'blur(30px)', opacity: 0.5 }} />

                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    backgroundColor: "var(--bg)",
                    border: '1px solid var(--border)',
                    color: 'var(--primary)',
                    fontSize: '1.8rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  {it.icon}
                </div>
                <div style={{ paddingRight: '10px' }}>
                  <h5 className="fw-bold mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: '1.15rem', color: "var(--text)", letterSpacing: "-0.01em" }}>{it.name}</h5>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: "var(--muted)", lineHeight: '1.6', fontWeight: 400 }}>{it.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
