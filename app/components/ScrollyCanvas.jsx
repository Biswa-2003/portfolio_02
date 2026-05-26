// app/components/ScrollyCanvas.jsx
'use client';

import { useEffect, useRef, useMemo, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

const FRAME_COUNT = 90; // Approx frames based on the prompt description.
const BASE_PATH = '/sequence/';

export default function ScrollyCanvas({ onFrameChange }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images into memory
  useEffect(() => {
    let count = 0;
    const preloadedImages = [];
    
    // First, test if frame 00 exists to prevent 90 404 errors in the console
    const testImg = new Image();
    testImg.src = `${BASE_PATH}frame_00_delay-0.067s.webp`;
    
    testImg.onload = () => {
        // If the first frame loads successfully, load the rest
        preloadedImages.push(testImg);
        count++;
        setLoadedCount(count);
        
        for (let i = 1; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameIdx = i.toString().padStart(2, '0');
            img.src = `${BASE_PATH}frame_${frameIdx}_delay-0.067s.webp`;
            
            img.onload = () => {
                count++;
                setLoadedCount(count);
            };
            img.onerror = () => {
                console.warn(`Frame ${frameIdx} missing.`);
            };
            preloadedImages.push(img);
        }
        setImages(preloadedImages);
    };
    
    testImg.onerror = () => {
        // If the first frame fails, do not load the rest and leave loadedCount at 0
        console.warn('Sequence images not found in /public/sequence/. Showing fallback UI.');
    };
  }, []);


  // Map scroll progress (0..1) to frame index (0..FRAME_COUNT-1)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Update canvas on frame index change
  useEffect(() => {
    const render = () => {
      const idx = Math.round(frameIndex.get());
      const canvas = canvasRef.current;
      if (!canvas || images.length === 0 || !images[idx]) return;

      const ctx = canvas.getContext('2d');
      const img = images[idx];

      // Responsive cover logic
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      
      if (onFrameChange) onFrameChange(idx);
    };

    const unsubscribe = frameIndex.on("change", render);
    
    // Initial render
    if (images.length > 0) render();

    return () => unsubscribe();
  }, [images, frameIndex, onFrameChange]);

  // Handle window resize
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          
          // Trigger a re-render
          const idx = Math.round(frameIndex.get());
          if (images[idx]) {
            const ctx = canvas.getContext('2d');
            const img = images[idx];
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
          }
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize(); // Initial setup doesn't strictly need debounce but wait 150ms is fine
    return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', handleResize);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>
        <canvas 
          ref={canvasRef} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', backgroundColor: '#020617' }} 
        />
        
        {/* Loading / Fallback Overlay */}
        {loadedCount === 0 && (
           <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617' }}>
              {/* Cinematic Background Fallback */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, var(--primary-glow) 0%, transparent 70%)', opacity: 0.3 }} />
              
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '40px' }}>
                <div style={{ 
                  width: '280px', 
                  height: '280px', 
                  margin: '0 auto 30px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  border: '2px solid var(--border)',
                  boxShadow: '0 0 50px var(--primary-glow)',
                  backgroundColor: 'var(--card)'
                }}>
                  <img 
                    src="/Biswajit.PNG" 
                    alt="Biswajit Panda" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                
                <h3 style={{ color: 'var(--text)', marginBottom: '10px' }}>System Protocols Active</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '300px', margin: '0 auto' }}>
                  Waiting for sequence sync... <br/>
                  <small className="opacity-50">Upload frames to /public/sequence/ to enable cinematic scrollytelling.</small>
                </p>
                
                {/* Simulated Loading Bar */}
                <div style={{ width: '200px', height: '2px', backgroundColor: 'var(--border)', margin: '20px auto', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }} 
                      transition={{ duration: 2, repeat: Infinity }} 
                      style={{ width: '100%', height: '100%', backgroundColor: 'var(--primary)' }} 
                    />
                </div>
              </div>
           </div>
        )}

        {loadedCount < FRAME_COUNT && loadedCount > 0 && (
          <div style={{ position: 'absolute', bottom: 20, right: 20, color: 'white', opacity: 0.5, fontSize: '0.8rem', zIndex: 10 }}>
            Synchronizing sequence... {Math.round((loadedCount / FRAME_COUNT) * 100)}%
          </div>
        )}
      </div>
    </div>
  );
}
