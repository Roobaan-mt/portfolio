import React, { useEffect, useMemo, useRef, memo } from 'react';
import { useTheme } from './ThemeContext';
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  direction: number;
}
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    theme
  } = useTheme();
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const lastUpdateTime = useRef<number>(0);
  const targetFps = 60;
  const frameTime = 1000 / targetFps;
  // Memoize colors to avoid recalculation on each render
  const colors = useMemo(() => theme === 'dark' ? ['#5a3b94', '#3a4cb4', '#d4af37', '#38236b', '#1e2b6b'] : ['#9d8ec7', '#7a97d0', '#f0e1a1', '#5a3b94', '#d4af37'], [theme]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', {
      alpha: true,
      willReadFrequently: false // Optimization hint for GPU
    });
    if (!ctx) return;
    // Set canvas to full screen with proper device pixel ratio
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance
      const displayWidth = Math.floor(window.innerWidth);
      const displayHeight = Math.floor(window.innerHeight);
      // Set actual size in memory (scaled to account for extra pixel density)
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      // Normalize coordinate system to use CSS pixels
      ctx.scale(dpr, dpr);
      // Set CSS size
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      // Regenerate particles on resize for better distribution
      initParticles(displayWidth, displayHeight);
    };
    // Initialize particles based on screen size
    const initParticles = (width: number, height: number) => {
      // Reduce particle count on mobile
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? Math.min(Math.floor(width / 40), 20) // Further reduced for mobile
      : Math.min(Math.floor(width / 30), 40); // Reduced count for better performance
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (isMobile ? 2 : 3) + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.1,
          direction: Math.random() > 0.5 ? 1 : -1 // For oscillation effect
        });
      }
      particlesRef.current = particles;
    };
    // Draw particles with optimized rendering and time-based animation
    const draw = (timestamp: number) => {
      if (!canvas || !ctx) return;
      // Throttle frame rate for consistent performance
      const elapsed = timestamp - lastUpdateTime.current;
      if (elapsed < frameTime) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastUpdateTime.current = timestamp - elapsed % frameTime;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      // Clear with a fade effect instead of full clear for smoother visuals
      ctx.fillStyle = theme === 'dark' ? 'rgba(18, 18, 18, 0.2)' : 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, 0, width, height);
      const particles = particlesRef.current;
      const isMobile = window.innerWidth < 768;
      const connectionDistance = isMobile ? 80 : 120; // Reduced connection distance
      // Draw and update particles
      particles.forEach((particle, index) => {
        // Oscillate opacity for a breathing effect
        particle.opacity += 0.002 * particle.direction;
        if (particle.opacity >= 0.6) {
          particle.opacity = 0.6;
          particle.direction = -1;
        } else if (particle.opacity <= 0.1) {
          particle.opacity = 0.1;
          particle.direction = 1;
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        // Update position - slightly slower movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        // Bounce off edges with a small buffer
        if (particle.x > width - particle.size) {
          particle.x = width - particle.size;
          particle.speedX = -Math.abs(particle.speedX) * 0.8; // Dampen speed
        } else if (particle.x < particle.size) {
          particle.x = particle.size;
          particle.speedX = Math.abs(particle.speedX) * 0.8; // Dampen speed
        }
        if (particle.y > height - particle.size) {
          particle.y = height - particle.size;
          particle.speedY = -Math.abs(particle.speedY) * 0.8; // Dampen speed
        } else if (particle.y < particle.size) {
          particle.y = particle.size;
          particle.speedY = Math.abs(particle.speedY) * 0.8; // Dampen speed
        }
        // Only check connections for a subset of particles
        if (index % 3 === 0 && !isMobile) {
          // Skip 2/3 of particles on desktop
          for (let j = index + 3; j < particles.length; j += 3) {
            // Check every 3rd particle
            const dx = particles[j].x - particle.x;
            const dy = particles[j].y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionDistance) {
              const opacity = 0.05 * (1 - distance / connectionDistance);
              ctx.beginPath();
              ctx.strokeStyle = theme === 'dark' ? '#d4af37' : '#5a3b94';
              ctx.globalAlpha = opacity;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      });
      animationRef.current = requestAnimationFrame(draw);
    };
    // Initialize and start animation
    window.addEventListener('resize', resizeCanvas, {
      passive: true
    });
    resizeCanvas();
    animationRef.current = requestAnimationFrame(draw);
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, colors]);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" style={{
    opacity: theme === 'dark' ? 0.4 : 0.3,
    willChange: 'transform'
  }} />;
};
export default memo(ParticleBackground);