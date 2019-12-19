import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link, animateScroll as scroll} from "react-scroll"
import './css/styles.css'

class Title extends Component {
    getRandomNumber(min, max) {
      return Math.floor(min + Math.random() * (max - min));
    }

    pushQuote(quotes, quote, author) {
      var formatted_quote = "\"" + quote + "\"" + " - " + author;
      quotes.push(formatted_quote);
    }

    componentDidMount() {
   //Do some quote generator work here
    const quotes = [];
    this.pushQuote(quotes, "If you cannot do great things, do small things in a great way.", "Napoleon Hill");
    this.pushQuote(quotes, "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.", "Stephen Hawking");
    this.pushQuote(quotes, "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", "Confucius");
    this.pushQuote(quotes, "The secret of getting ahead is getting started.", "Mark Twain");
    var quote = quotes[this.getRandomNumber(0,quotes.length)];
    ReactDOM.render(quote, document.getElementById("quote"));
    }


  render() {
    return (
      <div class="title-page block" id="title-section">
        <p id="name">David Zhang </p>
        <p id="description"> Software Engineer </p>
        <hr width="50%"/>
        <p id="quote"></p>
        <div class="arrow"><Link exact
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    <img src={process.env.PUBLIC_URL + '/images/down_arrow_white.png'}/></Link>
        </div>
      </div>
    );
  }

}

export default Title