import React,{Component} from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

class app extends Component{
   constructor(props){
       super(props)
       this.state = {
           
       }
   }
   render(){
       return (
           <div>
               <Button type="primary">Primary</Button>
               <Button>Default</Button>
               <Button type="dashed">Dashed</Button>
               <Button type="danger">Danger</Button>
           </div>
       )
   }
}
export default app