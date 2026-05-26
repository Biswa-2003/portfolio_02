'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState({ type: 'idle', msg: '' });
  const [pending, setPending] = useState(false);
  const startedAt = useRef(Date.now());

  useEffect(() => { startedAt.current = Date.now(); }, []);

  async function onSubmit(e) {
    e.preventDefault();
    if (pending) return;

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', msg: 'System check: All fields are required.' });
      return;
    }

    setPending(true);
    setStatus({ type: 'loading', msg: 'Transmitting payload...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) throw new Error(data.error || 'Transmission failed.');

      formEl.reset();
      startedAt.current = Date.now();
      setStatus({ type: 'success', msg: 'Delivery confirmed. Awaiting response.' });
    } catch (err) {
      setStatus({ type: 'error', msg: err.message || 'Error executing request.' });
    } finally {
      setPending(false);
    }
  }

  const inputVariants = {
    focus: {
      borderColor: "var(--primary)",
      boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.15)",
      transition: { duration: 0.2 }
    },
    blur: {
      borderColor: "var(--border)",
      boxShadow: "0 0 0 0px rgba(59, 130, 246, 0)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="position-relative z-1">
      <div className="row g-4">
        <div className="col-sm-6">
          <label htmlFor="c_name" className="form-label fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800 }}>Registry Identifier</label>
          <motion.input
            id="c_name"
            name="name"
            placeholder="System Name / Alias"
            className="form-control"
            initial="blur"
            whileFocus="focus"
            variants={inputVariants}
            style={{
              backgroundColor: 'var(--glass)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              padding: '18px 24px',
              borderRadius: '16px',
              fontSize: '1rem',
              backdropFilter: 'blur(16px)',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            required
            disabled={pending}
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="c_email" className="form-label fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800 }}>Communication Protocol</label>
          <motion.input
            id="c_email"
            name="email"
            type="email"
            placeholder="protocol://address"
            className="form-control"
            initial="blur"
            whileFocus="focus"
            variants={inputVariants}
            style={{
              backgroundColor: 'var(--glass)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              padding: '18px 24px',
              borderRadius: '16px',
              fontSize: '1rem',
              backdropFilter: 'blur(16px)',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            required
            disabled={pending}
          />
        </div>
        <div className="col-12">
          <label htmlFor="c_msg" className="form-label fw-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800 }}>Encrypted Payload</label>
          <motion.textarea
            id="c_msg"
            name="message"
            rows={5}
            placeholder="Initialize data transmission..."
            className="form-control"
            initial="blur"
            whileFocus="focus"
            variants={inputVariants}
            style={{
              backgroundColor: 'var(--glass)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              padding: '18px 24px',
              borderRadius: '16px',
              fontSize: '1rem',
              resize: 'none',
              backdropFilter: 'blur(16px)',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            required
            disabled={pending}
          />
        </div>

        <div className="col-12 d-flex flex-column flex-md-row align-items-center justify-content-between mt-5 gap-4">
          <div style={{ flex: 1, width: '100%' }}>
            {status.type !== 'idle' ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-panel px-4 py-3 d-flex align-items-center gap-3"
                style={{
                  borderRadius: '12px',
                  borderLeft: `4px solid ${status.type === 'error' ? 'var(--accent)' : status.type === 'success' ? '#10b981' : 'var(--primary)'}`
                }}
              >
                {status.type === 'loading' && <span className="spinner-border spinner-border-sm" style={{ color: 'var(--primary)' }}></span>}
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', letterSpacing: '0.5px' }}>
                  {status.msg}
                </span>
              </motion.div>
            ) : (
              <div className="d-flex align-items-center gap-2 text-muted px-2" style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.5px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                End-to-End Encryption Active
              </div>
            )}
          </div>
          <motion.button
            whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px var(--primary-glow)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn border-0 w-100 w-md-auto"
            disabled={pending}
            style={{
              fontFamily: "var(--font-heading)",
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 800,
              padding: '18px 48px',
              borderRadius: '16px',
              background: 'var(--text)',
              color: 'var(--bg)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {pending ? 'Transmitting...' : 'Initialize Portal'}
            {!pending && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            )}
          </motion.button>
        </div>
      </div>
    </form>
  );
}
