import React, { useEffect, useRef, useCallback } from 'react';

interface ElectricPulse {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
  intensity: number;
  size: number;
}

interface CircuitNode {
  x: number;
  y: number;
  size: number;
  glow: number;
  pulsePhase: number;
  connections: { x: number; y: number }[];
  isCore: boolean;
  energy: number;
}

interface CircuitLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  width: number;
  energy: number;
  pulses: ElectricPulse[];
}

const FireGlassBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const circuitNodesRef = useRef<CircuitNode[]>([]);
  const circuitLinesRef = useRef<CircuitLine[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  // Electric pulse colors
  const pulseColors = [
    '#00FFFF', // Neon Cyan
    '#0080FF', // Electric Blue
    '#FF4500', // Ember Orange
    '#FFD700', // Fiery Gold
    '#FF6600', // Electric Orange
    '#00FF80', // Electric Green
  ];

  // Create circuit node
  const createCircuitNode = useCallback((canvas: HTMLCanvasElement, isCore = false): CircuitNode => {
    return {
      x: isCore ? canvas.width / 2 : Math.random() * canvas.width,
      y: isCore ? canvas.height / 2 : Math.random() * canvas.height,
      size: isCore ? 20 : Math.random() * 8 + 4,
      glow: Math.random() * 30 + 20,
      pulsePhase: Math.random() * Math.PI * 2,
      connections: [],
      isCore,
      energy: isCore ? 1 : Math.random() * 0.8 + 0.2,
    };
  }, []);

  // Create circuit line with electric pulses
  const createCircuitLine = useCallback((from: CircuitNode, to: CircuitNode): CircuitLine => {
    return {
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      color: pulseColors[Math.floor(Math.random() * pulseColors.length)],
      width: Math.random() * 3 + 1,
      energy: Math.random() * 0.8 + 0.3,
      pulses: [],
    };
  }, []);

  // Create electric pulse
  const createElectricPulse = useCallback((line: CircuitLine): ElectricPulse => {
    const color = pulseColors[Math.floor(Math.random() * pulseColors.length)];
    return {
      x: line.x1,
      y: line.y1,
      targetX: line.x2,
      targetY: line.y2,
      progress: 0,
      speed: Math.random() * 0.02 + 0.01,
      color,
      intensity: Math.random() * 0.8 + 0.4,
      size: Math.random() * 6 + 3,
    };
  }, []);

  // Initialize motherboard circuit network
  const initializeMotherboard = useCallback((canvas: HTMLCanvasElement) => {
    const nodes: CircuitNode[] = [];
    const lines: CircuitLine[] = [];
    
    // Create central energy core
    const coreNode = createCircuitNode(canvas, true);
    nodes.push(coreNode);
    
    // Create grid of circuit nodes
    const gridSize = 120;
    const offsetX = (canvas.width % gridSize) / 2;
    const offsetY = (canvas.height % gridSize) / 2;
    
    for (let x = offsetX; x < canvas.width; x += gridSize) {
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        // Skip if too close to center core
        const distToCore = Math.sqrt((x - coreNode.x) ** 2 + (y - coreNode.y) ** 2);
        if (distToCore < 80) continue;
        
        const node = createCircuitNode(canvas);
        node.x = x + (Math.random() - 0.5) * 40;
        node.y = y + (Math.random() - 0.5) * 40;
        nodes.push(node);
      }
    }
    
    // Create connections between nodes
    nodes.forEach((node, i) => {
      if (node.isCore) {
        // Core connects to several nearby nodes
        const nearbyNodes = nodes
          .filter(n => !n.isCore)
          .sort((a, b) => {
            const distA = Math.sqrt((a.x - node.x) ** 2 + (a.y - node.y) ** 2);
            const distB = Math.sqrt((b.x - node.x) ** 2 + (b.y - node.y) ** 2);
            return distA - distB;
          })
          .slice(0, 8);
        
        nearbyNodes.forEach(nearbyNode => {
          lines.push(createCircuitLine(node, nearbyNode));
        });
      } else {
        // Regular nodes connect to 2-4 nearby nodes
        const nearbyNodes = nodes
          .filter((n, j) => j !== i && !n.isCore)
          .sort((a, b) => {
            const distA = Math.sqrt((a.x - node.x) ** 2 + (a.y - node.y) ** 2);
            const distB = Math.sqrt((b.x - node.x) ** 2 + (b.y - node.y) ** 2);
            return distA - distB;
          })
          .slice(0, Math.floor(Math.random() * 3) + 2);
        
        nearbyNodes.forEach(nearbyNode => {
          const distance = Math.sqrt((nearbyNode.x - node.x) ** 2 + (nearbyNode.y - node.y) ** 2);
          if (distance < 150) {
            lines.push(createCircuitLine(node, nearbyNode));
          }
        });
      }
    });
    
    circuitNodesRef.current = nodes;
    circuitLinesRef.current = lines;
  }, [createCircuitNode, createCircuitLine]);

  // Update electric pulses
  const updateElectricPulses = useCallback(() => {
    circuitLinesRef.current.forEach(line => {
      // Add new pulses randomly
      if (Math.random() < 0.02 && line.pulses.length < 3) {
        line.pulses.push(createElectricPulse(line));
      }
      
      // Update existing pulses
      line.pulses.forEach((pulse, index) => {
        pulse.progress += pulse.speed;
        
        // Interpolate position
        pulse.x = line.x1 + (line.x2 - line.x1) * pulse.progress;
        pulse.y = line.y1 + (line.y2 - line.y1) * pulse.progress;
        
        // Remove completed pulses
        if (pulse.progress >= 1) {
          line.pulses.splice(index, 1);
        }
      });
    });
  }, [createElectricPulse]);

  // Update circuit node animations
  const updateCircuitNodes = useCallback(() => {
    timeRef.current += 0.02;
    
    circuitNodesRef.current.forEach(node => {
      node.pulsePhase += 0.03;
      
      if (node.isCore) {
        // Core pulsates with energy
        node.glow = 50 + Math.sin(timeRef.current * 2) * 20;
        node.energy = 0.8 + Math.sin(timeRef.current * 1.5) * 0.2;
      } else {
        // Regular nodes have subtle pulsing
        node.glow = 15 + Math.sin(node.pulsePhase) * 8;
        node.energy = 0.4 + Math.sin(node.pulsePhase * 0.5) * 0.2;
      }
    });
  }, []);

  // Draw motherboard background
  const drawMotherboardBackground = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Base dark gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0A0A0A');
    gradient.addColorStop(0.3, '#1A0A0A');
    gradient.addColorStop(0.6, '#2A1020');
    gradient.addColorStop(1, '#1A0A2A');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add subtle grid pattern
    ctx.save();
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    
    const gridSize = 60;
    const offsetX = (parallaxRef.current.x * 0.1) % gridSize;
    const offsetY = (parallaxRef.current.y * 0.1) % gridSize;
    
    for (let x = offsetX; x < canvas.width + gridSize; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    for (let y = offsetY; y < canvas.height + gridSize; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    ctx.restore();
  }, []);

  // Draw circuit lines with electric flow
  const drawCircuitLines = useCallback((ctx: CanvasRenderingContext2D) => {
    circuitLinesRef.current.forEach(line => {
      ctx.save();
      
      // Draw base circuit line
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.width;
      ctx.shadowColor = line.color;
      ctx.shadowBlur = 10 * line.energy;
      ctx.globalAlpha = 0.6 * line.energy;
      
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
      
      // Draw electric pulses on the line
      line.pulses.forEach(pulse => {
        ctx.save();
        
        // Pulse glow effect
        const pulseGradient = ctx.createRadialGradient(
          pulse.x, pulse.y, 0,
          pulse.x, pulse.y, pulse.size * 3
        );
        pulseGradient.addColorStop(0, pulse.color);
        pulseGradient.addColorStop(0.5, pulse.color + '80');
        pulseGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = pulseGradient;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = pulse.size * 4;
        ctx.globalAlpha = pulse.intensity;
        
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright core
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = pulse.intensity * 0.8;
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
      
      ctx.restore();
    });
  }, []);

  // Draw circuit nodes with energy cores
  const drawCircuitNodes = useCallback((ctx: CanvasRenderingContext2D) => {
    circuitNodesRef.current.forEach(node => {
      ctx.save();
      
      if (node.isCore) {
        // Central energy core
        const coreGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 4
        );
        coreGradient.addColorStop(0, '#FFFFFF');
        coreGradient.addColorStop(0.2, '#00FFFF');
        coreGradient.addColorStop(0.5, '#0080FF');
        coreGradient.addColorStop(0.8, '#FF4500');
        coreGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = coreGradient;
        ctx.shadowColor = '#00FFFF';
        ctx.shadowBlur = node.glow;
        
        // Outer energy ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = node.glow * 0.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulsing ring effect
        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.globalAlpha = 0.7 + Math.sin(timeRef.current * 3) * 0.3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 2 + Math.sin(timeRef.current * 2) * 5, 0, Math.PI * 2);
        ctx.stroke();
        
      } else {
        // Regular circuit nodes
        const nodeColor = node.energy > 0.6 ? '#FFD700' : 
                         node.energy > 0.4 ? '#FF4500' : '#00FFFF';
        
        const nodeGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 2
        );
        nodeGradient.addColorStop(0, '#FFFFFF');
        nodeGradient.addColorStop(0.4, nodeColor);
        nodeGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = nodeGradient;
        ctx.shadowColor = nodeColor;
        ctx.shadowBlur = node.glow;
        ctx.globalAlpha = node.energy;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Occasional spark effect
        if (Math.random() < 0.001) {
          ctx.save();
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 15;
          ctx.globalAlpha = 1;
          
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 / 6) * i;
            const sparkLength = node.size * 3;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(
              node.x + Math.cos(angle) * sparkLength,
              node.y + Math.sin(angle) * sparkLength
            );
            ctx.stroke();
          }
          ctx.restore();
        }
      }
      
      ctx.restore();
    });
  }, []);

  // Add mouse interaction effects
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

    // Parallax effect
    parallaxRef.current = {
      x: (event.clientX - rect.left - centerX) * 0.02,
      y: (event.clientY - rect.top - centerY) * 0.02,
    };

    // Create energy ripple effect near mouse
    circuitLinesRef.current.forEach(line => {
      const distToLine = Math.abs((line.y2 - line.y1) * mouseRef.current.x - 
                                 (line.x2 - line.x1) * mouseRef.current.y + 
                                 line.x2 * line.y1 - line.y2 * line.x1) / 
                        Math.sqrt((line.y2 - line.y1) ** 2 + (line.x2 - line.x1) ** 2);
      
      if (distToLine < 50 && Math.random() < 0.1) {
        line.pulses.push(createElectricPulse(line));
      }
    });
  }, [createElectricPulse]);

  // Main animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all layers
    drawMotherboardBackground(ctx, canvas);
    drawCircuitLines(ctx);
    drawCircuitNodes(ctx);

    // Update animations
    updateElectricPulses();
    updateCircuitNodes();

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [drawMotherboardBackground, drawCircuitLines, drawCircuitNodes, updateElectricPulses, updateCircuitNodes]);

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

    initializeMotherboard(canvas);
  }, [initializeMotherboard]);

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
      {/* Motherboard base layer with dark energy gradients */}
      <div 
        className="fixed inset-0 z-[-3]"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 25% 25%, rgba(255, 69, 0, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 75% 75%, rgba(255, 215, 0, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 100%, rgba(0, 128, 255, 0.05) 0%, transparent 80%),
            linear-gradient(135deg, #0A0A0A 0%, #1A0A0A 25%, #2A1020 50%, #1A0A2A 75%, #0A0A0A 100%)
          `
        }}
      />
      
      {/* Main motherboard canvas with circuits and electric pulses */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.9,
        }}
      />
      
      {/* Additional atmospheric energy fields */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Central energy core ambience */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(0, 128, 255, 0.2) 30%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'energy-pulse 4s ease-in-out infinite',
            filter: 'blur(30px)',
          }}
        />
        
        {/* Electric field corners */}
        <div 
          className="absolute w-64 h-64 rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            animation: 'energy-pulse 6s ease-in-out infinite reverse',
            filter: 'blur(40px)',
          }}
        />
        
        <div 
          className="absolute w-48 h-48 rounded-full opacity-6"
          style={{
            background: 'radial-gradient(circle, rgba(255, 69, 0, 0.25) 0%, transparent 70%)',
            bottom: '15%',
            left: '15%',
            animation: 'energy-pulse 5s ease-in-out infinite',
            filter: 'blur(35px)',
          }}
        />
      </div>
    </>
  );
};

export default FireGlassBackground;