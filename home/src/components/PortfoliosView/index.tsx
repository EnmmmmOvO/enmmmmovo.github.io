import React, { useContext } from 'react';
import { WindowContext } from '../../contexts/WIndowContext';
import { JsonContent, LanguageContext } from '../../contexts/LanguageContext';
import { compilerSentence } from '../ProjectsView';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography
} from '@mui/material';;

export interface PortfolioDetailProps extends JsonContent {
  logo: string;
  type: string;
  title: string;
  video: string;
  description: string;
  paper: string;
  image: string;
  key: number;
}

const PortfoliosView: React.FC<PortfolioDetailProps> = (detail: PortfolioDetailProps) => {
  const { height } = useContext(WindowContext);
  const { content } = useContext(LanguageContext);

  return (
    <Box sx={{ p: height > 800 ? 2 : 1, boxSizing: 'border-box' }}>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          avatar={<img src={`/static/images/logo/${detail.logo}`} style={{ height: '20px', width: 'auto', margin: 0, padding: 0 }}  alt="react logo"/>}
          title={detail.type}
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
              <Typography gutterBottom variant="h4" component="div">{detail.title}</Typography>
              <Typography variant="body2" color="text.secondary">{compilerSentence(detail.description)}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              {detail.paper && <Button size="small" href={detail.paper as string} target="_blank">{content.paper}</Button>}
              {detail.video && <Button size="small" href={detail.paper as string} target="_blank">{content.video}</Button>}
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PortfoliosView;