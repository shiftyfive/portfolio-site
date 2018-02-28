import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import '../../css/footer.css';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer-container">
        <p>
          Made by me using
        <FontAwesomeIcon className="footer-icon" icon="heart" color="red"/>
        <FontAwesomeIcon className="footer-icon" icon="music" color="yellow"/>
        <FontAwesomeIcon className="footer-icon" icon="coffee" color="white"/>
        <FontAwesomeIcon className="footer-icon" icon={["fab", "react"]} color="#00d8ff" />
        </p>
      </footer>
    );
  }
}
