import React from 'react';
import { SOCIAL } from '../data/social';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/5 bg-[#080811] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <button onClick={scrollTop}
            className="font-serif font-bold text-white hover:opacity-70 transition-opacity">
            Roobaan<span className="gradient-text"> M T</span>
          </button>
          <span className="text-slate-700 text-sm hidden md:block">·</span>
          <span className="text-slate-600 text-sm hidden md:block">iOS & Flutter Developer</span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { href: SOCIAL.github,   label: 'GitHub' },
            { href: SOCIAL.linkedin, label: 'LinkedIn' },
            { href: SOCIAL.medium,   label: 'Medium' },
          ].map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-300 text-sm transition-colors">
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-slate-700 text-xs">
          © {year} Roobaan M T. Built with React + Vite.
        </p>
      </div>
    </footer>
  );
}
