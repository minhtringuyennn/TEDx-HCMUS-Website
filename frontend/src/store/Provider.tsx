import * as React from 'react';
import { Provider } from 'react-redux';
import store from '.';

/**
 * Store Provider
 *
 * This component will provide the global store
 * to any wrapped children
 */
const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
