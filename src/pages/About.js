import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
import HeaderCard from '../components/landing/HeaderCard';
//Contents
import { aboutContent } from './content.js';
//Styles
import styled from 'styled-components';
import { Bg, Br } from '../assets/css/others.js';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox, ToggleFlexBox } from '../assets/css/containers.js';
import { H2, H5 } from '../assets/css/fonts.js';
import { device } from '../assets/css/breakpoints.js';
import { Btn, ToggleBtn } from '../assets/css/buttons.js';
import { FullImg, IconImg } from '../assets/css/images.js';

import whitepaper from '../img/D4SD_2017_WhitePaper.pdf';
import header from "../img/about_header.svg";
import ppttimeline_horizontal from "../img/about_participants_horizontal.svg";
import commtimeline_horizontal from "../img/about_community_horizontal.svg";
import ppttimeline_vertical from "../img/about_participants_vertical.png";
import commtimeline_vertical from "../img/about_community_vertical.png";
import diagram from "../img/about_diagram.svg";

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

  innovator = () => {
    this.setState(prevState => ({
      isInnovator: true
    }));
  }

  community = () => {
    this.setState(prevState => ({
      isInnovator: false
    }));
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
        <Br/><Br/>
        <HeaderCard title={aboutContent.title1} content={aboutContent.content1} bg={header} isAction="false"/>
        <Br/><Br/>
        <Bg ref={this.join} id="join">
          <OuterContainer>
            <InnerContainer>
              <H2 center>{aboutContent.title2}</H2>
              <H5>{aboutContent.content2}</H5>
              <br/>
              <img src={diagram} alt="diagram"/>
            </InnerContainer>
          </OuterContainer>
        </Bg>

        <Br/><Br/><Br/>

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
              <Br/><Br/><Br/>
            </InnerContainer>
          </OuterContainer>
        </Bg>


          <Br/><Br/>
          <Bg ref={this.timeline} id="timeline">
            <OuterContainer>
              <InnerContainer>
              <Br/>
              <H2 center>{aboutContent.title4}</H2>
              <H5 left>{aboutContent.content4}</H5>
              <Br/><Br/>
              <ToggleFlexBox middle>
                <ToggleBtn left onClick={this.innovator} active={this.state.isInnovator}>Innovators</ToggleBtn>
                <ToggleBtn onClick={this.community} active={!this.state.isInnovator}>Community members</ToggleBtn>
              </ToggleFlexBox>
              <Br/>
            </InnerContainer>
            <ResponsiveImgVertical src={ppttimeline_vertical} isInnovator={this.state.isInnovator} />
            <ResponsiveImgVertical src={commtimeline_vertical} isInnovator={!this.state.isInnovator} />
            <ResponsiveImgHorizontal src={ppttimeline_horizontal} isInnovator={this.state.isInnovator} />
            <ResponsiveImgHorizontal src={commtimeline_horizontal} isInnovator={!this.state.isInnovator} />
            </OuterContainer>
          </Bg>

          <Br/><Br/>
          <Bg blue ref={this.review} id="review">
            <OuterContainer>
              <Br/><Br/><Br/>
              <InnerContainer>
              <H2 center>{aboutContent.title5}</H2>
              <H5 left>{aboutContent.content5}</H5>
              </InnerContainer>
              <Br/>
              <OuterFlexBox center>
                <Btn href={whitepaper} target="_blank">Download 2017 Whitepaper</Btn>
                <Btn href="http://d4sd2017.org" target="_blank" top left>D4SD 2017 website</Btn>
              </OuterFlexBox>
              <Br/><Br/>
              <Br/>
            </OuterContainer>
          </Bg>
          <FooterCard/>
      </div>
    );
  }
}

export default About;
