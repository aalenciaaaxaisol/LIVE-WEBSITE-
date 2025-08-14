import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-metallic p-6 border border-royal-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(65, 105, 225, 0.1), 0 10px 10px -5px rgba(65, 105, 225, 0.04)",
        borderColor: "rgba(65, 105, 225, 0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        initial={{ rotate: 0, scale: 1 }}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="inline-block mb-4"
      >
        <Quote size={32} className="text-royal-200" />
      </motion.div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <motion.img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div>
          <motion.h4 
            className="font-bold"
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              opacity: 1,
              color: "#4169E1",
              transition: { duration: 0.2 }
            }}
          >
            {name}
          </motion.h4>
          <p className="text-sm text-gray-600">
            {position}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;