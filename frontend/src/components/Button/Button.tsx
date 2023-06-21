import styled from 'styled-components';
import React from 'react';

const PrimaryButton = styled.button.attrs({
  className: 'primary-button',
  type: 'button',
})`
  font-size: 1rem;
  font-family: 'Be Vietnam pro';
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: .25rem;
  border: none;
  margin: 0;
  padding: 0 1rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.textColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.p400};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.primary.p900};
    color: ${({ theme }) => theme.colors.darkGray};
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: ${({theme}) => theme.size.sm}) {
    height: 2rem;
    font-size: .75rem;
    padding: 0 .5rem;
  }
`;

const TextButton = styled(PrimaryButton).attrs({
  className: 'text-button',
  type: 'button',
})`
  background: none;
  &:hover {
    background: rgba(107, 18, 3, 0.7);
  }
`;

const SecondaryButton = styled(TextButton).attrs({
  className: 'secondary-button',
  type: 'button',
})`
  border: 1px solid rgba(255, 255, 255, 0.5);
  &:hover {
    background: rgba(107, 18, 3, 0.7);
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;

export interface ButtonProps {
  type?: string;
  children: React.ReactNode;
}

const Button = ({ type, children }: ButtonProps) => {
  switch (type){
    case "primary":
      return <PrimaryButton>{children}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton>{children}</SecondaryButton>;
    case "text":
      return <TextButton>{children}</TextButton>;
    default:
      return <PrimaryButton>{children}</PrimaryButton>
  }
}
export default Button;
