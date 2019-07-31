import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb,Icon,Avatar,Row, Col} from 'antd';
const { Header, Content, Footer,Sider} = Layout;


  class Routers extends React.Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render(){
    return (
      <Layout>
      <Sider
        className='m-sider'
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: '0,30px'}}>
          <Icon
            className="trigger"
            style={{color:'#fff' }}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          <div className='m-pc-head' style={{maxWidth:1000,width:'100%',margin: '0 auto'}}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px',flex:'1' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
              <div>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf',textAlign:'center' }}>U</Avatar>
              </div>
          </div>
        </Header>
        <Content style={{  padding: 24, background: '#fff', minHeight: 280,maxWidth:1000,width:'100%',margin: '24px auto', }}>
          <div>
            <Row gutter={16}>
              <Col xs={24} sm={12} md={16} lg={16} xl={17}>Col</Col>
              <Col xs={24} sm={12} md={4} lg={8} xl={7}>Col</Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
    );
  }
}

export default Routers;
