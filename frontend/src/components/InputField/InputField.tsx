import React, { HTMLProps } from 'react';
import styled from 'styled-components';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}
const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <Styled {...props}>
    <label htmlFor="inp" className="inp">
      <input id="inp" placeholder="&nbsp;" {...props} />
      <span className="label">{label == null ? 'label' : label}</span>
      <span className="focus-bg" />
    </label>
  </Styled>
);

const Styled = styled.div`
  position: relative;
  .inp {
    position: relative;
    width: 100%;
    max-width: 280px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.textColor};
  }
  .inp .label {
    position: absolute;
    left: 0px;
    bottom: 0px;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 500;
    transform-origin: 0 0;
    transition: all 0.2s ease;
    pointer-events: none;
  }
  .inp .focus-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
  }
  .inp input {
    width: 100%;
    border: 0;
    left: 0px;
    font-family: inherit;
    padding: 8px 0px;
    height: auto;
    font-size: 16px;
    font-weight: 400;
    background: none;
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.textColor};
    transition: all 0.15s ease;
  }
  .inp input:hover {
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.textColor};
  }
  .inp input:not(:-moz-placeholder-shown) + .label {
    color: ${({ theme }) => theme.colors.textColor};
    transform: translate3d(0, -16px, 0) scale(0.75);
  }
  .inp input:not(:-ms-input-placeholder) + .label {
    color: ${({ theme }) => theme.colors.textColor};
    transform: translate3d(0, -16px, 0) scale(0.75);
  }
  .inp input:not(:placeholder-shown) + .label {
    color: ${({ theme }) => theme.colors.textColor};
    transform: translate3d(0, -16px, 0) scale(0.75);
  }
  .inp input:focus {
    outline: none;
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.primary.default};
  }
  .inp input:focus + .label {
    color: ${({ theme }) => theme.colors.primary.default};
    transform: translate3d(0, -16px, 0) scale(0.75);
  }
  .inp input:focus + .label + .focus-bg {
    transform: scaleX(1);
    transition: all 0.1s ease;
  }
`;
export default Input;
