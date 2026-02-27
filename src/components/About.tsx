import React, { useEffect, useState, useRef, memo } from 'react';
import { CodeIcon, SmartphoneIcon, GlobeIcon, BriefcaseIcon, DownloadIcon } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  // Sample resume URL - this is a placeholder for a real resume
  const resumeUrl = '/Roobaan_CV.pdf';
  // Optimized scroll animation with IntersectionObserver
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Only set visible once to avoid unnecessary re-renders
          if (!isVisible && entry.target === sectionRef.current) {
            setIsVisible(true);
            // Start staggered animations after a short delay
            setTimeout(() => setAnimationStarted(true), 100);
          }
          // Add animation class
          entry.target.classList.add('animate-in');
          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    // Observe feature cards with staggered animation
    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach((el, i) => {
      el.classList.add('opacity-0', 'translate-y-10');
      // Stagger animation delay
      el.style.transitionDelay = `${i * 0.15}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isVisible]);
  return <section id="about" className="py-20 md:py-32 bg-white dark:bg-royal-black w-full transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations with cinematic animations */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-royal-purple/5 dark:bg-royal-purple/10 rounded-full blur-3xl transition-all duration-2000 ease-out ${isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}`} style={{
      transformOrigin: 'center',
      willChange: 'transform, opacity'
    }}></div>
      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-royal-gold/5 dark:bg-royal-gold/10 rounded-full blur-3xl transition-all duration-2000 ease-out ${isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}`} style={{
      transformOrigin: 'center',
      transitionDelay: '0.3s',
      willChange: 'transform, opacity'
    }}></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={sectionRef} className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out" style={{
        willChange: 'transform, opacity'
      }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-purple to-royal-gold mx-auto mb-6"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div ref={contentRef} className={`md:w-1/2 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${animationStarted ? 'animate-in' : ''}`} style={{
          transitionDelay: '0.3s',
          willChange: 'transform, opacity'
        }}>
            <div className="space-y-6">
              {['As an experienced iOS Developer and Flutter Developer with 4+ years of professional experience and a proven track record of developing successful mobile applications, I am seeking a challenging role to utilize my skills and expertise in creating innovative iOS applications or cross platform applications using Flutter.', 'My journey in mobile development began with iOS, mastering Swift, UIKit and SwiftUI, and expanded to cross-platform development with Flutter. I have specialized experience implementing ZifMp SDK across iOS (as a framework), Android (as a library), and Flutter (as a plugin), demonstrating my versatility in cross-platform development.', "Based in Chennai, I've worked with multiple companies to build and maintain high-quality mobile applications, integrate APIs, and optimize app performance. I'm passionate about creating intuitive user interfaces and ensuring smooth functionality across different platforms."].map((paragraph, index) => <p key={index} className={`text-lg text-gray-800 dark:text-gray-200 font-sans leading-relaxed transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
              transitionDelay: `${0.5 + index * 0.2}s`,
              willChange: 'transform, opacity'
            }}>
                  {paragraph}
                </p>)}
            </div>
            <div className={`mt-8 transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: '1.1s',
            willChange: 'transform, opacity'
          }}>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-button inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-purple to-royal-gold text-white font-medium rounded-full hover:shadow-royal transition-all duration-200 transform hover:translate-y-[-5px] hover:scale-105" style={{
              willChange: 'transform, box-shadow'
            }}>
                <DownloadIcon size={18} />
                <span>View Full Resume</span>
              </a>
            </div>
          </div>
          <div ref={featuresRef} className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{
              icon: <SmartphoneIcon size={28} className="text-white" />,
              title: 'Mobile Development',
              description: 'Creating intuitive, responsive, and feature-rich mobile applications for iOS and Android platforms.',
              bgClass: 'bg-gradient-to-br from-royal-purple to-royal-purple-light dark:from-royal-purple-dark dark:to-royal-purple'
            }, {
              icon: <CodeIcon size={28} className="text-white" />,
              title: 'Flutter Expertise',
              description: "Building cross-platform applications with Flutter's reactive framework and Dart programming.",
              bgClass: 'bg-gradient-to-br from-royal-blue to-royal-blue-light dark:from-royal-blue-dark dark:to-royal-blue'
            }, {
              icon: <GlobeIcon size={28} className="text-royal-black" />,
              title: 'iOS Development',
              description: 'Crafting native iOS applications with Swift, UIKit, and SwiftUI for exceptional user experiences.',
              bgClass: 'bg-gradient-to-br from-royal-gold to-royal-gold-light dark:from-royal-gold-dark dark:to-royal-gold'
            }, {
              icon: <BriefcaseIcon size={28} className="text-white" />,
              title: 'Professional Experience',
              description: 'Worked with GAVS Technologies, SivaCerulean Technologies, and Innovix Software Technologies.',
              bgClass: 'bg-gradient-to-br from-royal-purple-light to-royal-blue-light dark:from-royal-purple dark:to-royal-blue'
            }].map((feature, index) => <div key={index} className="feature-card glass backdrop-blur-md p-8 rounded-xl shadow-elegant transform transition-all duration-700 ease-out card-3d" style={{
              willChange: 'transform, opacity, box-shadow',
              transformOrigin: 'center'
            }}>
                  <div className={`${feature.bgClass} p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-royal transition-all duration-1000 ease-out ${animationStarted ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{
                transitionDelay: `${0.6 + index * 0.15}s`,
                willChange: 'transform, opacity'
              }}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-serif font-semibold mb-3 text-gray-900 dark:text-white transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
                transitionDelay: `${0.7 + index * 0.15}s`,
                willChange: 'transform, opacity'
              }}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-700 dark:text-gray-300 transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
                transitionDelay: `${0.8 + index * 0.15}s`,
                willChange: 'transform, opacity'
              }}>
                    {feature.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>;
};
export default memo(About);
