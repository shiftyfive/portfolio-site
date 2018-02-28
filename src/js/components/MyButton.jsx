import React from 'react';
import style from '../../css/my-button.css';

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(str) {
    if(this.props.newTab) {
      window.open(str)
    } else {
      window.location.replace(str)
    }
  }

  render() {
    return <button onClick={() => this.onClick(this.props.href)} className="my-button">{this.props.text}</button>
  }

}