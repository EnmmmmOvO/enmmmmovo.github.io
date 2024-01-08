import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, keyframes, styled, Typography } from '@mui/material';
import { LanguageContext } from '../context/LanguageContext';

const colorChange = keyframes`
  0% { color: lightcoral; }
  25% { color: lightskyblue; }
  50% { color: springgreen; }
  75% { color: yellow; }
  100% { color: lightcoral; }
`;

const Title = styled(Typography)({
  animation: `${colorChange} 10s infinite`,
  zIndex: 1,
  fontFamily: 'Hey August',
  fontWeight: 900,
  fontSize: '10vw',
  '@media (max-width: 600px)': {
    fontSize: '12vw',
  },
})

const SubTitle = styled(Typography)({
  zIndex: 1,
  fontSize: '2vw',
  fontWeight: 600,
  '@media (max-width: 600px)': {
    fontSize: '3vw',
  },
});


const AboutButton = styled(Button)({
  marginTop: '5vh',
  marginBottom: '10vh',
  width: '20vw',
  fontSize: '1vw',
  '@media (max-width: 600px)': {
    fontSize: '1.5vw',
  },
});

const HomePage: React.FC = () => {
  const [greeting, setGreeting] = useState('');
  const { content } = useContext(LanguageContext);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting(content.morning as string);
    } else if (hour < 18) {
      setGreeting(content.afternoon as string);
    } else {
      setGreeting(content.evening as string);
    }
  }, [content]);

  return (
    <Box sx={{ height: 'calc(100vh - 80px)' }}>
      <Box sx={{ height: '100%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Title>My Portfolio</Title>
        <SubTitle>{greeting}{content.welcome}</SubTitle>
        <AboutButton variant="contained" onClick={() => window.location.href = '/about'}>{content.aboutme}</AboutButton>
      </Box>
    </Box>
  );
}

export default HomePage;