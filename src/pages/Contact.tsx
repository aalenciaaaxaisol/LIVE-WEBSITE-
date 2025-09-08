import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Clock,
  Send,
  X,
  MapPin,
  Globe,
  Zap
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import ThemeToggle from '../components/ThemeToggle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    services: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const services = [
    'AI-Powered Customer Support',
    'AI-Appointment Booking & Management',
    'Human-Like Voice AI Assistants',
    'Lightning-Fast Website Creation',
    'Advanced Custom Automation for Business',
    'Optimized CRM Solutions',
    'AI-Driven Sales Booster',
    'Personalized Email Outreach Automation',
    'AI-Enhanced Lead Generation',
    'AI-Powered Twitter Marketing'
  ];

  const [currentTheme, setCurrentTheme] = useState('liquid-glass');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      if (prev.services.includes(service)) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const removeService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter(s => s !== service)
    }));
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const selectAllServices = () => {
    setFormData(prev => ({ ...prev, services: [...services] }));
  };

  const clearAllServices = () => {
    setFormData(prev => ({ ...prev, services: [] }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage(null);

  try {
    console.log('Form submitted:', formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Insert into Supabase
    /* const { data, error } = await supabase
      .from('contacts')
      .insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        services: formData.services // array from checkboxes
      }]); */

    const error = false; // Simulate success for demo

    if (error) {
      console.error('Supabase insert error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'There was an error submitting your form.'
      });
    } else {
      setSubmitMessage({
        type: 'success',
        text: 'Message received! Our AI systems are processing your request.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        services: []
      });
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    setSubmitMessage({
      type: 'error',
      text: 'There was an error submitting your form.'
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact - Let's Build the Future Together",
    "description": "Get in touch with Solvencia Industries' AI experts. Contact us for consultations, project discussions, and custom AI solution development.",
    "url": "https://solvenciaindustries.com/contact",
    "mainEntity": {
      "@type": "ContactPage",
      "name": "Contact Solvencia Industries",
      "description": "Connect with our AI experts to transform your business vision into success"
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
          "name": "Contact",
          "item": "https://solvenciaindustries.com/contact"
        }
      ]
    }
  };

  // Theme detection
  React.useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme') || 'liquid-glass';
    setCurrentTheme(theme);
  }, []);

  return (
    <>
      {/* Time Travel Background for Contact Page */}
      {currentTheme === 'time-travel' && (
        <div className="time-travel-bg"></div>
      )}
      
    <div className="pt-8">
      <SEOHead
        title="Contact - Let's Build the Future Together"
        description="Get in touch with Solvencia Industries' AI experts. Contact us for consultations, project discussions, and custom AI solution development for your business."
        canonical="https://solvenciaindustries.com/contact"
        keywords="contact Solvencia Industries, AI consultation, business automation contact, AI project inquiry, custom AI development"
        schemaData={contactSchemaData}
      />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className={`py-16 md:py-20 ${currentTheme === 'time-travel' ? 'contact-hero circuit-pattern' : ''}`}>
        <div className="glass-panel mx-4 sm:mx-6 lg:mx-8">
          <div className={`max-w-3xl mx-auto text-center p-8 ${currentTheme === 'time-travel' ? 'geometric-accent' : ''}`}>
            <div className="flex items-center justify-center mb-6">
              <Zap size={48} className={`${currentTheme === 'time-travel' ? 'text-golden-circuit' : 'text-[var(--neon-blue)]'} mr-4`} />
              <h1 className={`text-4xl md:text-5xl font-bold holographic-text ${currentTheme === 'time-travel' ? 'text-black' : ''}`} 
                  style={{ fontFamily: currentTheme === 'time-travel' ? 'Inter, sans-serif' : 'Orbitron, monospace' }}>
                Let's Build the Future of Your Business Together
              </h1>
            </div>
            <p className={`text-xl mb-10 ${currentTheme === 'time-travel' ? 'text-gray-700' : 'text-[var(--text-secondary)]'}`}>
              Get in touch with our experts and explore how Solvencia can transform your vision into success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 relative">
        <div className={`glass-panel mx-4 sm:mx-6 lg:mx-8 ${currentTheme === 'time-travel' ? 'circuit-pattern' : ''}`}>
          <div className="max-w-6xl mx-auto relative z-10 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className={`${currentTheme === 'time-travel' ? 'contact-address-section' : 'glass-panel p-8'} h-full`}>
                  <h2 className={`text-2xl font-bold mb-6 holographic-text ${currentTheme === 'time-travel' ? 'text-black' : ''}`}>Contact Information</h2>
                  <div className="space-y-4">
                    <div className={`${currentTheme === 'time-travel' ? 'contact-info-item' : 'flex items-start'}`}>
                      <div className={`${currentTheme === 'time-travel' ? 'contact-icon-wrapper' : 'flex-shrink-0 mt-1'}`}>
                        <Mail className={`${currentTheme === 'time-travel' ? 'text-golden-circuit' : 'text-[var(--neon-blue)]'}`} size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className={`font-semibold ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>Email Address</h3>
                        <div className={`${currentTheme === 'time-travel' ? 'text-gray-700' : 'text-[var(--text-secondary)]'} space-y-1`}>
                          <p className="font-medium">Company Email:</p>
                          <p className="text-sm">alliance@solvenciaindustries.com</p>
                          <p className="font-medium mt-2">Owner's Email:</p>
                          <p className="text-sm">ashunuke@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`${currentTheme === 'time-travel' ? 'contact-info-item' : 'flex items-start'}`}>
                      <div className={`${currentTheme === 'time-travel' ? 'contact-icon-wrapper' : 'flex-shrink-0 mt-1'}`}>
                        <Phone className={`${currentTheme === 'time-travel' ? 'text-golden-circuit' : 'text-[var(--neon-blue)]'}`} size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className={`font-semibold ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>Phone Number</h3>
                        <p className={`${currentTheme === 'time-travel' ? 'text-gray-700' : 'text-[var(--text-secondary)]'} font-mono text-lg`}>+91 814 910 8744</p>
                      </div>
                    </div>
                    
                    <div className={`${currentTheme === 'time-travel' ? 'contact-info-item' : 'flex items-start'}`}>
                      <div className={`${currentTheme === 'time-travel' ? 'contact-icon-wrapper' : 'flex-shrink-0 mt-1'}`}>
                        <Clock className={`${currentTheme === 'time-travel' ? 'text-golden-circuit' : 'text-[var(--neon-blue)]'}`} size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className={`font-semibold ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>Working Hours</h3>
                        <p className={`${currentTheme === 'time-travel' ? 'text-gray-700' : 'text-[var(--text-secondary)]'} font-medium`}>24/7 Always On Always Ready</p>
                        <p className={`${currentTheme === 'time-travel' ? 'text-gray-600' : 'text-[var(--text-secondary)]'} text-sm`}>No rest Only Automation</p>
                      </div>
                    </div>
                    
                    <div className={`${currentTheme === 'time-travel' ? 'contact-info-item' : 'flex items-start'}`}>
                      <div className={`${currentTheme === 'time-travel' ? 'contact-icon-wrapper' : 'flex-shrink-0 mt-1'}`}>
                        <Globe className={`${currentTheme === 'time-travel' ? 'text-golden-circuit' : 'text-[var(--neon-blue)]'}`} size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className={`font-semibold ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>Service Area</h3>
                        <p className={`${currentTheme === 'time-travel' ? 'text-gray-700' : 'text-[var(--text-secondary)]'}`}>India & Worldwide</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${currentTheme === 'time-travel' ? 'social-links' : 'mt-8 pt-8 border-t border-[var(--glass-border)]'}`}>
                    <h3 className={`font-semibold mb-4 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>Connect With Us</h3>
                    <div className={`${currentTheme === 'time-travel' ? 'flex gap-4' : 'flex space-x-4'}`}>
                      {[
                        { name: 'linkedin', url: 'https://www.linkedin.com/in/ashish-yadav-0b839b342/' },
                        { name: 'twitter', url: 'https://x.com/iamAashuuu' },
                        { name: 'whatsapp', url: 'http://wa.me/918149108744' },
                        { name: 'instagram', url: 'https://www.instagram.com/aashu_a4/' }
                      ].map((social) => (
                        <a 
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${currentTheme === 'time-travel' ? 'social-link' : 'glass-button w-10 h-10 rounded-full flex items-center justify-center neon-glow p-0'}`}
                        >
                          <span className="sr-only">{social.name}</span>
                          <svg className={`w-5 h-5 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d={
                              social.name === 'linkedin' 
                                ? 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                                : social.name === 'twitter'
                                ? 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
                                : social.name === 'whatsapp'
                                ? 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
                                 : 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'
                            } />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className={`${currentTheme === 'time-travel' ? 'contact-form-container glossy-surface' : 'glass-panel'} p-8`}>
                  <h2 className={`text-2xl font-bold mb-6 holographic-text ${currentTheme === 'time-travel' ? 'text-black' : ''}`}>Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className={`block text-sm font-medium mb-1 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="glass-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={`block text-sm font-medium mb-1 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="glass-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="glass-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className={`block text-sm font-medium mb-1 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="glass-input"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className={`block text-sm font-medium mb-1 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>
                          Services of Interest
                        </label>
                        
                        {/* Service Selection Controls */}
                        <div className="flex gap-2 mb-3">
                          <button 
                            type="button" 
                            onClick={toggleServicesDropdown}
                            className={`glass-button text-sm ${currentTheme === 'time-travel' ? 'circuit-glow' : ''}`}
                          >
                            {showServicesDropdown ? 'Hide Services' : 'Select Services'}
                          </button>
                          <button type="button" onClick={selectAllServices} className="glass-button text-sm">Select All</button>
                          <button type="button" onClick={clearAllServices} className="glass-button text-sm">Clear All</button>
                        </div>
                        
                        {/* Selected Services Display */}
                        <div className="mb-3 flex flex-wrap gap-2">
                          {formData.services.map(service => (
                            <div key={service} className={`${currentTheme === 'time-travel' ? 'selected-service-tag' : 'glass-button px-3 py-1 text-sm flex items-center'}`}>
                              {service}
                              <button 
                                type="button" 
                                onClick={() => removeService(service)}
                                className="ml-1 focus:outline-none"
                              >
                                <X size={14} className={`${currentTheme === 'time-travel' ? 'text-golden-circuit hover:text-red-500' : 'text-[var(--neon-blue)]'}`} />
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        {/* Services Dropdown with Scrolling */}
                        {showServicesDropdown && (
                        <div className={`${currentTheme === 'time-travel' ? 'services-dropdown' : 'glass-panel'} p-4`}>
                          <div className="mb-2 text-sm text-gray-600">Select multiple services (scroll to see all {services.length} options):</div>
                          {services.map((service) => (
                            <div key={service} className="mb-2 last:mb-0">
                              <label className="inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={formData.services.includes(service)}
                                  onChange={() => handleServiceToggle(service)}
                                  className={`service-checkbox w-4 h-4 rounded focus:ring-2 ${
                                    currentTheme === 'time-travel' 
                                      ? 'text-golden-circuit bg-white border-golden-circuit focus:ring-golden-circuit' 
                                      : 'text-[var(--neon-blue)] bg-transparent border-[var(--glass-border)] focus:ring-[var(--neon-blue)]'
                                  }`}
                                />
                                <span className={`ml-2 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>{service}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                        )}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className={`block text-sm font-medium mb-1 ${currentTheme === 'time-travel' ? 'text-black' : 'text-[var(--text-primary)]'}`}>
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="glass-input resize-none"
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="text-right">
                        <Button 
                          type="submit" 
                          className="flex items-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} className="mr-2" /> Send Message
                            </>
                          )}
                        </Button>
                      </div>
                      
                      {/* Submission Status Messages */}
                      {submitMessage && (
                        <div className={`p-4 rounded-md transition-all duration-300 ${
                          submitMessage.type === 'success' 
                            ? currentTheme === 'time-travel' 
                              ? 'bg-green-50 border-2 border-green-400 text-green-800' 
                              : 'glass-panel border-green-500 text-green-400'
                            : currentTheme === 'time-travel'
                              ? 'bg-red-50 border-2 border-red-400 text-red-800'
                              : 'glass-panel border-red-500 text-red-400'
                        }`}>
                          {submitMessage.text}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;