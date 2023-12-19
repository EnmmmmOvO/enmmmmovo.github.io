import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from './App';
import { SidebarProvider } from './contexts/SidebarContext';

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
