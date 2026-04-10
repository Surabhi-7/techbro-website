import React from 'react';
import { contactInfo } from '../data/mock';

// ✅ React Icons (for social media)
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";

// ✅ Lucide (for normal icons)
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <div className="text-3xl font-black mb-4">
              <span className="text-white">TECH</span>
              <span className="text-red-600"> BRO</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative digital marketing solutions. Your success is our mission.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">

              <a href="https://www.facebook.com/techbro31" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF className="w-5 h-5 text-white" />
              </a>

              <a href="ttps://twitter.com/techbro31" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaTwitter className="w-5 h-5 text-white" />
              </a>

              <a 
  href="https://www.instagram.com/techbro_31?igsh=ZXlwYjd6Ym5rbjE1" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
>
  <FaInstagram className="w-5 h-5 text-white" />
</a>

              <a href="https://www.linkedin.com/in/techbro31" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </a>

              <a  href="https://www.youtube.com/@techbro31" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaYoutube className="w-5 h-5 text-white" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-3">
              {["home","services","portfolio","testimonials","contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(`#${section}`)}
                    className="text-gray-400 hover:text-red-600 transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Social Media Marketing</li>
              <li>Branding & Graphics</li>
              <li>Web Development</li>
              <li>SEO Strategy</li>
              <li>AI Video Creation</li>
              <li>Paid Advertising</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>

            <div className="space-y-4">

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  {contactInfo.phones.map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-gray-400 hover:text-red-600 transition-colors text-sm"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-600 mt-0.5" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  {contactInfo.locations.join(', ')}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">

          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">

            <p>© {currentYear} Tech Bro. All rights reserved.</p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="hover:text-red-600 transition-colors">Privacy Policy</button>
              <button className="hover:text-red-600 transition-colors">Terms of Service</button>
              <button className="hover:text-red-600 transition-colors">Cookie Policy</button>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
