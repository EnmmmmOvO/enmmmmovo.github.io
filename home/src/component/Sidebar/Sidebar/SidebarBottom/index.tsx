import React from 'react';
import { Box, Divider, IconButton, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const SidebarBottom: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Divider
        sx={{
          background: theme.colors.alpha.trueWhite[10]
        }}
      />
      <Box sx={{ p: 2, pb: 0, width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <IconButton aria-label="delete" color="inherit" href="https://github.com/enmmmmovo" target="_blank">
          <GitHubIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default SidebarBottom;