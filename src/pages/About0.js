import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import FooterCard from '../components/FooterCard';
import Button from '../components/landing/Button';
import playbook_educator from "../img/involve_playbook.pdf";

import city from "../img/about_city.png";
import connect from "../img/about_connect.png";
import div from "../img/about_div.png";
import edu from "../img/about_edu.png";
import find from "../img/about_find.png";
import diagram from "../img/about_diagram.png";
import timeline from "../img/about_timeline.png";

import icon from "../img/icon.png";
import './style.css';

const values = [
  {
    txt: "To collaboratively explore a range of civic problems that the San Diego region faces.",
    img: find
  },
  {
    txt: "To connect innovators, experts, city officials, professional designers, business leaders, and community members through a combination of in-person events and online activities.",
    img: connect
  },
  {
    txt: "To increase and diversify participation, particularly for typically underrepresented or marginalized populations, by creating a range of specific roles within the civic design framework and striving for diversity, equity, and inclusion.",
    img: div
  },
  {
    txt: "To provide an educational opportunity that serves people from a wide range of ages, backgrounds, and motivations",
    img: edu
  },
  {
    txt: "To contribute to the burgeoning design-driven economy in San Diego by providing resources to help launch top proposals by bringing together leaders from various sectors",
    img: city
  }
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
              <h2>What is D4SD?</h2>
              <h5>
                Design for San Diego (D4SD) is a civic design challenge that
                aims at providing a space for all citizens to address San Diego's
                most challening issues, prototype solutions through human-centered design,
                and link them to resources in their communities that can bring those
                solutions to life.<br/><br/>
                Everyone is welcome to be part of the challenge!
              </h5>
              <img src={diagram} className="w-100"/>
              <br/><br/><br/><br/>

              <h4>D4SD Timeline</h4>
              </Container>
              <img src={timeline} className="w-100"/>
              <br/><br/><br/><br/>
              <Container>
              <h4>What does D4SD envision?</h4>
              <br/>
              {values.map((value, i) => (
                <div className="row align-items-center mb-4">
                  <div className="col-lg-1 col-2">
                    <img src={value.img} className="w-100"/>
                  </div>
                  <div className="col-lg-11 col-10">
                    <h5>{value.txt}</h5>
                  </div>
                </div>
              ))}
              </Container>
        <br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default Home;
