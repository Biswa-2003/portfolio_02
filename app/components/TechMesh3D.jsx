// app/components/TechMesh3D.jsx
'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function TechMesh3D() {
  // Generate 40 random glowing dots instead of 5000 WebGL vertices
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 10 + 10, // 10s to 20s
      delay: Math.random() * -20 // random start time
    }));
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      
      {/* Soft Ambient Glow */}
      <div 
        style={{
           position: 'absolute',
           top: '20%',
           left: '50%',
           transform: 'translateX(-50%)',
           width: '600px',
           height: '600px',
           background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)',
           opacity: 0.2,
           filter: 'blur(60px)',
           willChange: 'transform, filter',
           transform: 'translateZ(0) translateX(-50%)'
        }}
      />

      {/* CSS Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [`${p.y}vh`, `${p.y - 15}vh`, `${p.y}vh`], // Slowly drift up and down
            opacity: [0.1, 0.4, 0.1], // Pulse brightness
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: 'var(--primary)',
            borderRadius: '50%',
            boxShadow: '0 0 10px var(--primary)',
          }}
        />
      ))}
      
    </div>
  );
}
