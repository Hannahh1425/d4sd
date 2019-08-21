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
        <div className="d-flex align-items-center">
          <img src={this.props.image} className="w-25 align-self-center" />
          <h4 style={{"width":"72%", "paddingLeft":"3%", "align":"center"}}>{this.props.title}</h4>
        </div>
        {this.props.show.includes(this.props.id) && <h5 className="p-0"><br/>{this.props.txt}</h5>}
        <br/>
        <div className="row action-btn py-2 justify-content-center" onClick={this.props.onClick}>
          {button}
        </div>
        {/**
          this.props.hovered === this.props.id &&
          (<div className="row action-btn py-3 justify-content-center">
              <a href={this.props.link} target="_blank"><h5>{this.props.action}</h5></a>
            </div>
          )**/}
        {/**<a href={this.props.link} className="btn-style" target="_blank">{this.props.action}</a>**/}
      </div>
    );
  }
}

export default RoleCard;
