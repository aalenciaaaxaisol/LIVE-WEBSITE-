import React, { useRef, useEffect, forwardRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { staggerContainer } from '../lib/animations';

interface SectionFadeInProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  threshold?: number;
  delay?: number;
  variants?: Variants;
}

const SectionFadeIn = forwardRef<HTMLDivElement, SectionFadeInProps>(({
  children,
  className = '',
  stagger = true,
  threshold = 0.1,
  delay = 0,
  variants
}, ref) => {
  const controls = useAnimation();
  const localRef = useRef(null);
  const internalRef = ref || localRef;
  
  const inView = useInView(internalRef, { threshold, once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = variants || stagger ? staggerContainer : {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay, duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={internalRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
});

SectionFadeIn.displayName = 'SectionFadeIn';

export default SectionFadeIn;