import styled, { css, keyframes } from 'styled-components';
import { Interpolation } from 'styled-components/dist/types';

export const centerFlex = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const textTruncate = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const primaryTextColor = '#363636';
export const bodyGray = '#F7F7F7';
export const light = '#FFC2C2';
export const gray = '#adadad';
export const darkGray = '#e6e6e6';
export const lightGray = '#EFEFEF';
export const silver = '#A6A6A6';
export const oliveGreen = '#4E6C54';

// notifications colors
export const success = '#02AD42';
export const warning = '#FFA700';
export const error = '#FA0B0B';
export const info = '#1673DB';

export type RotateIcon = Interpolation<{
  isOpen: boolean;
  openDegree?: number;
  closedDegree?: number;
}>;

export const rotateIcon: RotateIcon = ({
  isOpen,
  openDegree = 180,
  closedDegree = 0,
}) => css`
  transform: rotate(${isOpen ? openDegree : closedDegree}deg);
  transition: transform 0.2s;
  transform-origin: center;
`;

export const ButtonCss = css`
  &:disabled {
    background: #e8e8e8;
    color: white !important;
  }
`;

export const scrollBarWidth = '6px';

export const scrollbar = css`
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: #ffffff;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: rgba(166, 185, 200, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(166, 185, 200, 0.5);
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(166, 185, 200, 1);
  }
  &:hover::-webkit-scrollbar {
    width: ${scrollBarWidth};
    height: ${scrollBarWidth};
  }
  @media (max-width: 527px) {
    &:hover::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

const spinAnimationFrame = keyframes`
  from { transform: rotate(0) translate(-50%, -50%) }
  to { transform: rotate(360deg) translate(-50%, -50%) }
`;

export const spinAnimation = css`
  transition: 0.3s ease;
  transform-origin: 0 0;
  animation: ${spinAnimationFrame} 1s infinite;
`;

export const sizes = {
  laptopL: '1024px',
  laptopXl: '1370px',
  laptopXXl: '1600px',
};

export const devices = {
  laptopL: `(min-width: ${sizes.laptopL})`,
  laptopXl: `(min-width: ${sizes.laptopXl})`,
  laptopXXl: `(min-width: ${sizes.laptopXXl})`,
};

export const TABLE_ROW_HEIGHT = 57;
export const TABLE_ROW_HEIGHT_DENSE = 50;

export const TextContent = styled.p<{
  size?: number;
  weight?: number;
  lineHeight?: number;
  isTruncate?: boolean;
  align?: 'left' | 'right' | 'center';
}>`
  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ weight = 400 }) => weight};
  line-height: ${({ lineHeight = 20 }) => lineHeight}px;
  text-align: ${({ align }) => align};
  ${({ isTruncate }) => isTruncate && textTruncate}
`;

export type TextAlign = 'left' | 'center' | 'right';
export type AlignItems = Interpolation<{
  align: TextAlign;
}>;
export const alignItems: AlignItems = ({ align = 'center' }) =>
  ({
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
  }[align]);

export const SMALL_RESOLUTION = '(max-width: 1500px)';
export const TABLET_RESOLUTION = '(max-width: 1200px)';
export const MIN_TABLET_RESOLUTION = '(min-width: 1150px)';
export const SMALL_HEIGHT_RESOLUTION = '(max-height: 900px)';
export const MOBILE_RESOLUTION = '(max-width: 500px)';
export const MOBILE_TABLET_RESOLUTION = '(max-width: 800px)';

export const centerBackgroundImage = css`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
