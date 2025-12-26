import { useState, type ReactNode } from 'react';
import MouseTracker from '../component/MouseTracker';
import MouseContext from './MouseContext';

export const MouseProvider = ({ children } : { children: ReactNode }) => {
  const [hover, setHover] = useState(false);

  const hoverOn = () => setHover(true);
  const hoverOff = () => setHover(false);

  return (
    <MouseContext.Provider value={{ hover, hoverOn, hoverOff }}>
      <MouseTracker />
      {children}
    </MouseContext.Provider>
  );
};
