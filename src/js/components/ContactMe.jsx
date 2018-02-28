import React from 'react';
import style from '../../css/contact-me.css';
import MyModal from './MyModal';

export default class ContactMe extends React.PureComponent {
  render() {
    return (
      <div id="two" className="contact-me-container">
        <h2 className="build-something">Let's build something together!</h2>
        <h4 className="build-text">I'm currently accepting new projects. Please take a few minutes to tell me about your project.</h4>
        <MyModal />
      </div>
    );
  }
}

