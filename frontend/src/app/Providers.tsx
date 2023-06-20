import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from 'app/ErrorBoundary';
import StylesProvider from 'styles/Provider';
import StoreProvider from 'store/Provider';

type Props = React.PropsWithChildren<{ withReactQueryDevTools?: boolean }>;

const Providers = ({ children, withReactQueryDevTools = false }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });
  return (
    <ErrorBoundary>
      <StylesProvider>
        <StoreProvider>
          <QueryClientProvider client={queryClient}>
            {children}
            {withReactQueryDevTools && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </QueryClientProvider>
        </StoreProvider>
      </StylesProvider>
    </ErrorBoundary>
  );
};

export default Providers;
