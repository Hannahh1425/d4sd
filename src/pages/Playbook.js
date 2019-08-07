import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Button from '../components/landing/Button';
import RoleCard from '../components/landing/RoleCard';
import Mailchimp from 'react-mailchimp-form';

import participants from '../img/involve_participant.png';
import educator from '../img/involve_educator.png';
import sponsor from '../img/involve_sponsor.png';
import expert from '../img/involve_expert.png';

import './style.css';

class Playbook extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="playbook">
        <Navbar/>
        <Container>
          This is playbook
        </Container>
      </div>
    );
  }
}

export default Playbook;
