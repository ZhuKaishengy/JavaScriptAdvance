import React from 'react'

class Component2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            desc:'haha'
        }
    }
    render(){
        let {desc} = this.state
        return <h2>{desc}</h2>
    }
}
export default Component2