import React, { Component } from 'react';
import '../style.css';

class FooterCard extends Component {

  render() {
    return (
      <div id="header-card" className="d-flex justify-content-center align-items-center">
          <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default HeaderCard;
