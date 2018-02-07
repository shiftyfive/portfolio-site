import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import fontawesomeIcon from '@fortawesome/react-fontawesome';
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import faSquare from '@fortawesome/fontawesome-free-solid/faSquare';
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare';
import faCss3Alt from '@fortawesome/fontawesome-free-brands/faCss3Alt';
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNode';
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5';
import fareact from '@fortawesome/fontawesome-free-brands/faReact';
import Navigation from './Navigation';
import Typewriter from './Typewriter';
import MyExperience from './MyExperience';

fontawesome.library.add(faChevronDown, faJsSquare, faCss3Alt, faNodeJs, faHtml5, fareact, faSquare)

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Typewriter />
        <MyExperience />
      </div>
    );
  }
}