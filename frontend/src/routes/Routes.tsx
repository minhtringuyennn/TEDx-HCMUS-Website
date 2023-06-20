import * as React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  useRoutes,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Screen from 'screens';
import Path, { AppPath, AuthPath } from 'routes/paths';
import Layout from 'components/Layout';
import { absolutePath, join } from 'utils/path.utils';

const routes: RouteObject[] = [
  {
    path: Path.ROOT,
    element: <Layout />,
    children: [
      {
        path: Path.App,
        element: <Outlet />,
        children: [
          { path: AppPath.Home, element: <Screen.Home /> },
          {
            path: Path.ALL,
            element: <Navigate replace to={absolutePath(Path.NotFound)} />,
          },
        ],
      },
      {
        path: absolutePath(Path.ALL),
        element: <Navigate replace to={Path.NotFound} />,
      },
      { path: absolutePath(Path.NotFound), element: <Screen.NotFound /> },
      {
        path: Path.ROOT,
        element: <Navigate replace to={join(Path.App, AppPath.Home)} />,
      },
      {
        path: Path.ALL,
        element: <Navigate replace to={Path.NotFound} />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
