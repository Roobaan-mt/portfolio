import React from 'react';
const Skills = () => {
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
  return <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 w-full transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've honed my skills in mobile development with a focus on Flutter
            and iOS platforms. Here's a breakdown of my technical expertise:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => <div key={skill.name} className="mb-4 skill-bar animate-slide-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {skill.progress}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full progress-fill" style={{
              width: `${skill.progress}%`
            }}></div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 max-w-4xl mx-auto animate-fade-in" style={{
        animationDelay: '0.5s'
      }}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => <span key={skill} className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors transform hover:scale-105 duration-300 animate-fade-in" style={{
            animationDelay: `${0.5 + index * 0.1}s`
          }}>
                {skill}
              </span>)}
          </div>
        </div>
        <div className="mt-8 max-w-4xl mx-auto animate-fade-in" style={{
        animationDelay: '0.7s'
      }}>
          <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300 hover:scale-102">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              Cross-Platform SDK Experience
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I have extensive experience working with ZifMp SDK - implementing
              it as a framework for iOS, a library for Android, and a plugin for
              Flutter applications, enabling seamless functionality across
              multiple platforms.
            </p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transform hover:scale-105 duration-300 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 counter animate-bounce-slow">
              4+
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-center">
              Years Experience
            </div>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transform hover:scale-105 duration-300 animate-fade-in" style={{
          animationDelay: '0.9s'
        }}>
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 counter animate-bounce-slow" style={{
            animationDelay: '0.2s'
          }}>
              10+
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-center">
              Projects Completed
            </div>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transform hover:scale-105 duration-300 animate-fade-in" style={{
          animationDelay: '1s'
        }}>
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 counter animate-bounce-slow" style={{
            animationDelay: '0.4s'
          }}>
              3
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-center">
              Companies Worked With
            </div>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm transform hover:scale-105 duration-300 animate-fade-in" style={{
          animationDelay: '1.1s'
        }}>
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 counter animate-bounce-slow" style={{
            animationDelay: '0.6s'
          }}>
              4
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-center">
              App Store Apps
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fillProgress {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .progress-fill {
          animation: fillProgress 1.5s ease-out forwards;
        }
        .skill-bar:hover .progress-fill {
          background-color: #4f46e5;
        }
        .dark .skill-bar:hover .progress-fill {
          background-color: #818cf8;
        }
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .counter {
          animation: countUp 1s ease-out forwards;
        }
      `}</style>
    </section>;
};
export default Skills;