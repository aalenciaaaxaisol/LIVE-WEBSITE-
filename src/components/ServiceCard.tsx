import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import { fadeInUp, prefersReducedMotion } from '../lib/animations';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, details }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(65, 105, 225, 0.15), 0 10px 10px -5px rgba(65, 105, 225, 0.1)",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const detailsVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      marginBottom: 0
    },
    visible: { 
      height: 'auto',
      opacity: 1,
      marginBottom: 24,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-metallic p-6 h-full transition-all duration-300 border border-royal-100 relative overflow-hidden"
      variants={prefersReducedMotion ? {} : cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <motion.div 
          className="mb-4 p-3 bg-royal-50 inline-block rounded-lg"
          variants={prefersReducedMotion ? {} : iconVariants}
        >
          <Icon size={28} className="text-royal-500" />
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <motion.div 
          className="overflow-hidden"
          variants={prefersReducedMotion ? {} : detailsVariants}
          animate={isHovered ? "visible" : "hidden"}
        >
          <p className="text-gray-700">{details}</p>
        </motion.div>
        
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </div>
      <motion.div 
        className="absolute -right-10 -bottom-10 w-40 h-40 bg-royal-50 rounded-full opacity-30"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.4 : 0.3,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default ServiceCard;