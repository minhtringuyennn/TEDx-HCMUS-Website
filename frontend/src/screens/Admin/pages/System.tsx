import React, { useState } from 'react';
import { Input } from 'antd';
import useSystem from '../../../hooks/useSystem';

const { Search } = Input;

const System: React.FC = () => {
  const System = useSystem();
  const { apiKey } = System;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Search
        placeholder="Input API Key here. Contact admin for more information."
        allowClear
        enterButton="Submit"
        size="large"
        defaultValue={apiKey}
        onSearch={(value) => {
          System.setAPIKey(value);
        }}
      />
    </div>
  );
};

export default System;
