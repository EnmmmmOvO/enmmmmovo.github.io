import React, { useContext } from 'react';
import { Box, Divider, IconButton, Tooltip, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LanguageContext } from '../../../../context/LanguageContext';

const SidebarBottom: React.FC = () => {
  const theme = useTheme();
  const { content } = useContext(LanguageContext);

  return (
    <>
      <Divider sx={{ background: theme.colors.alpha.trueWhite[10] }} />
      <Box sx={{ p: 2, pb: 0, width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Tooltip title={content.jumpGithub ? content.jumpGithub : ''} placeholder="top-start">
          <IconButton aria-label="delete" color="inherit" href="https://github.com/enmmmmovo" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}

export default SidebarBottom;