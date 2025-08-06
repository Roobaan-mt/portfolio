import React, { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import { ThemeProvider } from './components/ThemeContext';
import LoadingSpinner from './components/LoadingSpinner';
// Lazy load components that aren't needed for initial render
const Hero = lazy(() => import('./components/Hero'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
export function App() {
  // Smooth scroll effect for the entire page
  useEffect(() => {
    document.title = "Roobaan M T | Portfolio";

    // Optimized smooth scrolling with passive event listeners
    const scrollToElement = (e: Event, targetId: string) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        // Use native smooth scrolling which is GPU-accelerated
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL without page reload
        window.history.pushState(null, '', `#${targetId}`);
      }
    };
    // Add optimized event listeners with passive option where possible
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      const href = anchor.getAttribute('href');
      if (!href) return;
      const targetId = href.replace('#', '');
      anchor.addEventListener('click', e => scrollToElement(e, targetId), {
        passive: false
      });
    });
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (!href) return;
        const targetId = href.replace('#', '');
        anchor.removeEventListener('click', e => scrollToElement(e, targetId));
      });
    };
  }, []);
  return <ThemeProvider>
      <div className="transition-colors duration-500 bg-gradient-to-br from-royal-white to-gray-100 dark:from-royal-black dark:to-gray-900 min-h-screen w-full font-sans">
        <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-royal-black z-50">
              <LoadingSpinner />
            </div>}>
          <ParticleBackground />
        </Suspense>
        <Header />
        <main className="relative z-10">
          <Suspense fallback={<div className="h-screen flex items-center justify-center">
                <LoadingSpinner />
              </div>}>
            <Hero />
          </Suspense>
          <Suspense fallback={<div className="h-96 flex items-center justify-center">
                <LoadingSpinner />
              </div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="h-96 flex items-center justify-center">
                <LoadingSpinner />
              </div>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div className="h-96 flex items-center justify-center">
                <LoadingSpinner />
              </div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="h-96 flex items-center justify-center">
                <LoadingSpinner />
              </div>}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-40 flex items-center justify-center">
              <LoadingSpinner />
            </div>}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>;
}