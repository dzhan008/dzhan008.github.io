import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/styles.css'

class Projects extends Component {

  render() {
    return (
     <div>
       <h1 class="header"> Portfolio </h1>
       <div class="section">
        <h3> Take a look at a few projects I have worked on <Link to="/portfolio">here!</Link> </h3>
        <div class="project-container">
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.jpg'} />
            <p class="title"> Resonance </p>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.jpg'} />
            <p class="title"> Resonance </p>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.jpg'} />
            <p class="title"> Resonance </p>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.jpg'} />
            <p class="title"> Resonance </p>
          </div>
        </div>
       </div>
     </div>
    )
  }
}

export default Projects