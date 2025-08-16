import React, { useEffect, useState, useRef, memo } from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ['iOS Developer', 'Flutter Developer', 'Mobile App Expert'];
  const typingSpeed = 70;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 1000;
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);
  const profileRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);
  // Sample resume URL - this is a placeholder for a real resume
  const resumeUrl = 'https://drive.google.com/file/d/1N-NjaNdSMKVqHzwfOsTj66BWY_-NLMhY/view?usp=sharing';
  // Detect when hero section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
        // Start staggered animations after hero is visible
        setTimeout(() => setAnimationStarted(true), 100);
      }
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  // Optimized typing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];
      // Handle typing or deleting text
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingDelay(typingSpeed);
        // If completed typing the phrase
        if (displayText === currentPhrase) {
          setIsDeleting(true);
          setTypingDelay(delayBetweenPhrases);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingDelay(deletingSpeed);
        // If completed deleting the phrase
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      }
    }, typingDelay);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);
  // Highly optimized parallax effect with requestAnimationFrame and throttling
  useEffect(() => {
    let frameId: number | null = null;
    let lastScrollPosition = window.scrollY;
    let scheduledAnimationFrame = false;
    const handleScroll = () => {
      lastScrollPosition = window.scrollY;
      if (!scheduledAnimationFrame) {
        scheduledAnimationFrame = true;
        frameId = requestAnimationFrame(() => {
          if (profileRef.current && contentRef.current) {
            // Use transform for GPU acceleration
            profileRef.current.style.transform = `translateY(${lastScrollPosition * 0.05}px) rotateZ(${lastScrollPosition * 0.005}deg)`;
            contentRef.current.style.transform = `translateY(${lastScrollPosition * 0.03}px)`;
          }
          scheduledAnimationFrame = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  return <section id="hero" ref={heroRef} className="relative pt-32 md:pt-40 pb-16 md:pb-32 w-full overflow-hidden">
      {/* Animated gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-royal-purple-light/10 to-royal-blue-light/10 dark:from-royal-purple-dark/20 dark:to-royal-blue-dark/20 z-0 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
      backgroundSize: '200% 200%',
      animation: isVisible ? 'gradientFlow 15s ease infinite' : 'none',
      willChange: 'background-position'
    }}></div>
      {/* Decorative elements */}
      <div className={`absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-royal-gold/5 dark:bg-royal-gold/10 blur-3xl transition-all duration-2000 ease-out ${isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}`} style={{
      transformOrigin: 'center',
      animationDelay: '0.3s',
      willChange: 'transform, opacity'
    }}></div>
      <div className={`absolute right-1/4 bottom-1/4 w-80 h-80 rounded-full bg-royal-purple/5 dark:bg-royal-purple/10 blur-3xl transition-all duration-2000 ease-out ${isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}`} style={{
      transformOrigin: 'center',
      animationDelay: '0.6s',
      willChange: 'transform, opacity'
    }}></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center relative z-10">
        <div ref={contentRef} className="md:w-1/2 mb-10 md:mb-0" style={{
        willChange: 'transform'
      }}>
          <p className={`text-royal-purple dark:text-royal-gold font-serif font-semibold mb-2 text-lg transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.3s',
          willChange: 'transform, opacity'
        }}>
            Hello, I'm
          </p>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 gradient-text transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.5s',
          willChange: 'transform, opacity'
        }}>
            Roobaan M T
          </h1>
          <div className={`text-2xl md:text-3xl text-gray-800 dark:text-royal-white mb-6 h-10 font-serif transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.7s',
          willChange: 'transform, opacity'
        }}>
            <span>{displayText}</span>
            <span className="animate-pulse inline-block w-1 h-6 ml-1 bg-royal-gold"></span>
          </div>
          <p className={`text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg font-sans leading-relaxed transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.9s',
          willChange: 'transform, opacity'
        }}>
            Crafting beautiful, intuitive mobile experiences with Flutter and
            iOS. Turning ideas into user-friendly applications with royal
            precision.
          </p>
          <div className={`flex flex-wrap gap-4 transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '1.1s',
          willChange: 'transform, opacity'
        }}>
            <a href="#contact" className="px-8 py-4 bg-royal-purple dark:bg-royal-gold text-white dark:text-royal-black font-medium rounded-full hover:shadow-royal dark:hover:shadow-gold transition-all duration-200 transform hover:translate-y-[-5px] hover:scale-105 relative overflow-hidden group" style={{
            willChange: 'transform, box-shadow'
          }}>
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-royal-purple-light to-royal-purple dark:from-royal-gold-light dark:to-royal-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-button px-8 py-4 border-2 border-royal-gold bg-royal-gold/10 dark:bg-royal-gold/20 text-royal-purple dark:text-royal-gold font-medium rounded-full hover:bg-royal-gold/20 dark:hover:bg-royal-gold/30 transition-all duration-200 transform hover:translate-y-[-5px] flex items-center gap-2" style={{
            willChange: 'transform'
          }}>
              <DownloadIcon size={18} />
              <span>View Resume</span>
            </a>
          </div>
          <div className={`flex gap-6 mt-10 transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '1.3s',
          willChange: 'transform, opacity'
        }}>
            <a href="https://github.com/Roobaan" className="text-royal-purple dark:text-royal-gold hover:text-royal-purple-light dark:hover:text-royal-gold-light transition-all duration-300 transform hover:scale-125" target="_blank" rel="noopener noreferrer" style={{
            willChange: 'transform'
          }}>
              <GithubIcon size={28} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/roobaan-m-t-327075214" className="text-royal-purple dark:text-royal-gold hover:text-royal-purple-light dark:hover:text-royal-gold-light transition-all duration-300 transform hover:scale-125" target="_blank" rel="noopener noreferrer" style={{
            willChange: 'transform'
          }}>
              <LinkedinIcon size={28} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-1500 ease-out ${animationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{
        transitionDelay: '0.6s',
        willChange: 'transform, opacity'
      }}>
          <div ref={profileRef} className="relative" style={{
          willChange: 'transform'
        }}>
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-royal-gold/30 dark:border-royal-gold/20 shadow-royal dark:shadow-gold animate-float transform hover:rotate-3 transition-all duration-1000">
              <img src={profileImg} alt="Roobaan M T - Profile" className="w-full h-full object-cover" loading="eager" fetchpriority="high" />
              {/* Shimmering overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              {/* Cinematic reveal effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-royal-purple to-royal-gold transition-all duration-2000 ease-out ${isVisible ? 'opacity-0' : 'opacity-100'}`} style={{
              willChange: 'opacity'
            }}></div>
            </div>
            <div className={`absolute -bottom-4 -right-4 glass backdrop-blur-md p-4 rounded-lg shadow-elegant animate-pulse-slow transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 translate-x-8'}`} style={{
            transitionDelay: '1.2s',
            willChange: 'transform, opacity'
          }}>
              <p className="font-serif font-bold text-royal-purple dark:text-royal-gold">
                4+ Years Experience
              </p>
            </div>
            {/* Decorative elements with staggered animations */}
            <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full bg-royal-gold/20 dark:bg-royal-gold/10 transition-all duration-1500 ease-out ${animationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{
            transitionDelay: '1.5s',
            willChange: 'transform, opacity',
            animation: animationStarted ? 'pulse 3s ease-in-out infinite' : 'none'
          }}></div>
            <div className={`absolute -bottom-10 -left-16 w-16 h-16 rounded-full bg-royal-purple/20 dark:bg-royal-purple/10 transition-all duration-1500 ease-out ${animationStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{
            transitionDelay: '1.7s',
            willChange: 'transform, opacity',
            animation: animationStarted ? 'float 6s ease-in-out infinite' : 'none',
            animationDelay: '1s'
          }}></div>
          </div>
        </div>
      </div>
      <div className={`container mx-auto px-4 md:px-6 flex justify-center mt-16 md:mt-24 transition-all duration-1000 ease-out ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
      transitionDelay: '2s',
      willChange: 'transform, opacity'
    }}>
        <a href="#about" className="flex items-center gap-2 text-royal-purple dark:text-royal-gold hover:text-royal-purple-light dark:hover:text-royal-gold-light transition-all duration-500 transform hover:translate-y-2 group" style={{
        willChange: 'transform'
      }}>
          <span className="font-serif">Discover More</span>
          <ArrowDownIcon size={20} className="animate-bounce group-hover:animate-none" />
        </a>
      </div>
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>;
};
export default memo(Hero);