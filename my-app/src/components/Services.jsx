import React, { useState } from 'react';
import { services } from '../data/mock';
import { 
  Share2, Palette, Code, Target, Video, Search, 
  MessageCircle, FileText, TrendingUp 
} from 'lucide-react';

const iconMap = {
  Share2, Palette, Code, Target, Video, Search,
  MessageCircle, FileText, TrendingUp
};

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider border border-red-600/30 px-4 py-2 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            What We <span className="text-red-600">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your brand and drive measurable results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isHovered = hoveredId === service.id;
            
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 transition-all duration-500 ${
                  isHovered ? 'transform -translate-y-2 shadow-2xl shadow-red-600/20 border-red-600/50' : ''
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isHovered ? 'bg-red-600 scale-110 rotate-6' : 'bg-red-600/10'
                  }`}>
                    <IconComponent className={`w-8 h-8 transition-colors duration-500 ${
                      isHovered ? 'text-white' : 'text-red-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                </div>

                {/* 3D Effect Background */}
                <div className={`absolute inset-0 rounded-2xl bg-red-600/5 blur-xl transition-all duration-500 -z-10 ${
                  isHovered ? 'opacity-100 scale-105' : 'opacity-0'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Need a custom solution? Let's discuss your unique requirements
          </p>
          <button 
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;