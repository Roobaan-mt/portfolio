import React from 'react';
import { CodeIcon, SmartphoneIcon, GlobeIcon, BriefcaseIcon } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800 w-full transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 animate-slide-up">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              As an experienced iOS Developer and Flutter Developer with 4+
              years of professional experience and a proven track record of
              developing successful mobile applications, I am seeking a
              challenging role to utilize my skills and expertise in creating
              innovative iOS applications or cross platform applications using
              Flutter.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey in mobile development began with iOS, mastering Swift,
              UIKit and SwiftUI, and expanded to cross-platform development with
              Flutter. I have specialized experience implementing ZifMp SDK
              across iOS (as a framework), Android (as a library), and Flutter
              (as a plugin), demonstrating my versatility in cross-platform
              development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Based in Chennai, I've worked with multiple companies to build and
              maintain high-quality mobile applications, integrate APIs, and
              optimize app performance. I'm passionate about creating intuitive
              user interfaces and ensuring smooth functionality across different
              platforms.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:scale-105 duration-300 animate-fade-in">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <SmartphoneIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Mobile Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating intuitive, responsive, and feature-rich mobile
                  applications for iOS and Android platforms.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:scale-105 duration-300 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <CodeIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Flutter Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building cross-platform applications with Flutter's reactive
                  framework and Dart programming.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:scale-105 duration-300 animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <GlobeIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  iOS Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Crafting native iOS applications with Swift, UIKit, and
                  SwiftUI for exceptional user experiences.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow transform hover:scale-105 duration-300 animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <BriefcaseIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Professional Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Worked with GAVS Technologies, SivaCerulean Technologies, and
                  Innovix Software Technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;