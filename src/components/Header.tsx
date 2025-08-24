import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit, Home, Briefcase, FolderOpen, FileText, BookOpen, User, Phone, Zap } from 'lucide-react';
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
          scrolled ? 'nav-glass py-3' : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="luxury-glow">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div className="flex items-center space-x-1 group">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap size={28} className="text-[var(--neon-blue)] drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" />
                </motion.div>
                <motion.span 
                  className="text-xl font-bold holographic-text whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Solvencia Industries
                </motion.span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
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
                  className={`glass-button text-sm font-medium luxury-glow ${
                    location.pathname === link.path
                      ? 'border-[var(--neon-blue)] text-[var(--neon-blue)] shadow-[0_0_25px_rgba(0,240,255,0.3)]'
                      : 'hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]'
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
              className="glass-button luxury-glow p-3"
              aria-label="Toggle sitemap"
              aria-expanded={showSitemap}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="glass-button luxury-glow p-3"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} className="text-[var(--text-primary)]" /> : <Menu size={24} className="text-[var(--text-primary)]" />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden glass-panel absolute top-full left-0 right-0 m-4 overflow-hidden"
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
                    className={`glass-button w-full justify-start luxury-glow ${
                      location.pathname === link.path
                        ? 'border-[var(--neon-blue)] text-[var(--neon-blue)]'
                        : 'hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]'
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
            className="hidden md:block fixed top-20 right-4 glass-panel z-40 min-w-[250px]"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="navigation"
            aria-label="Site map"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 holographic">Site Map</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`glass-button text-sm w-full justify-start luxury-glow ${
                      location.pathname === link.path
                        ? 'border-[var(--neon-blue)] text-[var(--neon-blue)]'
                        : 'hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]'
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