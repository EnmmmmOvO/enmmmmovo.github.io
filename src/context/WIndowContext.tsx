import { createContext } from 'react';
import type { WindowContextProps } from '../type/types.ts';

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