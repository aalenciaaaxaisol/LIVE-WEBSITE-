import React from 'react';
import { Users, MessageSquare, Phone, Zap, Cog, Database, BarChart3, Mail, Target, Twitter } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';

interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceFeature {
  text: string;
}

interface ServiceType {
  icon: React.ElementType;
  title: string;
  description: string;
  stats: ServiceStat[];
  features: ServiceFeature[];
  ctaText: string;
}

const Services: React.FC = () => {
  const services: ServiceType[] = [
    {
      icon: MessageSquare,
      title: 'AI-Powered Customer Support',
      description: 'Revolutionize customer service with AI that works around the clock to deliver exceptional experiences.',
      stats: [
        { value: '65%', label: 'faster response time' },
        { value: '50%', label: 'reduction in customer complaints' },
        { value: '40%', label: 'lower operational costs' }
      ],
      features: [
        { text: 'Eliminate wait times with instant responses to customer queries.' },
        { text: 'Reduce operational costs by automating repetitive tasks.' },
        { text: 'Improve customer satisfaction through personalized interactions.' },
        { text: 'Scale effortlessly to meet growing demands without extra staffing.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Users,
      title: 'Appointment Booking & Managing AI',
      description: 'Simplify scheduling and ensure no opportunity slips through the cracks.',
      stats: [
        { value: '70%', label: 'improved booking accuracy' },
        { value: '30%', label: 'increase in appointment show-ups' },
        { value: '45%', label: 'reduction in no-shows' }
      ],
      features: [
        { text: 'Automate booking workflows to free up your team\'s time.' },
        { text: 'Avoid scheduling errors with real-time calendar integration.' },
        { text: 'Increase booking rates through proactive reminders and follow-ups.' },
        { text: 'Adapt seamlessly to business-specific requirements.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Phone,
      title: 'Human-Like Voice AI Assistants',
      description: 'Engage customers with AI that sounds human, ensuring a conversational experience.',
      stats: [
        { value: '50%', label: 'reduction in response times' },
        { value: '60%', label: 'boost in customer satisfaction' },
        { value: '35%', label: 'cost savings on support staffing' }
      ],
      features: [
        { text: 'Provide 24/7 support to handle inquiries at any time.' },
        { text: 'Reduce costs by replacing high-maintenance voice systems.' },
        { text: 'Enhance customer trust with natural, human-like interactions.' },
        { text: 'Support global audiences with multilingual capabilities.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Website Creation',
      description: 'Launch high-performing websites that captivate and convert—all within 24 hours.',
      stats: [
        { value: '75%', label: 'faster go-to-market time' },
        { value: '50%', label: 'increase in user engagement' },
        { value: '40%', label: 'boost in SEO performance' }
      ],
      features: [
        { text: 'Eliminate long delays with rapid development processes.' },
        { text: 'Attract and retain visitors through sleek, user-friendly designs.' },
        { text: 'Boost visibility with built-in SEO optimization.' },
        { text: 'Save costs while delivering top-notch quality.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Cog,
      title: 'Advanced Custom Automation for Business',
      description: 'Free up your team by automating repetitive tasks and optimizing workflows.',
      stats: [
        { value: '60%', label: 'reduction in human errors' },
        { value: '50%', label: 'faster task completion' },
        { value: '40%', label: 'boost in team productivity' }
      ],
      features: [
        { text: 'Save time with end-to-end process automation.' },
        { text: 'Reduce errors by eliminating manual inputs.' },
        { text: 'Improve efficiency with tailored automation solutions.' },
        { text: 'Scale seamlessly as your business grows.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Database,
      title: 'Optimized CRM Solutions',
      description: 'Streamline customer relationships and maximize engagement with AI-powered CRM tools.',
      stats: [
        { value: '65%', label: 'boost in lead management efficiency' },
        { value: '40%', label: 'increase in customer retention' },
        { value: '55%', label: 'faster deal closures' }
      ],
      features: [
        { text: 'Centralize customer data for better organization.' },
        { text: 'Predict customer needs with actionable insights.' },
        { text: 'Increase retention rates through smarter strategies.' },
        { text: 'Boost collaboration across your sales and marketing teams.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: BarChart3,
      title: 'AI-Driven Sales Booster',
      description: 'Empower your sales team with tools designed to close deals faster and smarter.',
      stats: [
        { value: '45%', label: 'shorter sales cycles' },
        { value: '60%', label: 'improvement in lead tracking' },
        { value: '50%', label: 'increase in deal closure rates' }
      ],
      features: [
        { text: 'Shorten sales cycles with real-time insights and analytics.' },
        { text: 'Track prospects efficiently to stay ahead of the competition.' },
        { text: 'Personalize interactions to build trust and close more deals.' },
        { text: 'Save resources by automating repetitive tasks.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Mail,
      title: 'Personalized Email Outreach Automation',
      description: 'Engage your audience with emails that feel personal and convert effortlessly.',
      stats: [
        { value: '55%', label: 'higher open rates' },
        { value: '40%', label: 'increase in click-through rates' },
        { value: '60%', label: 'improved ROI on campaigns' }
      ],
      features: [
        { text: 'Target specific audiences with segmented campaigns.' },
        { text: 'Increase open rates through AI-optimized content and timing.' },
        { text: 'Automate follow-ups for consistent outreach.' },
        { text: 'Measure success with real-time performance analytics.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Target,
      title: 'AI-Enhanced Lead Generation',
      description: 'Identify and capture your ideal audience with precision-driven AI tools.',
      stats: [
        { value: '45%', label: 'increase in conversion' },
        { value: '35%', label: 'reduced cost per lead' },
        { value: '3X', label: 'more qualified leads' }
      ],
      features: [
        { text: 'Targeted Outreach with AI-driven insights' },
        { text: 'Efficient Scaling to reach 100s daily' },
        { text: 'Real-Time Analytics for ROI optimization' },
        { text: 'Lower acquisition costs with efficient prospecting.' }
      ],
      ctaText: 'LEARN MORE'
    },
    {
      icon: Twitter,
      title: 'AI-Powered Twitter Marketing',
      description: 'Dominate Twitter with AI-powered tools designed for maximum engagement and reach.',
      stats: [
        { value: '50%', label: 'increase in follower growth' },
        { value: '70%', label: 'higher engagement rates' },
        { value: '35%', label: 'better ROI on campaigns' }
      ],
      features: [
        { text: 'Grow faster with AI-driven content strategies.' },
        { text: 'Maximize interaction by posting at the optimal times.' },
        { text: 'Stay relevant by leveraging trending topics and hashtags.' },
        { text: 'Track and refine campaigns with real-time analytics.' }
      ],
      ctaText: 'LEARN MORE'
    }
  ];

  const servicesSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Services - Business Automation & Solutions",
    "description": "Comprehensive AI-powered business solutions including customer support, automation, CRM optimization, and custom AI development services.",
    "url": "https://solvenciaindustries.com/services",
    "mainEntity": {
      "@type": "Service",
      "name": "AI Business Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Solvencia Industries"
      },
      "serviceType": "AI Consulting and Development",
      "description": "Comprehensive AI solutions for business automation, customer support, and growth optimization"
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
          "name": "Services",
          "item": "https://solvenciaindustries.com/services"
        }
      ]
    }
  };

  return (
    <div className="pt-32">
      <SEOHead
        title="AI Services - Business Automation & Solutions"
        description="Comprehensive AI-powered business solutions including customer support, automation, CRM optimization, and custom AI development services for exponential growth."
        canonical="https://solvenciaindustries.com/services"
        keywords="AI services, business automation, customer support AI, CRM solutions, voice AI assistants, email automation, lead generation, Twitter marketing"
        schemaData={servicesSchemaData}
      />

      {/* Hero Section - Removed background color to let animated background show through */}
      <section className="text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-royal-500 to-royal-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">AI-Powered Business Solutions</h1>
            <p className="text-xl text-white mb-10 font-semibold [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
              Elevate your business with our tailored, cutting-edge AI services designed for exceptional performance and impact.
            </p>
            <Button to="/contact" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-royal-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our AI Services" 
            subtitle="Discover our comprehensive range of advanced AI solutions designed to transform your business operations and drive growth."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-royal-500/20 hover:border-royal-400/50 transition-all duration-300 hover:shadow-metallic"
              >
                <div className="p-8">
                  <div className="mb-6">
                    <service.icon size={40} className="text-royal-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-royal-500">{service.title}</h3>
                  
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-royal-500">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                      <span className="text-royal-400 mr-2">&gt;</span>
                        <span className="text-gray-700 text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-royal-500 hover:bg-royal-600 text-white py-2 rounded-md transition-colors duration-300 text-sm font-medium tracking-wider">
                    {service.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-royal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-royal-200 mb-10">
              Let's discuss how our tailored AI solutions can address your specific business challenges and drive exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" size="lg">
                Schedule a Consultation
              </Button>
              <Button to="/case-studies" variant="outline" size="lg">
                Explore Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;