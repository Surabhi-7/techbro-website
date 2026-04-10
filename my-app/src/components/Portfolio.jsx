import React, { useState } from 'react';
import { portfolioProjects } from '../data/mock';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(portfolioProjects.map(p => p.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider border border-red-600/30 px-4 py-2 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Success <span className="text-red-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped brands achieve remarkable growth
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-red-600/20 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-black text-white/5">
                    {project.id}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-sm text-red-600 text-xs font-bold px-3 py-1.5 rounded-full border border-red-600/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Results Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ArrowUpRight className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-bold">{project.results}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    View Case Study →
                  </button>
                </div>
              </div>

              {/* 3D Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/0 via-red-600/50 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;