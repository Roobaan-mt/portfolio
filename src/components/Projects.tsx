import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { projects } from '../data/projects';

const AppleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg width="13" height="13" viewBox="0 0 576 512" fill="currentColor">
    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/>
  </svg>
);

const FILTERS = ['All', 'iOS', 'Flutter'] as const;
type Filter = typeof FILTERS[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = projects.filter(p =>
    filter === 'All' ? true : p.category === filter.toLowerCase()
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] right-0 bottom-0 bg-violet-600/6" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label block mb-3">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Published <span className="gradient-text">Apps</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex gap-2 mb-10"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                filter === f
                  ? 'bg-gradient-to-r from-violet-600/30 to-cyan-600/20 border-violet-500/40 text-white'
                  : 'border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/15'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden flex flex-col transition-[border-color,box-shadow] duration-300 hover:border-white/15 hover:shadow-[0_24px_60px_rgba(139,92,246,0.14)]"
              >
                {/* card top: gradient banner + icon */}
                <div className={`relative h-20 bg-gradient-to-br ${p.color} flex items-end px-5 pb-0`}>
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, white 0%, transparent 60%)' }} />
                  {/* platform badge */}
                  <span className={`absolute top-3 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    p.category === 'ios'
                      ? 'bg-black/30 text-white/80'
                      : 'bg-black/30 text-cyan-300'
                  }`}>
                    {p.category === 'ios' ? 'iOS' : 'Flutter'}
                  </span>
                  <div className="app-icon w-14 h-14 text-xl translate-y-7 border-2 border-white/10 shadow-xl"
                    style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.15), rgba(0,0,0,0.2))' }}>
                    {p.initial}
                  </div>
                </div>

                {/* body */}
                <div className="pt-10 px-5 pb-5 flex flex-col gap-3 flex-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold text-lg">{p.title}</h3>
                      {p.impact && (
                        <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full">
                          {p.impact}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed line-clamp-3">{p.description}</p>
                  </div>

                  {/* tags */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.tags.map(t => (
                      <span key={t} className="skill-chip">{t}</span>
                    ))}
                  </div>

                  {/* buttons */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {p.iosUrl && (
                      <a href={p.iosUrl} target="_blank" rel="noopener noreferrer"
                        className="store-btn store-btn-ios">
                        <AppleIcon /> App Store
                      </a>
                    )}
                    {p.androidUrl && (
                      <a href={p.androidUrl} target="_blank" rel="noopener noreferrer"
                        className="store-btn store-btn-android">
                        <AndroidIcon /> Play Store
                      </a>
                    )}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="store-btn store-btn-github">
                        <GithubIcon size={12} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
