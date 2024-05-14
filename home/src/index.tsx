import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from './App';
import { SidebarProvider } from './context/SidebarContext';
import MouseTracker from './component/MouseTracker';
import React from 'react';

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
