import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/landing/Button';
import EventCard from '../components/landing/EventCard';
import header from '../img/about.png';
import './style.css';

class Events extends Component {

  render() {
    return (
      <div id="about">
        <Navbar/>
        <div className="container">
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="row">
            <div className="col-lg-3">
              <EventCard/>
            </div>
            <div className="col-lg-3">
              <EventCard/>
            </div>
            <div className="col-lg-3">
              <EventCard/>
            </div>
            <div className="col-lg-3">
              <EventCard/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
