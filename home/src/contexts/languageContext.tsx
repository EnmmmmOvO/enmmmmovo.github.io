import { createContext } from 'react';

interface LanguageContextProps {
  lang: string;
  content: { [key: string]: string }
  setLang: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  lang: 'en',
  content: {},
  setLang: () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('LanguageContext.Provider is not defined');
    }
  }
});
