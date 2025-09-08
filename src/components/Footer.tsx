import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Linkedin, Twitter, Instagram, MessageCircle as WhatsApp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Loading skeleton component
const FooterSkeleton = () => (
  <div className="fireglass-panel pt-16 pb-6 relative z-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-6 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="h-4 bg-gray-700 rounded w-full"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => {
  // Animation variants with optimized performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5, 
      transition: { duration: 0.3, ease: "easeInOut" } 
    }
  };

  const socialVariants = {
    initial: { 
      backgroundColor: "rgba(6, 182, 212, 0)",
      scale: 1
    },
    hover: { 
      backgroundColor: "rgba(6, 182, 212, 1)",
      color: "#ffffff",
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <Suspense fallback={<FooterSkeleton />}>
      <motion.footer 
        className="fireglass-panel mx-4 sm:mx-6 lg:mx-8 mb-4 pt-16 pb-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <motion.div variants={childVariants}>
              <div className="flex items-center space-x-2 mb-4">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }} 
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Flame size={24} className="text-[var(--ember-orange)]" />
                </motion.div>
                <motion.span 
                  className="text-xl font-bold molten-text"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  Solvencia Industries
                </motion.span>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">
                Powered by Innovation. Driven by Results.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                Join hundreds of businesses transforming their future with Solvencia Industries.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ashish-yadav-0b839b342/" },
                  { icon: Twitter, href: "https://x.com/iamAashuuu" },
                  { icon: Instagram, href: "https://www.instagram.com/aashu_a4/" },
                  { icon: WhatsApp, href: "http://wa.me/918149108744" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--ember-orange)] p-2 rounded-full flex items-center justify-center fireglass-button"
                    variants={socialVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={childVariants}>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Portfolio', path: '/portfolio' },
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index) => (
                  <motion.li key={index} variants={linkVariants} whileHover="hover">
                    <Link to={link.path} className="text-[var(--text-secondary)] hover:text-[var(--ember-orange)] transition-colors duration-300">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={childVariants}>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
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
                ].map((service, index) => (
                  <motion.li key={index} variants={linkVariants} whileHover="hover">
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--ember-orange)] transition-colors duration-300">
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={childVariants}>
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Stay updated with our latest AI insights and innovations.
              </p>
              <form className="flex">
                <motion.input
                  type="email"
                  placeholder="Your email address"
                  className="fireglass-input rounded-l rounded-r-none"
                  whileFocus={{ borderColor: 'var(--molten-gold)' }}
                />
                <motion.button
                  type="submit"
                  className="fireglass-button rounded-r rounded-l-none px-4 py-2 flex items-center"
                  whileHover={{ 
                    borderColor: "var(--molten-gold)",
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-[var(--fireglass-border)] pt-6 flex flex-col md:flex-row justify-between items-center"
            variants={childVariants}
          >
            <p className="text-[var(--text-muted)] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Solvencia Industries. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#" 
                  className="text-[var(--text-muted)] hover:text-[var(--ember-orange)] text-sm transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </Suspense>
  );
};

export default Footer;