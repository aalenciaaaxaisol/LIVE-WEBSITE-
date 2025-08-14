import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import { Twitter } from 'lucide-react';

type Category = 'all' | 'nlp' | 'computer-vision' | 'predictive-analytics' | 'machine-learning';

interface Project {
  id: number;
  title: string;
  category: Category;
  displayCategory: string;
  description: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "HealthPred: Predictive Diagnosis System",
      category: "predictive-analytics",
      displayCategory: "Predictive Analytics",
      description: "An AI system that predicts patient diagnosis based on symptoms and medical history.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "RetailVision: Inventory Management",
      category: "computer-vision",
      displayCategory: "Computer Vision",
      description: "Computer vision solution for automated inventory tracking and management.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "SentimentX: Customer Feedback Analysis",
      category: "nlp",
      displayCategory: "Natural Language Processing",
      description: "NLP system that analyzes customer feedback to extract insights and sentiment.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "TrendCast: Market Prediction Platform",
      category: "predictive-analytics",
      displayCategory: "Predictive Analytics",
      description: "AI-powered platform that forecasts market trends and consumer behavior.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "SafetyNet: Workplace Monitoring System",
      category: "computer-vision",
      displayCategory: "Computer Vision",
      description: "AI system that ensures workplace safety by detecting hazardous situations.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "MultiLing: Multilingual Assistant",
      category: "nlp",
      displayCategory: "Natural Language Processing",
      description: "Advanced NLP solution for real-time translation and multilingual communication.",
      image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "FraudBlock: Transaction Security System",
      category: "machine-learning",
      displayCategory: "Machine Learning",
      description: "ML algorithm that detects and prevents fraudulent financial transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "EcoSmart: Energy Optimization Platform",
      category: "machine-learning",
      displayCategory: "Machine Learning",
      description: "Machine learning solution for optimizing energy usage in commercial buildings.",
      image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      title: "AgriVision: Crop Monitoring System",
      category: "computer-vision",
      displayCategory: "Computer Vision",
      description: "Computer vision tool that monitors crop health and predicts yield.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'nlp', label: 'Natural Language Processing' },
    { value: 'computer-vision', label: 'Computer Vision' },
    { value: 'predictive-analytics', label: 'Predictive Analytics' },
    { value: 'machine-learning', label: 'Machine Learning' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const portfolioSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Portfolio - AI Innovation Gallery",
    "description": "Explore Solvencia Industries' portfolio of innovative AI solutions across industries. View our latest builds and transformative AI projects.",
    "url": "https://solvenciaindustries.com/portfolio",
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "AI Solutions Portfolio",
      "creator": {
        "@type": "Organization",
        "name": "Solvencia Industries"
      },
      "description": "Gallery of innovative AI creations showcasing sophistication, precision, and transformative impact"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://solvenciaindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://solvenciaindustries.com/portfolio"
        }
      ]
    }
  };

  return (
    <div className="pt-32">
      <SEOHead
        title="Portfolio - AI Innovation Gallery"
        description="Explore Solvencia Industries' portfolio of innovative AI solutions across industries. View our latest builds and transformative AI projects showcasing cutting-edge technology."
        canonical="https://solvenciaindustries.com/portfolio"
        keywords="AI portfolio, machine learning projects, computer vision solutions, NLP applications, predictive analytics, AI case studies"
        schemaData={portfolioSchemaData}
      />

      {/* Hero Section - Removed background color to let animated background show through */}
      <section className="text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-royal-500 to-royal-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">The Art of Innovation</h1>
            <p className="text-xl text-white mb-10 font-semibold [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
              A gallery of our distinguished AI creations, exemplifying sophistication, precision, and transformative impact.
            </p>
            <Button to="/contact" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-royal-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Portfolio" 
            subtitle="Explore how Solvencia's innovative AI solutions are driving transformation across industries. Dive into our portfolio of impactful projects, and view our latest builds by visiting our dedicated Twitter feed below."
            center
          />
          
          {/* Twitter Icon */}
          <div className="flex justify-center mt-8">
            <a 
              href="https://x.com/iamAashuuu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-32 h-12 bg-royal-500 text-white rounded-lg hover:bg-royal-600 transition-colors duration-300 shadow-metallic"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
          
          {/* The Projects Grid has been removed as requested */}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Approach</h2>
            <p className="text-gray-600">
              We follow a structured, collaborative process to ensure every AI solution we create delivers exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by thoroughly understanding your business challenges and objectives to identify the right AI approach."
              },
              {
                step: "02",
                title: "Development",
                description: "Our expert team designs and builds custom AI solutions using cutting-edge technologies and methodologies."
              },
              {
                step: "03",
                title: "Deployment",
                description: "We seamlessly integrate the solution into your existing systems and provide comprehensive training."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-royal-50/80 shadow-metallic">
                <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center text-royal-700 font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-royal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your AI Success Story?</h2>
            <p className="text-xl text-royal-200 mb-10">
              Let's collaborate to build an innovative AI solution that addresses your unique business challenges.
            </p>
            <Button to="/contact" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;