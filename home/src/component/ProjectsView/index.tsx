import React, { useState, useContext, useEffect, useRef } from 'react';
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
  Link,
  List,
  ListItem,
  ListItemText,
  styled, Tooltip,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { DialogContext } from '../../context/DialogContext';
import { ImageContext, WindowContext } from '../../context/WIndowContext';
import { JsonContent, LanguageContext } from '../../context/LanguageContext';
import PhotoView from './PhotoView';
import { SERVER_URL } from '../../webConfig';

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
  paper: string;
  imageSize: number | string;
  image: string[];
  key: number;
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export const compilerSentence = (i: string) => {
  return i.split('#').map((j, index) => {
    if (j.startsWith(':b')) return <b key={index}>{j.slice(2)}</b>
    else if (j.startsWith(':i')) return <i key={index}>{j.slice(2)}</i>
    else if (j.startsWith(':a')) return <Link
      key={index}
      href={j.slice(2).split('[')[1].split(']')[0]}
      target="_blank"
    >
      {j.slice(2).split('[')[0]}
    </Link>
    else return (<span key={index}>{j}</span>)
  })
}

const ProjectsPage: React.FC<ProjectDetailProps> = (detail: ProjectDetailProps) => {
  const { disabled, handleClickOpen } = useContext(DialogContext);
  const [expanded, setExpanded] = useState<boolean>(false);
  const { height } = useContext(WindowContext);
  const [ imageHeight, setImageHeight ] = useState(0);
  const { content } = useContext(LanguageContext);
  const ref = useRef<HTMLDivElement>();
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) {
      setImageHeight((height > 800 ? 0.33 : 0.25) * height)
    } else {
      setImageHeight(height > 800 ? 140 : 100)
    }
  }, [expanded, height]);

  const handleWebsite = async (url: string) => {
    if (disabled) window.open(url, '_blank');
    else {
      const start = performance.now();
      const timeout = 200;
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Request timed out"));
        }, timeout);
      });

      const fetchPromise = fetch('https://enmmmmovo.cloudns.be/test/', { method: 'HEAD' });

      Promise.race([fetchPromise, timeoutPromise])
        .then((_res) => {
            if (performance.now() - start > 200) handleClickOpen(url);
            else window.open(url, '_blank')
        })
        .catch((_err) => { handleClickOpen(url) });
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);

    setTimeout(() => {
      if (ref.current) {
        window.scrollTo({
        top: ref.current?.offsetTop as number - 80,
        behavior: 'smooth'
      });
      }
    }, 300);

    if (!expanded) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }

  return (
    <Box sx={{ p: height > 800 ? 2 : 1, boxSizing: 'border-box' }} ref={ref}>
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
                {
                  expanded
                  ? <PhotoView list={detail.image.slice(1)} />
                  : <img src={`/static/images/projects/${detail.image[0]}`} style={{ height: detail.imageSize }} alt="logo"/>
                }
              </ImageContext.Provider>
            </CardMedia>
            <CardContent ref={titleRef}>
              <Typography gutterBottom variant="h4" component="div">{detail.title}</Typography>
              <Typography variant="body2" color="text.secondary">{compilerSentence(detail.description)}</Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent
                sx={{ height: height - 270 - (titleRef.current?.clientHeight ?? 0) - imageHeight, overflowY: 'auto' }}
              >
                {(detail.content).map((i, index) => {
                  if (i.type === 'text')
                    return (
                      <Typography key={index} color="text.secondary" sx={{ mb: 1 }}>
                        {compilerSentence(i.content as string)}
                      </Typography>
                    )
                  else if (i.type === 'title')
                    return (
                      <Typography gutterBottom variant="h6" sx={{ fontWeight: 600, fontFamily: 'Arial' }} key={index}>
                        {compilerSentence(i.content as string)}
                      </Typography>
                    )
                  else if (i.type === 'list')
                    return (
                      <List key={index}>
                        {
                          (i.content as string[]).map((j, indexList) => (
                            <ListItem key={`${index}-${indexList}`} sx={{ p: 0.5 }}>
                              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: "text.secondary" }} />
                              <ListItemText sx={{ color: "text.secondary" }} >
                                {compilerSentence(j)}
                              </ListItemText>
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
              {
                detail.link &&
                <Tooltip title={content.tipWebsite} placement="top">
                  <Button size="small" onClick={() => handleWebsite(detail.link)}>{content.website}</Button>
                </Tooltip>
              }
              {
                detail.repo &&
                <Tooltip title={content.tipSource} placement="top">
                  <Button size="small" href={detail.repo as string} target="_blank">{content.source}</Button>
                </Tooltip>
              }
              {
                detail.paper &&
                <Tooltip title={content.tipPaper} placement="top">
                  <Button size="small" href={SERVER_URL + detail.paper as string} target="_blank">{content.paper}</Button>
                </Tooltip>
              }
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <Tooltip title={expanded ? content.showLess : content.showMore} placement="top">
                  <ExpandMoreIcon />
                </Tooltip>
              </ExpandMore>
            </CardActions>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProjectsPage;