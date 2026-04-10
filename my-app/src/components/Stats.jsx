import React, { useState, useEffect } from 'react';
import { stats } from '../data/mock';
import { TrendingUp } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="relative py-24 bg-gradient-to-b from-black via-red-950/10 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-red-600/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '4s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Numbers That <span className="text-red-600">Speak</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative"
              style={{
                animation: `scaleIn 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center transition-all duration-500 hover:border-red-600/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20">
                {/* Number */}
                <div className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                  {counters[index]}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-gray-400 text-sm md:text-base font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* 3D Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-red-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
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

export default Stats;