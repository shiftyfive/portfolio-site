import React from 'react';
import style from '../../css/projects.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';



export default class Projects extends React.PureComponent {
  render() {
    return (
      <div className="projects-wrapper">
        <h2 className="projects">Projects</h2>
          <article className="flex">
            <div className="flex-child">
              <h2 className="project-name">Top Shelf Tracker</h2>
              <p className="project-description">Top Shelf Tracker is a tool designed for entering hockey statistics. This was the project that started my love for the React framework.</p>
              <button className="button github">Check it out on github. <FontAwesomeIcon className="github-icon" icon={["fab", "github-alt"]} color="blue" size="1x" /></button>
            </div>
            <div className="flex-child">
              <img className="top-shelf-tracker-img" src={require("../../images/top-shelf-tracker.png")} alt="Image of top shelf tracker project"></img>
            </div>
          </article>
        <article className="flex">
          <div className="flex-child">
            <h2 className="project-name">Artemis</h2>
            <p className="project-description"></p>
            <button className="button github">Check it out on github.</button>
          </div>
          <div className="flex-child">
            <img className="artemis-img" src={require("../../images/artemis.png")} alt="Image of artemis project"></img>
            </div>
        </article>
        <article className="flex">
          <div className="flex-child">
            <h2 className="project-name">Red Rovers</h2>
            <p className="project-description">DIY chambray cred locavore narwhal Marfa master cleanse pug before they sold out heirloom quinoa Godard fashion axe PBR&B lo-fi Echo Park vinyl you probably haven't heard of them hoodie flannel hashtag seitan chillwave aesthetic ennui meh gentrify fixie +1 tofu normcore Tumblr fanny pack ugh XOXO Odd Future typewriter YOLO mumblecore wolf beard iPhone put a bird on it organic jean shorts Brooklyn cliche sartorial freegan bitters photo booth street art Vice mustache bicycle rights paleo pork belly banh mi disrupt keffiyeh shabby chic twee cray fap salvia leggings stumptown letterpress Pitchfork Schlitz Carles Bushwick drinking vinegar ethical vegan Banksy flexitarian pour-over Helvetica blog Blue Bottle deep v Thundercats tote bag selfies Austin</p>
            <button className="button github">Check it out on github.</button>
          </div>
          <div className="flex-child">
            <img className="red-rovers-img" src={require("../../images/red-rovers.png")}></img>
          </div>
        </article>
      </div>
    )
  }
}