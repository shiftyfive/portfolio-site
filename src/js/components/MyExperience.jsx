import React from 'react';
import style from '../../css/my-experience.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class MyExperience extends React.PureComponent {
  render() {
    return (
      <div className="experience-body">
        <div className="blurb">
          <h2>A Fullstack Dev</h2>
          <p>With a love for the front end</p>
        </div>
        <div className="container">
          <article className="child">
            <FontAwesomeIcon className="fa-icon" icon={["fab", "html5"]} color="orange" size="5x" />
            <FontAwesomeIcon className="fa-icon" icon={["fab", "css3-alt"]} color="#1F62AE" size="5x" />
            <h2>HTML CSS</h2>
            <p className="article-text">Doggo ipsum adorable doggo smol very hand that feed shibe sub woofer borkf, shoober fat boi. Super chub heck heckin good boys vvv he made many woofs, such treat shoober wow such tempt. He made many woofs wrinkler heck lotsa pats you are doing me a frighten, blep dat tungg tho sub</p>
          </article>
          <article className="child">
              <FontAwesomeIcon className="fa-icon" icon={["fab", "js-square"]} color="yellow" size="5x" />
              <FontAwesomeIcon className="fa-icon" icon={["fab", "node-js"]} color="#669F64" size="5x" />
              <h2>JavaScript & NodeJS</h2>
              <p className="article-text">Doggo ipsum adorable doggo smol very hand that feed shibe sub woofer borkf, shoober fat boi. Super chub heck heckin good boys vvv he made many woofs, such treat shoober wow such tempt. He made many woofs wrinkler heck lotsa pats you are doing me a frighten, blep dat tungg tho sub</p>
          </article>
          <article className="child">
            <FontAwesomeIcon className="fa-icon" icon={["fab", "react"]} color="#00d8ff" size="5x" />
            <h2>Frontend Frameworks</h2>
            <p className="article-text">Doggo ipsum adorable doggo smol very hand that feed shibe sub woofer borkf, shoober fat boi. Super chub heck heckin good boys vvv he made many woofs, such treat shoober wow such tempt. He made many woofs wrinkler heck lotsa pats you are doing me a frighten, blep dat tungg tho sub</p>
          </article>
        </div>
      </div>
    )
  }
}