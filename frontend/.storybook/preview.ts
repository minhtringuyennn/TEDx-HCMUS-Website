import { withThemeProvider } from './decorators';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: ['ref', 'theme', 'as', 'forwardedAs'],
  },
};

export const decorators = [withThemeProvider];
