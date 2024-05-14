import { FC, useState, createContext } from 'react';
import MouseTracker from '../component/MouseTracker';
type MouseType = {
  hover: boolean;
  hoverOn: () => void;
  hoverOff: () => void;
};

export const MouseContext = createContext<MouseType>({} as MouseType);

export const MouseProvider: FC = ({ children }) => {
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
