import React from 'react';
import Navigation from './Navigation';
import Typewriter from './Typewriter';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Typewriter />
      </div>
    );
  }
}