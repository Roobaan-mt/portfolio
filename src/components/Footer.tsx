import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 w-full transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0 animate-slide-up">
            <div className="font-bold text-2xl text-indigo-400 mb-2">
              Roobaan M T
            </div>
            <p className="text-gray-400 max-w-md">
              Mobile app developer specializing in Flutter and iOS development.
              Creating beautiful, functional applications for modern businesses.
            </p>
          </div>
          <div className="animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <button onClick={scrollToTop} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-indigo-700 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors hover:scale-105 transform duration-300" aria-label="Scroll to top">
              <ArrowUpIcon size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{
        animationDelay: '0.4s'
      }}>
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Roobaan M T. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Roobaan" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/roobaan-m-t-327075214" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://medium.com/@RoobaanMT" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;