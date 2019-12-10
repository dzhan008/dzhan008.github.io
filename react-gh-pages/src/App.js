import React, { Component } from 'react'
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom"
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Portfolio from './Portfolio'
import Contact from './Contact'

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <nav class="navbar">
              <ul>
                <li><NavLink exact
                    activeStyle={{color: '#2a2f33'}}
                    to="/">
                    HOME</NavLink></li>
                <li><NavLink exact
                    activeStyle={{color: '#2a2f33'}}
                    to="/portfolio">
                    PORTFOLIO</NavLink></li>
                <li><NavLink exact
                    activeStyle={{color: '#2a2f33'}}
                    to={process.env.PUBLIC_URL + 'resume.pdf'}
                    target="_blank">
                    RESUME</NavLink></li>
                <div class="underbar"></div>
              </ul>
            </nav>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/portfolio' component={Portfolio} />
            </Switch>
          </BrowserRouter>
        )
    }
}

export default App