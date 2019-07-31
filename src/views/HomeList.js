import React from 'react';
import {Row, Col} from 'antd';
import './HomeList.css';
class HomeList extends React.Component{
  constructor(props){
    super()
  }
  state = {
    articleList:[],
    collapsed: true,
  };
  render(){
      return (
        this.props.articleList.map((item) =>
          <div className='article-list'>
               <div className="content">
                    <h2 className='title'>{item.title}</h2>
                    <p className='abstract'>{item.content}</p>
               </div>
               <div className="wrapImg" style={{width: 150}}>
                  <img src={item.img} alt="120" />
               </div>
        </div>
        )
      )
  }
}

export default HomeList