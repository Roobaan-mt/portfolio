import React, { createElement } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
// Use createRoot for React 18
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  // Fallback for direct file opening
  document.addEventListener('DOMContentLoaded', () => {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    const root = createRoot(rootDiv);
    root.render(<App />);
  });
}