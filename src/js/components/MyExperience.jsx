import React from 'react';
import style from '../../css/my-experience.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class MyExperience extends React.PureComponent {
  render() {
    return (
      <div id="one" className="experience-body">
        <div className="blurb">
          <h2>A Fullstack Dev</h2>
          <p>With a love for the front end</p>
        </div>
        <div className="container">
          <article className="child">
            <FontAwesomeIcon className="fa-icon" icon={["fab", "html5"]} color="orange" size="5x" />
            <FontAwesomeIcon className="fa-icon" icon={["fab", "css3-alt"]} color="#1F62AE" size="5x" />
            <h2>HTML CSS</h2>
            <p className="article-text">Fluent in HTML symantic markup, and the latest features in CSS3. Experinced in using css frameworks like bootstrap as well.</p>
          </article>
          <article className="child">
              <FontAwesomeIcon className="fa-icon" icon={["fab", "js-square"]} color="yellow" size="5x" />
              <FontAwesomeIcon className="fa-icon" icon={["fab", "node-js"]} color="#669F64" size="5x" />
              <h2>JavaScript & NodeJS</h2>
              <p className="article-text">Well versed in the latest ECMASCRIPT features. Experienced writting fullstack applications using JavaScript on the front and back end. I pride myself on learning the "under the hood" workings of the JavaScript language.</p>
          </article>
          <article className="child">
            <FontAwesomeIcon className="fa-icon" icon={["fab", "react"]} color="#00d8ff" size="5x" />
            <h2>Frontend Frameworks</h2>
            <p className="article-text">I currently am loving working in the React framework. I'm always trying to keep up with the newest frameworks and build tools used to create beautiful modern applications.</p>
          </article>
        </div>
      </div>
    )
  }
}