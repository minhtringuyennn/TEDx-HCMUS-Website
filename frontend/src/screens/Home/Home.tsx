import * as React from 'react';
import Button from 'components/Button/Button';
import styled from 'styled-components';

const Title = styled.div`
  ${({ theme }) => theme.bigTitle}
`
const Home = () => (
  <>
    <Button type="primary">
      This is a button
    </Button>
    <Title>TEDx HCMUS 2023</Title>
  </>
  );

export default Home;
