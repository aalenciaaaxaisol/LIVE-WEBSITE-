import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { prefersReducedMotion, fadeInUp } from '../lib/animations';

interface AnimationWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  variants = fadeInUp,
  delay = 0,
  duration,
  className = '',
  threshold = 0.1,
  once = true
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold, once });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ 
        delay, 
        duration, 
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;