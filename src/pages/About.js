import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/landing/Button';
import header from '../img/about.png';
import playbook_educator from "../img/involve_playbook.pdf";
import whitepaper from '../img/D4SD_2017_WhitePaper.pdf';

import educator from "../img/about_educator.png";
import sponsor from "../img/about_sponsor.png";
import expert from "../img/about_expert.png";
import innovator from "../img/about_participant.png";
import city from "../img/about_city.png";
import connect from "../img/about_connect.png";
import div from "../img/about_div.png";
import edu from "../img/about_edu.png";
import find from "../img/about_find.png";
import diagram from "../img/about_diagram.svg";
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
    this.overview = React.createRef();
    this.join = React.createRef();
    this.value = React.createRef();
    this.timeline = React.createRef();
    this.review = React.createRef();
  }

  scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop, {behavior: 'smooth'});

  render() {
    return (
      <div id="about">
        <Navbar/>
        <div className="header" style={{"height":"20em"}}>
          <h1 className="text-center mt-3">About D4SD</h1>
          <nav className="navbar navbar-expand-md navbar-light justify-content-center">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link mr-1 subnav" onClick={() => this.scrollToRef(this.overview)}>What is D4SD</a>
                </li>
                <br/>
                <li className="nav-item">
                  <a className="nav-link mr-1 subnav" onClick={() => this.scrollToRef(this.join)}>Who can participate</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mr-1 subnav" onClick={() => this.scrollToRef(this.value)}>What does D4SD envision</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mr-1 subnav" onClick={() => this.scrollToRef(this.timeline)}>Timeline</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mr-1 subnav" onClick={() => this.scrollToRef(this.review)}>Review D4SD2017</a>
                </li>
              </ul>
          </nav>
        </div>
        <section ref={this.overview}>
          <Container style={{"backgroundColor":"#EFF8FF"}}>
            <br/><br/><br/>
            <h2>What is D4SD?</h2>
            <h5>
              Design for San Diego (D4SD) is a civic design challenge that
              aims at providing a space for all citizens to address San Diego's
              most challening issues, prototype solutions through human-centered design,
              and link them to resources in their communities that can bring those
              solutions to life.
            </h5>
            <br/>
            <h5>
              This is the 2nd D4SD Civic Design Challenge and the theme of this year
              is Sustainable City. To make cities and human settlements inclusive,
              safe, resilient and sustainable is one of the 17 goals that the United
              Nations envisioned to transform our world by 2030. What can we do to
              make San Diego a more sustainable city to settle in? Check out the
              challenge briefs to see the problem space that you could explore and sign
              up to be part of this innovative process for the city’s future!
            </h5>
            <br/><br/><br/>
          </Container>
        </section>
        <br/>
        <section ref={this.join}>
          <h2>Who can participate?</h2>
          <h5>Everyone who cares about the city and have a passion for innovation
            is more than welcome to participate! Find your place in the challenge!
          </h5>
          <br/><br/>
          <img src={diagram} className="w-75" />
        </section>
        <br/><br/><br/><br/>
        <section ref={this.value}>
          <Container style={{"backgroundColor":"#EFF8FF"}}>
            <br/><br/><br/>
            <h2>What does D4SD envision?</h2>
            <br/>
            {values.map((value, i) => (
              <div className="row align-items-center mb-4">
                <div className="col-lg-1 col-2">
                  <img src={value.img} className="w-100"/>
                </div>
                <div className="col-lg-11 col-10">
                  <h5 className="text-left">{value.txt}</h5>
                </div>
              </div>
              ))}
              <br/>
            </Container>
          </section>

          <section ref={this.timeline}>
            <h2>D4SD Timeline</h2>
            <img src={timeline} className="w-100"/>
          </section>
          <br/>

          <section ref={this.review}>
            <Container style={{"backgroundColor":"#EFF8FF"}}>
              <br/><br/><br/>
              <h2>What does D4SD look like in the past?</h2>
              <h5>Want to learn more about how it actually works? <br/> Check out
                the overview of D4SD 2017 where 23 teams generated concepts on
                the theme of transportation.
              </h5>
              <br/>
              <a className="btn-style mr-3" href={whitepaper} target="_blank">Download Whitepaper</a>
              <a className="btn-style" href="http://d4sd.org" target="_blank">Checkout website</a>
              <br/><br/>
              {/**<a href="http://eepurl.com/c2kFon" target="_blank">
                <h2>Join our mailing list</h2>
              </a>**/}
              <br/><br/><br/>
            </Container>
          </section>
      </div>
    );
  }
}

export default Home;
