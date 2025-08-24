import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Users, BrainCircuit, LineChart, ArrowRight, Building, Award } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsCard from '../components/StatsCard';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
  // Static text instead of typewriter effect
  const titleText = "Empowering Business Growth with Intelligent AI Solutions";
  
  const services = [
    {
      icon: BrainCircuit,
      title: 'AI Strategy Consulting',
      description: 'Custom AI roadmaps to transform your business operations',
      details: 'Our expert consultants work closely with your team to create tailored AI strategies that align perfectly with your business goals and objectives.'
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      description: 'Data-driven insights to anticipate market trends',
      details: 'Leverage the power of advanced algorithms to analyze historical data, identify patterns, and make accurate predictions about future market trends.'
    },
    {
      icon: Building,
      title: 'Enterprise AI Integration',
      description: 'Seamless AI implementation across your organization',
      details: 'We handle the complete process of integrating AI solutions into your existing infrastructure, ensuring minimal disruption to your operations.'
    },
  ];

  const testimonials = [
    {
      quote: "Solvencia Industries transformed our customer service with their AI chatbot solution. We've seen a 45% reduction in response time and significantly improved customer satisfaction scores.",
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechForward Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The predictive analytics system developed by Solvencia has revolutionized our inventory management, reducing overstocking costs by 37% while ensuring we never run out of high-demand items.",
      name: "Michael Chen",
      position: "Operations Director",
      company: "GlobalRetail",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Working with Solvencia's team was a game-changer for our data strategy. Their expertise in AI and machine learning helped us uncover insights we never thought possible from our existing data.",
      name: "Elena Rodriguez",
      position: "Data Science Lead",
      company: "FinTech Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: Users,
      value: "200+",
      label: "Clients Worldwide"
    },
    {
      icon: BrainCircuit,
      value: "50+",
      label: "AI Solutions Deployed"
    },
    {
      icon: LineChart,
      value: "35%",
      label: "Average ROI Increase"
    }
  ];

  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Organization"],
    "name": "Solvencia Industries - AI-Powered Business Solutions",
    "description": "Transform your business with Solvencia Industries' cutting-edge AI solutions. Expert automation, customer support, and custom AI development for exponential growth.",
    "url": "https://solvenciaindustries.com/",
    "headline": "Empowering Business Growth with Intelligent AI Solutions",
    "image": "https://solvenciaindustries.com/IMG_1951.jpeg",
    "author": {
      "@type": "Organization",
      "name": "Solvencia Industries"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Solvencia Industries",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solvenciaindustries.com/IMG_1951.jpeg"
      }
    },
    "datePublished": "2024-01-01T00:00:00+00:00",
    "dateModified": "2025-01-27T12:00:00+00:00",
    "mainEntity": {
      "@type": "Organization",
      "name": "Solvencia Industries",
      "description": "AI-powered business solutions for automation, customer support, and business growth",
      "url": "https://solvenciaindustries.com/",
      "logo": "https://solvenciaindustries.com/IMG_1951.jpeg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918149108744",
        "contactType": "customer service",
        "email": "alliance@solvenciaindustries.com"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://solvenciaindustries.com/"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "500",
      "highPrice": "50000",
      "offerCount": "10"
    }
  };

  return (
    <div className="relative" id="main-content">
      <SEOHead
        title="SolvenciaxAI - AI-Powered Business Solutions | Automation & Growth"
        description="Transform your business with Solvencia Industries' cutting-edge AI solutions. Expert automation, customer support, CRM optimization, and custom AI development for exponential growth."
        canonical="https://solvenciaindustries.com/"
        keywords="AI business solutions, automation, customer support AI, CRM optimization, machine learning, artificial intelligence consulting, business growth, AI development"
        schemaData={homeSchemaData}
      />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 holographic-text leading-tight"
            >
              {titleText}
            </h1>
            <p 
              className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Discover cutting-edge innovations tailored to transform your business processes and accelerate success.
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Button to="/contact" size="lg">
                Schedule Free Consultation
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-secondary)] to-transparent opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Bespoke AI Solutions" 
            subtitle="Elevate your business with our tailored, cutting-edge AI services designed for exceptional performance and transformative impact."
            center
          />
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </div>
            ))}
          </div>
          
          <div 
            className="text-center mt-16"
          >
            <Button to="/services">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)] via-transparent to-[var(--neon-blue)] opacity-5" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Hear from visionary businesses that have transformed their operations with our cutting-edge AI solutions."
            center
          />
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard 
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
        <div className="absolute inset-0 bg-[var(--gradient-cosmic)] opacity-80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 
              className="text-4xl font-bold mb-8 holographic-text"
            >
              Ready to Transform Your Business with AI?
            </h2>
            <p 
              className="text-xl text-[var(--text-secondary)] mb-12 leading-relaxed"
            >
              Take the first step toward a more efficient, data-driven future for your organization.
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Button to="/contact" size="lg">
                Schedule Free Consultation
              </Button>
              <Button to="/case-studies" variant="outline" size="lg">
                Browse Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;