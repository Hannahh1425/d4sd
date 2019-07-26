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
          <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Challenges</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Forum</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Get Involved</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Workspace;
