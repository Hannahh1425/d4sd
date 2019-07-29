import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class EventCard extends Component {

  render() {
    return (
      <div class="panel-group" id="accordion">
       <div class="panel panel-default">
         <div class="panel-heading">
           <h4 class="panel-title">
             <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">{this.props.question}</a>
           </h4>
         </div>
         <div id="collapse1" class="panel-collapse collapse in">
           <div class="panel-body">{this.props.answer}</div>
         </div>
       </div>              
     </div>
    );
  }
}

export default EventCard;
