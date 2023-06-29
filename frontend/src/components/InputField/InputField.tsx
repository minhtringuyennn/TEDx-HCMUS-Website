import { Input, ConfigProvider, InputProps } from 'antd';
import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const InputField: React.FC<InputProps> = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: `${theme.colors.primary.default}`,
        colorText: `${theme.colors.textColor}`,
        fontFamily: 'Be Vietnam Pro',
        borderRadius: 4,
        controlHeight: 40,
        colorError: 'yellow',
        colorBorder: `${theme.colors.gray}`,
        colorTextPlaceholder: `${theme.colors.lightGray}`,
      },
    }}
  >
    <Input
      {...props}
      style={{ background: `${theme.colors.darkGray}` }}
      className="input"
    />
  </ConfigProvider>
);

const Styled = styled(Input)`
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    font-size: 12px;
  }
`;
export default InputField;
