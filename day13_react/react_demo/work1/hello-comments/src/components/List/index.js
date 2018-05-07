import React,{Component} from 'react'

import Item from '../Item'

class List extends Component{
   constructor(props){
       super(props)
       this.state = {

       }
   }
   render(){
       let {comments} = this.props
       let display = comments.length > 0? 'none':'block'
       return (
           <div>
               <h3 className="reply">评论回复：</h3>
               <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
               <ul className="list-group">
                   {
                       comments.map((item,index) =>
                           <Item commentItem={item} key={index} remove={this.props.remove} index={index}/>
                       )
                   }
               </ul>
           </div>
       )
   }
}
export default List