export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'ios' | 'flutter';
  tags: string[];
  impact?: string;
  color: string;
  initial: string;
  iosUrl?: string;
  androidUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NextPeak',
    description: 'Enterprise banking app used by 9,000+ internal employees. Loan calculator, task management, and achievement tracking built for a prominent bank in an Arab country.',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'Firebase', 'RESTful APIs', 'MapKit'],
    impact: '9,000+ users',
    color: 'from-blue-600 to-blue-800',
    initial: 'N',
    iosUrl: 'https://apps.apple.com/in/app/next-peak/id1498192284',
  },
  {
    id: 2,
    title: 'SportsDoor',
    description: 'Sports venue booking and event organization platform with real-time chat powered by Socket.io and social sharing features.',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Socket.io', 'Google Maps'],
    impact: 'iOS & Android',
    color: 'from-green-600 to-emerald-700',
    initial: 'S',
    iosUrl: 'https://apps.apple.com/in/app/sportsdoor/id6446688928',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.sct.sportsdoor',
  },
  {
    id: 3,
    title: 'Intelliclaim',
    description: 'Insurance claim submission app with real-time and offline filing, document uploads, and status tracking. Robust offline-first architecture using Sqflite.',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Sqflite', 'Google Maps'],
    impact: 'iOS & Android',
    color: 'from-violet-600 to-purple-800',
    initial: 'I',
    iosUrl: 'https://apps.apple.com/in/app/intelliclaim/id6448627626',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.sct.intelliclaim',
  },
  {
    id: 4,
    title: 'Raido',
    description: 'Scalable ride-hailing platform with 0% commission for drivers. Real-time GPS tracking, fare estimation, driver-rider communication, and in-app wallet.',
    category: 'flutter',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    impact: 'iOS & Android',
    color: 'from-orange-500 to-red-600',
    initial: 'R',
    iosUrl: 'https://apps.apple.com/in/app/raido/id6743036332',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.raido.customer',
  },
  {
    id: 5,
    title: 'Weather Forecast',
    description: 'Weekly weather forecast app with adaptive layout that responds to device orientation. Uses a free weather API.',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'RESTful APIs', 'Adaptive Layout'],
    color: 'from-sky-500 to-blue-600',
    initial: 'W',
    githubUrl: 'https://github.com/Roobaan/Weather_Forecast',
  },
  {
    id: 6,
    title: 'Store',
    description: 'E-commerce app with waterfall layout, multiple product filters, and CoreData for offline browsing. Built entirely without Storyboard.',
    category: 'ios',
    tags: ['Swift', 'UIKit', 'CoreData', 'No Storyboard'],
    color: 'from-pink-600 to-rose-700',
    initial: 'S',
    githubUrl: 'https://github.com/Roobaan/Store',
  },
];
