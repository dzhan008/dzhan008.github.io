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
        <h1 class="header"> And he worked on these creations... </h1>
        <div class="project-container" id="project-container">
          
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/resonance.png'} />
            <div class="text-box">
              <div class="title">Resonance <hr width="40"/></div>
              <div class="description">
                  <p>Isometric puzzle game.</p>
                  <p>
                    <span class="button">Demo</span> <span class="button">Learn More</span>
                  </p>
                  <span class="tag">C#</span> <span class="tag">Unity</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/creation_and_conquest.png'} />
            <div class="text-box">
              <div class="title">Creation and Conquest <hr width="40"/></div>
              <div class="description">
                  <p>Warioware like game!</p>
                  <p>
                    <span class="button">Demo</span> <span class="button">Learn More</span>
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
                  <p>Endless runner!!!!!!!!</p>
                  <p>
                    <span class="button">Demo</span> <span class="button">Learn More</span>
                  </p>
                  <span class="tag">Blueprints</span> <span class="tag">UE4</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/quick_draw.png'} />
            <div class="text-box">
              <div class="title">Quick Draw <hr width="40"/></div>
              <div class="description">
                  <p>Jackbox-like game!.</p>
                  <p class="buttons">
                    <span class="button">Demo</span> <span class="button">Github</span> <span class="button">More</span>
                  </p>
                  <span class="tag">Python</span> <span class="tag">Flask</span>
              </div>
            </div>
          </div>
          <div class="project-preview">
            <img src={process.env.PUBLIC_URL + '/images/familiar.png'} />
            <div class="text-box">
              <div class="title">Familiar <hr width="40"/></div>
              <div class="description">
                  <p>Another puzzle game!</p>
                  <p>
                    <span class="button">Demo</span> <span class="button">Learn More</span>
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
                  <p>Simulate a firefighter!</p>
                  <p>
                    <span class="button">Demo</span> <span class="button">Learn More</span>
                  </p>
                  <span class="tag">C#</span> <span class="tag">Unity</span> <span class="tag">Oculus Rift</span>
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