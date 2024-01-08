import React, { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from './component/Sidebar';
import SuspenseLoader from './component/SuspenseLoader';

export const Loader = (Component: React.FC) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Waves = Loader(lazy(() => import('./component/Waves')));
const Home = Loader(lazy(() => import('./screen/homePage')));
const Project = Loader(lazy(() => import('./screen/projectsPage')));
const About = Loader(lazy(() => import('./screen/aboutPage')));
const Contact = Loader(lazy(() => import('./screen/contactPage')));
const Portfolio = Loader(lazy(() => import('./screen/portfolioPage')));
const Friend = Loader(lazy(() => import('./screen/friendPage')));

const routes: RouteObject[] = [
  {
    path: '',
    element: [
      <SidebarLayout key="sider" />,
      <Waves key="waves" />
    ],
    children: [
      {
        path: '',
        element: <Navigate to="home" replace />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'project',
        element: <Project />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'friend',
        element: <Friend />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      }
    ]
  }
];

export default routes;
