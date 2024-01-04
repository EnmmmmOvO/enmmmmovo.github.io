import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ProjectsView, { ProjectDetailProps } from '../components/ProjectsView';
import Copyright from '../components/Copyright';


const ProjectsPage: React.FC = () => {
  const { content } = useContext(LanguageContext);

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