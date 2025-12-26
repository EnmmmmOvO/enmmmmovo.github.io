import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from './App';
import SidebarProvider from './context/SidebarProvider';
import './i18n';
import './index.css'

const removePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader != null) {
    setTimeout(() => preloader.classList.add('preloaded'), 800);
    setTimeout(() => preloader.parentNode?.removeChild(preloader), 2000);
  }
};

const rootEl = document.getElementById('root');

if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <React.StrictMode>
    <HelmetProvider>
      <SidebarProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </SidebarProvider>
    </HelmetProvider>
  </React.StrictMode>
);

removePreloader();
