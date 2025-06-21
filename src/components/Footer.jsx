import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12 shadow-inner">
      <p className="text-sm font-serif mb-4">&copy; 2024 PerfumeSite. All rights reserved.</p>
      <nav>
        <ul className="flex justify-center space-x-6 text-sm">
          <li><a href="/about" className="hover:text-pink-400 transition-colors duration-300">About Us</a></li>
          <li><a href="/contact" className="hover:text-pink-400 transition-colors duration-300">Contact</a></li>
          <li><a href="/privacy" className="hover:text-pink-400 transition-colors duration-300">Privacy Policy</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
