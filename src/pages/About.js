import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Container from '../components/Container';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
import HeaderCard from '../components/landing/HeaderCard';
//Contents
import { aboutContent } from './content.js';
//Styles
import styled from 'styled-components';
import { Bg, Background } from '../assets/css/others.js';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox } from '../assets/css/containers.js';
import { H2, H5 } from '../assets/css/fonts.js';
import { device } from '../assets/css/breakpoints.js';
import { Btn, ToggleBtn } from '../assets/css/buttons.js';
import { FullImg, IconImg } from '../assets/css/images.js';

import whitepaper from '../img/D4SD_2017_WhitePaper.pdf';
import ppttimeline_horizontal from "../img/about_participants_horizontal.png";
import commtimeline_horizontal from "../img/about_community_horizontal.png";
import ppttimeline from "../img/about_participanttimeline.png";
import commtimeline from "../img/about_communitytimeline.png";
import { ReactComponent as Diagram } from "../img/about_diagram.svg";
// import { ReactComponent as Timeline } from "../img/about_timeline.svg";

import './style.css';

const H5Half = styled(H5) `
    width: 90%;
`

const ResponsiveImgVertical = styled(FullImg) `
    @media ${device.mobileS} {
        display: ${props => props.isInnovator ? "inline":"none"}
    }
    @media ${device.tablet} {
        display: none;
    }
`

const ResponsiveImgHorizontal = styled(FullImg)  `
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.tablet} {
        display: ${props => props.isInnovator ? "inline":"none"}
    }
`

class About extends Component {
  constructor() {
    super();
    this.state=({
      overview: true,
      join: false,
      value: false,
      timeline: false,
      review: false,
      isInnovator: true,
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

  toggle = e => {
      console.log("participantcall");
      this.setState(prevState => ({
        isInnovator: !prevState.isInnovator
      }));
  }

  onHover = e => {
    console.log("hoverr");
    console.log(e.target);

  }


  unHover = e => {

  }

  // style = e => {
  //   console.log("called");
  //   const ppt_timeline = document.getElementById("ppt_timeline");
  //   const comm_timeline = document.getElementById("comm_timeline");
  //   if (this.state.isInnovator) {
  //     ppt_timeline.style.display = "inline-block";
  //     comm_timeline.style.display = "none";
  //     this.setState({role:"Innovators'"});
  //   }
  //   else {
  //     ppt_timeline.style.display = "none";
  //     comm_timeline.style.display = "inline-block";
  //     this.setState({role:"Community Members'"});
  //   }
  // }
  //
  // handlePpt = e =>{
  //   console.log("participant");
  //   var ppt_timeline = document.getElementById("ppt_timeline");
  //   var comm_timeline = document.getElementById("comm_timeline");
  //   console.log(ppt_timeline);
  //   ppt_timeline.style.display = "inline-block";
  //   comm_timeline.style.display = "none";
  // }
  //
  // handleComm = e =>{
  //   console.log("community");
  //   var ppt_timeline = document.getElementById("ppt_timeline");
  //   var comm_timeline = document.getElementById("comm_timeline");
  //   console.log(ppt_timeline);
  //   ppt_timeline.style.display = "inline-block";
  //   comm_timeline.style.display = "none";
  // }

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
        <Background ref={this.overview} id="overview">
          <OuterContainer center>
            <InnerContainer>
            <br/><br/><br/><br/>
            <H2>{aboutContent.title1}</H2>
            <br/>
            <H5>{aboutContent.content1}</H5>
            <br/><br/><br/><br/><br/>
            </InnerContainer>
          </OuterContainer>
        </Background>

        <br/><br/>

        <Bg ref={this.join} id="join">
          <OuterContainer center>
            <InnerContainer>
              <H2>{aboutContent.title2}</H2>
              <br/>
              <H5>{aboutContent.content2}</H5>
              <br/><br/><br/>
              <Diagram onMouseOver={this.onHover} onMouseOut={this.unHover}/>
            </InnerContainer>
          </OuterContainer>
        </Bg>

        <br/><br/><br/><br/><br/>

        <Bg blue ref={this.value} id="value">
          <OuterContainer>
            <InnerContainer>
              <br/><br/><br/><br/>
              <H2 center>{aboutContent.title3}</H2>
              <br/>
              <OuterFlexBox>
                {aboutContent.content3.map((value, i) => (
                  <InnerFlexBox half>
                    <IconImg small src={value.img} />
                    <H5Half>{value.txt}</H5Half>
                  </InnerFlexBox>
                ))}
              </OuterFlexBox>
              <br/><br/><br/>
            </InnerContainer>
          </OuterContainer>
        </Bg>


          <br/><br/>
          <Bg ref={this.timeline} id="timeline">
            <OuterContainer>
              <InnerContainer>
              <H2 center>{aboutContent.title4}</H2>
              <br/>
                <H5>
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
                </H5>
              <br/><br/>
              <H5>
                Different roles will have slightly different process.
              </H5>
              <br/>

                <ToggleBtn>{this.state.role} process</ToggleBtn>
                <ToggleBtn>{this.state.role} process</ToggleBtn>
              <br/>
              <ResponsiveImgVertical src={ppttimeline} isInnovator={this.state.isInnovator} />
              <ResponsiveImgVertical src={commtimeline} isInnovator={!this.state.isInnovator} />
              <ResponsiveImgHorizontal src={ppttimeline_horizontal} isInnovator={this.state.isInnovator} />
              <ResponsiveImgHorizontal src={commtimeline_horizontal} isInnovator={!this.state.isInnovator} />
            </InnerContainer>
            </OuterContainer>
          </Bg>

          <br/><br/>
          <Bg blue ref={this.review} id="review">
            <OuterContainer center>
              <br/><br/><br/><br/>
              <H2>{aboutContent.title5}</H2>
              <br/>
              <H5>Want to learn more about how it actually works? <br/> Check out
                the overview of D4SD 2017 where 23 teams generated concepts on
                the theme of mobility.
              </H5>
              <br/><br/>
              <OuterFlexBox center>
                <Btn href={whitepaper} target="_blank">Download 2017 Whitepaper</Btn>
                <Btn href="http://d4sd.org" target="_blank" top left>D4SD 2017 website</Btn>
              </OuterFlexBox>
              <br/><br/>
              {/**<a href="http://eepurl.com/c2kFon" target="_blank">
                <H2>Join our mailing list</H2>
              </a>**/}
              <br/><br/><br/>
            </OuterContainer>
          </Bg>
          <FooterCard/>
      </div>
    );
  }
}

export default About;
