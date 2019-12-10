import React, { Component } from 'react'
import './css/styles.css'

class Contact extends Component {

  render() {
    return (
      <div class="contact">
        <div class="section">
          <h1 class="header"> Contact </h1>
          <div class="contact-details">
            <p><img height="50" width="50" src={process.env.PUBLIC_URL + '/images/email.ico'} /> - davidzhang.zha@gmail.com</p>
            <p><img height="50" width="50" src={process.env.PUBLIC_URL + '/images/linkedin-white.ico'} /> - https://www.linkedin.com/in/dzhan/ </p>
            <p><img height="50" width="50" src={process.env.PUBLIC_URL + '/images/github-white.ico'} /> - https://github.com/dzhan008 </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact