import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb,Icon,Avatar} from 'antd';
const { Header, Content, Footer} = Layout;


function Routers() {
  return (
    <Layout>
    <Header style={{ position: 'fixed', width: '100%',display:'flex' }}>
      <div style={{ width: '30px', color: '#fff' }}>
        <Icon style={{ fontSize: 16, color: '#fff' }} type="menu-unfold" />
      </div>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px',flex:'1' }}
      >
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">文章</Menu.Item>
        <Menu.Item key="3">关于</Menu.Item>
      </Menu>
      <div>
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      </div>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}></div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
  );
}

export default Routers;
