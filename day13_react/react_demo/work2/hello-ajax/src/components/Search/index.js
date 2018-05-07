import React,{Component} from 'react'

class Search extends Component{
   constructor(props){
       super(props)
       this.state = {

       }
   }
   search = () =>{
       let searchContent = this.refs.searchContent.value
       this.props.search(searchContent)
   }
   search1 = event =>{
       if (event.keyCode == "13") {
           let searchContent = this.refs.searchContent.value
           this.props.search(searchContent)
       }
   }
   render(){
       return (
           <section className="jumbotron">
               <h3 className="jumbotron-heading">Search Github Users</h3>
               <div>
                   <input type="text" placeholder="enter the name you search" ref="searchContent" onKeyUp={this.search1}/>
                   <button onClick={this.search}>Search</button>
               </div>
           </section>
       )
   }
}
export default Search