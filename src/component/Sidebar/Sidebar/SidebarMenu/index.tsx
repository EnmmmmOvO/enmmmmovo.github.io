import { useContext } from 'react';

import {
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SidebarContext from '../../../../context/SidebarContext.tsx';
import { useTranslation } from 'react-i18next';
import MouseContext from '../../../../context/MouseContext.tsx';
import { NEW_WEBSITE_URL } from '../../../../data/metadata.ts';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const { t } = useTranslation();
  const { hoverOn, hoverOff } = useContext(MouseContext);
  const location = useLocation();

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  onMouseOver={() => {
                    if (location.pathname === '/home') return;
                    hoverOn();
                  }}
                  onMouseOut={hoverOff}
                  to="/home"
                  startIcon={<HomeIcon />}
                >
                  {t("home")}
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  onMouseOver={() => {
                    if (location.pathname === '/project') return;
                    hoverOn();
                  }}
                  onMouseOut={hoverOff}
                  to="/project"
                  startIcon={<AssignmentIcon />}
                >
                  {t("projects")}
                </Button>
              </ListItem>

              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  onMouseOver={() => {
                    if (location.pathname === '/portfolio') return;
                    hoverOn();
                  }}
                  onMouseOut={hoverOff}
                  to="/portfolio"
                  startIcon={<HistoryEduIcon />}
                >
                  {t("portfolios")}
                </Button>
              </ListItem>

              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  onMouseOver={() => {
                    if (location.pathname === '/contact') return;
                    hoverOn();
                  }}
                  onMouseOut={hoverOff}
                  to="/contact"
                  startIcon={<AlternateEmailIcon />}
                >
                  {t("contact")}
                </Button>
              </ListItem>

              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  onMouseOver={() => {
                    if (location.pathname === '/contact') return;
                    hoverOn();
                  }}
                  onMouseOut={hoverOff}
                  to={NEW_WEBSITE_URL}
                  startIcon={<AlternateEmailIcon />}
                >
                  {t("newWebsite")}
                </Button>
              </ListItem>

            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
