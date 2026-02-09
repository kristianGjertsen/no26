import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyTheme } from './themeLoader';
import { themes, ThemeName, defaultThemeName } from './themes';
import './index.css';

const savedName =
  typeof window !== 'undefined'
    ? (window.localStorage.getItem('themeName') as ThemeName | null)
    : null;

const initialThemeName = savedName && themes[savedName] ? savedName : defaultThemeName;
applyTheme(themes[initialThemeName]);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
