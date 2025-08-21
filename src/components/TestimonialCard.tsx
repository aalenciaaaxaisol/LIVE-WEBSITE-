import React from 'react';
import { Quote } from 'lucide-react';

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
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-metallic p-6 border border-royal-100 transition-all duration-300 hover:shadow-lg hover:border-royal-200">
      <div className="inline-block mb-4">
        <Quote size={32} className="text-royal-200" />
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4 transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h4 className="font-bold transition-colors duration-300 hover:text-royal-500">
            {name}
          </h4>
          <p className="text-sm text-gray-600">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;