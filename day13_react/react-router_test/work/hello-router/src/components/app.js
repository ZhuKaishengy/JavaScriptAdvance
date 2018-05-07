import React,{Component} from 'react'
import {Link} from 'react-router'

class App extends Component{
   constructor(props){
       super(props)
       this.state = {

       }
   }
   render(){
       return (
           <div>
               <h2>hello react-router</h2>
               <ul>
                   <li><Link to="/about">about</Link></li>
                   <li><Link to="/repos">repos</Link></li>
               </ul>
               {this.props.children}
           </div>
       )
   }
}
export default App