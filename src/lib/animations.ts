import { Variants } from 'framer-motion';

// Check if the user prefers reduced motion
export const prefersReducedMotion = 
  typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

// Simplified fade in from bottom animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.3, 
      ease: "easeOut"
    }
  }
};

// Simplified fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.3, 
      ease: "easeOut"
    }
  }
};

// Simplified staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.1,
      delayChildren: 0.1,
      ease: "easeOut"
    }
  }
};

// Simplified scale animation for hover effects
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 8px 15px -3px rgba(65, 105, 225, 0.1), 0 4px 6px -2px rgba(65, 105, 225, 0.05)",
    transition: { 
      duration: prefersReducedMotion ? 0 : 0.25, 
      ease: "easeOut"
    }
  }
};

// Simplified border animation for focus states
export const borderAnimation: Variants = {
  initial: { borderColor: 'rgba(65, 105, 225, 0)' },
  focus: { 
    borderColor: 'rgba(65, 105, 225, 1)',
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Simplified page transition effect
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.2, 
      ease: "easeOut"
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
    scale: 1.02,
    boxShadow: "0 8px 15px -3px rgba(65, 105, 225, 0.1), 0 4px 6px -2px rgba(65, 105, 225, 0.05)",
    transition: { 
      duration: 0.25, 
      ease: "easeOut"
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