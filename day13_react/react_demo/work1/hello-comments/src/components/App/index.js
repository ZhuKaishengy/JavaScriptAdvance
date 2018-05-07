import React,{Component} from 'react'
import PubSub from 'pubsub-js'

import Add from '../Add'
import List from '../List'

import './index.css'
import 'bootstrap'

Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
}
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
}
class App extends Component{
   constructor(props){
       super(props)
       this.state = {
           comments:[
               {
                   person:'xxx',
                   comment:'React不错!'
               },
               {
                   person:'yyy',
                   comment:'React有点难!'
               }
           ]
       }
   }
   add = (person,comment) => {
       let comments = this.state.comments
        comments.unshift({
            person:person,
            comment:comment
        })
       this.setState(comments)
       console.log(this.state.comments)
   }
   remove = (index) => {
       let comments = this.state.comments
       comments.splice(index,1)
       this.setState(comments)
       console.log(this.state.comments)
   }
   componentWillMount(){
       PubSub.subscribe('index',(key,msg) => {
           let comments = this.state.comments
           comments.splice(msg,1)
           this.setState(comments)
       })
   }
   render(){
       return (
           <div>
               <header className="site-header jumbotron">
                   <div className="container">
                       <div className="row">
                           <div className="col-xs-12">
                               <h1>请发表对React的评论</h1>
                           </div>
                       </div>
                   </div>
               </header>
               <div className="container">
                   <div className="col-md-4">
                       <Add add={this.add}/>
                   </div>
                   <div className="col-md-8">
                       <List comments={this.state.comments} remove={this.remove}/>
                   </div>
               </div>
           </div>
       )
   }
}
export default App
