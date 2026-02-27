import React, { Suspense, lazy, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Header   = lazy(() => import('./components/Header'));
const Hero     = lazy(() => import('./components/Hero'));
const About    = lazy(() => import('./components/About'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));

export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.title = 'Roobaan M T | Mobile Developer';

    // Update CSS custom properties on every .glass card so the
    // spotlight radial-gradient follows the cursor within each card.
    const onMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.glass').forEach(el => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
        el.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="bg-bg text-slate-200 min-h-screen">
      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-violet-400 to-cyan-500 origin-left z-[9999]"
      />
      <Suspense fallback={null}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}
