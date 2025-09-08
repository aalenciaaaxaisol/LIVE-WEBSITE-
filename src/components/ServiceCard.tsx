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
      className="service-card floating-elegant ember-glow-pulse group h-full"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div 
          className="mb-6 p-4 inline-block rounded-xl transition-all duration-300 group-hover:scale-105"
          style={{
            background: 'var(--fireglass-bg)',
            border: '2px solid var(--fireglass-border)',
            boxShadow: '0 0 20px rgba(255, 69, 0, 0.6)',
          }}
        >
          <Icon size={32} className="text-[var(--ember-orange)]" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 molten-text">{title}</h3>
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
        className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
};

export default ServiceCard;