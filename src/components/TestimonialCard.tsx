import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company,
  image,
}) => {
  return (
    <div className="testimonial-card luxury-glow p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <Quote size={28} className="text-[var(--neon-purple)] opacity-60" />
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-[var(--neon-blue)] fill-current" />
          ))}
        </div>
      </div>
      
      <p className="text-[var(--text-primary)] mb-6 italic flex-grow leading-relaxed">"{quote}"</p>
      
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[var(--glass-border)] transition-all duration-300 hover:border-[var(--neon-blue)] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
        />
        <div>
          <h4 className="font-bold text-[var(--text-primary)] mb-1">
            {name}
          </h4>
          <p className="text-sm text-[var(--text-secondary)]">
            {position}, {company}
          </p>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-400 hover:opacity-100 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 255, 0.08) 0%, rgba(0, 240, 255, 0.08) 100%)',
        }}
      />
    </div>
  );
};

export default TestimonialCard;