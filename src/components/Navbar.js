import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Workspace extends Component {

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light border-bottom border-secondary sticky-top">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link float-right" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right" href="#">Link</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Workspace;
