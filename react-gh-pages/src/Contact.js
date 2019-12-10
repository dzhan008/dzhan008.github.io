import React, { Component } from 'react'
import './css/styles.css'

class Contact extends Component {

  render() {
    return (
      <div>
        <h1 class="header"> Contact </h1>
        <div class="section">
          <div class="contact-details">
            <p>Email: davidzhang.zha@gmail.com</p>
            <p> Phone: 626-716-7186 </p>
            <p>Social Media </p>
          </div>
          <div class="links">
            <a href="https://github.com/dzhan008">
              <img src={process.env.PUBLIC_URL + '/images/github.png'} />
            </a>
            <a href="https://www.linkedin.com/in/dzhan/">
            <img src={process.env.PUBLIC_URL + '/images/linkedin.ico'} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact