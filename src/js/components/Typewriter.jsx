import React from 'react';
import  '../../css/typewriter.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import CallToActionButton from './CallToAction';

export default class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
    sentencesArray: [ "Im a developer.", "I love JavaScript.", "I love learning new things.", " Im a big geek"],
    currentPhrase: '',
    loopNumber: 0,
    isDeleting: false,
    interval: 150,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.tick()
    }, this.state.interval)
  }


  tick() {
    const fullPhrase = this.state.sentencesArray[this.state.loopNumber]
    
    if (this.state.currentPhrase === '' && this.state.isDeleting === true) {
        this.setState((prevState) => {
          return { loopNumber: prevState.loopNumber += 1, isDeleting: false, };
        })
    }
    if (this.state.loopNumber === this.state.sentencesArray.length) {
        this.setState(() => {
          return { loopNumber: 0 };
        })
    }
    if (this.state.isDeleting) {
        this.setState(prevState => {
          return { currentPhrase: fullPhrase.slice(0, prevState.currentPhrase.length - 1) };
        })
    }
    if (!this.state.isDeleting){
        this.setState(prevState => {
          return { currentPhrase: fullPhrase.slice(0, prevState.currentPhrase.length + 1) };
        })
    }
    if (this.state.currentPhrase.length === fullPhrase.length) {
        this.setState(() => {
          return {isDeleting: true,};
        })
    }
  }

  render() {
    return (
      <div>
      <header>
          <div className="title">
            <h2 className="hi-message">Hello My name is Joshua</h2>
            <p className="typewriter-text">{this.state.currentPhrase}<span className="cursor"></span></p>
          </div>
          <div className="links">
            <CallToActionButton className="call-to-action-button" href="#two" text="Let's work together"/>
            <p className="chevron-text">Would you like to know more?</p>
            <a href="#one"><FontAwesomeIcon className="chevron" icon="chevron-down" size="3x" /></a>
          </div>
        </header>
      </div>
    )
  }
}