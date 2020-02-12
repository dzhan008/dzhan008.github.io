import React, { Component } from 'react'
import Title from './Title'
import About from './About'
import Projects from './Projects'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Contact from './Contact'

class App extends Component {
    render() {
        return (
          <div className="container">
            <Title />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        )
    }
}

export default App