// app/components/AntiGravityBackground.jsx
'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AntiGravityBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true }); // optimize context
        let width, height;

        let particles = [];
        let animationFrameId;

        // Radius for mouse interaction
        const mouse = { x: null, y: null, radius: 250 };
        let isMobile = false;

        const initCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            isMobile = width <= 768;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 3 + 1; // Larger particles
                this.vy = -(Math.random() * 0.5 + 0.2); // Faster float
                this.vx = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                ctx.fillStyle = 'rgba(14, 165, 233, 0.8)'; // Bright Cyan/Blue matching primary
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                
                if (!isMobile) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = 'rgba(14, 165, 233, 1)';
                } else {
                    ctx.shadowBlur = 0; // disable shadow blur on mobile for perf
                }
            }

            update() {
                this.y += this.vy;
                this.x += this.vx;

                if (this.y < 0 - this.size) {
                    this.y = height + this.size;
                    this.x = Math.random() * width;
                }
                if (this.x < 0 - this.size) this.x = width + this.size;
                if (this.x > width + this.size) this.x = 0 - this.size;

                if (!isMobile && mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distanceSq = dx * dx + dy * dy;
                    let radiusSq = mouse.radius * mouse.radius;

                    if (distanceSq < radiusSq) {
                        let distance = Math.sqrt(distanceSq);
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        let force = (mouse.radius - distance) / mouse.radius;

                        this.x -= forceDirectionX * force * 3;
                        this.y -= forceDirectionY * force * 3;
                    }
                }
            }
        }

        const init = () => {
            particles = [];
            // Less particles on mobile
            const countFactor = isMobile ? 18000 : 10000;
            const maxParticles = isMobile ? 30 : 60;
            const numberOfParticles = Math.min(Math.floor((width * height) / countFactor), maxParticles);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Only draw connections on desktop to save mobile battery and perf
                if (!isMobile) {
                    for (let j = i; j < particles.length; j++) {
                        let dx = particles[i].x - particles[j].x;
                        let dy = particles[i].y - particles[j].y;
                        let distanceSq = dx * dx + dy * dy;

                        if (distanceSq < 30000) {
                            let distance = Math.sqrt(distanceSq);
                            let opacity = 1 - (distance / 173); 
                            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.4})`; // Brighter lines
                            ctx.lineWidth = 1.2;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            if (isMobile) return; // skip mouse handling on mobile
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseOut = () => {
            if (isMobile) return;
            mouse.x = null;
            mouse.y = null;
        };

        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                initCanvas();
                init();
            }, 250); // increased debounce
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseout', handleMouseOut, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });

        initCanvas();
        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
            {/* Extremely Premium Ambient Glow Orbs */}
            <motion.div
                animate={{
                    x: ['-20%', '30%', '-20%'],
                    y: ['-10%', '20%', '-10%'],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '70vw',
                    height: '70vh',
                    background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0.05) 30%, transparent 60%)',
                    zIndex: 0,
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                }}
            />
            
            <motion.div
                animate={{
                    x: ['20%', '-30%', '20%'],
                    y: ['20%', '-20%', '20%'],
                    scale: [1, 1.5, 1],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vh',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.04) 30%, transparent 60%)',
                    zIndex: 0,
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                }}
            />

            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    opacity: 0.85 // Much more visible
                }}
            />
        </div>
    );
}
