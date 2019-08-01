import React from 'react';
import { Spin } from 'antd';
import HomeList from "./HomeList";
import HomeCard from "./HomeCard";
import { Row, Col,Button} from 'antd';
import {getAriticle,getUsers} from '../common/apis'
class HomePage extends React.Component{
  constructor(props){
    super()
  }
  state = {
    loading:false,
    articleList:[],
    userList:[]
  };
  componentWillMount(){
    this.getArticles();
    this.getUsers();
  }
  getArticles(){
    this.setState({loading :true})
    getAriticle({}).then(data=>{
      this.setState({
        articleList :data
      })
      this.setState({loading :false})
    }).catch(error=>{
      this.setState({loading :false})
    })
  }
  getUsers(){
    this.setState({loading :true})
    getUsers({}).then(data=>{
      this.setState({
        userList:data
      })
      this.setState({loading :false})
    }).catch(error=>{
      this.setState({loading :false})
    })
  }
  render(){
      return (
        <Spin spinning={this.state.loading}>
          <Row style={{minWidth:300}} gutter={16}>
            <Col xs={24} sm={12} md={16} lg={16} xl={17}>
              <HomeList articleList={this.state.articleList}/>
            <Button type="dashed" style={{width:'100%'}}>阅读更多</Button>
            </Col>
            <Col xs={24} sm={12} md={4} lg={8} xl={7}>
              <HomeCard title="作者榜" articleList={this.state.userList}/>
              <HomeCard title="作者榜" articleList={this.state.userList}/>
            </Col>
          </Row>
        </Spin>
        )
  }
}

export default HomePage