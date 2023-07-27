import * as React from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import store from 'store';

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
