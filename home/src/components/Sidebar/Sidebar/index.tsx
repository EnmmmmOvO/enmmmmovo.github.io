import React, { useContext } from 'react';
import Scrollbar from '../../Scrollbar';
import { SidebarContext } from '../../../contexts/SidebarContext';

import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  lighten,
  darken
} from '@mui/material';

import SidebarMenu from './SidebarMenu';
import { LanguageContext } from '../../../contexts/LanguageContext';
import SidebarBottom from './SidebarBottom';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const { content } = useContext(LanguageContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:
            theme.palette.mode === 'dark'
              ? alpha(lighten(theme.header.background as string, 0.1), 0.5)
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        }}
      >
        <Scrollbar>
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Box sx={{
                mt: 5,
                borderRadius: '50%',
                width: 120,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                background: 'url(/static/images/avatars/IMG_1879.JPG)',
                backgroundSize: 'cover'
              }} />
              <Box sx={{
                mt: 2,
                mb: 1,
                fontWeight: 'bold',
                fontSize: 24,
                display: 'flex',
                alignItems: 'center'
              }}>
                {content.name}
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10]
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <SidebarBottom />
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5)
          }}
        >
          <Scrollbar>
            <Box mt={3} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <Box sx={{
                mt: 5,
                borderRadius: '50%',
                width: 120,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                background: 'url(/static/images/avatars/IMG_1879.JPG)',
                backgroundSize: 'cover'
              }} />
              <Box sx={{
                mt: 2,
                mb: 1,
                fontWeight: 'bold',
                fontSize: 24,
                display: 'flex',
                alignItems: 'center'
              }}>
                {content.name}
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu />
          </Scrollbar>
          <SidebarBottom />
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
