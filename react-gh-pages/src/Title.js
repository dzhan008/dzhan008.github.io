import React, { Component } from 'react'
import './css/styles.css'

class Title extends Component {

  render() {
    return (
      <div>
        <p id="name"> David Zhang </p>
        <div class="links">
          <a href="https://github.com/dzhan008">
            <img src={process.env.PUBLIC_URL + '/images/github.png'} />
          </a>
          <a href="https://www.linkedin.com/in/dzhan/">
          <img src={process.env.PUBLIC_URL + '/images/linkedin.ico'} />
          </a>
        </div>
        <hr width="50%"/>
        <p id="description"> Software Engineer </p>
      </div>
    )
  }

}

export default Title