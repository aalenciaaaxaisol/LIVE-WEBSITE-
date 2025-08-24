import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, details }) => {
  return (
    <div 
      className="service-card floating-elegant luxury-glow group h-full"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div 
          className="mb-6 p-4 inline-block rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-1"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)',
          }}
        >
          <Icon size={32} className="text-[var(--neon-blue)]" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 holographic-text">{title}</h3>
        <p className="text-[var(--text-secondary)] mb-6 flex-grow">{description}</p>
        
        <div 
          className="overflow-hidden transition-all duration-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 mb-6"
        >
          <p className="text-[var(--text-secondary)] text-sm">{details}</p>
        </div>
        
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </div>
      
      {/* Floating orb decoration */}
      <div 
        className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-15 transition-all duration-500 group-hover:scale-115 group-hover:opacity-25"
        style={{
          background: 'radial-gradient(circle, var(--neon-blue) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
};

export default ServiceCard;