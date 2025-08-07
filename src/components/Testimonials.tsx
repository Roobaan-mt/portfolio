import React, { useEffect, useState, useRef, lazy, memo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Sarah Johnson',
  role: 'Product Manager at TechSolutions',
  content: 'Working with Roobaan was an absolute pleasure. His expertise in Flutter development helped us launch our app ahead of schedule. His attention to detail and commitment to quality is unmatched.',
  avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
}, {
  id: 2,
  name: 'Michael Chen',
  role: 'CTO at AppInnovate',
  content: "Roobaan's iOS development skills are top-notch. He solved complex technical challenges that our team had been struggling with for weeks. His code is clean, well-documented, and highly maintainable.",
  avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
}, {
  id: 3,
  name: 'Priya Patel',
  role: 'UI/UX Designer at DigitalCraft',
  content: 'As a designer, I appreciate developers who can bring my designs to life exactly as envisioned. Roobaan not only matched my designs pixel-perfectly but also suggested performance improvements that enhanced the user experience.',
  avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
}, {
  id: 4,
  name: 'James Wilson',
  role: 'Project Lead at MobileFirst',
  content: "I've worked with many mobile developers, but Roobaan stands out for his ability to deliver high-quality work consistently. His cross-platform expertise saved us significant development time and resources.",
  avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
}];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideWidth = useRef<number>(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  // Calculate slide width on resize
  useEffect(() => {
    const calculateSlideWidth = () => {
      if (trackRef.current) {
        slideWidth.current = trackRef.current.offsetWidth;
        updateSlidePosition();
      }
    };
    // Initial calculation
    calculateSlideWidth();
    // Recalculate on resize with debounce
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calculateSlideWidth, 100);
    };
    window.addEventListener('resize', handleResize, {
      passive: true
    });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
  // Autoplay functionality
  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      autoplayTimerRef.current = setInterval(() => {
        if (!isAnimating) {
          goToNextSlide();
        }
      }, 6000);
    };
    if (isVisible) {
      startAutoplay();
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isVisible, isAnimating, currentIndex]);
  // Update slide position
  const updateSlidePosition = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };
  // Navigation functions
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    updateSlidePosition();
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  const goToPrevSlide = () => {
    if (isAnimating) return;
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };
  const goToNextSlide = () => {
    if (isAnimating) return;
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };
  // Touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    // Minimum swipe distance threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go next
        goToNextSlide();
      } else {
        // Swipe right, go prev
        goToPrevSlide();
      }
    }
  };
  return <section id="testimonials" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 dark:bg-royal-black/95 w-full transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/5 dark:bg-royal-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-purple/5 dark:bg-royal-purple/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        willChange: 'transform, opacity'
      }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-purple to-royal-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-sans">
            What clients and colleagues have to say about my work and
            collaboration.
          </p>
        </div>
        {/* Testimonial slider */}
        <div className={`testimonial-slider max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: '0.3s',
        willChange: 'transform, opacity'
      }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div ref={trackRef} className="testimonial-track" style={{
          willChange: 'transform'
        }}>
            {testimonials.map((testimonial, index) => <div key={testimonial.id} className={`testimonial-slide p-2 ${index === currentIndex ? 'active' : ''}`}>
                <div className="glass backdrop-blur-md p-8 md:p-10 rounded-xl shadow-elegant border border-royal-gold/10 hover:shadow-gold transition-all duration-500">
                  <div className="flex items-start mb-6">
                    <div className="mr-4">
                      <QuoteIcon size={36} className="text-royal-gold/60 dark:text-royal-gold/80" />
                    </div>
                    <p className="text-lg text-gray-800 dark:text-gray-200 font-sans italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-royal-gold/30 mr-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-royal-purple dark:text-royal-gold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button onClick={goToPrevSlide} className="p-3 rounded-full bg-royal-purple/10 dark:bg-royal-purple/20 text-royal-purple dark:text-royal-gold hover:bg-royal-purple/20 dark:hover:bg-royal-purple/30 transition-all duration-300 transform hover:scale-110" aria-label="Previous testimonial" disabled={isAnimating} style={{
            willChange: 'transform'
          }}>
              <ChevronLeftIcon size={24} />
            </button>
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-royal-gold w-6' : 'bg-royal-purple/30 dark:bg-royal-gold/30'}`} aria-label={`Go to testimonial ${index + 1}`} disabled={isAnimating}></button>)}
            </div>
            <button onClick={goToNextSlide} className="p-3 rounded-full bg-royal-purple/10 dark:bg-royal-purple/20 text-royal-purple dark:text-royal-gold hover:bg-royal-purple/20 dark:hover:bg-royal-purple/30 transition-all duration-300 transform hover:scale-110" aria-label="Next testimonial" disabled={isAnimating} style={{
            willChange: 'transform'
          }}>
              <ChevronRightIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default memo(Testimonials);