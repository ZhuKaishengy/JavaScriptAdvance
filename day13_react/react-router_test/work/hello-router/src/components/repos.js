import React,{Component} from 'react'
import {Link} from 'react-router'

class Repos extends Component{
   constructor(props){
       super(props)
       this.state = {
           repos:[
               {company:'facebook',product:'react'},
               {company:'facebook',product:'yarn'},
               {company:'google',product:'angular'},
               {company:'zhukaishengy',product:'zksaisjx'}
           ]
       }
   }
   render(){
       let {repos} = this.state
       return (
           <div>
               <h3>repos show ...</h3>
               <ul>
                   {
                       repos.map((item,index) => {
                           return <li key={index}>
                               <Link to={`/repos/${item.company}/${item.product}`}>{item.product}</Link>
                           </li>
                       })
                   }
               </ul>
               {this.props.children}
           </div>
       )
   }
}
export default Repos