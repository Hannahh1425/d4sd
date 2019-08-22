import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class RoleCard extends Component {

  render() {
    let button;
    if (this.props.show.includes(this.props.id)) {
      button = <i class="fas fa-chevron-up"></i>
    } else {
      button = <i class="fas fa-chevron-down"></i>
    }
    return (
      <div id={this.props.id} ref={this.props.ref} className="role-card-hovered">
        <div className="row align-items-xl-center">
          <div className="col-3">
            <img src={this.props.image} className="w-100" />
          </div>
          <div className="col-9">
            <div className="row">
              <h4 className="w-100 mx-0 px-0">{this.props.title}</h4>
            </div>
          </div>
        </div><br/>
        <h5 className="p-0">{this.props.txt}</h5>
        <br/>
          <a href={this.props.link} className={this.props.id === "question" ? "btn-style":""} target="_blank">{this.props.action}</a>
        <br/><br/>
      </div>
    );
  }
}

export default RoleCard;
