import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class EventCard extends Component {

  render() {
    return (
      <div className="panel-group" id="accordion">
       <div className="panel panel-default">
         <div className="panel-heading">
           <h4 className="panel-title">
             <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">{this.props.question}</a>
           </h4>
         </div>
         <div id="collapse1" className="panel-collapse collapse in">
           <div className="panel-body">{this.props.answer}</div>
         </div>
       </div>
     </div>
    );
  }
}

export default EventCard;
