import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from './App';
import { SidebarProvider } from './context/SidebarContext';
import React from 'react';

const removePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader != null) {
    setTimeout(() => preloader.classList.add('preloaded'), 800);
    setTimeout(() => preloader.parentNode?.removeChild(preloader), 2000);
  }
};

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root'),
  removePreloader
);
