import React from 'react';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../lib/animations';

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
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: 0.2, 
        ease: "easeOut" 
      } 
    }
  };

  // If reduced motion is preferred, apply no animations
  if (prefersReducedMotion) {
    return (
      <div className={`max-w-3xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      className={`max-w-3xl mb-12 ${center ? 'mx-auto text-center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2 
        className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
        variants={titleVariants}
      >
        <motion.span
          initial={{ backgroundSize: '0% 4px' }}
          whileInView={{ 
            backgroundSize: '100% 4px',
            transition: { duration: 0.8, delay: 0.5 }
          }}
          viewport={{ once: true }}
          style={{ 
            backgroundImage: `linear-gradient(${light ? 'rgba(255,255,255,0.3)' : 'rgba(65,105,225,0.3)'}, ${light ? 'rgba(255,255,255,0.3)' : 'rgba(65,105,225,0.3)'})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 90%',
            display: 'inline'
          }}
        >
          {title}
        </motion.span>
      </motion.h2>
      <motion.p 
        className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}
        variants={subtitleVariants}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeading;