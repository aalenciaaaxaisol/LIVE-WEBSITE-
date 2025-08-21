import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scaleOnHover, prefersReducedMotion } from '../lib/animations';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-all duration-300 ease-in-out transform';
  
  const variantClasses = {
    primary: 'bg-royal-500 text-white hover:bg-royal-600 shadow-md hover:shadow-lg',
    secondary: 'bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg',
    outline: 'border-2 border-royal-500 text-royal-500 hover:bg-royal-50 hover:border-royal-600',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-102'}`;
  
  // Simplified motion props with smooth animations
  const motionProps = !prefersReducedMotion ? {
    whileHover: { 
      scale: disabled ? 1 : 1.02,
      y: disabled ? 0 : -1,
      transition: { duration: 0.25, ease: "easeOut" }
    },
    whileTap: { scale: disabled ? 1 : 0.98 },
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
  } : {};
  
  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={buttonClasses} onClick={disabled ? (e) => e.preventDefault() : undefined}>
          {children}
        </Link>
      </motion.div>
    );
  }
  
  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a 
          href={href} 
          className={buttonClasses} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={disabled ? (e) => e.preventDefault() : undefined}
        >
          {children}
        </a>
      </motion.div>
    );
  }
  
  return (
    <motion.button
      {...motionProps}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;