import styled from 'styled-components';
import React, { HTMLProps } from 'react';

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
  border-radius: 0.25rem;
  border: none;
  margin: 0;
  padding: 0 1rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.textColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.p400};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.primary.p900};
    color: ${({ theme }) => theme.colors.lightGray};
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    height: 2rem;
    font-size: 0.75rem;
    padding: 0 0.5rem;
  }
`;

const TextButton = styled(PrimaryButton).attrs({
  className: 'text-button',
  type: 'button',
})`
  background: none;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.p900};
  }
`;

const SecondaryButton = styled(TextButton).attrs({
  className: 'secondary-button',
  type: 'button',
})`
background: ${({ theme }) => theme.colors.primary.p900};
&:hover {
  background: ${({ theme }) => theme.colors.primary.p800};
`;

const OutlinedButton = styled(TextButton).attrs({
  className: 'outlined-button',
  type: 'button',
})`
  border: 1px solid rgba(255, 255, 255, 0.5);
  &:hover {
    background: rgba(107, 18, 3, 0.7);
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  ...props
}: ButtonProps) => {
  switch (type) {
    case 'primary':
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
    case 'secondary':
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
    case 'outlined':
      return <OutlinedButton {...props}>{children}</OutlinedButton>;
    case 'text':
      return <TextButton {...props}>{children}</TextButton>;
    default:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
};
export default Button;
