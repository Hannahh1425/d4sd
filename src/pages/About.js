import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/landing/Button';
import header from '../img/about.png';
import timeline from '../img/timeline-vertical.png';
import playbook_educator from "../img/involve_playbook.pdf";

import educator from "../img/about_educator.png";
import sponsor from "../img/about_sponsor.png";
import expert from "../img/about_expert.png";
import innovator from "../img/about_participant.png";
import icon from "../img/icon.png";
import './style.css';

const values = [
  "To collaboratively explore a range of civic problems that the San Diego region faces.",
  "To connect innovators, experts, city officials, professional designers, business leaders, and community members through a combination of in-person events and online activities.",
  "To increase and diversify participation, particularly for typically underrepresented or marginalized populations, by creating a range of specific roles within the civic design framework and striving for diversity, equity, and inclusion.",
  "To provide an educational opportunity that serves people from a wide range of ages, backgrounds, and motivations",
  "To contribute to the burgeoning design-driven economy in San Diego by providing resources to help launch top proposals by bringing together leaders from various sectors"
]

const roles = [
  {
    image: innovator,
    txt: "Innovator"
  },
  {
    image: expert,
    txt: "Experts"
  },
  {
    image: educator,
    txt: "Educator"
  },
  {
    image: sponsor,
    txt: "Sponsor"
  },
]

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="about">
        <Navbar/>
        <Container>
              <br/><br/><br/><br/>
              <h1>What is D4SD?</h1>
              <h5>
                Design for San Diego (D4SD) is a civic design challenge that
                aims at providing a space for all citizens to address San Diego's
                most challening issues, prototype solutions through human-centered design,
                and link them to resources in their communities that can bring those
                solutions to life.<br/><br/>
                Everyone is welcome to be part of the challenge!
              </h5>
              <div className="row text-center">
                {roles.map(role => (
                  <div className="col-3 involve-roles">
                    <a href={playbook_educator}>
                      <img src={role.image}/>
                      <h5>{role.txt}</h5>
                    </a>
                  </div>
                ))}
              </div>
              <br/>
              <h4>Here is timeline</h4>
              <button>Innovators</button>
              <button>Community members</button>
              <br/><br/><br/>
              <h1>What does D4SD envision?</h1>
              <br/>
              {values.map((value, i) => (
                <div className="row">
                  <div className="col-4">
                    <img src={educator} className="w-100"/>
                  </div>
                  <div className="col-8">
                    <h5>{value}</h5>
                  </div>
                </div>
              ))}
        </Container>
        <br/><br/><br/><br/><br/> <br/><br/>
      </div>
    );
  }
}

export default Home;
