import React, { useState, useEffect } from 'react';
import { Monitor, Palette } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'liquid-glass' | 'classic'>('liquid-glass');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to liquid-glass
    const savedTheme = localStorage.getItem('solvencia-theme') as 'liquid-glass' | 'classic';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme === 'classic' ? 'classic' : 'liquid-glass');
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newTheme = theme === 'liquid-glass' ? 'classic' : 'liquid-glass';
    
    // Add transition class to body for smooth theme switching
    document.body.style.transition = 'all 0.5s ease-in-out';
    
    setTimeout(() => {
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme === 'classic' ? 'classic' : 'liquid-glass');
      localStorage.setItem('solvencia-theme', newTheme);
      
      setTimeout(() => {
        document.body.style.transition = '';
        setIsAnimating(false);
      }, 500);
    }, 50);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle glass-button neon-glow"
      aria-label={`Switch to ${theme === 'liquid-glass' ? 'classic' : 'liquid glass'} theme`}
      disabled={isAnimating}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        fontWeight: '500',
        minWidth: '140px',
        justifyContent: 'center',
        opacity: isAnimating ? 0.7 : 1,
        cursor: isAnimating ? 'not-allowed' : 'pointer',
      }}
    >
      {theme === 'liquid-glass' ? (
        <>
          <Monitor size={16} />
          Classic
        </>
      ) : (
        <>
          <Palette size={16} />
          Liquid Glass
        </>
      )}
      
      {/* Ripple effect overlay */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
          transform: 'scale(0)',
          transition: 'all 0.3s ease-out',
        }}
      />
    </button>
  );
};

export default ThemeToggle;