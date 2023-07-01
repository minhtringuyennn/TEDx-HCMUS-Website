import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Main } from 'components/Layout';
import { Link } from 'react-router-dom';
import Path, { AppPath } from 'routes/paths';
import { absolutePath, join } from 'utils/path.utils';
import {
  ErrorBoundary as ErrorBoundaryWrapper,
  FallbackProps,
} from 'react-error-boundary';

/**
 * Error Boundary
 *
 * This component will catch any uncaught errors in the app
 * and display a user-friendly screen instead of a white screen
 */
const ErrorBoundary = ({ children }: React.PropsWithChildren) => (
  <ErrorBoundaryWrapper FallbackComponent={Fallback}>
    {children}
  </ErrorBoundaryWrapper>
);

export default ErrorBoundary;

const Fallback = ({ error }: FallbackProps) => {
  const { t } = useTranslation('error-boundary');

  if (import.meta.env.DEV) console.error({ error });

  return (
    <Main>
      <Wrapper>
        <Title>{t?.('title')}</Title>
        <p>{error?.message}</p>
        <Link to={absolutePath(join(Path.App, AppPath.Home))} reloadDocument>
          {t?.('home-link-caption')}
        </Link>
      </Wrapper>
    </Main>
  );
};

const Wrapper = styled.section`
  position: relative;
  top: 20vh;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h1.attrs({ className: 'error-boundary-title' })`
  margin: 0;
  font-size: 3rem;
`;
