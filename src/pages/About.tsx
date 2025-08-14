import React from 'react';
import { Check, Award, Globe, Users, Star, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alexander Mitchell",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in AI and machine learning, Alexander founded Solvencia Industries with a vision to make advanced AI solutions accessible to businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1741431330514-1235e4d86476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We are committed to delivering the highest quality AI solutions that exceed client expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, treating their challenges as our own and building long-term partnerships."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, staying at the forefront of AI technology."
    },
    {
      icon: Globe,
      title: "Ethics",
      description: "We develop AI responsibly, with a strong commitment to transparency, fairness, and privacy."
    }
  ];

  const aboutSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About - Meet the Mind Behind Solvencia",
    "description": "Learn about Solvencia Industries' mission, values, and leadership. Discover how we deliver tailored AI strategies to revolutionize industries and drive excellence.",
    "url": "https://solvenciaindustries.com/about",
    "mainEntity": {
      "@type": "AboutPage",
      "name": "About Solvencia Industries",
      "description": "Trusted partner in delivering tailored AI strategies to revolutionize industries and drive excellence"
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
          "name": "About",
          "item": "https://solvenciaindustries.com/about"
        }
      ]
    }
  };

  return (
    <div className="pt-32">
      <SEOHead
        title="About - Meet the Mind Behind Solvencia"
        description="Learn about Solvencia Industries' mission, values, and leadership. Discover how we deliver tailored AI strategies to revolutionize industries and drive excellence."
        canonical="https://solvenciaindustries.com/about"
        keywords="about Solvencia Industries, AI company mission, Ashish Yadav founder, AI consulting team, business values, AI innovation"
        schemaData={aboutSchemaData}
      />

      {/* Hero Section - Removed background color to let animated background show through */}
      <section className="text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-royal-500 to-royal-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">Meet the Mind Behind Solvencia</h1>
            <p className="text-xl text-white mb-10 font-semibold [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]">
              A trusted partner in delivering tailored AI strategies to revolutionize industries and drive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Welcome to Solvencia Industries, where cutting-edge Al meets tailored innovation. When I founded this company, my vision was clear: to create solutions that empower businesses to achieve their fullest potential with sophistication and precision.
                </p>
                <p className="leading-relaxed">
                  At Solvencia, we understand that every business is unique, which is why we approach each challenge with care, creativity, and dedication.
                </p>
                <p className="leading-relaxed">
                  Our solutions are designed to not just meet your needs, but to elevate your vision-seamlessly integrating the power of Al into your growth journey.
                </p>
                <p className="leading-relaxed">
                  We don't follow trends—we automate them. By leading with innovation, we aim to set the standard, crafting meaningful partnerships with businesses that value originality and strive for excellence. Your success is our purpose, and every solution we craft is a reflection of that commitment. Together, let's redefine possibilities and create a future worth aspiring to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-royal-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our approach to AI development and client relationships."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/90 p-8 rounded-xl shadow-metallic text-center">
                <div className="inline-flex items-center justify-center p-3 bg-royal-100 rounded-full mb-6">
                  <value.icon size={28} className="text-royal-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the experts who are driving innovation and excellence at Solvencia Industries."
            center
          />
          
          {/* The grid container has been removed as requested */}
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-royal-50/70 rounded-xl overflow-hidden shadow-metallic mx-auto max-w-lg mb-8">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1741431330514-1235e4d86476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ashish Yadav" 
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ashish Yadav</h3>
                <p className="text-royal-500 mb-4">{member.position}</p>
                <p className="text-gray-600">Driven by a passion for innovation, I founded Solvencia Industries to bring a fresh perspective to AI solutions. I believe in creating technology that not only works but truly makes a difference. Let's innovate and grow together.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-royal-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Solvencia</h2>
              <p className="text-gray-700 mb-8">
                We combine technical expertise with business acumen to deliver AI solutions that address real-world challenges and drive measurable results.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Technical Excellence",
                    description: "Our team includes top-tier AI researchers and engineers with expertise across multiple domains."
                  },
                  {
                    title: "Tailored Solutions",
                    description: "We create custom AI solutions designed specifically for your unique business challenges."
                  },
                  {
                    title: "End-to-End Support",
                    description: "From initial strategy to implementation and ongoing optimization, we're with you every step of the way."
                  },
                  {
                    title: "Measurable Results",
                    description: "We focus on delivering quantifiable business outcomes and ROI from your AI investments."
                  }
                ].map((point, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="text-royal-500" size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* The stats box that was here has been removed as requested */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-royal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with Solvencia?</h2>
            <p className="text-xl text-royal-200 mb-10">
              Let's discuss how our AI expertise can help your business achieve extraordinary results.
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;