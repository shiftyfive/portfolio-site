import React from 'react';
import '../../css/call-to-action.css';

export default class CallToAction extends React.Component {
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
    return <button onClick={() => this.onClick(this.props.href)} className="call-to-action">{this.props.text}</button>
  }

}