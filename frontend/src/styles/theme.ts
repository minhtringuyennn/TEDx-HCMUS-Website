import type { Interpolation } from 'styled-components/dist/types';
import { css } from 'styled-components';
import {
  centerFlex,
  scrollbar,
  rotateIcon,
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
  RotateIcon,
  primaryTextColor,
  centerBackgroundImage,
} from 'styles/shared';

export type ThemeType = {
  dir?: string;
  colors: {
    primary: {
      light: string;
      lightMobile: string;
      dark: string;
      contrastText: string;
      primaryTextColor: string;
    };
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
    rotateIcon: RotateIcon;
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
    s: number;
    m: number;
    l: number;
    xl: number;
  };
};

const sharedTheme = {
  textSizes: {
    s: 10,
    m: 14,
    l: 18,
    xl: 24,
  },
  utils: {
    centerFlex,
    scrollbar,
    rotateIcon,
    alignItems,
    spinAnimation,
    quickTransition: '0.125s ease-in-out',
    normalTransition: '0.250s ease-in-out',
    centerBackgroundImage,
  },
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
      light: '#FF3100',
      lightMobile: '#FC5C42',
      dark: '#3f4254',
      contrastText: '#f9fafa',
      primaryTextColor,
    },
    status: {
      success,
      warning,
      error,
      info,
    },
    bodyGray,
    light,
    gray,
    darkGray,
    lightGray,
    silver,
  },
  ...sharedTheme,
};

export default theme;
