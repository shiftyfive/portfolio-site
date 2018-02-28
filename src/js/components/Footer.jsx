import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import '../../css/footer.css';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <FontAwesomeIcon icon="heart" />
        <FontAwesomeIcon icon="music"/>
        <p>hi</p>
      </footer>
    );
  }
}
