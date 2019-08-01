import React from 'react';
import { BrowserRouter, Route,withRouter } from 'react-router-dom'
import './App.css';
import { Layout, Menu,Icon,Avatar} from 'antd';
import HomePage from "./views/HomePage";
import ArticlePage from "./views/ArticlePage";
import AboutPage from "./views/AboutPage";


const { Header, Content,Sider} = Layout;


class Menus extends React.Component {
  constructor(props){
    console.log(props);
    super(props)
    this.menuHandle=this.menuHandle.bind(this)
  }
  menuHandle(e){
    let name = e.key;
    if(name==='home'){
      this.props.history.push(`/home`);
    }else if(name==='article'){
      this.props.history.push(`/article`);
    }else if(name==='about'){
      this.props.history.push(`/about`);
    }
  }
  render(){
    return (
          <Menu
            theme="dark"
            mode={this.props.mode}
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px',flex:'1' }}
            onClick={this.menuHandle}
          >
            <Menu.Item key="home">首页</Menu.Item>
            <Menu.Item key="article">文章</Menu.Item>
            <Menu.Item key="about">关于</Menu.Item>
          </Menu>
      
    )
  }
}

const MenuRouter = withRouter(Menus);

class ContainerBox extends React.Component {
  constructor(pops){
    super(pops)
    this.menuHandle=this.menuHandle.bind(this)
  }
  state = {
    collapsed: true
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  menuHandle(e){
    let name = e.key;
    if(name==='home'){

    }else if(name==='articel'){
      this.props.history.push(`/articel`);
    }
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
        <MenuRouter mode="inline"/>
      </Sider>
      <Layout>
        <Header style={{ padding: '0,30px', position: 'fixed', width: '100%',zIndex:1}}>
          <Icon
            className="trigger"
            style={{color:'#fff' }}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          <div className='m-pc-head' style={{maxWidth:1000,width:'100%',margin: '0 auto'}}>
              <div className="logo" />
              <MenuRouter mode="horizontal"/>
              <div>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf',textAlign:'center' }}>U</Avatar>
              </div>
          </div>
        </Header>
        <Content style={{  padding: 24, background: '#fff', minHeight: 280,maxWidth:1000,width:'100%',margin: '64px auto 24px', }}>
          <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/article" component={ArticlePage} />
          </div>
        </Content>
      </Layout>
    </Layout>
    );
  }
}

class Routers extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return (
      <BrowserRouter>
      <ContainerBox history={this.props.history}/>
      </BrowserRouter>
    )
  }
}

export default Routers;
