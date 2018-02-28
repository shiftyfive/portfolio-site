import React from 'react';
import '../../css/my-modal.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this._toggle = this._toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isOpen: false,
      name: '',
      email: '',
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  _toggle() {
    if (this.state.isOpen) {
      document.getElementsByTagName("body")[0].classList.remove("stop-scrolling");

      this.setState(() => {
        return {isOpen: false};
      })
    } else {
      this.setState(() => {
        document.getElementsByTagName("body")[0].className = "stop-scrolling";
        return ({isOpen: true}
        );
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this._toggle()
  }


  modalStyle() {
    return {
      display: this.state.isOpen ? 'block' : 'none',
      position: 'fixed',
      width: '100vh',
      height: '95vh',
      zIndex: '10',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
    }
  }

  render() {
    return (
      <div>
      <div style={this.modalStyle()}>
          <div className="modal-overlay">
            <button onClick={() => this._toggle()}className="close-icon">
                <FontAwesomeIcon  icon="times-circle" color="red" size="3x" />
              </button>
            <h2 className="modal-header">Just need to ask a couple of questions</h2>
            <p className="modal-header-text">You should expect to hear back from me within 24 hours.</p>
            <div className="form-container ">
              <form action="https://formspree.io/joshuawarren000@gmail.com"method="POST">
                  <label>Name
                    <input value={this.state.name} className="modal-input" type="text" name="name" placeholder="Name"></input>
                  </label>
                  <label>
                    Email
                    <input value={this.state.email} className="modal-input" type="email" name="_replyto" placeholder="Email"></input>
                  </label>
                  <label>Project Description
                    <textarea className="modal-text-area" type="text" name="body" placeholder="Describe your project"></textarea>
                  </label>
                  <input className="send-email-button" type="submit" value="Send"></input>
                </form>
              </div>
        </div>
      </div>
        <button className="send-email-button open-model" onClick={() => this._toggle()}>Lets collaborate</button>
      </div>
    )
  }
}