import React, { Suspense, lazy, useEffect } from 'react';

const Header   = lazy(() => import('./components/Header'));
const Hero     = lazy(() => import('./components/Hero'));
const About    = lazy(() => import('./components/About'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));

export function App() {
  useEffect(() => {
    document.title = 'Roobaan M T | Mobile Developer';
  }, []);

  return (
    <div className="bg-bg text-slate-200 min-h-screen">
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
