import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/landing/Button';
import header from '../img/about_header.png';
import whitepaper from '../img/D4SD_2017_WhitePaper.pdf';

import city from "../img/about_city.png";
import connect from "../img/about_connect.png";
import div from "../img/about_div.png";
import edu from "../img/about_edu.png";
import find from "../img/about_find.png";
// import diagram from "../img/about_diagram.svg";
import timeline from "../img/about_timeline.svg";
import { ReactComponent as Diagram } from "../img/about_diagram.svg";
// import { ReactComponent as Timeline } from "../img/about_timeline.svg";

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
    this.state=({
      overview: true,
      join: false,
      value: false,
      timeline: false,
      review: false,
    });
    this.overview = React.createRef();
    this.join = React.createRef();
    this.value = React.createRef();
    this.timeline = React.createRef();
    this.review = React.createRef();
  }

  scrollToRef = ref => {
    console.log("before");
    console.log(ref.current);
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
    let states = ["overview", "join", "value", "timeline", "review"];
    states.forEach(state => {
      if (state === ref.current.id) {
        this.setState({[ref.current.id]: true});
      }
      else {
        this.setState({[state]: false});
      }
    })
    console.log("after");
    console.log(this.state);
  }

  onHover = e => {
    console.log("hoverr");
    console.log(e.target);

  }


  unHover = e => {

  }
  render() {
    return (
      <div id="about">
        <Navbar/>
        <nav className="navbar navbar-light justify-content-left position-fixed subnav">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a className={this.state.overview ? "nav-link text-left subnav-link-active":"nav-link text-left subnav-link"} onClick={() => this.scrollToRef(this.overview)}>What is D4SD</a>
            </li>
            <li className="nav-item">
              <a className={this.state.join ? "nav-link text-left subnav-link-active":"nav-link text-left subnav-link"} onClick={() => this.scrollToRef(this.join)}>Who can participate</a>
            </li>
            <li className="nav-item">
              <a className={this.state.value ? "nav-link text-left subnav-link-active":"nav-link text-left subnav-link"} onClick={() => this.scrollToRef(this.value)}>What does D4SD envision</a>
            </li>
            <li className="nav-item">
              <a className={this.state.timeline ? "nav-link text-left subnav-link-active":"nav-link text-left subnav-link"} onClick={() => this.scrollToRef(this.timeline)}>Timeline</a>
            </li>
            <li className="nav-item">
              <a className={this.state.review ? "nav-link text-left subnav-link-active":"nav-link text-left subnav-link"} onClick={() => this.scrollToRef(this.review)}>Review D4SD2017</a>
            </li>
          </ul>
        </nav>
        <section ref={this.overview} id="overview">
          <Container style={{"backgroundImage":`url(${header})`, "backgroundRepeat":"no-repeat", "backgroundSize":"cover",}}>
            <br/><br/><br/><br/>
            <h2>What is D4SD?</h2>
            <br/>
            <h5 className="text-left">
              Design for San Diego (D4SD) is a civic design challenge that
              aims at providing a space for all citizens to address San Diego's
              most challening issues, prototype solutions through human-centered design,
              and link them to resources in their communities that can bring those
              solutions to life.
            </h5>
            <br/>
            <h5 className="text-left">
              This is the 2nd D4SD Civic Design Challenge and the theme of this year
              is Sustainable City. To make cities and human settlements inclusive,
              safe, resilient and sustainable is one of the 17 goals that the United
              Nations envisioned to transform our world by 2030. What can we do to
              make San Diego a more sustainable city to settle in? Check out the
              challenge briefs to see the problem space that you could explore and sign
              up to be part of this innovative process for the city’s future!
            </h5>
            <br/><br/><br/><br/><br/>
          </Container>
        </section>
        <br/><br/>
        <section ref={this.join} id="join">
          <Container>
            <h2>Who can participate?</h2>
            <h5>Everyone who cares about the city and have a passion for innovation
              is more than welcome to participate! Find your place in the challenge!
            </h5>
            <br/><br/><br/>
            <Diagram onMouseOver={this.onHover} onMouseOut={this.unHover}/>
          </Container>
        </section>
        <br/><br/><br/><br/><br/>
        <section ref={this.value} id="value">
          <Container style={{"backgroundColor":"#EFF8FF"}}>
            <br/><br/><br/><br/>
            <h2>What is the goal?</h2>
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
              <br/><br/><br/>
            </Container>
          </section>
          <br/><br/>
          <section ref={this.timeline} id="timeline">
            <Container>
              <h2>What is the process?</h2>
              <img src={timeline} className="w-100"/>
            </Container>
          </section>
          <br/><br/>
          <section ref={this.review} id="review">
            <Container style={{"backgroundColor":"#EFF8FF"}}>
              <br/><br/><br/><br/>
              <h2>Learn more about the previous D4SD</h2>
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
