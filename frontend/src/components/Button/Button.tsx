import styled from 'styled-components';
import React, { ButtonHTMLAttributes, HTMLProps } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeFill?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  typeFill,
  children,
  ...props
}: ButtonProps) => (
  <Styled>
    <CustomButton className={`${typeFill}-btn`} {...props}>
      {children}
    </CustomButton>
  </Styled>
);
export default Button;
const Styled = styled.div`
  .text-btn {
    background: none !important;    
    &:hover {
      background: ${({ theme }) => theme.colors.primary.p900};
    }
  }
  .secondary-btn {
    background: ${({ theme }) => theme.colors.primary.p900};
    &:hover {
      background: ${({ theme }) => theme.colors.primary.p800};
  }
  .outlined-btn {
    border: 1px solid rgba(255, 255, 255, 0.5);
    &:hover {
      background: rgba(107, 18, 3, 0.7);
      border: 1px solid rgba(255, 255, 255, 1);
    }
  }
`;
const CustomButton = styled.button`
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
  color: ${({ theme }) => theme.colors.textColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background: ${({ theme }) => theme.colors.primary.default};
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
