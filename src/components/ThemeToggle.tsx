import React, { useState, useEffect } from 'react';
import { Monitor, Palette, Clock } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'liquid-glass' | 'time-travel'>('liquid-glass');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to liquid-glass
    const savedTheme = localStorage.getItem('solvencia-theme') as 'liquid-glass' | 'time-travel';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newTheme = theme === 'liquid-glass' ? 'time-travel' : 'liquid-glass';
    
    // Add elegant transition for theme switching
    document.body.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    setTimeout(() => {
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('solvencia-theme', newTheme);
      
      setTimeout(() => {
        document.body.style.transition = '';
        setIsAnimating(false);
      }, 600);
    }, 50);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle luxury-glow"
      aria-label={`Switch to ${theme === 'liquid-glass' ? 'time travel' : 'liquid glass'} theme`}
      disabled={isAnimating}
      style={{
        opacity: isAnimating ? 0.7 : 1,
        cursor: isAnimating ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        minWidth: '160px',
        justifyContent: 'center',
      }}
    >
      {theme === 'time-travel' ? (
        <>
          <Palette size={16} />
          Liquid Glass
        </>
      ) : (
        <>
          <Clock size={16} />
          Time Travel
        </>
      )}
    </button>
  );
};

export default ThemeToggle;