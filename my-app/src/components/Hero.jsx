import React, { useEffect, useState } from 'react';
import { ArrowRight} from 'lucide-react';
import { Button } from './ui/button';
import bgImage from '../assets/background.jpeg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage: `url(${bgImage})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>
{/* Background */}
<div className="absolute inset-0 z-0">
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${bgImage})`,
      transform: `translateY(${scrollY * 0.5}px)`
    }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
</div>
      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          transform: `translateY(${scrollY * 0.3}px)`
        }} />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge
          <div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/30 rounded-full px-6 py-2.5 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-5 h-5 text-red-600" />
            <span className="text-white font-medium text-sm">Your Digital Success Partner</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
            <span className="block">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mt-2">
              Digital Presence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tech Bro delivers cutting-edge digital marketing solutions that drive real results. 
            From AI-powered campaigns to stunning brand identities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              onClick={scrollToContact}
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg shadow-2xl shadow-red-600/30 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Projects' },
              { value: '250+', label: 'Clients' },
              { value: '98%', label: 'Success Rate' },
              { value: '6', label: 'Cities' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-red-600 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
