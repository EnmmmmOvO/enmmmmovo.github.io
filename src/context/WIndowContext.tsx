import { createContext } from 'react';

export interface WindowContextProps {
  width: number;
  height: number;
}

export const WindowContext = createContext<WindowContextProps>({
  width: 0,
  height: 0
});

export interface ImageProps {
  imageHeight: number;
}

export const ImageContext = createContext<ImageProps>({
  imageHeight: 0
});