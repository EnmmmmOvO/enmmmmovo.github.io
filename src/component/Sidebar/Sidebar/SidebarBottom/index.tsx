import React, { useContext } from 'react';
import { Box, Divider, IconButton, Tooltip, useTheme } from '@mui/material';
import { LanguageContext } from '../../../../context/LanguageContext';
import { Article, LinkedIn, GitHub } from '@mui/icons-material';
import { MouseContext } from '../../../../context/MouseContext';

const SidebarBottom: React.FC = () => {
  const theme = useTheme();
  const { lang, content } = useContext(LanguageContext);
  const { hoverOn, hoverOff } = useContext(MouseContext);

  return (
    <>
      <Divider sx={{ background: theme.colors.alpha.trueWhite[10] }} />
      <Box sx={{ p: 2, pb: 0, width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Tooltip title={content.jumpResume ? content.jumpResume : ''} placeholder="top-start">
          <IconButton
            aria-label="delete"
            color="inherit"

            onMouseOver={hoverOn}
            onMouseOut={hoverOff}

            href={
              lang === "en"
                ? "https://enmmmmovo.cloudns.be/resume/index_en.html"
                : "https://enmmmmovo.cloudns.be/resume/index.html"
            }
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
        <Tooltip title={content.jumpLinkedin ? content.jumpLinkedin : ''} placeholder="top-start">
          <IconButton
            aria-label="delete"
            color="inherit"
            onMouseOver={hoverOn}
            onMouseOut={hoverOff}
            href="https://www.linkedin.com/in/wang-jinghan-722144309/"
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
        <Tooltip title={content.jumpGithub ? content.jumpGithub : ''} placeholder="top-start">
          <IconButton
            aria-label="delete"
            color="inherit"
            onMouseOver={hoverOn}
            onMouseOut={hoverOff}
            href="https://github.com/enmmmmovo"
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