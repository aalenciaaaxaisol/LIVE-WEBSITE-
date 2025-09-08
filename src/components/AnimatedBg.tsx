import React, { useEffect, useRef, useCallback } from 'react';

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  life: number;
  maxLife: number;
  glow: number;
}

interface LavaRiver {
  x: number;
  y: number;
  width: number;
  height: number;
  intensity: number;
  flow: number;
}

const FireGlassBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const embersRef = useRef<Ember[]>([]);
  const lavaRiversRef = useRef<LavaRiver[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0 });

  // Create floating fire ember
  const createEmber = useCallback((canvas: HTMLCanvasElement): Ember => {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 50,
      size: Math.random() * 4 + 2,
      speedY: -(Math.random() * 2 + 1),
      speedX: (Math.random() - 0.5) * 1,
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 400 + 300,
      glow: Math.random() * 20 + 10,
    };
  }, []);

  // Create lava river
  const createLavaRiver = useCallback((canvas: HTMLCanvasElement): LavaRiver => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      width: Math.random() * 200 + 100,
      height: Math.random() * 20 + 10,
      intensity: Math.random() * 0.8 + 0.2,
      flow: Math.random() * 0.02 + 0.01,
    };
  }, []);

  // Initialize particles and rivers
  const initializeElements = useCallback((canvas: HTMLCanvasElement) => {
    const emberCount = Math.min(40, Math.floor((canvas.width * canvas.height) / 20000));
    const riverCount = Math.min(8, Math.floor(canvas.width / 200));
    
    embersRef.current = [];
    lavaRiversRef.current = [];
    
    for (let i = 0; i < emberCount; i++) {
      embersRef.current.push(createEmber(canvas));
    }
    
    for (let i = 0; i < riverCount; i++) {
      lavaRiversRef.current.push(createLavaRiver(canvas));
    }
  }, [createEmber, createLavaRiver]);

  // Update ember positions and lifecycle
  const updateEmbers = useCallback((canvas: HTMLCanvasElement) => {
    embersRef.current.forEach((ember, index) => {
      ember.x += ember.speedX;
      ember.y += ember.speedY;
      ember.life++;

      // Mouse interaction - gentle attraction
      const dx = mouseRef.current.x - ember.x;
      const dy = mouseRef.current.y - ember.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100 * 0.001;
        ember.speedX += dx * force;
        ember.speedY += dy * force;
      }

      // Boundary wrapping
      if (ember.x > canvas.width + 50) ember.x = -50;
      else if (ember.x < -50) ember.x = canvas.width + 50;

      // Fade and lifecycle
      if (ember.y < -100 || ember.life > ember.maxLife) {
        embersRef.current[index] = createEmber(canvas);
      } else {
        ember.opacity = Math.max(0, 1 - (ember.life / ember.maxLife));
      }
    });
  }, [createEmber]);

  // Update lava rivers with flowing animation
  const updateLavaRivers = useCallback(() => {
    lavaRiversRef.current.forEach(river => {
      river.flow += 0.01;
      river.intensity = 0.5 + Math.sin(river.flow) * 0.3;
    });
  }, []);

  // Draw molten background gradient
  const drawMoltenBackground = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Base dark gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#000000');
    gradient.addColorStop(0.5, '#8B0000');
    gradient.addColorStop(1, '#4B0082');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add parallax depth effect
    const parallaxX = parallaxRef.current.x * 0.5;
    const parallaxY = parallaxRef.current.y * 0.5;

    // Subtle overlay gradient for depth
    const overlayGradient = ctx.createRadialGradient(
      canvas.width / 2 + parallaxX, canvas.height / 2 + parallaxY, 0,
      canvas.width / 2 + parallaxX, canvas.height / 2 + parallaxY, canvas.width
    );
    overlayGradient.addColorStop(0, 'rgba(139, 0, 0, 0.1)');
    overlayGradient.addColorStop(0.7, 'rgba(75, 0, 130, 0.05)');
    overlayGradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
    
    ctx.fillStyle = overlayGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  // Draw lava rivers with molten flow effect
  const drawLavaRivers = useCallback((ctx: CanvasRenderingContext2D) => {
    lavaRiversRef.current.forEach(river => {
      ctx.save();
      
      // Create flowing lava gradient
      const gradient = ctx.createLinearGradient(
        river.x, river.y,
        river.x + river.width, river.y
      );
      gradient.addColorStop(0, `rgba(255, 69, 0, ${river.intensity * 0.6})`);
      gradient.addColorStop(0.5, `rgba(255, 140, 0, ${river.intensity * 0.8})`);
      gradient.addColorStop(1, `rgba(255, 215, 0, ${river.intensity * 0.4})`);
      
      ctx.fillStyle = gradient;
      ctx.shadowColor = '#FF4500';
      ctx.shadowBlur = river.intensity * 30;
      ctx.globalCompositeOperation = 'screen';
      
      // Draw flowing river with rounded edges
      ctx.beginPath();
      ctx.roundRect(river.x, river.y, river.width, river.height, river.height / 2);
      ctx.fill();
      
      ctx.restore();
    });
  }, []);

  // Draw floating fire embers
  const drawEmbers = useCallback((ctx: CanvasRenderingContext2D) => {
    embersRef.current.forEach(ember => {
      if (ember.opacity <= 0) return;
      
      ctx.save();
      
      // Ember glow effect
      ctx.shadowColor = '#FF4500';
      ctx.shadowBlur = ember.glow;
      ctx.globalAlpha = ember.opacity;
      ctx.globalCompositeOperation = 'screen';
      
      // Create ember gradient
      const emberGradient = ctx.createRadialGradient(
        ember.x, ember.y, 0,
        ember.x, ember.y, ember.size * 3
      );
      emberGradient.addColorStop(0, '#FFD700');
      emberGradient.addColorStop(0.3, '#FF8C00');
      emberGradient.addColorStop(0.7, '#FF4500');
      emberGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = emberGradient;
      ctx.beginPath();
      ctx.arc(ember.x, ember.y, ember.size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw ember core
      ctx.fillStyle = '#FFFFFF';
      ctx.globalAlpha = ember.opacity * 0.8;
      ctx.beginPath();
      ctx.arc(ember.x, ember.y, ember.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });
  }, []);

  // Draw subtle circuit patterns (tech overlay)
  const drawCircuitPatterns = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.save();
    
    ctx.strokeStyle = 'rgba(255, 69, 0, 0.1)';
    ctx.lineWidth = 1;
    ctx.globalCompositeOperation = 'overlay';
    
    const gridSize = 80;
    const offsetX = (parallaxRef.current.x * 0.2) % gridSize;
    const offsetY = (parallaxRef.current.y * 0.2) % gridSize;
    
    // Draw subtle grid
    for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    ctx.restore();
  }, []);

  // Main animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all layers
    drawMoltenBackground(ctx, canvas);
    drawLavaRivers(ctx);
    drawCircuitPatterns(ctx, canvas);
    drawEmbers(ctx);

    // Update elements
    updateEmbers(canvas);
    updateLavaRivers();

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [drawMoltenBackground, drawLavaRivers, drawCircuitPatterns, drawEmbers, updateEmbers, updateLavaRivers]);

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

    initializeElements(canvas);
  }, [initializeElements]);

  // Handle mouse movement for parallax
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    // Update parallax based on mouse position
    parallaxRef.current = {
      x: (event.clientX - rect.left - centerX) * 0.1,
      y: (event.clientY - rect.top - centerY) * 0.1,
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
      {/* Molten background with heat effect */}
      <div 
        className="fixed inset-0 z-[-3]"
        style={{
          background: `
            radial-gradient(ellipse at 25% 25%, rgba(139, 0, 0, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 75% 75%, rgba(255, 69, 0, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 100%, rgba(75, 0, 130, 0.3) 0%, transparent 80%),
            linear-gradient(135deg, #000000 0%, #1a0000 25%, #8B0000 50%, #4B0082 75%, #000000 100%)
          `
        }}
      />
      
      {/* Main particle and lava canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.9,
        }}
      />
      
      {/* Floating molten orbs for additional atmosphere */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 69, 0, 0.6) 0%, rgba(255, 140, 0, 0.3) 40%, transparent 70%)',
            top: '10%',
            left: '5%',
            animation: 'ember-float 20s ease-in-out infinite',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.5) 0%, rgba(255, 140, 0, 0.3) 50%, transparent 70%)',
            top: '60%',
            right: '10%',
            animation: 'ember-float 15s ease-in-out infinite reverse',
            filter: 'blur(30px)',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-12"
          style={{
            background: 'radial-gradient(circle, rgba(139, 0, 0, 0.4) 0%, rgba(75, 0, 130, 0.2) 60%, transparent 70%)',
            bottom: '20%',
            left: '30%',
            animation: 'ember-float 25s ease-in-out infinite',
            filter: 'blur(50px)',
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255, 69, 0, 0.3) 0%, transparent 70%)',
            top: '30%',
            right: '40%',
            animation: 'ember-float 18s ease-in-out infinite reverse',
            filter: 'blur(25px)',
          }}
        />
      </div>
    </>
  );
};

export default FireGlassBackground;