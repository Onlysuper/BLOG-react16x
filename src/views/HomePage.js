import React from 'react';
import HomeList from "./HomeList";
import HomeCard from "./HomeCard";
import { Row, Col,Button} from 'antd';
class HomePage extends React.Component{
  constructor(props){
    super()
  }
  state = {
    articleList:[
    {
      title:'Vue真是太好了 壹万多字的Vue知识点 超详细!',
      content:'1⃣️、Vue和其他两大框架的区别 Angular 学习成本太高 React 代码可读性差 Vue 学习成本较低 很容易上手传送门 http...',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      title:'Vue真是太好了 壹万多字的Vue知识点 超详细!',
      content:'1⃣️、Vue和其他两大框架的区别 Angular 学习成本太高 React 代码可读性差 Vue 学习成本较低 很容易上手传送门 http...',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      title:'Vue真是太好了 壹万多字的Vue知识点 超详细!',
      content:'1⃣️、Vue和其他两大框架的区别 Angular 学习成本太高 React 代码可读性差 Vue 学习成本较低 很容易上手传送门 http...',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      title:'Vue真是太好了 壹万多字的Vue知识点 超详细!',
      content:'1⃣️、Vue和其他两大框架的区别 Angular 学习成本太高 React 代码可读性差 Vue 学习成本较低 很容易上手传送门 http...',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      title:'Vue真是太好了 壹万多字的Vue知识点 超详细!',
      content:'1⃣️、Vue和其他两大框架的区别 Angular 学习成本太高 React 代码可读性差 Vue 学习成本较低 很容易上手传送门 http...',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      title:'Vue真是太好了 壹万多字的Vue知识点 超详细!',
      content:'1⃣️、Vue和其他两大框架的区别 Angular 学习成本太高 React 代码可读性差 Vue 学习成本较低 很容易上手传送门 http...',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
    ],
    userList:[{
      username:'dearpork',
      position:'打杂工程师',
      description:'公众号 @ 趣谈前端',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      username:'dearpork',
      position:'打杂工程师',
      description:'公众号 @ 趣谈前端',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      username:'dearpork',
      position:'打杂工程师',
      description:'公众号 @ 趣谈前端',
      img:'https://upload-images.jianshu.io/upload_images/12946880-d86d34d90a7b93f0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
  };
  render(){
      return (
          <Row style={{minWidth:300}} gutter={16}>
            <Col xs={24} sm={12} md={16} lg={16} xl={17}>
              <HomeList articleList={this.state.articleList}/>
            <Button type="dashed" style={{width:'100%'}}>阅读更多</Button>
            </Col>
            <Col xs={24} sm={12} md={4} lg={8} xl={7}>
              <HomeCard title="作者榜" articleList={this.state.userList}/>
            </Col>
          </Row>
        )
  }
}

export default HomePage