import React from 'react'
import ReactDOM from 'react-dom'

import Compoment1 from './component1'
import Compoment2 from './component2'

import '../css/style1.css'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>INFO</h1>
                <Compoment1/>
                <Compoment2/>
            </div>
        )
    }
}

ReactDOM.render(<App/> ,document.getElementById('container'))