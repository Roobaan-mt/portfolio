import React, { useCallback, useEffect, useState, useRef, memo } from 'react';
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillBarsRef = useRef<HTMLDivElement>(null);
  const additionalSkillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skills = [{
    name: 'Swift',
    progress: 90
  }, {
    name: 'UIKit',
    progress: 85
  }, {
    name: 'SwiftUI',
    progress: 80
  }, {
    name: 'Flutter',
    progress: 85
  }, {
    name: 'Dart',
    progress: 85
  }, {
    name: 'Java',
    progress: 75
  }, {
    name: 'Kotlin',
    progress: 75
  }, {
    name: 'RESTful APIs',
    progress: 85
  }, {
    name: 'Firebase',
    progress: 80
  }, {
    name: 'Git',
    progress: 85
  }];
  const additionalSkills = ['Core Data', 'MapKit', 'AVFoundation', 'Photos Framework', 'UI/UX Design', 'Cocoapods', 'Selenium', 'ZifMp SDK'];
  // Optimized intersection observer setup
  const setupIntersectionObserver = useCallback(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        // Delay animation start slightly for better perceived performance
        setTimeout(() => setAnimationStarted(true), 100);
      }
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  useEffect(() => {
    return setupIntersectionObserver();
  }, [setupIntersectionObserver]);
  // Calculate staggered animation delays
  const getSkillBarDelay = (index: number) => {
    return `${0.2 + index * 0.05}s`;
  };
  const getAdditionalSkillDelay = (index: number) => {
    return `${0.6 + index * 0.05}s`;
  };
  const getStatDelay = (index: number) => {
    return `${1.0 + index * 0.1}s`;
  };
  return <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 dark:bg-royal-black/95 w-full transition-colors duration-500 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-royal-purple/5 to-royal-gold/5 dark:from-royal-purple/10 dark:to-royal-gold/10 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute top-20 right-20 w-40 h-40 rounded-full bg-royal-gold/10 dark:bg-royal-gold/5 blur-3xl transition-[transform,opacity] duration-600 ease-out ${animationStarted ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}`} style={{
      transformOrigin: 'center',
      transitionDelay: '0.3s',
      willChange: animationStarted ? 'auto' : 'transform, opacity'
    }}></div>
      <div className={`absolute bottom-20 left-20 w-60 h-60 rounded-full bg-royal-purple/10 dark:bg-royal-purple/5 blur-3xl transition-[transform,opacity] duration-600 ease-out ${animationStarted ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}`} style={{
      transformOrigin: 'center',
      transitionDelay: '0.6s',
      willChange: animationStarted ? 'auto' : 'transform, opacity'
    }}></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-[transform,opacity] duration-500 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
        willChange: animationStarted ? 'auto' : 'transform, opacity'
      }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-purple to-royal-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-sans">
            I've honed my skills in mobile development with a focus on Flutter
            and iOS platforms. Here's a breakdown of my technical expertise:
          </p>
        </div>
        <div ref={skillBarsRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => <div key={skill.name} className={`mb-4 skill-bar transition-[transform,opacity] duration-400 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
          transitionDelay: getSkillBarDelay(index),
          willChange: animationStarted ? 'auto' : 'transform, opacity'
        }}>
              <div className="flex justify-between mb-2">
                <span className="font-serif font-medium text-gray-800 dark:text-royal-white">
                  {skill.name}
                </span>
                <span className="text-royal-purple dark:text-royal-gold font-medium">
                  {skill.progress}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-royal-purple to-royal-gold rounded-full transition-[transform] duration-1000 ease-out" style={{
              transform: animationStarted ? `scaleX(${skill.progress / 100})` : 'scaleX(0)',
              transformOrigin: 'left',
              transitionDelay: `${getSkillBarDelay(index)}`,
              willChange: 'transform'
            }}></div>
              </div>
            </div>)}
        </div>
        <div ref={additionalSkillsRef} className={`mt-16 max-w-4xl mx-auto transition-[transform,opacity] duration-500 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
        transitionDelay: '0.6s',
        willChange: animationStarted ? 'auto' : 'transform, opacity'
      }}>
          <h3 className="text-2xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-6 text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => <span key={skill} className={`skill-tag glass backdrop-blur-md px-6 py-3 rounded-full border border-royal-purple/20 dark:border-royal-gold/20 text-gray-800 dark:text-royal-white hover:border-royal-gold hover:shadow-gold transition-[transform,opacity,box-shadow] duration-200 transform hover:scale-105 hover:-translate-y-1 transition-[transform,opacity] duration-400 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
            transitionDelay: getAdditionalSkillDelay(index),
            willChange: animationStarted ? 'auto' : 'transform, opacity, box-shadow'
          }}>
                {skill}
              </span>)}
          </div>
        </div>
        <div className={`mt-12 max-w-4xl mx-auto transition-[transform,opacity] duration-500 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
        transitionDelay: '1s',
        willChange: animationStarted ? 'auto' : 'transform, opacity'
      }}>
          <div className="glass backdrop-blur-md p-8 rounded-xl shadow-elegant border border-royal-gold/10 transform transition-[transform,opacity,box-shadow] duration-200 hover:shadow-gold hover:-translate-y-2">
            <h3 className="text-xl font-serif font-semibold text-royal-purple dark:text-royal-gold mb-3">
              Cross-Platform SDK Experience
            </h3>
            <p className="text-gray-800 dark:text-gray-200 font-sans">
              I have extensive experience working with ZifMp SDK - implementing
              it as a framework for iOS, a library for Android, and a plugin for
              Flutter applications, enabling seamless functionality across
              multiple platforms.
            </p>
          </div>
        </div>
        <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[{
          value: '4+',
          label: 'Years Experience'
        }, {
          value: '15+',
          label: 'Projects Completed'
        }, {
          value: '3',
          label: 'Companies Worked With'
        }, {
          value: '4',
          label: 'App Store Apps'
        }].map((stat, index) => <div key={index} className={`flex flex-col items-center p-8 glass backdrop-blur-md rounded-xl shadow-elegant border border-royal-gold/10 transform transition-[transform,opacity,box-shadow] duration-200 hover:shadow-gold hover:-translate-y-2 ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
          transitionDelay: getStatDelay(index),
          willChange: animationStarted ? 'auto' : 'transform, opacity, box-shadow'
        }}>
              <div className="relative text-4xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-3" style={{
            opacity: animationStarted ? 1 : 0,
            transform: animationStarted ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            transitionDelay: `${getStatDelay(index)}`,
            willChange: animationStarted ? 'auto' : 'transform, opacity'
          }}>
                <span className="counter">{stat.value}</span>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 blur-sm bg-royal-purple/30 dark:bg-royal-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              </div>
              <div className="text-gray-800 dark:text-royal-white text-center font-sans">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default memo(Skills);