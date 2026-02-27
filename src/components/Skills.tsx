import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill { name: string; initial: string; from: string; to: string; pct: number; }

const IOS: Skill[] = [
  { name: 'Swift',      initial: 'S',  from: 'from-orange-500', to: 'to-red-600',     pct: 90 },
  { name: 'UIKit',      initial: 'U',  from: 'from-blue-600',   to: 'to-blue-800',    pct: 85 },
  { name: 'SwiftUI',    initial: 'SU', from: 'from-blue-400',   to: 'to-cyan-600',    pct: 80 },
  { name: 'CoreData',   initial: 'CD', from: 'from-slate-600',  to: 'to-slate-800',   pct: 80 },
  { name: 'MapKit',     initial: 'M',  from: 'from-green-600',  to: 'to-teal-700',    pct: 75 },
  { name: 'AVFoundation',initial:'AV', from: 'from-rose-600',   to: 'to-pink-700',    pct: 70 },
];

const FLUTTER: Skill[] = [
  { name: 'Flutter',    initial: 'F',  from: 'from-sky-500',    to: 'to-blue-600',    pct: 85 },
  { name: 'Dart',       initial: 'D',  from: 'from-teal-500',   to: 'to-cyan-700',    pct: 85 },
  { name: 'Firebase',   initial: 'Fb', from: 'from-yellow-500', to: 'to-orange-600',  pct: 80 },
  { name: 'Socket.io',  initial: 'SC', from: 'from-gray-600',   to: 'to-gray-800',    pct: 75 },
  { name: 'Sqflite',    initial: 'SQ', from: 'from-violet-600', to: 'to-purple-800',  pct: 75 },
  { name: 'Google Maps',initial: 'GM', from: 'from-red-500',    to: 'to-rose-700',    pct: 80 },
];

const TOOLS: Skill[] = [
  { name: 'Java',        initial: 'J',  from: 'from-amber-600',  to: 'to-orange-700',  pct: 75 },
  { name: 'Kotlin',      initial: 'K',  from: 'from-purple-500', to: 'to-violet-700',  pct: 75 },
  { name: 'Git',         initial: 'G',  from: 'from-red-600',    to: 'to-red-800',     pct: 85 },
  { name: 'RESTful APIs',initial: 'API',from: 'from-green-600',  to: 'to-emerald-800', pct: 85 },
  { name: 'ZifMp SDK',   initial: 'Z',  from: 'from-indigo-600', to: 'to-blue-800',    pct: 90 },
];

const TABS = [
  { label: 'iOS',     skills: IOS     },
  { label: 'Flutter', skills: FLUTTER },
  { label: 'Tools',   skills: TOOLS   },
];

function SkillCard({ skill, i }: { skill: Skill; i: number }) {
  const dots = 5;
  const filled = Math.round((skill.pct / 100) * dots);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      whileHover={{ scale: 1.04 }}
      className="glass rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default hover:border-white/12 transition-colors duration-200"
    >
      <motion.div
        whileHover={{ rotate: [0, -4, 4, -4, 0], transition: { duration: 0.35 } }}
        className={`app-icon bg-gradient-to-br ${skill.from} ${skill.to} text-base`}
      >
        {skill.initial}
      </motion.div>
      <p className="text-white text-xs font-semibold text-center leading-tight">{skill.name}</p>
      {/* proficiency dots */}
      <div className="flex gap-1">
        {Array.from({ length: dots }).map((_, d) => (
          <div
            key={d}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              d < filled ? 'bg-violet-400' : 'bg-white/10'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const current = TABS[active];

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-[#0D0D1A]">
      <div className="orb w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-0 bg-violet-600/6" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* heading */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12 text-center"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="section-label block mb-3"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            My <span className="gradient-text">Toolkit</span>
          </motion.h2>
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="section-divider mx-auto mt-3"
          />
        </motion.div>

        {/* tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div className="glass inline-flex rounded-xl p-1 gap-1">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`relative px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  active === i ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/40 to-cyan-600/30 rounded-lg border border-white/10"
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {current.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} i={i} />
          ))}
        </div>

        {/* ZifMP highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 glass rounded-2xl p-6 border border-violet-500/20"
        >
          <div className="flex items-start gap-4 flex-wrap">
            <div className="app-icon bg-gradient-to-br from-indigo-600 to-blue-800 flex-shrink-0">Z</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-white font-semibold">ZifMP SDK — Cross-Platform Expertise</p>
                <span className="skill-chip text-[10px]">Specialist</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Implemented ZifMP monitoring SDK as a native iOS framework, Android library, and Flutter plugin —
                tracking user sessions, crash symbolication, ANR incidents, and real-time performance metrics across all platforms.
              </p>
              <div className="flex gap-2 mt-3">
                {['iOS Framework', 'Android Library', 'Flutter Plugin'].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
