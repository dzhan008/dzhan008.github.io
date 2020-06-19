import React, { Component } from 'react'
import './css/styles.css'

class About extends Component {

  render() {
    return (
      <div class="about" id="about-section">
        <div class="section">
          <h1 class="header"> Once Upon a Time... </h1>
          <p id="about"> David is a backend developer currently working at Twitch in San Francisco, California. He was first exposed to code back in 2011 when he first joined a robotics team during high school. From there, he enrolled into University of California, Riverside and discovered his passion for game development and software engineering.</p>
          <p id="about"> Enamored by what people can do by combining design, code, and perserverance, David worked on projects he loved alongside amazing companions in the teams he collaborated with. So far he engaged himself in different projects through passion projects, hackathons, game jams, research, an internship, and a professional career at two companies!</p>
        </div>
      </div>
    )
  }
}

export default About