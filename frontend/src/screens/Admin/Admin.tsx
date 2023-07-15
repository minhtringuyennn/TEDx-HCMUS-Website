import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import Overview from './pages/Overview';
import System from './pages/System';
import Checkin from './pages/Checkin';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('System', '1', <DesktopOutlined />),
  getItem('Overview', '2', <PieChartOutlined />),
  getItem('Checkin', '3', <UserOutlined />),
];

const pages: Record<string, React.ReactNode> = {
  '1': <System />,
  '2': <Overview />,
  '3': <Checkin/>,
};

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>
      <Layout>
        <div
          style={{
            padding: 24,
            background: '#f1f1f1',
            display: 'flex',
            flex: 1,
          }}
        >
          {pages[selectedKey]}
        </div>
        <Footer style={{ textAlign: 'center' }}>TEDx HCMUS ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
