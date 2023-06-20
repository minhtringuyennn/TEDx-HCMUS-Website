import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, QueryStatus } from '@tanstack/react-query';
import styled from 'styled-components';
import format from 'date-fns/format';

import PostsAPI from 'api/clients/placeholder/methods';
import type { Post } from 'api/clients/placeholder/response';
import Button from 'components/Button';
import StyledLogo from 'components/Logo';
import Link from 'components/Link';
import List from 'components/List';
import { useCounter } from 'hooks';
import { APIErrorConfig } from 'api/types';
import { METHODS } from 'http';

const Home = () => {
  const { t } = useTranslation('home');
  const { count, increment, decrement } = useCounter();

  const { data: posts, status } = useQuery<unknown, APIErrorConfig, Post[]>(
    ['posts'],
    () => PostsAPI.getPosts(),
    {
      initialData: [],
      retry: 1,
    },
  );

  const title = postsTitle[status];

  const today = format(new Date(), 'eeee, do MMM yyyy');

  return (
    <>
      <Header>
        <StyledLogo />
      </Header>
      <p data-testid="today">Today is {today}</p>
      <p data-testid="counter">count is: {count}</p>
      <section className="buttons-container">
        <Button
          data-testid="decrement-button"
          role="button"
          onClick={decrement}
        >
          -
        </Button>
        <Button
          data-testid="increment-button"
          role="button"
          onClick={increment}
        >
          +
        </Button>
      </section>
      <p className="recommended-links">
        <Link href="https://reactjs.org">{t('learn-react')}</Link>
        {' | '}
        <Link href="https://vitejs.dev/guide/features.html">
          {t('vite-docs')}
        </Link>
      </p>
      <h2>{title}</h2>
      <List
        items={posts?.slice(0, 3) ?? []}
        emptyStateElement={postsPlaceholders[status] as React.ReactElement}
        renderOption={({ title, id, body }, index) => (
          <li key={id} data-testid={`list-item-${index + 1}`}>
            <h3>
              <u>
                #{id}: {title}
              </u>
            </h3>
            <pre>{body}</pre>
          </li>
        )}
      />
    </>
  );
};

export default Home;

const Header = styled.header.attrs({ className: 'home-header' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Code = styled.code`
  background: ${({ theme }) => theme.colors.lightGray};
  color: black;
  border-radius: 12px;
  padding: 0.2rem;
  margin: 0.5rem;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
`;

const postsTitle: Record<QueryStatus, string> = {
  loading: 'Fetching Posts...',
  error: 'There was an error fetching your posts',
  success: 'Top 3 Posts',
};

const postsPlaceholders: Record<string, string | React.ReactElement> = {
  idle: 'Fetching...',
  loading: 'Fetching...',
  error: (
    <>
      Did you forget to create a<Code>&#39;.env&#39;</Code> file?
    </>
  ),
};
