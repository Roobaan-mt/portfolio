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
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
export function App() {
  // Smooth scroll effect for the entire page
  useEffect(() => {
    document.title = 'Roobaan M T | Portfolio';
    // Add smooth scroll behavior via JS for browsers that don't support CSS scroll-behavior
    if (!('scrollBehavior' in document.documentElement.style)) {
      const smoothScrollPolyfill = () => {
        // Get all links that hash to an element ID
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          const href = anchor.getAttribute('href');
          if (!href) return;
          const targetId = href.replace('#', '');
          anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.getElementById(targetId);
            if (target) {
              // Use smooth scrolling with requestAnimationFrame for better performance
              const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
              const startPosition = window.pageYOffset;
              const distance = targetPosition - startPosition;
              const duration = 800; // ms
              let startTime: number | null = null;
              function scrollAnimation(currentTime: number) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const easeInOutCubic = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                window.scrollTo(0, startPosition + distance * easeInOutCubic);
                if (timeElapsed < duration) {
                  requestAnimationFrame(scrollAnimation);
                } else {
                  // Update URL without page reload
                  window.history.pushState(null, '', href);
                }
              }
              requestAnimationFrame(scrollAnimation);
            }
          }, {
            passive: false
          });
        });
      };
      smoothScrollPolyfill();
    }
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
          {/* <Suspense
            fallback={
              <div className="h-96 flex items-center justify-center">
                <LoadingSpinner />
              </div>
            }
           >
            <Testimonials /> 
           </Suspense> */}
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