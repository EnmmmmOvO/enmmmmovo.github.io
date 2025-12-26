import { useState, useContext, useEffect, useRef, type FC } from 'react';
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
  List,
  ListItem,
  ListItemText,
  styled, Tooltip,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ImageContext, WindowContext } from '../../context/WIndowContext';
import PhotoView from './PhotoView';
import MouseContext from '../../context/MouseContext.tsx';
import { useTranslation } from 'react-i18next';
import { compilerSentence } from '../../utils/compile.tsx';
import { SERVER_URL } from '../../data/metadata';
import type { ExpandMoreProps, ProjectDetailProps } from '../../type/types.ts';

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand: _expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));


const ProjectsPage: FC<{ detail: ProjectDetailProps }> = ({ detail }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { t } = useTranslation();
  const { height } = useContext(WindowContext);
  const [ imageHeight, setImageHeight ] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { hoverOn, hoverOff } = useContext(MouseContext);

  const [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    if (!titleRef.current) return;

    setTitleHeight(titleRef.current.clientHeight);
  }, [expanded]);

  useEffect(() => {
    if (expanded) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setImageHeight((height > 800 ? 0.33 : 0.25) * height)
    } else {
      setImageHeight(height > 800 ? 140 : 100)
    }
  }, [expanded, height]);

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
          title={t(detail.type)}
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
              <Typography gutterBottom variant="h4" component="div">{t(detail.title)}</Typography>
              <Typography variant="body2" color="text.secondary">
                {compilerSentence(t(detail.description))}
              </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent
                sx={{
                  height: height - 270 - titleHeight - imageHeight,
                  overflowY: 'auto',
                }}
              >
                {(detail.content).map((i, index) => {
                  if (i.type === 'text')
                    return (
                      <Typography key={index} color="text.secondary" sx={{ mb: 1 }}>
                        {compilerSentence(t(i.key || ''))}
                      </Typography>
                    )
                  else if (i.type === 'title')
                    return (
                      <Typography gutterBottom variant="h6" sx={{ fontWeight: 600, fontFamily: 'Arial' }} key={index}>
                        {compilerSentence(t(i.key || ''))}
                      </Typography>
                    )
                  else if (i.type === 'list')
                    return (
                      <List key={index}>
                        {
                          (i.items as string[]).map((j, indexList) => (
                            <ListItem key={`${index}-${indexList}`} sx={{ p: 0.5 }}>
                              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: "text.secondary" }} />
                              <ListItemText sx={{ color: "text.secondary" }} >
                                {compilerSentence(t(j))}
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
                <Tooltip title={t("tipWebsite")} placement="top">
                  <Button
                    size="small"
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                    href={detail.link}
                  >
                    {t("website")}
                  </Button>
                </Tooltip>
              }
              {
                detail.repo &&
                <Tooltip title={t("tipSource")} placement="top">
                  <Button
                    size="small"
                    href={detail.repo as string}
                    target="_blank"
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                  >
                    {t("source")}
                  </Button>
                </Tooltip>
              }
              {
                detail.paper &&
                <Tooltip title={t("tipPaper")} placement="top">
                  <Button
                    size="small"
                    href={SERVER_URL + detail.paper as string}
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                    target="_blank"
                  >
                    {t("paper")}
                  </Button>
                </Tooltip>
              }
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <Tooltip
                  title={expanded ? t("showLess") : t("showMore")}
                  placement="top"
                  onMouseOver={hoverOn}
                  onMouseOut={hoverOff}
                >
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