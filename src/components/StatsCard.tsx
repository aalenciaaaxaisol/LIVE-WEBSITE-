import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "#fafafa",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="flex justify-center mb-4"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon size={32} className="text-indigo-600" />
      </motion.div>
      
      <motion.h3 
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <CountAnimation value={value} />
      </motion.h3>
      
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

// Animate counter
const CountAnimation = ({ value }: { value: string }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const unit = value.replace(/[0-9.]/g, '');
  
  return (
    <motion.span>
      {numericValue ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {numericValue}{unit}
        </motion.span>
      ) : (
        value
      )}
    </motion.span>
  );
};

export default StatsCard;