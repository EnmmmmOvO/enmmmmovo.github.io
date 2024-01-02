import React from 'react';
import { Typography } from '@mui/material';

const Copyright: React.FC = ()=> {
  return (
    <Typography variant="body2" color="white" align="center" sx={{ pb: 3 }}>
      {'© '}
      {new Date().getFullYear()}
      {' EnmmmmOvO. All rights reserved.'}
    </Typography>
  )
}

export default Copyright;