import { Box } from '@mui/material';
import ProjectsView from '../component/ProjectsView';
import data from '../data/projects';
import Copyright from '../component/Copyright';
import type { FC } from 'react';


const ProjectsPage: FC = () => {
  return (
    <Box height='calc(100vh - 80px)'>
      {data.map(i => <ProjectsView detail={i} key={i.id} />)}
      <Copyright />
    </Box>
  );
}

export default ProjectsPage;