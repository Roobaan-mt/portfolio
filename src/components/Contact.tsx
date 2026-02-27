import React, { useEffect, useState, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, MessageCircleIcon } from 'lucide-react';
import { SOCIAL } from '../data/social';
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');
    try {
      const res = await fetch('https://formspree.io/f/xwvnzvgo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };
  // Animation on scroll
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
  return <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 dark:bg-royal-black/95 w-full transition-colors duration-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-purple/5 dark:bg-royal-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-gold/5 dark:bg-royal-gold/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-purple dark:text-royal-gold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-purple to-royal-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-sans">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          <div className={`md:w-2/5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
          transitionDelay: '0.3s'
        }}>
            <div className="glass backdrop-blur-md p-8 rounded-xl shadow-elegant border border-royal-gold/10 hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-serif font-bold mb-8 text-royal-purple dark:text-royal-gold">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[{
                icon: <MailIcon size={22} className="text-royal-purple dark:text-royal-gold" />,
                title: 'Email',
                content: <a href="mailto:roobaanmt@gmail.com" className="text-royal-purple dark:text-royal-gold hover:text-royal-purple-light dark:hover:text-royal-gold-light hover:underline">
                        roobaanmt@gmail.com
                      </a>
              }, {
                icon: <PhoneIcon size={22} className="text-royal-purple dark:text-royal-gold" />,
                title: 'Phone',
                content: <p className="text-royal-purple dark:text-royal-gold">
                        +91 8148411612
                      </p>
              }, {
                icon: <MessageCircleIcon size={22} className="text-royal-purple dark:text-royal-gold" />,
                title: 'WhatsApp',
                content: <a href="https://wa.me/918148411612" target="_blank" rel="noopener noreferrer" className="text-royal-purple dark:text-royal-gold hover:text-royal-purple-light dark:hover:text-royal-gold-light hover:underline">
                        +91 8148411612
                      </a>
              }, {
                icon: <MapPinIcon size={22} className="text-royal-purple dark:text-royal-gold" />,
                title: 'Location',
                content: <p className="text-gray-700 dark:text-gray-300">
                        Chennai, India
                      </p>
              }].map((item, index) => <div key={index} className="flex items-start gap-4 transform hover:translate-x-2 transition-all duration-500">
                    <div className="bg-gradient-to-br from-royal-purple/10 to-royal-gold/10 dark:from-royal-purple/20 dark:to-royal-gold/20 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-gray-800 dark:text-royal-white mb-1">
                        {item.title}
                      </h4>
                      {item.content}
                    </div>
                  </div>)}
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold mb-6 text-royal-purple dark:text-royal-gold">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {[{
                  url: SOCIAL.github,
                  icon: <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                }, {
                  url: SOCIAL.linkedin,
                  icon: <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                }, {
                  url: SOCIAL.medium,
                  icon: <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                        </svg>
                }].map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="glass backdrop-blur-md p-4 rounded-full hover:bg-gradient-to-br hover:from-royal-purple/20 hover:to-royal-gold/20 transition-all duration-500 transform hover:scale-110 hover:rotate-12">
                      {social.icon}
                    </a>)}
                </div>
              </div>
            </div>
          </div>
          <div className={`md:w-3/5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{
          transitionDelay: '0.5s'
        }}>
            <form onSubmit={handleSubmit} className="glass backdrop-blur-md p-8 rounded-xl shadow-elegant border border-royal-gold/10 hover:shadow-gold transition-all duration-500">
              <h3 className="text-2xl font-serif font-bold mb-8 text-royal-purple dark:text-royal-gold">
                Send Me a Message
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="input-animation">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="w-full px-4 py-3 border-2 border-royal-purple/20 dark:border-royal-gold/20 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300" placeholder="John Doe" required />
                </div>
                <div className="input-animation">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-4 py-3 border-2 border-royal-purple/20 dark:border-royal-gold/20 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="mb-6 input-animation">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange} className="w-full px-4 py-3 border-2 border-royal-purple/20 dark:border-royal-gold/20 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300" placeholder="Project Inquiry" required />
              </div>
              <div className="mb-8 input-animation">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  Your Message
                </label>
                <textarea id="message" name="message" rows={5} value={formState.message} onChange={handleChange} className="w-full px-4 py-3 border-2 border-royal-purple/20 dark:border-royal-gold/20 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 resize-none" placeholder="Hello, I'm interested in working with you on..." required></textarea>
              </div>
              {submitStatus === 'success' && (
                <p className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mb-4 text-sm font-medium text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
              <button type="submit" disabled={submitting} className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-purple to-royal-gold text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-gold relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                <span className="relative z-10 flex items-center gap-2">
                  <SendIcon size={18} />
                  <span>{submitting ? 'Sending…' : 'Send Message'}</span>
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-royal-gold to-royal-purple opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .input-animation input,
        .input-animation textarea {
          transition: all 0.3s ease;
        }
        .input-animation input:focus,
        .input-animation textarea:focus {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .dark .input-animation input:focus,
        .dark .input-animation textarea:focus {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>;
};
export default Contact;