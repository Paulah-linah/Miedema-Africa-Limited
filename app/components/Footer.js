import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold text-white mb-4">Miedema Africa</h3>
          <p className="text-sm">
            Leading the way in innovative solutions for a better tomorrow. We are committed to excellence and customer satisfaction.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors duration-300">About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors duration-300">Services</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://x.com/MiedemaAfrica" className="hover:text-primary transition-colors duration-300"><FaXTwitter size={24} /></a>
            <a href="https://www.instagram.com/miedema_africa/p/DB6LqeRtbjB/?img_index=1" className="hover:text-primary transition-colors duration-300"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Miedema Africa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
