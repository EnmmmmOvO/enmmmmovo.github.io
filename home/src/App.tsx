import { useRoutes } from 'react-router-dom';
import router, { Loader } from './router';
import './App.css';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { LanguageContext } from './context/LanguageContext';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import React, { useEffect, useState } from 'react';
import { WindowContext, WindowContextProps } from './context/WIndowContext';

const NoticeDialog = Loader(React.lazy(() => import('./component/NoticeDialog')));

function App() {
  const [lang, setLang] = useState<string>('en');
  const [windowSize, setWindowSize] = useState<WindowContextProps>({
    width: 0,
    height: 0
  });
  const [content, setContent] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    import(`./content/${lang}.json`)
      .then(data => setContent(data.default))
      .catch(_error => setLang('en'));
  }, [lang]);

  return (
    <ThemeProvider>
      <LanguageContext.Provider value={{ lang, content, setLang }}>
        <WindowContext.Provider value={ windowSize }>
          <NoticeDialog>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CssBaseline />
              {useRoutes(router)}
            </LocalizationProvider>
          </NoticeDialog>
        </WindowContext.Provider>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}
export default App;
