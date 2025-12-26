import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router';

import SidebarLayout from './component/Sidebar';


const Waves = lazy(() => import("./component/Waves"));
const Home = lazy(() => import("./screen/homePage"));
const Project = lazy(() => import("./screen/projectsPage"));
const Contact = lazy(() => import("./screen/contactPage"));
const Portfolio = lazy(() => import("./screen/portfolioPage"));


const routes: RouteObject[] = [
  {
    path: '',
    element: [
      <SidebarLayout key="sider" />,
      <Waves key="waves" />
    ],
    children: [
      { path: '', element: <Navigate to="home" replace /> },
      { path: 'home', element: <Home /> },
      { path: 'project', element: <Project /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> }
    ]
  }
];

export default routes;
