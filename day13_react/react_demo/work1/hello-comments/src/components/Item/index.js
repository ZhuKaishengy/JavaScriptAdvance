import React,{Component} from 'react'
import PubSub from 'pubsub-js'

class Item extends Component{
   constructor(props){
       super(props)
       this.state = {
           
       }
   }
   remove = () => {
       let index = this.props.index
       // this.props.remove(index)
       PubSub.publish('index',index)
   }
   render(){
       let item = this.props.commentItem
       return (
           <li className="list-group-item">
               <div className="handle">
                   <a href="javascript:;" onClick={this.remove}>删除</a>
               </div>
               <p className="user"><span ref="line1">{item.person}</span><span>说:</span></p>
               <p className="centence" ref="line2">{item.comment}</p>
           </li>
       )
   }
}
export default Item