import { type FC, useContext } from 'react';
import { WindowContext } from '../../context/WIndowContext';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Tooltip,
  Typography
} from '@mui/material';
import MouseContext from '../../context/MouseContext.tsx';
import { useTranslation } from 'react-i18next';
import { compilerSentence } from '../../utils/compile.tsx';
import type { PortfolioDetailProps } from '../../type/types.ts';


const PortfoliosView: FC<{ detail: PortfolioDetailProps }> = ({ detail }) => {
  const { height } = useContext(WindowContext);
  const { t } = useTranslation();
  const { hoverOn, hoverOff } = useContext(MouseContext);

  return (
    <Box sx={{ p: height > 800 ? 2 : 1, boxSizing: 'border-box' }}>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          avatar={<img src={`/static/images/logo/${detail.logo}`} style={{ height: '20px', width: 'auto', margin: 0, padding: 0 }}  alt="react logo"/>}
          title={t(detail.type)}
          sx={{ color : 'black' }}
        />
        <Divider />
        <CardContent>
          <Card>
            <CardMedia
              sx={{
                height: height > 800 ? 200 : 160,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                transition: 'height 0.3s ease-in-out',
                alignItems: 'center'
              }}
            >
              <img
                src={`/static/images/projects/portfolio/${detail.image}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                alt="logo"
                onClick={() => window.open(`/static/images/projects/portfolio/${detail.image}`, '_blank')}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">{t(detail.title)}</Typography>
              <Typography variant="body2" color="text.secondary">{compilerSentence(t(detail.description))}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              {
                detail.repo  &&
                <Tooltip title={t("tipSource")} placement="top">
                  <Button
                    size="small"
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                    href={detail.repo}
                    target="_blank">
                    {t("source")}
                  </Button>
                </Tooltip>
              }
              {
                detail.paper &&
                <Tooltip title={t("tipPaper")} placement="top">
                  <Button
                    size="small"
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                    href={detail.paper}
                    target="_blank"
                  >
                    {t("paper")}
                  </Button>
                </Tooltip>
              }
              {
                detail.video &&
                <Tooltip title={t("tipVideo")} placement="top">
                  <Button
                    size="small"
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                    href={detail.video}
                    target="_blank"
                  >
                    {t("video")}
                  </Button>
                </Tooltip>
              }
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PortfoliosView;

