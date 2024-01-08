import { createContext } from 'react';

export interface JsonContent {
  [key: string]: string | string[] | JsonContent | JsonContent[] | number | number[];
}

interface LanguageContextProps {
  lang: string;
  content: JsonContent;
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
