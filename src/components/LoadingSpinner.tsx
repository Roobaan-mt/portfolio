import React from 'react';
const LoadingSpinner = () => {
  return <div className="flex items-center justify-center">
      <div className="w-12 h-12 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-royal-purple/20 dark:border-royal-gold/20"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-t-royal-purple dark:border-t-royal-gold animate-spin"></div>
      </div>
    </div>;
};
export default LoadingSpinner;