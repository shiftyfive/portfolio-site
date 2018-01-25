import React from 'react';
import style from '../../css/typewriter.css';

export default class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    sentencesArray: ["Hi my name is Joshua.", "I am a developer.", "I love JavaScript.", "Other programming languages are ok too =).", "I love learning new things."],
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
        <h3>{this.state.currentPhrase}<span className="cursor"></span></h3>
      </div>
    )
  }
}