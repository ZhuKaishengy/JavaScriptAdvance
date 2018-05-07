import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import App from './components/app'
import About from './components/about'
import Repos from './components/repos'
import Home from './components/home'
import Compo from './components/compo'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:companyname/:productname" component={Compo}/>
            </Route>
        </Route>
    </Router>
),document.getElementById('root'))