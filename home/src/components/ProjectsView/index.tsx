import React, { useContext, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  IconButtonProps,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { DialogContext } from '../../contexts/DialogContext';
import { ImageContext, WindowContext } from '../../contexts/WIndowContext';
import { JsonContent, LanguageContext } from '../../contexts/LanguageContext';
import PhotoView from './PhotoView';

interface DetailProps extends JsonContent {
  type: string;
  content: string | string[];
}

export interface ProjectDetailProps extends JsonContent {
  logo: string;
  type: string;
  title: string;
  description: string;
  content: DetailProps[];
  link: string;
  repo: string;
  image: string[];
  key: number;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const ProjectsPage: React.FC<ProjectDetailProps> = (detail: ProjectDetailProps) => {
  const { disabled, handleClickOpen } = React.useContext(DialogContext);
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const { height } = React.useContext(WindowContext);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [ imageHeight, setImageHeight ] = React.useState(0);
  const { content } = useContext(LanguageContext);

  useEffect(() => {
    if (expanded) {
      setImageHeight((height > 800 ? 0.33 : 0.25) * height)
    } else {
      setImageHeight(height > 800 ? 140 : 100)
    }
  }, [expanded, height]);

  const handleWebsite = async (url: string) => {
    if (disabled) window.open(url, '_blank');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 200);

    fetch('https://3.25.181.130', { method: 'HEAD', signal: controller.signal })
      .then(() => {
        clearTimeout(timeoutId);
        window.open(detail.link as string, '_blank');
      })
      .catch((_error) => {
        handleClickOpen(url);
      });
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (!expanded) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    // window.scrollTo(0, 0);
  }

  return (
    <Box sx={{ p: height > 800 ? 2 : 1, boxSizing: 'border-box' }}>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          avatar={<img src={detail.logo} style={{ height: '20px', width: 'auto', margin: 0, padding: 0 }}  alt="react logo"/>}
          title={detail.type}
          sx={{ color : 'black' }}
        />
        <Divider />
        <CardContent>
          <Card>
            <CardMedia
              sx={{
                height: imageHeight,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                transition: 'height 0.3s ease-in-out',
                alignItems: 'center'
              }}
              ref={imageRef}
            >
              <ImageContext.Provider value={{ imageHeight }}>
                {expanded ? <PhotoView list={detail.image.slice(1)} /> : <img src={`/static/images/projects/airbnb/${detail.image[0]}`} style={{ height: 60 }} />}
              </ImageContext.Provider>
            </CardMedia>
            <CardContent ref={titleRef}>
              <Typography gutterBottom variant="h4" component="div">
                {detail.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.description}
              </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent
                sx={{
                  height: height - 250 - (titleRef.current?.clientHeight ?? 0) - imageHeight,
                  overflowY: 'auto'
                }}
              >
                {(detail.content).map((i, index) => {
                  if (i.type === 'text')
                    return <Typography key={index} color="text.secondary" sx={{ mb: 1 }}>{i.content}</Typography>
                  else if (i.type === 'title')
                    return (
                      <Typography gutterBottom variant="h6" sx={{ fontWeight: 600, fontFamily: 'Arial' }} key={index}>
                        {i.content}
                      </Typography>
                    )
                  else if (i.type === 'list')
                    return (
                      <List key={index}>
                        {
                          (i.content as string[]).map((j, indexList) => (
                            <ListItem key={`${index}-${indexList}`} sx={{ p: 0 }}>
                              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: "text.secondary" }} />
                              <ListItemText primary={j} color="text.secondary" />
                            </ListItem>
                          ))
                        }
                      </List>
                    )
                  else return <></>
                })}
              </CardContent>
            </Collapse>
            <CardActions disableSpacing>
              <Button size="small" onClick={() => handleWebsite('https://enmmmmovo.github.io/Airbnb')}>{content.website}</Button>
              <Button size="small" href="https://github.com/EnmmmmOvO/Airbnb" target="_blank">Source Code</Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProjectsPage;