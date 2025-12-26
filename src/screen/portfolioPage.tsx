import React from 'react';
import { Box } from '@mui/material';
import Copyright from '../component/Copyright';
import PortfoliosView from '../component/PortfoliosView';
import data from '../data/portfolios'

const AboutPage: React.FC = () => {
  return (
    <Box height='calc(100vh - 80px)'>
      {data.map(i => <PortfoliosView detail={i} key={i.id} />)}
      <Copyright />
    </Box>
  );
}

export default AboutPage;