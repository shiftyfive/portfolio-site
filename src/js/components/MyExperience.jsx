import React from 'react';
import style from '../../css/my-experience.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class MyExperience extends React.PureComponent {
  render() {
    return (
      <div id="one" className="experience-body">
        <div className="blurb">
          <h2>A Fullstack Dev</h2>
          <p>with a love for the front end</p>
        </div>
        <div className="container">
          <article className="child">
            <FontAwesomeIcon className="fa-icon" icon={["fab", "html5"]} color="orange" size="5x" />
            <FontAwesomeIcon className="fa-icon" icon={["fab", "css3-alt"]} color="#1F62AE" size="5x" />
            <h3>HTML CSS</h3>
            <p className="article-text">Fluent in HTML semantic markup, and the latest features in CSS3. Experienced in using CSS frameworks like bootstrap as well.</p>
          </article>
          <article className="child">
              <FontAwesomeIcon className="fa-icon" icon={["fab", "js-square"]} color="yellow" size="5x" />
              <FontAwesomeIcon className="fa-icon" icon={["fab", "node-js"]} color="#669F64" size="5x" />
              <h3>JavaScript & NodeJS</h3>
              <p className="article-text">Well versed in the latest ECMAscript features. Experienced writing full stack applications using JavaScript on both the front and back end. I pride myself on learning the "under the hood" workings of the JavaScript language.</p>
          </article>
          <article className="child">
            <FontAwesomeIcon className="fa-icon" icon={["fab", "react"]} color="#00d8ff" size="5x" />
            <h3>Front-End Frameworks</h3>
            <p className="article-text">I currently am loving working in the React framework. I'm always trying to keep up with the newest frameworks and build tools used to create beautiful, modern applications.</p>
          </article>
        </div>
      </div>
    )
  }
}