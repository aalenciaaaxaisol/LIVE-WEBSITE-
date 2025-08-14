import { Variants } from 'framer-motion';

// Check if the user prefers reduced motion
export const prefersReducedMotion = 
  typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

// Enhanced fade in from bottom animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.5, 
      ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier for smoother animation
    }
  }
};

// Enhanced fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.4, 
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Optimized staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.15,
      delayChildren: 0.1,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Enhanced scale animation for hover effects
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(65, 105, 225, 0.15), 0 10px 10px -5px rgba(65, 105, 225, 0.1)",
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.3, 
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Enhanced pulse animation for buttons
export const pulseAnimation: Variants = {
  initial: { boxShadow: "0 0 0 0 rgba(65, 105, 225, 0.4)" },
  pulse: {
    boxShadow: [
      "0 0 0 0 rgba(65, 105, 225, 0.4)",
      "0 0 0 10px rgba(65, 105, 225, 0.2)",
      "0 0 0 15px rgba(65, 105, 225, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Enhanced typewriter effect
export const createTypewriterVariants = (text: string): Variants => {
  return {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        duration: prefersReducedMotion ? 0 : text.length * 0.045,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
};

// Enhanced border animation for focus states
export const borderAnimation: Variants = {
  initial: { borderColor: 'rgba(65, 105, 225, 0)' },
  focus: { 
    borderColor: 'rgba(65, 105, 225, 1)',
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};

// Optimized parallax effect for backgrounds
export const parallaxEffect = (scrollY: number, intensity: number = 0.1) => {
  if (prefersReducedMotion) return 0;
  return -scrollY * intensity;
};

// Enhanced page transition effect
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Enhanced metallic sheen effect
export const metallicSheen: Variants = {
  initial: { 
    backgroundPosition: '200% 0',
  },
  animate: {
    backgroundPosition: '-200% 0',
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
      ease: "linear"
    }
  }
};

// Card hover animation
export const cardHover: Variants = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(65, 105, 225, 0.15), 0 10px 10px -5px rgba(65, 105, 225, 0.1)",
    transition: { 
      duration: 0.3, 
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Button press animation
export const buttonPress: Variants = {
  initial: { scale: 1 },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};