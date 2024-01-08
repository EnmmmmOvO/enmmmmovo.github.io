import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { LanguageContext } from '../context/LanguageContext';
import ProjectsView, { ProjectDetailProps } from '../component/ProjectsView';
import Copyright from '../component/Copyright';


const ProjectsPage: React.FC = () => {
  const { content } = useContext(LanguageContext);

  useEffect(() => {
    return () => { document.body.style.overflow = 'auto' }
  }, []);

  return (
    <Box height='calc(100vh - 80px)'>
      {(content.project as ProjectDetailProps[]).map((i, index) =>
        <ProjectsView
          logo={i.logo}
          type={i.type}
          title={i.title}
          description={i.description}
          content={i.content}
          link={i.link}
          repo={i.repo}
          paper={i.paper}
          image={i.image}
          imageSize={i.imageSize}
          key={index}
        ></ProjectsView>)
      }
      <Copyright />
    </Box>
  );
}

export default ProjectsPage;