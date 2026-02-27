import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPinIcon, BriefcaseIcon, CodeIcon, SmartphoneIcon } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const COMPANIES = [
  { name: 'GAVS Technologies',              role: 'iOS Developer',              period: '2020 – 2021' },
  { name: 'Innovix Software Technologies',  role: 'iOS & Flutter Developer',    period: '2021 – 2022' },
  { name: 'SivaCerulean Technologies',      role: 'iOS & Flutter Developer',    period: '2022 – Present' },
];

const STATS = [
  { value: 4,  suffix: '+', label: 'Years',    color: '#8B5CF6', r: 38 },
  { value: 15, suffix: '+', label: 'Projects', color: '#06B6D4', r: 28 },
  { value: 4,  suffix: '',  label: 'Apps',     color: '#F59E0B', r: 18 },
];

function RingStats() {
  const ref   = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const size = 100;
  const cx   = 50;
  const cy   = 50;

  return (
    <svg ref={ref} viewBox="0 0 100 100" className="w-48 h-48 mx-auto">
      {STATS.map((s) => {
        const circ  = 2 * Math.PI * s.r;
        const dash  = inView ? circ * (Math.min(s.value, 15) / 15) : 0;
        return (
          <g key={s.label}>
            <circle className="ring-track" cx={cx} cy={cy} r={s.r} strokeWidth="6" />
            <circle
              className="ring-fill"
              cx={cx} cy={cy} r={s.r}
              strokeWidth="6"
              stroke={s.color}
              strokeDasharray={circ}
              strokeDashoffset={inView ? circ - dash : circ}
              style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s' }}
            />
          </g>
        );
      })}
      {/* center text */}
      <text x="50" y="47" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Playfair Display, serif">
        4+
      </text>
      <text x="50" y="56" textAnchor="middle" fill="#64748B" fontSize="6" fontFamily="Inter, sans-serif">
        years
      </text>
    </svg>
  );
}

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] right-0 top-0 bg-cyan-500/6" />

      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16"
        >
          <motion.span variants={item} className="section-label block mb-3">About Me</motion.span>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-serif font-bold text-white">
            Building apps that <span className="gradient-text">matter</span>
          </motion.h2>
          <motion.div variants={item} className="section-divider" />
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-10 lg:gap-12 items-start">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-slate-300 leading-relaxed">
              I'm an iOS and Flutter developer with 4+ years of experience building and shipping
              production mobile apps. My work spans native iOS development with Swift, UIKit, and
              SwiftUI through to cross-platform Flutter — including specialized implementation of
              the ZifMP SDK across iOS, Android, and Flutter platforms.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Based in Chennai, I focus on reliable API integration, offline-capable data layers,
              and UIs that hold up on real devices.
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPinIcon size={14} />
              <span>Chennai, India</span>
            </div>

            {/* feature cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: <SmartphoneIcon size={16} />, label: 'iOS Native',    sub: 'Swift · UIKit · SwiftUI' },
                { icon: <CodeIcon size={16} />,        label: 'Flutter',       sub: 'Dart · Cross-platform' },
                { icon: <BriefcaseIcon size={16} />,   label: 'ZifMP SDK',    sub: 'iOS · Android · Flutter' },
                { icon: <MapPinIcon size={16} />,      label: 'Production',   sub: '4 live App Store apps' },
              ].map(f => (
                <div key={f.label}
                  className="glass rounded-xl p-4 hover:border-white/12 transition-colors duration-200">
                  <div className="text-violet-400 mb-2">{f.icon}</div>
                  <p className="text-white text-sm font-semibold">{f.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{f.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm font-semibold text-slate-400 mb-5 flex items-center gap-2">
              <BriefcaseIcon size={14} className="text-violet-400" /> Experience
            </p>
            <div className="relative pl-4">
              {/* line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-violet-600 via-cyan-600 to-transparent" />

              {COMPANIES.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="mb-6 last:mb-0 relative"
                >
                  {/* dot */}
                  <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-violet-500 ring-2 ring-[#080811]" />
                  <p className="text-white font-semibold text-sm">{c.name}</p>
                  <p className="text-violet-400 text-xs mt-0.5 font-mono">{c.role}</p>
                  <p className="text-slate-600 text-xs mt-0.5">{c.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <RingStats />
            <div className="flex gap-4">
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <div className="w-2.5 h-2.5 rounded-full mx-auto mb-1" style={{ background: s.color }} />
                  <p className="text-white text-xs font-bold">{s.value}{s.suffix}</p>
                  <p className="text-slate-600 text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
