import { createContext } from 'react';
import type { MouseProps } from '../type/types.ts';

const MouseProvider = createContext<MouseProps>({
  hover: false,
  hoverOn: () => {},
  hoverOff: () => {}
});

export default MouseProvider;