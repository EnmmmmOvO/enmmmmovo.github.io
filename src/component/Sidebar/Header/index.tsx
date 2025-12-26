import { useContext, useEffect, useState } from 'react';

import { Box, alpha, lighten, IconButton, Tooltip, styled, useTheme, Button } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import SidebarContext from '../../../context/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import MouseContext from '../../../context/MouseContext';
import { useTranslation } from 'react-i18next';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background as string, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const { hoverOn, hoverOff } = useContext(MouseContext);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (window.outerWidth < 1280) setOpen(true);
  }, []);

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        background: 'black',
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Box>
          <Button
            variant={ i18n.language == "en" ? "contained" : "text" }
            color="primary"
            onMouseOver={() => {
              if (i18n.language == "en") {
                hoverOn();
              }
            }}
            onMouseOut={hoverOff}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </Button>
          <Button
            onClick={() => i18n.changeLanguage('zh')}
            color="primary"
            onMouseOver={() => {
              if (i18n.language == "zh") {
                hoverOn();
              }
            }}
            onMouseOut={hoverOff}
            variant={ i18n.language == "zh" ? "contained" : "text" }
          >
            中
          </Button>
        </Box>
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title={t("showExpand")} open={open as boolean}>
            <IconButton color="primary" onClick={() => { setOpen(false); toggleSidebar(); } }>
              {!sidebarToggle
                ? <MenuTwoToneIcon onMouseOver={hoverOn} onMouseOut={hoverOff} fontSize="small" />
                : <CloseTwoToneIcon onMouseOver={hoverOn} onMouseOut={hoverOff} fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
