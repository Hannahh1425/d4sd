import React, { Component } from 'react';
import '../style.css';
import { H2, H5 } from '../../assets/css/fonts.js';

class HeaderCard extends Component {

  render() {
    return (
      <div id="header-card" className="d-flex justify-content-center align-items-center">
          <H2>{this.props.title}</H2>
      </div>
    );
  }
}

export default HeaderCard;
