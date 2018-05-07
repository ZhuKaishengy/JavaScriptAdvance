import React,{Component} from 'react'

class Compo extends Component{
   constructor(props){
       super(props)
       this.state = {

       }
   }
   render(){
       return (
           <div>
               {this.props.params.companyname}--->
               {this.props.params.productname}
           </div>
       )
   }
}
export default Compo