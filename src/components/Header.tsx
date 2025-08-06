import React, { useEffect, useState, useRef } from 'react';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const {
    theme,
    toggleTheme
  } = useTheme();
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const ticking = useRef(false);
  // Optimized scroll handler with throttling via requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Show/hide header based on scroll direction
          if (currentScrollY > 100) {
            // Scrolled down past threshold
            setIsScrolled(true);
            // Hide header when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY.current + 10) {
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current - 10) {
              setIsVisible(true);
            }
          } else {
            // At top of page
            setIsScrolled(false);
            setIsVisible(true);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [{
    name: 'Home',
    href: '#hero'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without page reload
      window.history.pushState(null, '', href);
    }
  };
  return <header ref={headerRef} className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 backdrop-blur-md shadow-md' : 'bg-transparent py-6'} ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{
    willChange: 'transform, opacity'
  }}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="font-serif font-bold text-xl md:text-2xl text-royal-purple dark:text-royal-gold-light transform hover:scale-105 transition-transform duration-500 cursor-pointer" style={{
        willChange: 'transform'
      }}>
          <span className="sr-only">Developer Portfolio</span>
          Roobaaan M T
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => <a key={item.name} href={item.href} onClick={e => scrollToSection(e, item.href)} className="font-sans text-gray-800 dark:text-royal-white font-medium animated-underline transform hover:scale-105 transition-all duration-300" style={{
          willChange: 'transform'
        }}>
              {item.name}
            </a>)}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-glass hover:shadow-gold transition-all duration-300 transform hover:scale-110" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} style={{
          willChange: 'transform, box-shadow'
        }}>
            {theme === 'dark' ? <SunIcon size={20} className="text-royal-gold" /> : <MoonIcon size={20} className="text-royal-purple" />}
          </button>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-glass transition-all duration-300" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <SunIcon size={18} className="text-royal-gold" /> : <MoonIcon size={18} className="text-royal-purple" />}
          </button>
          <button className="text-gray-800 dark:text-royal-white p-2 rounded-full hover:bg-glass transition-all duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Toggle navigation menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu - Using transform instead of height for better performance */}
      <div className={`md:hidden glass backdrop-blur-md transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-full'}`} style={{
      willChange: 'transform, opacity',
      maxHeight: isMenuOpen ? '300px' : '0',
      overflow: 'hidden'
    }}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, index) => <a key={item.name} href={item.href} onClick={e => scrollToSection(e, item.href)} className="text-gray-800 dark:text-royal-white py-2 font-medium border-b border-royal-gold/20 hover:pl-2 transition-all duration-300" style={{
            transitionDelay: `${index * 50}ms`,
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
            opacity: isMenuOpen ? 1 : 0,
            willChange: 'transform, opacity'
          }}>
                {item.name}
              </a>)}
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;