import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Workspace extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light border-bottom border-secondary fixed-top bg-white">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/challenge'>Challenge</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/resources'>Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/faq'>FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/events'>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/forum'>Forum</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/involve'>Get Involved</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/#'>Log in</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Workspace;
