import React,{Component} from 'react'

class Add extends Component{
   constructor(props){
       super(props)
       this.state = {
           
       }
   }
   submit = () =>{
       let username = this.refs.username.value
       let comment = this.refs.comment.value
       this.props.add(username,comment)
       this.refs.username.value = ''
       this.refs.comment.value=''
   }
   render(){
       return (
           <div>
               <form className="form-horizontal">
                   <div className="form-group">
                       <label>用户名</label>
                       <input type="text" className="form-control" placeholder="用户名" ref="username"/>
                   </div>
                   <div className="form-group">
                       <label>评论内容</label>
                       <textarea className="form-control" rows="6" placeholder="评论内容" ref="comment"></textarea>
                   </div>
                   <div className="form-group">
                       <div className="col-sm-offset-2 col-sm-10">
                           <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
                       </div>
                   </div>
               </form>
           </div>
       )
   }
}
export default Add