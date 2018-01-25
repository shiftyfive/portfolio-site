import React from 'react';
import Logo from './Logo';
import style from '../../css/navigation.css';

export default class Navigation extends React.PureComponent {
  render() {
  return (
      <div className="wrapper">
        <Logo />
        <nav>
          <ul className="navigation-list">
            <a href="#"><li>Home</li></a>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    )
  }
}