import { useContext } from 'react';
import { Box, Button, keyframes, styled, Typography } from '@mui/material';
import MouseContext from '../context/MouseContext';
import { useTranslation } from 'react-i18next';

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
  cursor: 'default',
  '@media (max-width: 600px)': {
    fontSize: '12vw',
  },
})

const SubTitle = styled(Typography)({
  zIndex: 1,
  fontSize: '2vw',
  cursor: 'default',
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

const HomePage = () => {
  const { t } = useTranslation();
  const { hoverOn, hoverOff } = useContext(MouseContext);
  const time = new Date().getHours();

  return (
    <Box sx={{ height: 'calc(100vh - 80px)' }}>
      <Box sx={{ height: '100%', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Title>My Portfolio</Title>
        <SubTitle>{
          time < 12 ? t("morning") : time < 18 ? t("afternoon") : t("evening")
        }{t("welcome")}</SubTitle>
        <AboutButton
          onMouseOver={hoverOn}
          onMouseOut={hoverOff}
          variant="contained"
          onClick={() => window.location.href = '#/project'}
        >
          {t("projects")}
        </AboutButton>
      </Box>
    </Box>
  );
}

export default HomePage;