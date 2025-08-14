import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import { Check, Quote } from 'lucide-react';

interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  testimonialAttribution: string;
  image: string;
}

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: "ai-customer-support",
      clientName: "E-commerce Brand",
      industry: "Retail",
      title: "AI-Powered Customer Support",
      challenge: "The client struggled with high response times, customer complaints, and rising support costs. Their human support team was overwhelmed with repetitive queries.",
      solution: "Solvencia Industries deployed an AI-driven chatbot that handled FAQs, processed returns, and provided real-time tracking updates. The bot integrated with WhatsApp, email, and live chat for a seamless experience.",
      results: [
        "65% faster response time",
        "50% reduction in customer complaints",
        "40% lower operational costs"
      ],
      testimonial: "Since implementing Solvencia's AI, our customers get instant replies, and we've cut down on support costs dramatically. It's been a game changer!",
      testimonialAttribution: "CEO, E-commerce Brand",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "appointment-booking",
      clientName: "High-Ticket Coaching Business",
      industry: "Education",
      title: "Appointment Booking & Managing AI",
      challenge: "Missed appointments and scheduling errors led to revenue loss. The client's manual booking process was time-consuming and inefficient.",
      solution: "We built an AI-powered appointment scheduling system that automatically handled bookings, sent reminders, and rescheduled missed appointments.",
      results: [
        "70% improved booking accuracy",
        "30% increase in appointment show-ups",
        "45% reduction in no-shows"
      ],
      testimonial: "We no longer worry about double bookings or missed appointments. The AI handles everything seamlessly!",
      testimonialAttribution: "Business Owner",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "voice-ai-assistants",
      clientName: "Real Estate Agency",
      industry: "Real Estate",
      title: "Human-Like Voice AI Assistants",
      challenge: "Prospects often hung up on robotic IVR systems, leading to lost sales opportunities.",
      solution: "Solvencia introduced a human-like voice AI assistant to qualify leads and provide 24/7 support. The assistant could answer FAQs, schedule property visits, and handle inquiries in multiple languages.",
      results: [
        "50% reduction in response times",
        "60% boost in customer satisfaction",
        "35% cost savings on support staffing"
      ],
      testimonial: "Customers love how natural the AI sounds! It has improved lead conversions and reduced workload on our agents.",
      testimonialAttribution: "Sales Manager",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "website-creation",
      clientName: "Startup SaaS Company",
      industry: "Technology",
      title: "Lightning-Fast Website Creation",
      challenge: "The company needed a professional website within 24 hours to launch their product but was stuck with slow developers.",
      solution: "Solvencia built and launched a high-performance website in just one day, optimized for SEO and user engagement.",
      results: [
        "75% faster go-to-market time",
        "50% increase in user engagement",
        "40% boost in SEO performance"
      ],
      testimonial: "From nothing to a stunning website in a day—Solvencia made it happen!",
      testimonialAttribution: "Founder, SaaS Startup",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "business-automation",
      clientName: "Logistics Company",
      industry: "Logistics",
      title: "Advanced Custom Automation for Business",
      challenge: "Manual workflows caused delays, errors, and inefficiencies in tracking shipments and inventory.",
      solution: "We automated inventory management, order processing, and customer updates, eliminating manual work.",
      results: [
        "60% reduction in human errors",
        "50% faster task completion",
        "40% boost in team productivity"
      ],
      testimonial: "We've saved thousands of hours with automation. Our business runs smoother than ever.",
      testimonialAttribution: "Operations Head",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "crm-solutions",
      clientName: "Digital Marketing Agency",
      industry: "Marketing",
      title: "Optimized CRM Solutions",
      challenge: "The agency struggled to track leads, follow-ups, and client interactions efficiently.",
      solution: "Solvencia implemented an AI-powered CRM to automate lead management, reminders, and analytics.",
      results: [
        "65% boost in lead management efficiency",
        "40% increase in customer retention",
        "55% faster deal closures"
      ],
      testimonial: "The CRM helps us close deals faster and keep clients engaged. It's a must-have!",
      testimonialAttribution: "Managing Director",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "sales-booster",
      clientName: "B2B SaaS Company",
      industry: "Technology",
      title: "AI-Driven Sales Booster",
      challenge: "Low lead conversion rates and long sales cycles were affecting revenue growth.",
      solution: "We provided an AI-driven sales assistant that analyzed prospects, suggested personalized outreach strategies, and automated follow-ups.",
      results: [
        "45% shorter sales cycles",
        "60% improvement in lead tracking",
        "50% increase in deal closure rates"
      ],
      testimonial: "Our sales team is closing more deals in less time—AI gives us an unfair advantage.",
      testimonialAttribution: "Head of Sales",
      image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "email-automation",
      clientName: "Online Course Creator",
      industry: "Education",
      title: "Personalized Email Outreach Automation",
      challenge: "Low email open rates and engagement were hurting sales.",
      solution: "Solvencia set up an AI-powered email automation system, optimizing send times and personalizing content for each recipient.",
      results: [
        "55% higher open rates",
        "40% increase in click-through rates",
        "60% improved ROI on campaigns"
      ],
      testimonial: "The AI knows exactly when to send emails for maximum engagement. Our sales have skyrocketed!",
      testimonialAttribution: "Course Creator",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "lead-generation",
      clientName: "Fintech Startup",
      industry: "Finance",
      title: "AI-Enhanced Lead Generation",
      challenge: "The startup struggled to generate high-quality leads without overspending on ads.",
      solution: "We deployed an AI-powered lead generation system that identified, segmented, and engaged potential customers.",
      results: [
        "45% increase in conversion rates",
        "35% reduction in cost per lead",
        "3X more qualified leads"
      ],
      testimonial: "We're getting better leads at a lower cost—Solvencia's AI is a game changer!",
      testimonialAttribution: "Growth Manager",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "twitter-marketing",
      clientName: "Personal Finance Influencer",
      industry: "Media",
      title: "AI-Powered Twitter Marketing",
      challenge: "Struggled to grow their Twitter audience and engagement.",
      solution: "We implemented an AI-driven Twitter strategy, optimizing tweet timing, content, and hashtag selection.",
      results: [
        "50% increase in follower growth",
        "70% higher engagement rates",
        "35% better ROI on campaigns"
      ],
      testimonial: "My Twitter growth exploded after using AI! Engagement is at an all-time high.",
      testimonialAttribution: "Finance Influencer",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const TimelineCase = ({ study, index }: { study: CaseStudy, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-20 last:mb-0"
      >
        <div className="flex flex-col md:flex-row items-start">
          {/* Timeline entry in left panel */}
          <div className="md:w-1/4 md:pr-8 md:sticky md:top-32 self-start mb-6 md:mb-0 flex flex-row md:flex-col items-center md:items-start">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-royal-500 shadow-lg z-10 mr-4 md:mr-0"></div>
              <div className="md:ml-4 md:mt-2">
                <p className="font-semibold text-lg md:mt-0">{study.title}</p>
                <p className="text-sm text-gray-500">
                  <span className="text-royal-500 font-medium">{study.clientName}</span> • {study.industry}
                </p>
              </div>
            </div>
            {/* Vertical line connecting to next item */}
            {index < caseStudies.length - 1 && (
              <div className="hidden md:block w-0.5 bg-gray-300 absolute top-6 bottom-0 left-3 h-full min-h-[150px]"></div>
            )}
          </div>
          
          {/* Case study content in right panel */}
          <div className="md:w-3/4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-metallic border border-royal-100">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Challenge:</h4>
                  <p className="text-gray-600 mb-3 text-sm">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                  <p className="text-gray-600 mb-3 text-sm">{study.solution}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-1">Results:</h4>
                  <ul className="space-y-1 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={16} className="text-royal-500 mt-0.5 mr-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Testimonial */}
                <div className="bg-royal-50 p-4 rounded-lg">
                  <div className="flex mb-2">
                    <Quote size={18} className="text-royal-400" />
                  </div>
                  <p className="text-gray-600 italic text-sm mb-2">{study.testimonial}</p>
                  <p className="text-right text-gray-500 text-xs">– {study.testimonialAttribution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const caseStudiesSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Case Studies - Chronicles of Success",
    "description": "In-depth case studies of Solvencia Industries' premium AI solutions, showcasing transformative results across industries and business challenges.",
    "url": "https://solvenciaindustries.com/case-studies",
    "mainEntity": {
      "@type": "Article",
      "headline": "AI Success Stories and Case Studies",
      "author": {
        "@type": "Organization",
        "name": "Solvencia Industries"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Solvencia Industries"
      },
      "description": "Detailed narratives of premium AI solutions showcasing excellence and transformative impact"
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
          "name": "Case Studies",
          "item": "https://solvenciaindustries.com/case-studies"
        }
      ]
    }
  };

  return (
    <div className="pt-32">
      <SEOHead
        title="Case Studies - Chronicles of Success"
        description="In-depth case studies of Solvencia Industries' premium AI solutions, showcasing transformative results across industries including customer support, automation, and business growth."
        canonical="https://solvenciaindustries.com/case-studies"
        keywords="AI case studies, business transformation, customer support automation, AI success stories, business automation results, AI ROI"
        schemaData={caseStudiesSchemaData}
      />

      {/* Hero Section - Removed background color to let animated background show through */}
      <section className="text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-royal-500 to-royal-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">Chronicles of Success</h1>
            <p class="text-xl text-gray-700 mb-10">
              In-depth narratives of our premium AI solutions, illustrating how we craft excellence and drive unparalleled results.
            </p>
            <Button to="/contact" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Timeline */}
      <section className="py-16 bg-royal-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Success Stories" 
            subtitle="Explore detailed case studies of how our AI solutions have transformed businesses across industries."
            center
          />
          
          <div className="relative mt-16">
            {/* Timeline Items */}
            <div className="relative">
              {caseStudies.map((study, index) => (
                <TimelineCase key={study.id} study={study} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Impact We Deliver</h2>
            <p className="text-gray-600">
              Our AI solutions consistently produce exceptional results across multiple metrics and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "55%",
                label: "Average Cost Reduction",
                description: "Our solutions typically reduce operational costs by 55% through automation and optimization."
              },
              {
                value: "70%",
                label: "Efficiency Improvement",
                description: "Clients experience an average 70% improvement in process efficiency after implementing our AI systems."
              },
              {
                value: "96%",
                label: "Accuracy Rate",
                description: "Our AI models achieve an average accuracy rate of 96%, significantly outperforming manual processes."
              },
              {
                value: "10x",
                label: "Return on Investment",
                description: "Clients typically see a 10x return on their investment within the first year of implementation."
              }
            ].map((stat, index) => (
              <div key={index} className="bg-royal-50/80 p-6 rounded-lg text-center shadow-metallic">
                <div className="text-4xl font-bold text-royal-500 mb-2">{stat.value}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-royal-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white/90 p-8 md:p-12 rounded-xl shadow-metallic">
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Final Thoughts: Elevate Your Business with AI-Driven Innovation</h3>
              <p className="text-gray-700">
                At Solvencia Industries, we don't just offer AI solutions—we engineer business transformations. These case studies are proof of how our cutting-edge automation, intelligent workflows, and AI-driven strategies have helped businesses reduce costs, increase efficiency, and drive exponential growth.
              </p>
              <p className="text-gray-700">
                Whether you're looking to enhance customer support, streamline operations, boost sales, or dominate social media, our AI-powered services are designed to give you an unfair advantage in your industry.
              </p>
              <p className="text-gray-700">
                The future belongs to businesses that embrace AI—are you ready to lead the way?
              </p>
              <p className="text-gray-700">
                Let's build something extraordinary together. Get in touch today.
              </p>
              <div className="text-right mt-4">
                <p className="font-bold text-gray-900">Ashish Yadav</p>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-royal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
            <p className="text-xl text-royal-200 mb-10">
              Let's discuss how our AI solutions can deliver exceptional results for your business.
            </p>
            <Button to="/contact" size="lg">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;