import styled, { keyframes } from 'styled-components';
import BrandLogo from 'icons/Logo';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled(BrandLogo).attrs({
  className: 'app-logo',
  width: '200px',
  height: '200px',
  'aria-label': 'logo',
})`
  pointer-events: none;
  user-select: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`;

export default Logo;
