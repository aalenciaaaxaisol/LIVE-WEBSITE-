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
  type: 'particle' | 'glow' | 'chrome';
}

const FuturisticAIBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // AI-inspired particle system with luxury aesthetics
  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const colors = [
      'rgba(139, 92, 246, 0.6)',   // Neon purple
      'rgba(6, 182, 212, 0.5)',    // Neon blue
      'rgba(16, 185, 129, 0.4)',   // Neon green
      'rgba(0, 245, 255, 0.3)',    // Neon cyan
      'rgba(229, 231, 235, 0.2)',  // Chrome silver
    ];

    const types: ('particle' | 'glow' | 'chrome')[] = ['particle', 'glow', 'chrome'];
    const type = types[Math.floor(Math.random() * types.length)];

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: type === 'glow' ? Math.random() * 3 + 2 : Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.2,
      life: 0,
      maxLife: Math.random() * 500 + 400,
      type,
    };
  }, []);

  // Initialize particles with AI-inspired density
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000));
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle(canvas));
    }
  }, [createParticle]);

  // Update particle positions with AI-like intelligence
  const updateParticles = useCallback((canvas: HTMLCanvasElement) => {
    particlesRef.current.forEach((particle, index) => {
      // Intelligent movement patterns
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.life++;

      // AI-inspired mouse interaction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150 * 0.008;
        particle.speedX += dx * force * 0.0008;
        particle.speedY += dy * force * 0.0008;
      }

      // Boundary wrapping with smooth transitions
      if (particle.x > canvas.width + 50) particle.x = -50;
      else if (particle.x < -50) particle.x = canvas.width + 50;
      if (particle.y > canvas.height + 50) particle.y = -50;
      else if (particle.y < -50) particle.y = canvas.height + 50;

      // Lifecycle management
      if (particle.life > particle.maxLife) {
        particlesRef.current[index] = createParticle(canvas);
      }

      // Dynamic opacity based on type and lifecycle
      if (particle.type === 'glow') {
        particle.opacity = 0.3 + Math.sin(particle.life * 0.02) * 0.3;
      } else if (particle.type === 'chrome') {
        particle.opacity = 0.1 + Math.sin(particle.life * 0.015) * 0.15;
      } else {
        particle.opacity = 0.2 + Math.sin(particle.life * 0.01) * 0.2;
      }
    });
  }, [createParticle]);

  // Draw particles with AI-inspired effects
  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    particlesRef.current.forEach(particle => {
      ctx.save();
      
      // Create different effects based on particle type
      if (particle.type === 'glow') {
        // Glowing orb effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 6;
        ctx.globalAlpha = particle.opacity;
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (particle.type === 'chrome') {
        // Chrome reflection effect
        ctx.globalAlpha = particle.opacity;
        const gradient = ctx.createLinearGradient(
          particle.x - particle.size, particle.y - particle.size,
          particle.x + particle.size, particle.y + particle.size
        );
        gradient.addColorStop(0, 'rgba(229, 231, 235, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(229, 231, 235, 0.8)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Standard particle
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 3;
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    });
  }, []);

  // Draw AI-inspired connections
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
          ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.shadowColor = 'rgba(6, 182, 212, 0.5)';
          ctx.shadowBlur = 2;
          ctx.beginPath();
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }, []);

  // Main animation loop with AI aesthetics
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with subtle fade effect
    ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
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
      {/* Futuristic cosmic gradient background */}
      <div 
        className="fixed inset-0 z-[-3]"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #0f1419 50%, #1a1a2e 75%, #0a0a0f 100%)
          `
        }}
      />
      
      {/* AI particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.8,
        }}
      />
      
      {/* Floating AI orbs for additional depth */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '5%',
            animation: 'float-elegant 15s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            top: '60%',
            right: '10%',
            animation: 'float-elegant 12s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-6"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
            bottom: '20%',
            left: '30%',
            animation: 'float-elegant 18s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-4"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 255, 0.3) 0%, transparent 70%)',
            top: '30%',
            right: '40%',
            animation: 'float-elegant 14s ease-in-out infinite reverse',
          }}
        />
      </div>
    </>
  );
};

export default FuturisticAIBackground;