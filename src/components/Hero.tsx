import React, { useEffect, useState, useRef } from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ['iOS Developer', 'Flutter Developer', 'Mobile App Expert'];
  const typingSpeed = 70;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 1000;
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);
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
  }, [displayText, currentIndex, isDeleting]);
  return <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 w-full transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-up">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Roobaan M T
          </h1>
          <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 h-10">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            Crafting beautiful, intuitive mobile experiences with Flutter and
            iOS. Turning ideas into user-friendly applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 bg-indigo-600 dark:bg-indigo-700 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors hover:scale-105 transform duration-300">
              Get In Touch
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-indigo-600 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-105 transform duration-300">
              View Projects
            </a>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/Roobaan" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110 transform duration-300" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/roobaan-m-t-327075214" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110 transform duration-300" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-600 dark:bg-indigo-700 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-lg hover:scale-105 transform transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-pulse-slow">
              <p className="font-bold text-indigo-600 dark:text-indigo-400">
                4+ Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 flex justify-center mt-16">
        <a href="#about" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:scale-110 transform duration-300">
          <span>Scroll Down</span>
          <ArrowDownIcon size={20} className="animate-bounce" />
        </a>
      </div>
    </section>;
};
export default Hero;