import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/landing/Button';
import HeaderCard from '../components/landing/HeaderCard';
import whitepaper from '../img/D4SD_2017_WhitePaper.pdf';

import city from "../img/about_city.svg";
import connect from "../img/about_connect.svg";
import div from "../img/about_div.svg";
import edu from "../img/about_edu.svg";
import find from "../img/about_find.svg";
import communicate from "../img/about_communicate.svg";
// import diagram from "../img/about_diagram.svg";
// import timeline from "../img/about_timeline.svg";
import ppttimeline_horizontal from "../img/about_participants_horizontal.png";
import commtimeline_horizontal from "../img/about_community_horizontal.png";
import ppttimeline from "../img/about_participanttimeline.png";
import commtimeline from "../img/about_communitytimeline.png";
import { ReactComponent as Diagram } from "../img/about_diagram.svg";
// import { ReactComponent as Timeline } from "../img/about_timeline.svg";

import icon from "../img/icon.png";
import './style.css';

const values = [
  {
    txt: "To increase and diversify participation, particularly for typically underrepresented or marginalized populations, by creating a range of specific roles within the civic design framework and striving for diversity, equity, and inclusion.",
    img: connect
  },
  {
    txt: "To contribute to the burgeoning design-driven economy in San Diego by providing resources to help launch top proposals by bringing together leaders from various sectors.",
    img: city
  },
  {
    txt: "To provide bottom-up community actions with more agency and to enhance the communications between the government and the local groups.",
    img: communicate
  },
  {
    txt: "To collaboratively explore a range of civic problems that the San Diego region faces.",
    img: find
  },
  {
    txt: "To provide an educational opportunity that serves people from a wide range of ages, backgrounds, and motivations.",
    img: div
  },
  {
    txt: "To connect innovators, experts, city officials, professional designers, business leaders, and community members through a combination of in-person events and online activities.",
    img: edu
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
      innovator: true,
      role: "Innovators'"
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

  style = e => {
    console.log("called");
    const ppt_timeline = document.getElementById("ppt_timeline");
    const comm_timeline = document.getElementById("comm_timeline");
    if (this.state.innovator) {
      ppt_timeline.style.display = "inline-block";
      comm_timeline.style.display = "none";
      this.setState({role:"Innovators'"});
    }
    else {
      ppt_timeline.style.display = "none";
      comm_timeline.style.display = "inline-block";
      this.setState({role:"Community Members'"});
    }
  }

  toggle = e => {
      console.log("participantcall");
      this.setState(prevState => ({
        innovator: !prevState.innovator,
      }),
      this.style
      );
  }

  handlePpt = e =>{
    console.log("participant");
    var ppt_timeline = document.getElementById("ppt_timeline");
    var comm_timeline = document.getElementById("comm_timeline");
    console.log(ppt_timeline);
    ppt_timeline.style.display = "inline-block";
    comm_timeline.style.display = "none";
  }

  handleComm = e =>{
    console.log("community");
    var ppt_timeline = document.getElementById("ppt_timeline");
    var comm_timeline = document.getElementById("comm_timeline");
    console.log(ppt_timeline);
    ppt_timeline.style.display = "inline-block";
    comm_timeline.style.display = "none";
  }

  render() {
    return (
      <div id="about">
        <Navbar/>
        <br/><br/>
        <HeaderCard title="About D4SD"/>
        {/*<nav className="navbar navbar-light justify-content-left position-fixed subnav">
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
        </nav>*/}
        <section ref={this.overview} id="overview">
          <Container style={{"backgroundColor":"#EFF8FF"}}>
            <br/><br/><br/><br/>
            <h2>What is D4SD?</h2>
            <br/>
            <h5>
               Design for San Diego (D4SD) is a civic design challenge that provides 
               a space for San Diegans  to address San Diego's most challenging issues 
               by framing human-centered design problems, prototyping solutions, and 
               connecting with their community  to bring those solutions to life.
            </h5>
            <br/><br/><br/><br/><br/>
          </Container>
        </section>
        <br/><br/>
        <section ref={this.join} id="join">
          <Container>
            <h2>Who can participate?</h2>
            <br/>
            <h5>Everyone who cares about the city and has a passion for innovation
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
            <h2>What are our goals?</h2>
            <br/>
            <div className="d-flex flex-wrap justify-content-around">
            {values.map((value, i) => (
              <React.Fragment>
                <img src={value.img} style={{"width":"10%", "alignSelf":"baseline", "padding":"32px 24px"}} />
                <h5 className="text-left" style={{"width":"40%", "padding":"32px 0", "margin":"0"}}>
                  {value.txt}
                </h5>
              </React.Fragment>
            ))}
          </div>
            <br/><br/><br/>
          </Container>
          </section>
          <br/><br/>
          <section ref={this.timeline} id="timeline">
            <Container>
              <h2>How do I participate?</h2>
              <br/>
              <h5>
                D4SD will have 4 major events: <b>Fireside Chats</b>, <b>Designathons</b>, <b>Feedback Session</b> and <b>Summit</b>.
                <br/><br/><b>Fireside chats</b> operate as a chance
                to gather knowledge and explore the problem with experts who have
                an in-depth knowledge of the problem space. <b>Designathons</b> serve as
                opportunities to explore and develop potential solutions where
                prototypes are built. <b>Feedback</b> Session is an online stage where
                community members are able to critique innovators’ work and help them
                improve their solutions through D4SD website.
                <br/><br/>Since our aim is to be as inclusive as possible to all
                participants, you are more than welcome to create your own fireside
                chat and designathon events at your convenient time and space, as long
                as they align with our themes.
              </h5>
              <br/>
              <h5>
                Different roles will have slightly different process.
              </h5>
              <br/>
                <h4 className="text-left" style={{"width":"90%", "marginLeft":"5%"}}>
                  <label className="switch mr-3">
                  <input type="checkbox" onClick={this.toggle}/>
                  <span className="slider round"></span>
                  </label>
                {this.state.role} process</h4>
              <br/>              
              <img src={ppttimeline} className="w-75" id="ppt_timeline"/>
              <img src={commtimeline} className="w-75" id="comm_timeline"/>
              {/**<img src={ppttimeline_horizontal} className="w-100 horizontal" id="ppt_timeline"/>
            <img src={commtimeline_horizontal} className="w-100 horizontal" id="comm_timeline"/>**/}
            </Container>
          </section>
          <br/><br/>
          <section ref={this.review} id="review">
            <Container style={{"backgroundColor":"#EFF8FF"}}>
              <br/><br/><br/><br/>
              <h2 className="text-center">Learn more about the previous D4SD</h2>
              <br/>
              <h5 className="text-center">Want to learn more about how it actually works? <br/> Check out
                the overview of D4SD 2017 where 23 teams generated concepts on
                the theme of mobility.
              </h5>
              <br/><br/>
              <a className="btn-style-big mr-3" href={whitepaper} target="_blank">Download 2017 Whitepaper</a>
              <a className="btn-style-big" href="http://d4sd.org" target="_blank">D4SD 2017 website</a>
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
