import React from 'react';
import style from '../../css/projects.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Button from './MyButton'



export default class Projects extends React.PureComponent {
  render() {
    return (
      <div className="projects-wrapper">
        <h2 className="projects">Projects</h2>
          <article className="flex">
            <div className="flex-child top-shelf-tracker">
              <h2 className="project-name">Top Shelf Tracker</h2>
              <p className="project-description">Top Shelf Tracker is a tool designed for entering hockey statistics. This was the project that started my love for the React framework. I built this project from the groundup by on my own. This was the project capstone for my time at Galvanize.</p>
              <Button text="Check it out the UI on Github" href="https://github.com/shiftyfive/top-shelf-tracker-UI" newTab={true} />
              <Button className="second-button" text="Check out the API on Github" href="https://github.com/shiftyfive/top-shelf-tracker-api" newTab={true} />
            </div>
            <div className="flex-child">
              <img className="project-img" src={require("../../images/top-shelf-tracker.png")} alt="Image of top shelf tracker project"></img>
            </div>
          </article>
        <article className="flex">
          <div className="flex-child">
            <h2 className="project-name">Artemis</h2>
            <p className="project-description">Artemis is a project that I worked on with two other developers. My main contributions were transforming data from the API so that it would be more usable by the front-end, as well as some design work. Built using AngularJS and Cordava.</p>
            <Button text="Check it out on Github" href="https://github.com/Mavyllos/Artemis-Game" newTab={true} />
          </div>
          <div className="flex-child">
            <img className="project-img artemis" src={require("../../images/artemis.png")} alt="Image of artemis project"></img>
            </div>
        </article>
        <article className="flex">
          <div className="flex-child red-rovers">
            <h2 className="project-name">Red Rovers</h2>
            <p className="project-description">Red Rovers is a website for viewing pictures that are taken on mars. Using a third party API for the Mars rovers. Built using material design principles.</p>
            <Button text="Check it out on Github" href="https://github.com/shiftyfive/red_rovers" newTab={true} />
          </div>
          <div className="flex-child">
            <img className="project-img" src={require("../../images/red-rovers.png")}></img>
          </div>
        </article>
      </div>
    )
  }
}