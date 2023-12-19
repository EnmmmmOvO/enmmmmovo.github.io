import { useRoutes } from 'react-router-dom';
import router from './router';
import './App.css';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { LanguageContext } from './contexts/languageContext';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { useEffect, useState } from 'react';

function App() {
  const [lang, setLang] = useState<string>('en');
  const [content, setContent] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    import(`./content/${lang}.json`)
      .then(data => setContent(data.default))
      .catch(error => setLang('en'));
  }, [lang]);

  return (
    <ThemeProvider>
      <LanguageContext.Provider value={{ lang, content, setLang }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {useRoutes(router)}
        </LocalizationProvider>
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}
export default App;
