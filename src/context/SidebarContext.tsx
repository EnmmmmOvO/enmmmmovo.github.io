import { createContext } from 'react';
import type { SidebarContextProps } from '../type/types.ts';

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export default SidebarContext;