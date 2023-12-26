import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ProjectsView, { ProjectDetailProps } from '../components/ProjectsView';


const ProjectsPage: React.FC = () => {
  const { content } = useContext(LanguageContext);

  return (
    <Box height='calc(100vh - 80px'>
      {(content.project as ProjectDetailProps[]).map((i, index) =>
        <ProjectsView
          title={i.title}
          description={i.description}
          content={i.content}
          link={i.link}
          repo={i.repo}
          image={i.image}
          key={index}
        ></ProjectsView>)
      }
    </Box>
  );
}

export default ProjectsPage;