import React,{Component} from 'react'
import Search from '../Search'
import List from '../List'

class App extends Component{
   constructor(props){
       super(props)
       this.state = {
           searchContent:''
       }
   }
   search = (searchContent) =>{
       this.setState({searchContent})
   }
   render(){
       let {searchContent} = this.state
       return (
           <div id="app">
               <div className="container">
                   <Search search={this.search}/>
                   <List seachContent={searchContent}/>
               </div>
           </div>
       )
   }
}
export default App