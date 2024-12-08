import { createContext } from 'react';

export interface DialogContextProps {
  disabled?: boolean;
  handleClickOpen: (url: string) => void;
}

export const DialogContext = createContext<DialogContextProps>({
  disabled: false,
  handleClickOpen: () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('DialogContext is not defined');
    }
  },
});