import { useRoutes } from 'react-router-dom';
import router from './router';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { WindowContext } from './context/WIndowContext';
import { useEffect, useState } from 'react';
import { MouseProvider } from './context/MouseProvider.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { WindowContextProps } from './type/types.ts';

function App() {
  const [windowSize, setWindowSize] = useState<WindowContextProps>({
    width: 0,
    height: 0
  });

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

  return (
    <ThemeProvider>
      <WindowContext.Provider value={ windowSize }>
        <MouseProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            {useRoutes(router)}
          </LocalizationProvider>
        </MouseProvider>
      </WindowContext.Provider>
    </ThemeProvider>
  );
}
export default App;
