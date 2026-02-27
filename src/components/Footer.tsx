import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { SOCIAL } from '../data/social';
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <footer ref={footerRef} className="bg-gradient-royal dark:bg-gradient-to-br dark:from-royal-black dark:to-royal-purple-dark text-white py-16 w-full transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-purple to-royal-gold"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-royal-purple/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className={`mb-8 md:mb-0 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="font-serif font-bold text-3xl text-royal-gold mb-4">
              Roobaan M T
            </div>
            <p className="text-gray-300 max-w-md font-sans">
              Mobile app developer specializing in Flutter and iOS development.
              Creating beautiful, functional applications for modern businesses.
            </p>
          </div>
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: '0.3s'
        }}>
            <button onClick={scrollToTop} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-royal-gold to-royal-gold-light text-royal-black rounded-full hover:shadow-gold transition-all duration-500 hover:scale-105 transform group" aria-label="Scroll to top">
              <ArrowUpIcon size={18} className="transition-transform duration-500 group-hover:-translate-y-1" />
              <span className="font-serif">Back to Top</span>
            </button>
          </div>
        </div>
        <div className={`border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: '0.5s'
      }}>
          <p className="text-gray-400 mb-6 md:mb-0 font-sans">
            &copy; {new Date().getFullYear()} Roobaan M T. All rights reserved.
          </p>
          <div className="flex gap-8">
            {[{
            name: 'GitHub',
            url: SOCIAL.github
          }, {
            name: 'LinkedIn',
            url: SOCIAL.linkedin
          }, {
            name: 'Medium',
            url: SOCIAL.medium
          }].map((link, index) => <a key={index} href={link.url} className="text-gray-400 hover:text-royal-gold transition-all duration-300 hover:scale-110 transform animated-underline" target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;