import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import event1 from '../../img/event1.jpg';
import '../style.css';

class EventCard extends Component {

  render() {
    return (
      <div id="event-card" className="w-100 pb-4">
        <img src={event1} alt='event1' className="w-100 rounded-lg"/>
          <br/><br/>
          <h5 className="font-weight-bold text-center">Fireside Chat at Ideate High</h5>
          <div className="row align-items-center">
            <div className="col-lg-3 h5 text-center">Sept. 29</div>
            <div className="col-lg-9">
              <i class="fas fa-map-marker-alt pr-2"></i>Ideate High, San Diego, CA
            </div>

          </div>
      </div>
    );
  }
}

export default EventCard;
