import styled, { keyframes } from 'styled-components';
import BrandLogo from 'icons/Logo';

const Logo = () => (
  <Styled href="https://www.facebook.com/tedxhcmus">
    <CustomLogo/>
  </Styled>
);

const CustomLogo = styled(BrandLogo).attrs({
  className: 'app-logo',
  height: '40px',
  'aria-label': 'logo',
})`
  pointer-events: none;
  user-select: none;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    height: 20px;
  }
`;

const Styled = styled.a`
    &:hover {
      opacity: 1
    }
    wwid
`
export default Logo;
