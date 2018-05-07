import React,{Component} from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component{
    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} alt="" className="App-logo"/>
                    <p className="App-title">react-demo</p>
                </div>
                <p className="App-intro">zhukaishengy</p>
            </div>
        )
    }
}

export default App