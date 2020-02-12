import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import './css/styles.css'

class Projects extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  
  createTags(tags) {
    var all_tags = <span>hi</span>;
    for (var i = 0; i < tags.length; i++) {
      var tag_element = <span class="tag">{tags[i]}</span>;
      all_tags += tag_element;
    }
    return all_tags;
  }
  
  addProject(name, description, image_title, tags) {
    return (
      <div class="project-preview">
        <img src={process.env.PUBLIC_URL + '/images/resonance.png'} />
        <div class="text-box">
          <div class="title"> {name} <hr width="40"/></div>
          <div class="description">
              <p> {description} </p>
              <p>
                <span class="button">Demo</span> <span class="button">Learn More</span>
              </p>
              {this.createTags(tags)}
          </div>
        </div>
      </div>
    );
  }
  
  updateProjects(projects) {
    var project_container = document.getElementById("project-container");
    return ReactDOM.render(projects, project_container);
  }
  
  componentDidMount() {
    //var projects = [];
    //projects.push(this.addProject("Test", "testtest", "resonance.png", "blah"));
    //this.updateProjects(projects);
  }

  render() {
    return (
     <div class="projects block" id="projects-section">
       <div class="section">
        <h1 class="header"> He worked on these creations... </h1>
        <div class="project-container" id="project-container">

          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/quick_draw.png'} />
            <div class="text-box">
              <div class="title">Quick Draw <hr width="40"/></div>
              <div class="description">
                  <p>Inspired by jackbox games, quick draw is a party game for up to 8 people where you can face opponents on a 1 on 1 battle to see who can draw the best and quick. All you need is your smart phone to play! Note: Please see the instructions in Github if you would like to demo the game!</p>
                  <p class="buttons">
                    <a href="https://quick-draw-game.herokuapp.com/" target="_blank"><span class="button">Demo</span></a>
                    <a href="https://github.com/dzhan008/QuickDraw" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">Python</span> <span class="tag">Flask</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/creation_and_conquest.png'} />
            <div class="text-box">
              <div class="title">Creation and Conquest <hr width="40"/></div>
              <div class="description">
                  <p>A Warioware-like game where you play head to head with another friend across multiple minigames! You can create characters with different RPG stats that suit your play style.</p>
                  <p class="buttons">
                    <a href="https://drive.google.com/file/d/0B_dRwa4KtnbWd3I1VWZUYUpYZFE/view"><span class="button">Demo</span></a>
                    <a href="https://github.com/dzhan008/CNC" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">C#</span> <span class="tag">Unity</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/spirit_runner.png'} />
            <div class="text-box">
              <div class="title">Spirit Runner<hr width="40"/></div>
              <div class="description">
                  <p>Endless runner game where you play as a fox roaming through a beautiful forest.</p>
                  <p class="buttons">
                    <a href="https://drive.google.com/file/d/0B2xUFYO4YAPKUk9nQmVNa0xnSEk/view" target="_blank"><span class="button">Demo</span></a>
                    <a href="https://github.com/dzhan008/spiritrunner" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">Blueprints</span> <span class="tag">UE4</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.png'} />
            <div class="text-box">
              <div class="title">Resonance <hr width="40"/></div>
              <div class="description">
                  <p>Isometric puzzle game- play a blind person exploring through a cave using echolocation to light his path.</p>
                  <p class="buttons">
                    <a href="https://drive.google.com/file/d/0B2xUFYO4YAPKUk9nQmVNa0xnSEk/view" target="_blank"><span class="button">Demo</span></a>
                    <a href="https://github.com/JeffreyHsieh/Resonance" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">C#</span> <span class="tag">Unity</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/familiar.png'} />
            <div class="text-box">
              <div class="title">Familiar <hr width="40"/></div>
              <div class="description">
                  <p>Puzzle game where you lead a cat to her food with lures! Stragetically place the lures in the right positions to make sure the cat goes to the end without hitting any obstacles.</p>
                  <p class="buttons">
                    <a href="https://dzhan008.itch.io/familiar"> <span class="button">Demo</span></a>
                    <a href="https://github.com/dzhan008/QuickDraw" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">C#</span> <span class="tag">Unity</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/fire_fighter_vr.png'} />
            <div class="text-box">
              <div class="title">Fire Fighter VR Simulation <hr width="40"/></div>
              <div class="description">
                  <p>This was an experimental project to test new types of technology that can be provided to firefighters to aid them in their rescue missions. This simulates a real world fire scenario and allows the firefighter to scan heat signatures either using his FLIR tool or his built in visors.</p>
                  <p class="buttons">
                    <a href={process.env.PUBLIC_URL + 'Firefighter_VR_Research_Paper.pdf'} target="_blank"><span class="button">Report</span></a>
                    <a href="https://github.com/leomuteki/FireFighterProject" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">C#</span> <span class="tag">Unity</span> <span class="tag">Oculus Rift</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/listen.png'} />
            <div class="text-box">
              <div class="title">Listen <hr width="40"/></div>
              <div class="description">
                  <p>Auditory training application that helps improve people's hearing ability through an endless runner experience. Also used as a research assessment tool at University of California, Riverside</p>
                  <p class="buttons">
                    <a href="https://apps.apple.com/app/listen-auditory-training/id1031353626" target="_blank"><span class="button">More</span></a>
                  </p>
                  <span class="tag">C#</span> <span class="tag">Unity</span> <span class="tag">iOS</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/cheshires_game.png'} />
            <div class="text-box">
              <div class="title">Cheshire's Game <hr width="40"/></div>
              <div class="description">
                  <p>Scheduling tool used to plans your meetings with other people by automatically determining ideal times based on everyone's availability.</p>
                  <p class="buttons">
                    <a href="https://drive.google.com/open?id=0B2xUFYO4YAPKQzkzQTNXNXYtU2s"><span class="button">Demo</span></a>
                    <a href="https://github.com/dzhan008/cheshiregame" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">C++</span> <span class="tag">Unix</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/pen_me.png'} />
            <div class="text-box">
              <div class="title">Pen Me <hr width="40"/></div>
              <div class="description">
                  <p>Scheduling tool used to plans your meetings with other people by automatically determining ideal times based on everyone's availability.</p>
                  <p class="buttons">
                    <a href="https://github.com/hdoan002/PenMe" target="_blank"><span class="button">Github</span></a>
                  </p>
                  <span class="tag">Bootstrap</span> <span class="tag">Firebase</span>
              </div>
            </div>
          </div>

        </div>
       </div>
     </div>
    )
  }
}

export default Projects