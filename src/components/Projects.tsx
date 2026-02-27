import React, { useCallback, useEffect, useState, useRef, lazy, memo } from 'react';
import { GithubIcon } from 'lucide-react';
// Store icons as SVG components with improved styling
const AppleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512" fill="currentColor" className="mr-2">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>;
const AndroidIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 576 512" fill="currentColor" className="mr-2">
    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
  </svg>;
// Lazy load image component
const LazyImage = ({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);
  return <img ref={imgRef} src={src} alt={alt} className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} loading="lazy" onLoad={() => setIsLoaded(true)} />;
};
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6); // For progressive loading
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projects = [{
    id: 1,
    title: 'NextPeak',
    description: 'iOS application utilized by over 9000 internal employees of a prominent bank in an Arab country. The application serves as a comprehensive tool for calculating various types of loans, managing tasks, and tracking achievements.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'Firebase', 'RESTful APIs', 'MapKit'],
    liveUrl: 'https://apps.apple.com/in/app/next-peak/id1498192284',
    hasSourceCode: false
  }, {
    id: 2,
    title: 'SportsDoor',
    description: 'A mobile application designed to facilitate the booking of sports venues and the organization of sports events. Features social sharing functionality and a real-time chat section powered by socket technology.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Socket.io', 'Google Maps API'],
    liveUrl: 'https://apps.apple.com/in/app/sportsdoor/id6446688928',
    hasSourceCode: false,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sct.sportsdoor'
  }, {
    id: 3,
    title: 'Intelliclaim',
    description: 'A user-friendly mobile application for seamless insurance claim submissions. Key features include real-time and offline claim filing, document uploads, and status tracking. Ensured robust performance and data synchronization in offline mode.',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Sqflite', 'Google Maps API'],
    liveUrl: 'https://apps.apple.com/in/app/intelliclaim/id6448627626',
    hasSourceCode: false,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sct.intelliclaim'
  }, {
    id: 4,
    title: 'Raido',
    description: 'Developed a scalable ride-hailing platform designed to support 0% commission for drivers. Implemented real-time ride requests, live GPS tracking, driver-rider communication, fare estimation, and in-app wallet/payment systems.',
    image: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    liveUrl: 'https://apps.apple.com/in/app/raido/id6743036332',
    hasSourceCode: false,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.raido.customer'
  }, {
    id: 5,
    title: 'Weather Forecast',
    description: 'A sample project which displays the weather forecast for a week using a free API. The UI will change automatically based on its orientation.',
    image: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'RESTful APIs', 'Adaptive Layout'],
    githubUrl: 'https://github.com/Roobaan/Weather_Forecast',
    hasSourceCode: true
  }, {
    id: 6,
    title: 'Store',
    description: 'A basic E-commerce project with waterfall layout using CHTCollectionViewWaterfallLayout. Features multiple filters and uses CoreData for local storage to display data when offline.',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'CoreData', 'No Storyboard'],
    githubUrl: 'https://github.com/Roobaan/Store',
    hasSourceCode: true
  }];
  const filteredProjects = useCallback(() => {
    return activeFilter === 'all' ? projects.slice(0, visibleProjects) : projects.filter(project => project.category === activeFilter).slice(0, visibleProjects);
  }, [activeFilter, visibleProjects]);
  // Optimized intersection observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  // Load more projects when user scrolls to bottom of projects section
  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect();
        const isBottom = rect.bottom <= window.innerHeight + 300;
        if (isBottom && visibleProjects < projects.length) {
          // Add debounce to avoid too many state updates
          setTimeout(() => {
            setVisibleProjects(prev => Math.min(prev + 3, projects.length));
          }, 300);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleProjects, projects.length]);
  return <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-white dark:bg-royal-black w-full transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-purple/5 dark:bg-royal-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-gold/5 dark:bg-royal-gold/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-[transform,opacity] duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
        willChange: isVisible ? 'auto' : 'transform, opacity'
      }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-purple to-royal-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-sans">
            Here are some of my featured mobile applications built with Flutter
            and iOS. I've worked on 10+ projects throughout my career.
          </p>
        </div>
        <div className={`mb-16 max-w-5xl mx-auto glass backdrop-blur-md p-8 rounded-xl shadow-elegant border border-royal-gold/10 transition-[transform,opacity] duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
        transitionDelay: '0.3s',
        willChange: isVisible ? 'auto' : 'transform, opacity'
      }}>
          <h3 className="text-2xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-6">
            ZifMP SDK Implementation Expertise
          </h3>
          <p className="text-gray-800 dark:text-gray-200 mb-8 font-sans">
            ZifMP is a comprehensive mobile application monitoring tool that
            tracks critical metrics including total user count, active users,
            installed users, session counts, and app performance. It provides
            real-time monitoring of crashes with symbolication, ANR (Application
            Not Responding) incidents, and overall application health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: 'iOS Framework Integration',
            description: 'Developed a native iOS framework implementation that tracks user sessions, monitors crashes with detailed symbolication, and collects usage metrics.'
          }, {
            title: 'Android Library Development',
            description: 'Created a lightweight Android library for ZifMP that monitors active users, session counts, ANR incidents, and crash reports with symbolication.'
          }, {
            title: 'Flutter Plugin Architecture',
            description: 'Engineered a cross-platform Flutter plugin that integrates with ZifMP to monitor total users, active sessions, crashes, and ANR events across both iOS and Android.'
          }].map((item, index) => <div key={index} className={`glass backdrop-blur-md p-6 rounded-lg shadow-elegant border border-royal-gold/10 hover:shadow-gold hover:border-royal-gold/30 transition-[transform,opacity,box-shadow] duration-200 transform hover:-translate-y-2 transition-[transform,opacity] duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
            transitionDelay: `${0.4 + index * 0.1}s`,
            willChange: isVisible ? 'auto' : 'transform, opacity, box-shadow'
          }}>
                <h4 className="font-serif font-semibold text-royal-purple dark:text-royal-gold mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-sans">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
        <div className={`flex justify-center mb-12 transition-[transform,opacity] duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
        transitionDelay: '0.8s',
        willChange: isVisible ? 'auto' : 'transform, opacity'
      }}>
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'flutter', 'ios'].map(filter => <button key={filter} className={`px-8 py-3 rounded-full font-serif font-medium transform transition-all duration-200 hover:scale-105 ${activeFilter === filter ? 'bg-gradient-to-r from-royal-purple to-royal-gold text-white shadow-royal' : 'glass backdrop-blur-md text-gray-800 dark:text-gray-200 border border-royal-purple/20 dark:border-royal-gold/20 hover:border-royal-purple/40 dark:hover:border-royal-gold/40 hover:shadow-royal'}`} onClick={() => {
            setActiveFilter(filter);
            setVisibleProjects(6); // Reset visible projects when filter changes
          }} style={{
            willChange: 'transform, box-shadow'
          }}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>)}
          </div>
        </div>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects().map((project, index) => <div key={project.id} className={`glass backdrop-blur-md rounded-xl overflow-hidden shadow-elegant border border-royal-gold/10 hover:shadow-gold hover:border-royal-gold/30 transition-[transform,opacity,box-shadow] duration-200 transform hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{
          transitionDelay: `${0.9 + Math.min(index, 5) * 0.1}s`,
          willChange: isVisible ? 'auto' : 'transform, opacity, box-shadow'
        }}>
              <div className="h-56 overflow-hidden relative">
                <LazyImage src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    {project.liveUrl && <a href={project.liveUrl} className="store-button flex items-center bg-royal-gold/90 text-royal-black px-4 py-2 rounded-full hover:bg-royal-gold transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                        <AppleIcon />
                        <span>App Store</span>
                      </a>}
                    {project.playStoreUrl && <a href={project.playStoreUrl} className="store-button flex items-center bg-royal-blue/90 text-white px-4 py-2 rounded-full hover:bg-royal-blue transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                        <AndroidIcon />
                        <span>Play Store</span>
                      </a>}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-royal-purple dark:text-royal-gold">
                  {project.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 mb-4 font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="skill-tag bg-royal-purple/10 dark:bg-royal-purple/20 text-royal-purple dark:text-royal-gold-light px-3 py-1 text-sm rounded-full hover:bg-royal-purple/20 dark:hover:bg-royal-purple/30 transition-colors duration-200">
                      {tag}
                    </span>)}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.hasSourceCode && project.githubUrl && <a href={project.githubUrl} className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-royal-purple dark:hover:text-royal-gold transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                      <GithubIcon size={18} />
                      <span>Source Code</span>
                    </a>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default memo(Projects);