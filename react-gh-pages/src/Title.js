import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './css/styles.css'

class Title extends Component {
    getRandomNumber(min, max) {
      return Math.floor(min + Math.random() * (max - min));
    }

    componentDidMount() {
   //Do some quote generator work here
    const quotes = ["\"If you cannot do great things, do small things in a great way.\" -Napoleon Hill", "\"Sometimes, its good to meep whenever you feel like meeping.\" - Meepers"]
    var quote = quotes[this.getRandomNumber(0,2)]
    ReactDOM.render(quote, document.getElementById("quote"));
    }


  render() {
    return (
      <div class="title-page block" id="title-section">
        <p id="name">David Zhang </p>
        <p id="description"> Software Engineer </p>
        <hr width="50%"/>
        <p id="quote"></p>
      </div>
    );
  }

}

export default Title