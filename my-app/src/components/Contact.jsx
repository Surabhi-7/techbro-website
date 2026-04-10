import React, { useState } from 'react';
import { contactInfo } from '../data/mock';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real app would send to backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/5 via-black to-black" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider border border-red-600/30 px-4 py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's Start Your <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? Contact us today and let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Person Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {contactInfo.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Contact Person</p>
                    <p className="text-white font-semibold text-lg">{contactInfo.name}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone Numbers</p>
                    {contactInfo.phones.map((phone, index) => (
                      <a 
                        key={index}
                        href={`tel:${phone}`}
                        className="block text-white hover:text-red-600 transition-colors font-medium"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-red-600 transition-colors font-medium break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Locations */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Serving Cities</p>
                    <div className="flex flex-wrap gap-2">
                      {contactInfo.locations.map((location, index) => (
                        <span 
                          key={index}
                          className="bg-red-600/10 border border-red-600/30 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl shadow-red-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Tech Bro?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>500+ Successful Projects Delivered</span>
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>98% Client Satisfaction Rate</span>
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Pan-India Service Coverage</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 lg:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 focus:border-red-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 focus:border-red-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-700 focus:border-red-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Service Interested In *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 focus:border-red-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="branding">Branding & Graphics</option>
                    <option value="web-dev">Web Development</option>
                    <option value="consulting">Marketing Strategy Consulting</option>
                    <option value="ai-video">AI Video Creation</option>
                    <option value="seo">Content & SEO Strategy</option>
                    <option value="management">Social Media Management</option>
                    <option value="content">Content Creation</option>
                    <option value="paid-ads">Paid Advertising</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-black/50 border border-gray-700 focus:border-red-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-400 text-lg">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;