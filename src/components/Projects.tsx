import React, { useState } from 'react';
import { GithubIcon } from 'lucide-react';
// Store icons as SVG components
const AppStoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 dark:text-blue-400">
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10v-4l6 4-6 4v-4z" />
  </svg>;
const PlayStoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-600 dark:text-green-400">
    <path d="M3 20.562l7.371-4.49-1.871-1.871-5.5 6.361zm7.371-11.627l-7.371-4.49 5.5 6.361 1.871-1.871zm1.873.704l2.756-2.756-9.327-5.683v11.51l9.327-5.684-2.756-2.757 2.756 2.756v-11.509l-9.327 5.684 2.756 2.755-2.756-2.755-9.327 5.683v11.51l9.327-5.684-2.756-2.756zm0 5.513l2.756 2.756 9.327-5.683v-11.51l-9.327 5.684 2.756 2.755-2.756-2.755-9.327 5.683v11.51l9.327-5.684-2.756-2.756z" />
  </svg>;
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'NextPeak',
    description: 'iOS application utilized by over 9000 internal employees of a prominent bank in an Arab country. The application serves as a comprehensive tool for calculating various types of loans, managing tasks, and tracking achievements.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'Firebase', 'RESTful APIs', 'MapKit'],
    liveUrl: 'https://apps.apple.com/in/app/next-peak/id1498192284',
    githubUrl: '#'
  }, {
    id: 2,
    title: 'SportsDoor',
    description: 'A mobile application designed to facilitate the booking of sports venues and the organization of sports events. Features social sharing functionality and a real-time chat section powered by socket technology.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Socket.io', 'Google Maps API'],
    liveUrl: 'https://apps.apple.com/in/app/sportsdoor/id6446688928',
    githubUrl: '#',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sct.sportsdoor'
  }, {
    id: 3,
    title: 'Intelliclaim',
    description: 'A user-friendly mobile application for seamless insurance claim submissions. Key features include real-time and offline claim filing, document uploads, and status tracking. Ensured robust performance and data synchronization in offline mode.',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Sqflite', 'Google Maps API'],
    liveUrl: 'https://apps.apple.com/in/app/intelliclaim/id6448627626',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sct.intelliclaim',
    githubUrl: '#'
  }, {
    id: 4,
    title: 'Raido',
    description: 'Developed a scalable ride-hailing platform designed to support 0% commission for drivers. Implemented real-time ride requests, live GPS tracking, driver-rider communication, fare estimation, and in-app wallet/payment systems.',
    image: 'https://images.unsplash.com/photo-1585503418537-88331351ad99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    liveUrl: 'https://apps.apple.com/in/app/raido/id6743036332',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.raido.customer',
    githubUrl: '#'
  }, {
    id: 5,
    title: 'Weather Forecast',
    description: 'A sample project which displays the weather forecast for a week using a free API. The UI will change automatically based on its orientation.',
    image: 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'RESTful APIs', 'Adaptive Layout'],
    githubUrl: 'https://github.com/Roobaan/Weather_Forecast'
  }, {
    id: 6,
    title: 'Store',
    description: 'A basic E-commerce project with waterfall layout using CHTCollectionViewWaterfallLayout. Features multiple filters and uses CoreData for local storage to display data when offline.',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'CoreData', 'No Storyboard'],
    githubUrl: 'https://github.com/Roobaan/Store'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-800 w-full transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured mobile applications built with Flutter
            and iOS. I've worked on 10+ projects throughout my career.
          </p>
        </div>
        <div className="mb-12 max-w-4xl mx-auto bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm border-l-4 border-indigo-500 dark:border-indigo-400 animate-fade-in hover:shadow-md transition-all duration-300 transform hover:scale-101">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            ZifMP SDK Implementation Expertise
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ZifMP is a comprehensive mobile application monitoring tool that
            tracks critical metrics including total user count, active users,
            installed users, session counts, and app performance. It provides
            real-time monitoring of crashes with symbolication, ANR (Application
            Not Responding) incidents, and overall application health, enabling
            teams to proactively address issues before they impact the user
            experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-102">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                iOS Framework Integration
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Developed a native iOS framework implementation that tracks user
                sessions, monitors crashes with detailed symbolication, and
                collects usage metrics. The framework efficiently captures user
                interactions, network requests, and device performance data
                while maintaining minimal overhead and battery impact. The
                implementation provides real-time visibility into iOS app
                performance and user engagement metrics.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-102">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                Android Library Development
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Created a lightweight Android library for ZifMP that monitors
                active users, session counts, ANR incidents, and crash reports
                with symbolication. The implementation provides detailed
                insights into application performance, user engagement patterns,
                and stability metrics. The library efficiently collects and
                transmits data with minimal impact on the host application's
                performance and battery consumption.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-102">
              <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                Flutter Plugin Architecture
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Engineered a cross-platform Flutter plugin that integrates with
                ZifMP to monitor total users, active sessions, crashes, and ANR
                events across both iOS and Android from a single codebase. The
                plugin provides a unified API that automatically handles
                platform-specific monitoring requirements while delivering
                consistent metrics and reporting capabilities, giving developers
                comprehensive visibility into their Flutter application's
                performance.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
            <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
              Key Achievements
            </h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                Implemented comprehensive monitoring of user metrics (active
                users, total users, installed users) across all platforms
              </li>
              <li>
                Developed efficient crash reporting with symbolication to
                quickly identify and resolve critical issues
              </li>
              <li>
                Created unified dashboards displaying session metrics, ANR
                incidents, and performance data for stakeholder visibility
              </li>
              <li>
                Engineered data collection systems with minimal performance
                overhead and battery impact
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mb-10 animate-slide-up" style={{
        animationDelay: '0.3s'
      }}>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className={`px-5 py-2 rounded-full transform hover:scale-105 transition-all duration-300 ${activeFilter === 'all' ? 'bg-indigo-600 dark:bg-indigo-700 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`} onClick={() => setActiveFilter('all')}>
              All
            </button>
            <button className={`px-5 py-2 rounded-full transform hover:scale-105 transition-all duration-300 ${activeFilter === 'flutter' ? 'bg-indigo-600 dark:bg-indigo-700 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`} onClick={() => setActiveFilter('flutter')}>
              Flutter
            </button>
            <button className={`px-5 py-2 rounded-full transform hover:scale-105 transition-all duration-300 ${activeFilter === 'ios' ? 'bg-indigo-600 dark:bg-indigo-700 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`} onClick={() => setActiveFilter('ios')}>
              iOS
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <div key={project.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 text-sm rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors">
                      {tag}
                    </span>)}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && <a href={project.liveUrl} className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
                      <AppStoreIcon />
                      <span>App Store</span>
                    </a>}
                  {project.playStoreUrl && <a href={project.playStoreUrl} className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors" target="_blank" rel="noopener noreferrer">
                      <PlayStoreIcon />
                      <span>Play Store</span>
                    </a>}
                  {project.githubUrl && <a href={project.githubUrl} className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </a>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;