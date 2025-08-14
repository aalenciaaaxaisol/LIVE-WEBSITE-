import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  id: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  excerpt,
  date,
  readTime,
  category,
  id,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <motion.span 
            className="text-xs font-semibold text-indigo-600 uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.span>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">
          <Link to={`/blog/${id}`} className="hover:text-indigo-600 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <Link
            to={`/blog/${id}`}
            className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors inline-flex items-center"
          >
            Read More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogCard;