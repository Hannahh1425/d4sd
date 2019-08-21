import React, { Component } from 'react';
import '../style.css';

class HeaderCard extends Component {

  render() {
    return (
      <div id="header-card" className="d-flex w-100">
          <h2 className="align-self-center pl-4">{this.props.title}</h2>
      </div>
    );
  }
}

export default HeaderCard;
