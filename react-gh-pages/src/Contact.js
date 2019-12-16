import React, { Component } from 'react'
import './css/styles.css'

class Contact extends Component {

  render() {
    return (
      <div class="contact block" id="contact-section">
        <div class="section">
          <h1 class="header"> But his story does not end here. </h1>
          <div class="contact-details">
            <p a ref><img height="75" width="75" src={process.env.PUBLIC_URL + '/images/email.ico'} /> davidzhang.zha@gmail.com</p>
            <a href="https://www.linkedin.com/in/dzhan" target="_blank">
              <p><img height="75" width="75" src={process.env.PUBLIC_URL + '/images/linkedin-white.ico'} /> https://www.linkedin.com/in/dzhan </p>
            </a>
            <a href="https://github.com/dzhan008" target="_blank">
              <p><img height="75" width="75" src={process.env.PUBLIC_URL + '/images/github-white.ico'} /> https://github.com/dzhan008 </p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact