import React, { createElement } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
// Function to handle application initialization
function initializeApp() {
  // Try to find the root element
  let container = document.getElementById('root');
  // If no root element exists, create one
  if (!container) {
    container = document.createElement('div');
    container.id = 'root';
    document.body.appendChild(container);
  }
  // Create and render the React application
  const root = createRoot(container);
  root.render(<React.StrictMode>
      <App />
    </React.StrictMode>);
}
// Initialize the app when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM already loaded, initialize immediately
  initializeApp();
}
// Add this to handle potential 404 errors when deployed
window.addEventListener('error', function (e) {
  // Check if the error is related to loading a resource
  if (e.target && (e.target.tagName === 'SCRIPT' || e.target.tagName === 'LINK')) {
    console.warn('Resource failed to load:', e.target.src || e.target.href);
  }
}, true);