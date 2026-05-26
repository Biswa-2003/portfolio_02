// app/components/ScrollyOverlay.jsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollyOverlay() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mapping scroll progress to opacity and y-offset for each text section
  // Section 1: Intro (starts at 0%, fades out at 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  
  // Section 2: Narrative 1 (fades in at 25%, out at 45%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [100, -100]);
  
  // Section 3: Narrative 2 (fades in at 50%, out at 70%)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.70], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [100, -100]);

  // Section 4: Outro (fades in at 75%, stays till 100%)
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [100, 0]);

  return (
    <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '500vh', pointerEvents: 'none' }}>
      
      {/* Sticky Text Sections */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>
        
        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1, y: y1, position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', padding: '2rem' }}>
          <h1 className="display-1 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)', letterSpacing: '-0.06em' }}>
            Biswajit <span className="text-gradient">Panda.</span>
          </h1>
          <p className="fs-4 fw-medium text-muted" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Creative Engineer & Architect
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2, y: y2, position: 'absolute', inset: '0 10% 0 auto', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', color: 'white', textAlign: 'right', padding: '2rem' }}>
          <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)', letterSpacing: '-0.04em' }}>
            I build <span className="text-gradient">high-performance</span> digital experiences.
          </h2>
          <p className="lead text-muted">Specializing in enterprise-scale React architectures and real-time visualization.</p>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3, y: y3, position: 'absolute', inset: '0 auto 0 10%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', color: 'white', textAlign: 'left', padding: '2rem' }}>
          <h2 className="display-4 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)', letterSpacing: '-0.04em' }}>
             Bridging <span className="text-gradient">design</span> and <span className="text-gradient">engineering</span>.
          </h2>
          <p className="lead text-muted">A obsession for surgical precision in code and cinematic aesthetics in UI.</p>
        </motion.div>

        {/* Section 4 */}
        <motion.div style={{ opacity: opacity4, y: y4, position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center', padding: '2rem' }}>
          <h2 className="display-3 fw-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)', letterSpacing: '-0.04em' }}>
            System <span className="text-gradient">Protocols</span> Initiated.
          </h2>
          <div className="d-flex align-items-center gap-3">
             <div className="glass-panel px-4 py-2" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
               Scroll to explore projects
             </div>
             <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               style={{ fontSize: '1.5rem', opacity: 0.5 }}
             >
                ↓
             </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
