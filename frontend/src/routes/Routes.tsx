import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import Screen from '../screens';
import Layout from '../components/Layout';
import { absolutePath } from '../utils/path.utils';

import Path from './paths';

const routes: RouteObject[] = [
  {
    path: Path.ROOT,
    element: <Layout />,
    children: [
      {
        path: Path.Home,
        element: <Screen.Home />,
      },
      // {
      //   path: Path.Track,
      //   element: <Screen.TrackTicket />,
      // },
      {
        path: Path.Purchase,
        element: <Screen.PurchaseTicket />,
      },
      // {
      //   path: Path.Admin,
      //   element: <Screen.Admin />,
      // },
      {
        path: absolutePath(Path.ALL),
        element: <Navigate replace to={Path.NotFound} />,
      },
      { path: absolutePath(Path.NotFound), element: <Screen.NotFound /> },
      {
        path: Path.ROOT,
        element: <Navigate replace to={Path.Home} />,
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
