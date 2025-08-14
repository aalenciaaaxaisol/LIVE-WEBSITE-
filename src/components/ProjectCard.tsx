import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <motion.div 
          className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1"
          whileHover={{ scale: 1.05, originX: 0 }}
          transition={{ duration: 0.2 }}
        >
          {category}
        </motion.div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="primary" size="sm">View Case Study</Button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;