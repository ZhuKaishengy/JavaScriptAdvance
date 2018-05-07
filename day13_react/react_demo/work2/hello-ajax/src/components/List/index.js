import React,{Component} from 'react'
import axios from 'axios'

class List extends Component{
   constructor(props){
       super(props)
       this.state = {
           begin:true,
           loading:false,
           data:null,
           error:null
       }
   }
   //props更新前调用
   componentWillReceiveProps(nextProps){
       console.log(this.state)
       //props更新时改变页面状态
       this.setState({
           begin:false,
           loading:true
       })
       console.log(this.state)
       //发送ajax请求
       let {seachContent} = nextProps
       let url = `https://api.github.com/search/users?q=${seachContent}`;
       axios.get(url)
           .then(response => {
               console.log(response)
               let data = response.data.items
               this.setState({
                   loading:false,
                   data
               })
           })
           .then(error =>{
               this.setState({
                   loading:false,
                   error
               })
           })
       
   }
   render(){
       let {begin,loading,data,error} = this.state
       if(begin){
           return <p>输入搜索内容！</p>
       }else if(loading){
           return <p>loading...</p>
       }else if(data){
           return (
               <div className="row">
                   {
                       data.map( (user, index) => {
                           return (
                               <div className="card" key={index}>
                                   <a href={user.html_url} target="_blank">
                                       <img src={user.avatar_url} style={{width: '100px'}}/>
                                   </a>
                                   <p className="card-text">{user.login}</p>
                               </div>
                           )
                       })
                   }

               </div>
           )
       }else{
           return <p>error</p>
       }

   }
}
export default List