import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class RoleCard extends Component {

  render() {
    return (
      <div id="role-card" className="position-relative">
      <div>
        <h4 style={{"fontSize":"1.35em"}}>{this.props.title}</h4>
        <br/>
        <h5 style={{"padding":"0.3em 0", "lineHeight":"1.2rem"}}>{this.props.txt1}</h5>
        <h5 style={{"padding":"0.3em 0", "lineHeight":"1.2rem"}}>{this.props.txt2}</h5>
        <h5 style={{"padding":"0.3em 0", "lineHeight":"1.2rem"}}>{this.props.txt3}</h5>
        <h5 style={{"padding":"0.3em 0", "lineHeight":"1.2rem"}}>{this.props.txt4}</h5>
        <a href={this.props.playbook} className="btn-style" target="_blank">View Playbook</a>

        <img className="ml-3" src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default RoleCard;
