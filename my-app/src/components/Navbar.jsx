import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

// ✅ Import logos
import logoRed from '../assets/logo-red.png';
import logoWhite from '../assets/logo-white.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ✅ LOGO + TEXT */}
          <div className="flex items-center gap-3 cursor-pointer">

            {/* Logo */}
            <img 
              src={isScrolled ?logoRed : logoWhite} 
              alt="TechBro Logo"
              className="h-20 w-20 object-contain"
            />

            {/* Text */}
            <div className="text-2xl md:text-3xl font-black tracking-tight">
              <span className="text-white">TECH</span>
              <span className="text-red-600"> BRO</span>
            </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-red-600 transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}

            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 shadow-lg shadow-red-600/30"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-red-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-red-600/20">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white hover:text-red-600 transition-colors font-medium py-2"
              >
                {link.name}
              </button>
            ))}

            <Button 
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-red-600 hover:bg-red-700 text-white mt-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;