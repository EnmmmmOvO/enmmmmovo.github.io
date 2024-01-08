import React, { useEffect } from 'react';
import Copyright from '../component/Copyright';
import { Box } from '@mui/material';

const AboutPage: React.FC = () => {
  useEffect(() => {

  }, []);


  return (
    <Box height='calc(100vh - 80px)'>
      <Copyright />
    </Box>
  );
}

export default AboutPage;