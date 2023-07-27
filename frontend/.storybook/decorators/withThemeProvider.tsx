import * as React from 'react';
import StylesProvider from '../../src/styles/Provider';

const withThemeProvider = (Story, context) => {
  return (
    <StylesProvider>
      <Story {...context} />
    </StylesProvider>
  );
};

export default withThemeProvider;
