import * as React from 'react';
import styled from 'styled-components';
import Navbar from 'components/NavBar/NavBar';

const Title = styled.div`
  ${({ theme }) => theme.bigTitle}
`
const Home = () => (
  <>
    <Navbar/>
    <Title>TEDx HCMUS 2023</Title>
  </>
  );

export default Home;
