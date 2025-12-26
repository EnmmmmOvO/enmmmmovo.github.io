import React, { type FC, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { CacheProvider, ThemeContext } from '@emotion/react';
import { muiCache } from './emotionCache.ts';

const ThemeProviderWrapper: FC<React.PropsWithChildren> = ({ children }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);

  const setThemeName = (name: string): void => {
    localStorage.setItem('appTheme', name);
    _setThemeName(name);
  };

  return (
    <CacheProvider value={muiCache}>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  );
};

export default ThemeProviderWrapper;
