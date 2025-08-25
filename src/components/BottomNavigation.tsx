import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Bot, FolderOpen, Star, User, Lightbulb, Phone } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/services', icon: Bot, label: 'Services' },
    { path: '/case-studies', icon: FolderOpen, label: 'Case Studies' },
    { path: '/portfolio', icon: Star, label: 'Portfolio' },
    { path: '/about', icon: User, label: 'About Us' },
    { path: '/blog', icon: Lightbulb, label: 'Blog' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;