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
    this.pushQuote(quotes, "Begin to be now what you will be hereafter.", "William James");
    this.pushQuote(quotes, "...life is here for us to become kinder. I live life every day hoping I was a slightly kinder person than I was the day before.", "Shoko Makinohara");
    this.pushQuote(quotes, "The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese Proverb");
    this.pushQuote(quotes, "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.", "Samuel Beckett");
    var quote = quotes[this.getRandomNumber(0,quotes.length)];
    ReactDOM.render(quote, document.getElementById("quote"));
    }


  render() {
    return (
      <div class="title-page block" id="title-section">
        <p id="name">David Zhang </p>
        <p id="description"> Software Engineer </p>
        <hr width="5%"/>
        <p id="quote"></p>
          <Link exact
                to="about-section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
          <div class="begin-box">Begin the Story</div>
          </Link>
      </div>
    );
  }

}

export default Title