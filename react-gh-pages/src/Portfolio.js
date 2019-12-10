import React, { Component } from 'react'
import './css/styles.css'

class Portfolio extends Component {

  render() {
    return (
      <div>
        <h1> Portfolio </h1>
        <div class="project-container">
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.jpg'} />
            <p class="title"> Resonance </p>
            <span class="tag">C#</span> <span class="tag">Unity</span>
            <br />
            <br />
            <div class="buttons">
            <button>Github</button> <button>Demo</button> <button>Learn More</button>
            </div>
            <hr width="30%"/>
            <p class="description"> This is a random one liner about the project. </p>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/familiar.png'} />
            <p class="title"> Resonance </p>
            <img class="icon" src={process.env.PUBLIC_URL + '/images/github.png'} />
            <button>Demo</button> <button>Learn More</button>
            <p> This is a random one liner about the project. </p>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/creation_and_conquest.jpg'} />
            <p class="title"> Resonance </p>
            <img class="icon" src={process.env.PUBLIC_URL + '/images/github.png'} />
            <button>Demo</button> <button>Learn More</button>
            <p> This is a random one liner about the project. </p>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.jpg'} />
            <p class="title"> Resonance </p>
            <img class="icon" src={process.env.PUBLIC_URL + '/images/github.png'} />
            <button>Demo</button> <button>Learn More</button>
            <p> This is a random one liner about the project. </p>
          </div>
         <div class="project-preview">
           <img src={process.env.PUBLIC_URL + '/images/resonance.jpg'} />
            <p class="title"> Resonance </p>
            <img class="icon" src={process.env.PUBLIC_URL + '/images/github.png'} />
            <button>Demo</button> <button>Learn More</button>
            <p> This is a random one liner about the project. </p>
         </div> 
        </div>
      </div>
    )
  }
}

export default Portfolio