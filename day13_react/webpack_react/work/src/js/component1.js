import React from 'react'

class Component1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'zks'
        }
    }
    render(){
        let {name} = this.state
        return <h2>{name}</h2>
    }
}
export default Component1