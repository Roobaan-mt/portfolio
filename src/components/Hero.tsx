import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { GithubIcon, LinkedinIcon, ArrowDownIcon, DownloadIcon, ExternalLinkIcon } from 'lucide-react';
import { SOCIAL } from '../data/social';

const ROLES = ['iOS Developer', 'Flutter Developer', 'Mobile App Expert'];

const PHONE_APPS = [
  { name: 'NextPeak',     sub: '9,000+ users · Banking',    from: 'from-blue-600',   to: 'to-blue-800',   initial: 'N' },
  { name: 'SportsDoor',  sub: 'iOS & Android · Sports',    from: 'from-green-500',  to: 'to-emerald-700',initial: 'S' },
  { name: 'Intelliclaim',sub: 'iOS & Android · Insurance', from: 'from-violet-600', to: 'to-purple-800', initial: 'I' },
  { name: 'Raido',       sub: 'iOS & Android · Ride',      from: 'from-orange-500', to: 'to-red-600',    initial: 'R' },
];

const FLOAT_TAGS = [
  { text: '#Swift',   color: 'text-orange-300 border-orange-500/30 bg-orange-500/10', delay: 0   },
  { text: '#Flutter', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',       delay: 1.5 },
  { text: '#iOS',     color: 'text-blue-300 border-blue-500/30 bg-blue-500/10',       delay: 3   },
  { text: '#Dart',    color: 'text-teal-300 border-teal-500/30 bg-teal-500/10',       delay: 4.5 },
];

// ── Magnetic button ───────────────────────────────────────────────────────────
function MagneticButton({
  children, href, className, target, rel,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
  target?: string;
  rel?: string;
}) {
  const bx = useMotionValue(0);
  const by = useMotionValue(0);
  const sx = useSpring(bx, { stiffness: 220, damping: 18 });
  const sy = useSpring(by, { stiffness: 220, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    bx.set((e.clientX - r.left - r.width  / 2) * 0.3);
    by.set((e.clientY - r.top  - r.height / 2) * 0.3);
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={() => { bx.set(0); by.set(0); }}
    >
      {children}
    </motion.a>
  );
}

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, inView: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t0 = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out-cubic
      setV(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return v;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Hero() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIdx];
    const id = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === '') { setDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length); }
      }
    }, deleting ? 38 : 72);
    return () => clearTimeout(id);
  }, [text, deleting, roleIdx]);

  // Mouse parallax for phone.
  // Default values replicate the old CSS tilt: rotateY(-6deg), rotateX(+2deg).
  // Range [-0.5, 0.5] → rotateY [-8, 8]:  at -0.375 → -6deg ✓
  // Range [-0.5, 0.5] → rotateX [ 5,-5]:  at -0.2   → +3deg ≈ ✓
  const mouseX = useMotionValue(-0.375);
  const mouseY = useMotionValue(-0.2);
  const rawRY  = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const rawRX  = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useSpring(rawRY, { stiffness: 60, damping: 18 });
  const rotateX = useSpring(rawRX, { stiffness: 60, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const onMouseLeave = () => { mouseX.set(-0.375); mouseY.set(-0.2); };

  // Count-up stats
  const statsRef   = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });
  const years    = useCountUp(4,  statsInView);
  const projects = useCountUp(15, statsInView);
  const apps     = useCountUp(4,  statsInView);

  return (
    <section
      id="hero"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* ambient glow */}
      <div className="orb w-[600px] h-[600px] left-[-200px] top-[-100px] bg-violet-600/10" />
      <div className="orb w-[500px] h-[500px] right-[-150px] bottom-[50px] bg-cyan-500/8" />

      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

        {/* ── Left: Text ── */}
        <div className="space-y-7 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span className="section-label">Mobile Developer · Chennai, India</span>
          </motion.div>

          {/* Character-split headline — each letter slides up from a masked container */}
          <h1 className="font-serif font-bold leading-[1.1]">
            <span className="block overflow-hidden">
              <span className="block text-5xl md:text-6xl lg:text-7xl text-white">
                {Array.from('Roobaan').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
                    animate={{ y: '0%',   opacity: 1, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.045,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </span>

            <span className="block overflow-hidden mt-1">
              <motion.span
                className="block text-5xl md:text-6xl lg:text-7xl gradient-text"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.7, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                M T
              </motion.span>
            </span>
          </h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2 h-9"
          >
            <span className="text-xl md:text-2xl text-slate-300 font-light font-mono">
              {text}
              <span className="inline-block w-[2px] h-6 bg-cyan-400 ml-0.5 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            4+ years building production iOS and Flutter apps — shipped to&nbsp;
            <span className="text-white font-medium">9,000+ users</span> across banking,
            sports, insurance, and ride-hailing.
          </motion.p>

          {/* Magnetic CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" className="btn-primary">
              View My Work <ExternalLinkIcon size={15} />
            </MagneticButton>
            <MagneticButton
              href="/Roobaan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Resume <DownloadIcon size={15} />
            </MagneticButton>
          </motion.div>

          {/* Count-up stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="flex gap-8 pt-1"
          >
            {[
              { v: years,    s: '+', l: 'Years Exp.'    },
              { v: projects, s: '+', l: 'Projects'      },
              { v: apps,     s: '',  l: 'Published Apps' },
            ].map(({ v, s, l }) => (
              <div key={l}>
                <p className="text-2xl font-bold text-white font-serif tabular-nums">{v}{s}</p>
                <p className="text-xs text-slate-500 mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex gap-3"
          >
            {[
              { href: SOCIAL.github,   Icon: GithubIcon,   label: 'GitHub'   },
              { href: SOCIAL.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Icon size={19} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Phone with mouse-reactive parallax ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="hidden lg:flex justify-center items-center relative"
        >
          {/* glow behind phone */}
          <div className="absolute inset-0 rounded-[50px] bg-violet-600/15 blur-3xl scale-110 pointer-events-none" />

          {/* floating code tags */}
          {FLOAT_TAGS.map((t, i) => (
            <motion.span
              key={t.text}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: t.delay }}
              className={`absolute code-tag font-mono text-[11px] font-medium ${t.color} ${
                i === 0 ? '-left-20 top-1/4'    :
                i === 1 ? '-right-16 top-1/3'   :
                i === 2 ? '-left-16 bottom-1/3' :
                          '-right-20 bottom-1/4'
              }`}
            >
              {t.text}
            </motion.span>
          ))}

          {/* Phone — rotateX/Y driven by mouse, y driven by looping float */}
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="phone-frame"
          >
            <div className="phone-notch" />

            {/* status bar */}
            <div className="phone-status-bar mt-8">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <rect x="0" y="3" width="3" height="7" rx="1" fill="currentColor" opacity=".4"/>
                  <rect x="4" y="2" width="3" height="8" rx="1" fill="currentColor" opacity=".6"/>
                  <rect x="8" y="0" width="3" height="10" rx="1" fill="currentColor" opacity=".8"/>
                  <rect x="12" y="0" width="3" height="10" rx="1" fill="currentColor"/>
                </svg>
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                  <rect x="0" y="0" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1" opacity=".5"/>
                  <rect x="1.5" y="1.5" width="11" height="7" rx="1" fill="currentColor"/>
                  <path d="M16 3.5V6.5C16.8 6.2 17.5 5.7 17.5 5 17.5 4.3 16.8 3.8 16 3.5Z" fill="currentColor" opacity=".5"/>
                </svg>
              </div>
            </div>

            {/* screen content */}
            <div className="px-4 pt-3 pb-8 flex flex-col h-[calc(100%-72px)]">
              <p className="text-[11px] text-slate-500 font-mono mb-1">App Portfolio</p>
              <p className="text-white font-semibold text-sm mb-4">My Published Apps</p>

              <div className="flex flex-col gap-1 flex-1">
                {PHONE_APPS.map((app, i) => (
                  <motion.div
                    key={app.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 0.4 }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                  >
                    <div className={`app-icon bg-gradient-to-br ${app.from} ${app.to}`}>
                      {app.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[13px] font-semibold truncate">{app.name}</p>
                      <p className="text-slate-500 text-[10px] truncate">{app.sub}</p>
                    </div>
                    <svg className="text-slate-600" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* bottom stats */}
              <div className="flex justify-around mt-4 pt-3 border-t border-white/5">
                {[['4', 'Apps'], ['9K+', 'Users'], ['4+', 'Years']].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <p className="text-white text-sm font-bold">{v}</p>
                    <p className="text-slate-600 text-[9px]">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="phone-home-bar" />
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <ArrowDownIcon size={22} />
      </motion.a>
    </section>
  );
}
