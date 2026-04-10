import React, { useState } from 'react';
import { testimonials } from '../data/mock';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider border border-red-600/30 px-4 py-2 rounded-full">
              Client Reviews
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            What Clients <span className="text-red-600">Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Tech Bro
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 md:p-16 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-12">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/30 rotate-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-red-600 fill-red-600 mx-1" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-2xl md:text-3xl text-white font-medium text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author Info */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-red-600/30">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-red-600 font-semibold mb-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center mt-12 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 bg-gray-900 hover:bg-red-600 border border-gray-800 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-12 h-3 bg-red-600'
                        : 'w-3 h-3 bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-14 h-14 bg-gray-900 hover:bg-red-600 border border-gray-800 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Background Testimonials (for depth) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:border-red-600/30 transition-all duration-300"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-red-600 fill-red-600" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center text-sm font-bold text-red-600">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;