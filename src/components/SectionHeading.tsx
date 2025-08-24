import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  return (
    <div 
      className={`max-w-4xl mb-16 ${center ? 'mx-auto text-center' : ''}`}
    >
      <h2 
        className={`text-4xl sm:text-5xl font-bold mb-6 ${
          light 
            ? 'text-[var(--text-primary)] holographic-text' 
            : 'holographic-text'
        }`}
      >
        {title}
      </h2>
      <p 
        className={`text-lg leading-relaxed ${
          light 
            ? 'text-[var(--text-secondary)]' 
            : 'text-[var(--text-secondary)]'
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;