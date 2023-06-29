import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

/**
 * This component contains the main layout of the app
 * @returns React.ReactNode
 */
const Layout = () => (
  <Main>
    <Outlet />
  </Main>
);

export const Main = styled.main.attrs({ className: 'main' })`
  text-align: center;
  background-color: #000;
  color: white;
  height: inherit;
  max-height: 1440px;
`;

export default Layout;
