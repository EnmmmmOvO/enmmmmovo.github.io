import React from 'react';
import { Box } from '@mui/material';
import Copyright from '../component/Copyright';

const ContactPage: React.FC = () => {
  return (
    <Box height='calc(100vh - 80px)'>
      <Copyright />
    </Box>
  );
}

export default ContactPage;