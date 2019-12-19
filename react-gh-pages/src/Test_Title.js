import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './css/styles.css'

class Title extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: ['D','A','V','I','D',' ','Z','H','A','N','G'],
      letters: new Array(11),
      seconds: 60
    }
    this.title = React.createRef();
  }
  
  getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  
  getRandomChar(min, max) {
    return String.fromCharCode(Math.floor(min + Math.random() * (max - min)));
  }
  
  changeNumbers () {
   var newLetters = new Array(11);
   for (var i = 0; i < newLetters.length; i++) {
     newLetters[i] = this.getRandomNumber();
   }
    return newLetters;
  }

  countDown(interval, element, index) {
    var seconds = 10;
    var number = 0;
    var timer = setInterval(() => {
      if (seconds > 0) {
        number = this.getRandomChar(65,90);
        seconds--;
      }
      if (seconds === 0) {
        number = this.state.name[index];
        clearInterval(timer);
      }
      var text = number + ' ';
      ReactDOM.render(text, document.getElementById(element));
    }, interval)
  }
  
  componentDidMount() {
   var ids = ['name_D', 'name_A', 'name_V', 'name_I', 'name_D_2', 'name_SPACE']
   this.countDown(10, 'name_D', 0);
   this.countDown(20, 'name_A', 1);
   this.countDown(30, 'name_V', 2);
   this.countDown(40, 'name_I', 3);
   this.countDown(50, 'name_D_2', 4);

   this.countDown(60, 'name_Z', 6);
   this.countDown(70, 'name_H', 7);
   this.countDown(80, 'name_A_2', 8);
   this.countDown(90, 'name_N', 9);
   this.countDown(100, 'name_G', 10);
  }

  render() {
    return (
      <div class="title-page block" id="title-section">
        <p id="name"><span id="name_D">A</span><span id="name_A">A</span><span id="name_V">A</span><span id="name_I">A</span><span id="name_D_2">A</span><span id="name_SPACE"> </span><span id="name_Z">A</span><span id="name_H"></span><span id="name_A_2">A</span><span id="name_N">A</span><span id="name_G">A</span> </p>
        <p id="description"> Software Engineer </p>
        <hr width="50%"/>
      </div>
    );
  }

}

export default Title