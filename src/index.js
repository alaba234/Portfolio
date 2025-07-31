// src/index.js (or src/main.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext';

// Add this block to disable scroll restoration on navigation
/* eslint-disable no-restricted-globals */ // <--- Place this above the block
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
/* eslint-enable no-restricted-globals */ // <--- Place this after the block

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);