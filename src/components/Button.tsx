import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const baseClasses = 'fireglass-button ember-glow-pulse';
  
  const variantClasses = {
    primary: 'border-[var(--ember-orange)] text-[var(--text-primary)]',
    secondary: 'border-[var(--molten-gold)] text-[var(--text-primary)]',
    outline: 'border-[var(--fireglass-border)] text-[var(--text-primary)]',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={disabled ? (e) => e.preventDefault() : undefined}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;