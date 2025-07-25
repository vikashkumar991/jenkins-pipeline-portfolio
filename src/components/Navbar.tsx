import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, Briefcase, Mail, FolderOpen } from 'lucide-react';

const FlameHeader: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <div className="fire-container">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="fire-particle"
          style={{
            left: `${10 + i * 12}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1.5 + Math.random() * 1}s`,
            height: '15px',
            width: '3px'
          }}
        />
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { id: 'hero', label: 'Home', icon: Code },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glassmorphism border-b border-orange-500/20 relative overflow-hidden"
    >
      <FlameHeader />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Vikash
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-orange-500/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-orange-500/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-orange-500/20"
          >
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-orange-500/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;