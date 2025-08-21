import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit, Home, Briefcase, FolderOpen, FileText, BookOpen, User, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSitemap, setShowSitemap] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSitemap = () => {
    setShowSitemap(!showSitemap);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowSitemap(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Portfolio', path: '/portfolio', icon: FolderOpen },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.25, 
        delay: 0.1 + (i * 0.05), 
        ease: "easeOut" 
      } 
    }),
    hover: { 
      color: "#4169E1", 
      scale: 1.02, 
      transition: { duration: 0.2 } 
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.25,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.25,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container mx-auto px-1 sm:px-2 lg:px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div className="flex items-center space-x-1 group">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <BrainCircuit size={24} className="text-royal-500 group-hover:text-royal-400 transition-all duration-300 filter drop-shadow-[0_0_5px_rgba(65,105,225,0.5)]" />
                </motion.div>
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-royal-500 to-royal-700 bg-clip-text text-transparent filter drop-shadow-[0_0_5px_rgba(65,105,225,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(65,105,225,0.6)] whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Solvencia Industries
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-[25px] whitespace-nowrap" role="navigation" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Link
                  to={link.path}
                  className={`text-base font-medium tracking-wide transition-colors hover:text-royal-500 mr-6 ${
                    location.pathname === link.path
                      ? 'text-royal-500'
                      : scrolled
                      ? 'text-gray-800'
                      : 'text-gray-800'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Sitemap Toggle Button */}
            <motion.button
              onClick={toggleSitemap}
              className="text-gray-800 hover:text-royal-500 focus:outline-none ml-4 p-2 rounded-md"
              aria-label="Toggle sitemap"
              aria-expanded={showSitemap}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-royal-500 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white/90 backdrop-blur-sm shadow-lg absolute top-full left-0 right-0 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={mobileNavItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2 px-3 text-base font-medium rounded-md ${
                      location.pathname === link.path
                        ? 'bg-royal-50 text-royal-500'
                        : 'text-gray-800 hover:bg-royal-50 hover:text-royal-500'
                    }`}
                    onClick={closeMenu}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    <div className="flex items-center">
                      <link.icon size={18} className="mr-2" />
                    {link.name}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Desktop Sitemap Dropdown */}
      <AnimatePresence>
        {showSitemap && (
          <motion.div 
            className="hidden md:block fixed top-20 right-4 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg border border-gray-200 z-40 min-w-[250px]"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="navigation"
            aria-label="Site map"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Site Map</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center py-2 px-3 text-sm rounded-md transition-colors ${
                      location.pathname === link.path
                        ? 'bg-royal-50 text-royal-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-royal-600'
                    }`}
                    onClick={closeMenu}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    <link.icon size={16} className="mr-2" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
};

export default Header;