import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Button from '../components/landing/Button';
import EventCard from '../components/landing/EventCard';
import './style.css';

class Events extends Component {

  render() {
    return (
      <div id="about">
        <Navbar/>
        <Container>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="row">
            <div className="col">
              <EventCard
                title="Fireside Chat at Ideate High"
                date="Sept. 29, 4pm-6pm"
                location="Ideate High, San Diego, CA"
              />
            </div>
            <div className="col">
              <EventCard
                title="Fireside Chat at Ideate High"
                date="Sept. 29, 4pm-6pm"
                location="Ideate High, San Diego, CA"
              />
            </div>
            <div className="col">
              <EventCard
                title="Fireside Chat at Ideate High"
                date="Sept. 29, 4pm-6pm"
                location="Ideate High, San Diego, CA"
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Events;
