import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class RoleCard extends Component {

  render() {
    return (
      <div
        id={this.props.id}
        ref={this.props.ref}
        className={this.props.hovered === this.props.id ? "role-card-hovered":"role-card"}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
      >
        <img src={this.props.image} className="w-25" />
        <br/><br/>
        <h4>{this.props.title}</h4>
        <h5 className="p-0">{this.props.txt}</h5>
        <br/>
        <a href={this.props.link} className="btn-style" target="_blank">View Playbook</a>
      </div>
    );
  }
}

export default RoleCard;
