import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';
import { Check, Users, BrainCircuit, LineChart, ArrowRight, Building, Award } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsCard from '../components/StatsCard';
import SectionFadeIn from '../components/SectionFadeIn';
import AnimationWrapper from '../components/AnimationWrapper';
import SEOHead from '../components/SEOHead';
import { fadeIn, fadeInUp, staggerContainer, prefersReducedMotion } from '../lib/animations';

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const servicesAnimation = useAnimation();
  const testimonialsAnimation = useAnimation();

  // Static text instead of typewriter effect
  const titleText = "Empowering Business Growth with Intelligent AI Solutions";
  
  // Trigger animations based on scroll position
  useEffect(() => {
    if (servicesInView) servicesAnimation.start("visible");
    if (testimonialsInView) testimonialsAnimation.start("visible");
  }, [servicesInView, testimonialsInView]);

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
      <motion.section 
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-royal-500 to-royal-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {titleText}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Discover cutting-edge innovations tailored to transform your business processes and accelerate success.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button to="/contact" size="lg">
                Schedule Free Consultation
              </Button>
              <Button to="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <SectionFadeIn className="py-16 bg-royal-50/80 backdrop-blur-sm" ref={servicesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Bespoke AI Solutions" 
            subtitle="Elevate your business with our tailored, high-end AI services designed for exceptional performance and impact."
            center
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesAnimation}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Button to="/services">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </SectionFadeIn>

      {/* Testimonials */}
      <section className="py-16 bg-white/80 backdrop-blur-sm" ref={testimonialsRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Hear from businesses that have transformed their operations with our AI solutions."
            center
          />
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="opacity-100">
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
      <motion.section 
        className="py-16 bg-royal-900 text-white"
        ref={ctaRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p 
              className="text-xl text-royal-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Take the first step toward a more efficient, data-driven future for your organization.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Button to="/contact" size="lg">
                Schedule Free Consultation
              </Button>
              <Button to="/case-studies" variant="outline" size="lg">
                Browse Case Studies
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;