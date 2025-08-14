import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  image: string;
  title: string;
  client: string;
  industryType: string;
  summary: string;
  id: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  title,
  client,
  industryType,
  summary,
  id,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(99, 102, 241, 0.3)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6 md:w-3/5">
        <div className="flex items-center mb-2">
          <motion.span 
            className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mr-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {client}
          </motion.span>
          <motion.span 
            className="text-xs bg-gray-100 text-gray-700 py-1 px-2 rounded"
            whileHover={{ backgroundColor: "#f5f3ff" }}
            transition={{ duration: 0.2 }}
          >
            {industryType}
          </motion.span>
        </div>
        <motion.h3 
          className="text-xl font-bold mb-3"
          initial={{ opacity: 0.9 }}
          whileHover={{ 
            opacity: 1, 
            color: "#4f46e5",
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{summary}</p>
        <motion.div 
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to={`/case-studies/${id}`}
            className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors inline-flex items-center"
          >
            Read Full Case Study
            <motion.div 
              initial={{ x: 0 }} 
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <ArrowRight size={16} className="ml-1" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;