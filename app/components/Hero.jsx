'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AntiGravityBackground from "./AntiGravityBackground";
import MagneticButton from "./MagneticButton";

const ROLES = [
  "Full Stack Developer (AI)",
  "Next.js Engineer",
  "Backend Architect",
  "React Developer",
];

const STATS = [
  { value: "5+", label: "Projects Built" },
  { value: "1+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(id);
  }, []);

  const titleReveal = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
  };

  const buttonReveal = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 } }
  };

  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", overflow: "hidden", backgroundColor: "var(--bg)", transition: "background-color 0.3s ease" }}
      aria-label="Home"
    >
      <AntiGravityBackground />

      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(circle at center, black 10%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 70%)",
        opacity: 0.5, zIndex: 0, pointerEvents: "none"
      }} />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-between align-items-center">

          {/* ── Left: Text ── */}
          <motion.div
            ref={containerRef}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0"
          >
            {/* Available badge */}
            <motion.div variants={textReveal} className="d-flex justify-content-center justify-content-lg-start mb-4">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 glass-panel" style={{ color: "var(--text)", fontSize: "0.8rem", letterSpacing: "1px", fontWeight: 700, textTransform: "uppercase", borderRadius: "100px" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", opacity: 0.5, animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                </div>
                Available for Work
              </div>
            </motion.div>

            {/* Animated role text */}
            <motion.div variants={textReveal} className="d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap gap-2 mb-3">
              <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: "1rem" }}>Hi, I&apos;m Biswajit —</span>
              <div style={{ position: "relative", overflow: "hidden", height: "1.55em", display: "inline-block" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ y: 22, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -22, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "block", color: "var(--primary)", fontWeight: 700, fontSize: "1rem", whiteSpace: "nowrap" }}
                  >
                    {ROLES[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.h1
              variants={titleReveal}
              className="display-2 fw-bold mb-4 mx-auto mx-lg-0"
              style={{ fontFamily: "var(--font-heading)", lineHeight: "1.1", letterSpacing: "-0.04em", color: "var(--text)", maxWidth: "700px" }}
            >
              Architecting <span className="text-gradient">high-performance</span> digital systems.
            </motion.h1>

            <motion.p
              variants={textReveal}
              className="mb-5 mx-auto mx-lg-0"
              style={{ color: "var(--muted)", fontSize: "1.15rem", lineHeight: "1.8", maxWidth: "580px", fontWeight: 400 }}
            >
              Specialized in building scalable, enterprise-grade applications with Next.js, Node.js &amp; PostgreSQL — from data modeling to deployed product.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={buttonReveal} className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <MagneticButton
                href="#projects"
                className="px-5 py-3 text-decoration-none fw-bold text-center d-flex align-items-center justify-content-center gap-2"
                style={{ fontFamily: "var(--font-heading)", backgroundColor: "var(--text)", color: "var(--bg)", border: "none", letterSpacing: "0.5px", fontSize: "1rem", transition: "box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)", borderRadius: "12px" }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 20px 40px var(--primary-glow)"; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </MagneticButton>

              <MagneticButton
                href="https://drive.google.com/file/d/1R1mf3mtI_2Hz35CGY14qr0fcPH5-Q8Wz/view?usp=drive_link"
                className="px-5 py-3 text-decoration-none fw-bold d-flex align-items-center justify-content-center gap-2 glass-panel"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text)", letterSpacing: "0.5px", fontSize: "1rem", transition: "background-color 0.4s", borderRadius: "12px" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "var(--border)"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "var(--glass)"; }}
              >
                Download Resume
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3"/><path d="M8 11l4 4 4-4"/><path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2"/></svg>
              </MagneticButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mt-5"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.9 + i * 0.1 }}
                  className="glass-panel"
                  style={{ padding: "14px 22px", borderRadius: "14px", textAlign: "center", minWidth: "90px" }}
                >
                  <div style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--primary)", fontFamily: "var(--font-heading)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.5px", fontWeight: 600, marginTop: "5px", textTransform: "uppercase" }}>{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", bounce: 0.35, duration: 1.4, delay: 0.35 }}
            className="col-lg-5 d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0"
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "420px" }}>

              {/* Glowing gradient border ring */}
              <div style={{
                position: "absolute", inset: "-3px", borderRadius: "30px",
                background: "linear-gradient(135deg, var(--primary), var(--secondary), transparent 60%)",
                opacity: 0.5, filter: "blur(2px)", zIndex: 0,
                animation: "pulse-subtle 4s ease-in-out infinite alternate"
              }} />

              {/* Profile image card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 90, damping: 14 }}
                style={{
                  position: "relative", width: "100%", aspectRatio: "3/4",
                  borderRadius: "28px", overflow: "hidden", zIndex: 2,
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.65), 0 0 60px var(--primary-glow)",
                  backgroundColor: "var(--card)"
                }}
              >
                <Image
                  src="/Biswajit.PNG"
                  alt="Biswajit Panda — Full Stack Developer (AI)"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                  unoptimized
                />

                {/* Scan-line overlay */}
                <motion.div
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute", left: 0, width: "100%", height: "120px",
                    background: "linear-gradient(to bottom, transparent, var(--primary-glow), transparent)",
                    opacity: 0.35, zIndex: 2, pointerEvents: "none"
                  }}
                />

                {/* Bottom gradient + name badge */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top, rgba(2,6,23,0.85), transparent)", zIndex: 3 }} />
                <div style={{ position: "absolute", bottom: "18px", left: "18px", right: "18px", zIndex: 4 }}>
                  <div className="glass-panel" style={{ padding: "10px 16px", borderRadius: "12px" }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", fontFamily: "var(--font-heading)" }}>Biswajit Panda</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--primary)", letterSpacing: "1px", fontWeight: 600, textTransform: "uppercase" }}>Full Stack Developer (AI)</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="glass-panel"
                style={{
                  position: "absolute", top: "-18px", right: "-22px", zIndex: 5,
                  padding: "10px 16px", borderRadius: "14px",
                  display: "flex", alignItems: "center", gap: "8px",
                  border: "1px solid rgba(56,189,248,0.28)",
                  boxShadow: "0 8px 24px rgba(56,189,248,0.15)"
                }}
              >
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text)", whiteSpace: "nowrap" }}>Open to Work</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass-panel"
                style={{
                  position: "absolute", bottom: "90px", left: "-26px", zIndex: 5,
                  padding: "10px 16px", borderRadius: "14px",
                  display: "flex", alignItems: "center", gap: "8px",
                  border: "1px solid rgba(129,140,248,0.28)",
                  boxShadow: "0 8px 24px rgba(129,140,248,0.15)"
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text)", whiteSpace: "nowrap" }}>Next.js 14</span>
              </motion.div>

              {/* Back-glow */}
              <div style={{
                position: "absolute", inset: "-20px", borderRadius: "36px",
                background: "radial-gradient(circle, var(--primary-glow), transparent 70%)",
                opacity: 0.25, zIndex: 0, filter: "blur(24px)",
                animation: "pulse-subtle 4s infinite alternate"
              }} />
            </div>
          </motion.div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes ping { 75%, 100% { transform: scale(2.5); opacity: 0; } }` }} />
    </section>
  );
}
