import React, { Component } from 'react'
import {Link, animateScroll as scroll} from "react-scroll"
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
                <li><Link exact
                    activeClass="active"
                    activeStyle={{color: '#2a2f33'}}
                    to="title-section"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    HOME</Link></li>
                <li><Link exact
                    activeClass="active"
                    activeStyle={{color: '#2a2f33'}}
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    ABOUT</Link></li>
                <li><Link exact
                    activeClass="active"
                    activeStyle={{color: '#2a2f33'}}
                    to="experience-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    EXPERIENCE</Link></li>
                <li><Link exact
                    activeClass="active"
                    activeStyle={{color: '#2a2f33'}}
                    to="projects-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    PORTFOLIO</Link></li>
                <li><Link exact
                    activeClass="active"
                    activeStyle={{color: '#2a2f33'}}
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    CONTACT</Link></li>
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