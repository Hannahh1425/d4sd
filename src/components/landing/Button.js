import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Button extends Component {

  render() {
    return (
      <div id="landing_btn">
        <Link to={this.props.to}>{this.props.page}</Link>
      </div>
    );
  }
}

export default Button;
