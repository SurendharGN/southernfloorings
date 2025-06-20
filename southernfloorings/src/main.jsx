// src/main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your global CSS imports
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// Get the root element from your HTML (usually index.html)
const rootElement = document.getElementById('root');

// Create a React root and render your application
createRoot(rootElement).render(
  <React.StrictMode>
    {/* The Router component MUST wrap your entire App component.
        This provides the routing context (like useLocation) to all
        components within your application, including Bgvid.
    */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);