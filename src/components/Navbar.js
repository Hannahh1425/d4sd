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
                <Link class="nav-link" to='/about'>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/challenge'>Challenge</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/resources'>Resources</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/faq'>FAQs</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/forum'>Forum</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/involve'>Get Involved</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/#'>Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Workspace;
