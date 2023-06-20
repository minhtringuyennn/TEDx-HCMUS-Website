import styled from 'styled-components';

const Button = styled.button.attrs({
  className: 'app-button',
  type: 'button',
})`
  font-size: 2.5rem;
  cursor: pointer;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: none;
  background: ${({ theme }) => theme.colors.light};
  color: #010a43;
  user-select: none;

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default Button;
