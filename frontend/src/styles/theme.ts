import type { Interpolation } from 'styled-components/dist/types';
import { css } from 'styled-components';
import {
  centerFlex,
  scrollbar,
  bodyGray,
  light,
  gray,
  darkGray,
  lightGray,
  silver,
  success,
  warning,
  error,
  info,
  spinAnimation,
  alignItems,
  AlignItems,
  bigTitle,
  centerBackgroundImage,
  size,
} from 'styles/shared';

export type ThemeType = {
  dir?: string;
  colors: {
    primary: {
      default: string;
      p50: string;
      p100: string;
      p200: string;
      p300: string;
      p400: string;
      p500: string;
      p600: string;
      p700: string;
      p800: string;
      p900: string;
    };
    textColor: string;
    bigTitle: Interpolation<object>;
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    bodyGray: string;
    light: string;
    gray: string;
    darkGray: string;
    lightGray: string;
    silver: string;
  };
  utils: {
    centerFlex: string;
    scrollbar: Interpolation<object>;
    spinAnimation: Interpolation<object>;
    quickTransition: string;
    normalTransition: string;
    alignItems: AlignItems;
    centerBackgroundImage: Interpolation<object>;
  };
  spacing: {
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  shadow: {
    m: Interpolation<object>;
    l: Interpolation<object>;
  };
  textSizes: {
    caption: number;
    body: number;
    h1: number;
    h2: number;
    h3: number;
  };
};

const sharedTheme = {
  textSizes: {
    caption: 12,
    body: 16,
    h1: 32,
    h2: 28,
    h3: 20,
  },
  bigTitle,
  utils: {
    centerFlex,
    scrollbar,
    alignItems,
    spinAnimation,
    quickTransition: '0.125s ease-in-out',
    normalTransition: '0.250s ease-in-out',
    centerBackgroundImage,
  },
  size,
  spacing: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    xxl: 32,
  },
  shadow: {
    m: css`
      box-shadow: rgb(13 13 13 / 4%) 1px -1px 12px 6px;
    `,
    l: css`
      box-shadow: rgba(3, 8, 20, 0.1) 0 0.15rem 0.5rem,
        rgba(2, 8, 20, 0.1) 0 0.075rem 0.175rem;
    `,
  },
};

const theme: ThemeType = {
  colors: {
    primary: {
      default: '#FF2B06',
      p50: '#FFEAE6',
      p100: '#FFBDB2',
      p200: '#FF9D8C',
      p300: '#FF7158',
      p400: '#FF5538',
      p500: '#FF2B06',
      p600: '#E82705',
      p700: '#B51F04',
      p800: '#8C1803',
      p900: '#6B1203',
    },
    textColor: '#fff',
    status: {
      success,
      warning,
      error,
      info,
    },
    bodyGray,
    light,
    gray: '#545454',
    darkGray: '#333',
    lightGray: '#8A8A8A',
    silver,
    bigTitle,
  },
  ...sharedTheme,
};

export default theme;
