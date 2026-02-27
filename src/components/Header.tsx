import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const NAV = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const lastY = useRef(0);
  const [hidden, setHidden]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY.current + 6 && y > 120);
      if (y < lastY.current - 6 || y < 60) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', href);
  };

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : '0%', opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#080811]/90 border-b border-white/5 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" onClick={e => scrollTo(e, '#hero')}
          className="font-serif font-bold text-lg text-white hover:opacity-80 transition-opacity">
          Roobaan<span className="gradient-text"> M T</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={e => scrollTo(e, n.href)}
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
              {n.label}
            </a>
          ))}
          <a href="/Roobaan_CV.pdf" target="_blank" rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:opacity-90 transition-opacity">
            Resume
          </a>
        </nav>

        <button onClick={() => setMenuOpen(v => !v)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" aria-label="Toggle menu">
          {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0D0D1A]/95 backdrop-blur-lg border-b border-white/5 px-6 py-4 flex flex-col gap-1">
            {NAV.map((n, i) => (
              <motion.a key={n.href} href={n.href} onClick={e => scrollTo(e, n.href)}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="py-3 text-sm font-medium text-slate-300 hover:text-white border-b border-white/5 last:border-0 transition-colors">
                {n.label}
              </motion.a>
            ))}
            <a href="/Roobaan_CV.pdf" target="_blank" rel="noopener noreferrer"
              className="mt-3 text-center py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white">
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
