import { useContext } from 'react';
import { Box, Divider, IconButton, Tooltip, useTheme } from '@mui/material';
import { Article, LinkedIn, GitHub } from '@mui/icons-material';
import MouseContext from '../../../../context/MouseContext.tsx';
import { useTranslation } from 'react-i18next';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL_EN, RESUME_URL_ZH } from '../../../../data/metadata.ts';

const SidebarBottom: React.FC = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { hoverOn, hoverOff } = useContext(MouseContext);

  return (
    <>
      <Divider sx={{ background: theme.colors.alpha.trueWhite[10] }} />
      <Box sx={{ p: 2, pb: 0, width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Tooltip title={t("jumpResume")}>
          <IconButton
            aria-label="delete"
            color="inherit"

            onMouseOver={hoverOn}
            onMouseOut={hoverOff}

            href={i18n.language === 'en' ? RESUME_URL_EN : RESUME_URL_ZH}
            sx={{
              '&:hover': {
                transform: 'rotate(360deg)',
                transition: 'transform 1s',
                color: theme.colors.alpha.trueWhite[100]
              }
            }}
            target="_blank"
          >
            <Article />
          </IconButton>
        </Tooltip>
        <Tooltip title={t("jumpLinkedin")}>
          <IconButton
            aria-label="delete"
            color="inherit"
            onMouseOver={hoverOn}
            onMouseOut={hoverOff}
            href={LINKEDIN_URL}
            target="_blank"
            sx={{
              '&:hover': {
                transform: 'rotate(360deg)',
                transition: 'transform 1s',
                color: theme.colors.alpha.trueWhite[100]
              }
            }}
          >
            <LinkedIn />
          </IconButton>
        </Tooltip>
        <Tooltip title={t("jumpGithub")}>
          <IconButton
            aria-label="delete"
            color="inherit"
            onMouseOver={hoverOn}
            onMouseOut={hoverOff}
            href={GITHUB_URL}
            target="_blank"
            sx={{
              '&:hover': {
                transform: 'rotate(360deg)',
                transition: 'transform 1s',
                color: theme.colors.alpha.trueWhite[100]
              }
            }}
          >
            <GitHub />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}

export default SidebarBottom;