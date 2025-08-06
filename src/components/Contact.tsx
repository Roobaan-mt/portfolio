import React, { Component } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, MessageCircleIcon } from 'lucide-react';
const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    // Create mailto link
    const mailtoLink = `mailto:roobaanmt@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    // Open email client
    window.location.href = mailtoLink;
  };
  return <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 w-full transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          <div className="md:w-2/5 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-102">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                    <MailIcon size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </h4>
                    <a href="mailto:roobaanmt@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      roobaanmt@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                    <PhoneIcon size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      Phone
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400">
                      +91 8148411612
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                    <MessageCircleIcon size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      WhatsApp
                    </h4>
                    <a href="https://wa.me/918148411612" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      +91 8148411612
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                    <MapPinIcon size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Chennai, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <a href="https://github.com/Roobaan" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors transform hover:scale-110 duration-300">
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/roobaan-m-t-327075214" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors transform hover:scale-110 duration-300">
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://medium.com/@RoobaanMT" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors transform hover:scale-110 duration-300">
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 animate-slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-101">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Me a Message
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="input-animation">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300" placeholder="John Doe" required />
                </div>
                <div className="input-animation">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="mb-6 input-animation">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300" placeholder="Project Inquiry" required />
              </div>
              <div className="mb-6 input-animation">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300" placeholder="Hello, I'm interested in working with you on..." required></textarea>
              </div>
              <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-700 text-white font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors transform hover:scale-105 duration-300">
                <SendIcon size={16} />
                <span>Send Message</span>
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
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .dark .input-animation input:focus,
        .dark .input-animation textarea:focus {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>;
};
export default Contact;