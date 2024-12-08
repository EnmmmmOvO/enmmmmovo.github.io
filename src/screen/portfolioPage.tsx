import React, { useContext } from 'react';
import { Box } from '@mui/material';
import Copyright from '../component/Copyright';
import PortfoliosView, { PortfolioDetailProps } from '../component/PortfoliosView';
import { LanguageContext } from '../context/LanguageContext';

const AboutPage: React.FC = () => {

  const { content } = useContext(LanguageContext);

  return (
    <Box height='calc(100vh - 80px)'>
      {(content.portfolio as PortfolioDetailProps[]).map((i, index) =>
          <PortfoliosView
            logo={i.logo}
            type={i.type}
            title={i.title}
            video={i.video}
            description={i.description}
            content={i.content}
            paper={i.paper}
            repo={i.repo}
            imageSize={i.imageSize}
            image={i.image}
            key={index}
          />)}
      <Copyright />
    </Box>
  );
}

export default AboutPage;