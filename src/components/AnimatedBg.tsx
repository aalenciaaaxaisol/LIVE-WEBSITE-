import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

const LiquidGlassBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Performance-optimized particle system
  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const colors = [
      'rgba(0, 212, 255, 0.6)',    // Neon blue
      'rgba(138, 43, 226, 0.4)',   // Electric purple
      'rgba(0, 255, 255, 0.3)',    // Cyan
      'rgba(255, 0, 255, 0.3)',    // Magenta
    ];

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    };
  }, []);

  // Initialize particles
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle(canvas));
    }
  }, [createParticle]);

  // Update particle positions and properties
  const updateParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.life++;

      // Mouse interaction - subtle attraction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100 * 0.01;
        particle.speedX += dx * force * 0.001;
        particle.speedY += dy * force * 0.001;
      }

      // Boundary wrapping
      if (particle.x > canvas.width) particle.x = 0;
      else if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      else if (particle.y < 0) particle.y = canvas.height;

      // Lifecycle management
      if (particle.life > particle.maxLife) {
        particlesRef.current[index] = createParticle(canvas);
      }

      // Opacity pulsing
      particle.opacity = 0.2 + Math.sin(particle.life * 0.02) * 0.3;
    });
  }, [createParticle]);

  // Draw particles with glow effects
  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    particlesRef.current.forEach(particle => {
      ctx.save();
      
      // Create glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = particle.size * 3;
      
      // Draw particle
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });
  }, []);

  // Draw connections between nearby particles
  const drawConnections = useCallback((ctx: CanvasRenderingContext2D) => {
    const maxDistance = 120;
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x;
        const dy = particlesRef.current[i].y - particlesRef.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.2;
          
          ctx.save();
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }, []);

  // Main animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    updateParticles(canvas);
    drawConnections(ctx);
    drawParticles(ctx);

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawConnections, drawParticles]);

  // Handle canvas resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    initParticles(canvas);
  }, [initParticles]);

  // Handle mouse movement
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize
    handleResize();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleResize, animate, handleMouseMove]);

  return (
    <>
      {/* Cosmic gradient background */}
      <div 
        className="fixed inset-0 z-[-2]"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)
          `
        }}
      />
      
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.8,
        }}
      />
      
      {/* Floating orbs for additional depth */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, transparent 70%)',
            top: '60%',
            right: '15%',
            animation: 'float 6s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-10 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)',
            bottom: '20%',
            left: '30%',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
};

export default LiquidGlassBackground;