import React, { Component } from 'react';
import Navbar from '../components/Navbar';
//CSS styles
import { Relative, HomeStyle, Br, Bg, Arrow } from '../assets/css/others.js';
import { Btn, BtnSecondary } from '../assets/css/buttons.js';
import { FullImg, IconImgBig } from '../assets/css/images.js';
import { H2, H5, H3 } from '../assets/css/fonts.js';
import { OuterFlexBox, OuterContainer, InnerContainer, InnerFlexBox } from '../assets/css/containers.js';
//Contents
import { sampleChallenges, roles } from '../assets/content.js';
import home0 from '../assets/img/home_landing.svg';
import home5 from '../assets/img/home_about.svg';
//Carousel
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import './style.css';

// import styled from 'styled-components';
const CarouselUI = ({ position, handleClick, children }) => (
  <div>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </div>
);
const Carousel = makeCarousel(CarouselUI);

class Home extends Component {
  constructor() {
    super();
    this.mission = React.createRef();
  }

  scrollToRef = ref => {
    console.log("before");
    console.log(ref.current);
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  }

  render() {
  return (
    <div id="home">
      <Navbar/>

      {/************************First card***********************/}
      <Bg image = {home0}>
        <OuterContainer center full>
          <InnerContainer>
            <Br/><Br/><Br/>
            <H3>DESIGN FOR SAN DIEGO'S 2020 CIVIC CHALLENGE</H3>
            <H2>How can we make San Diego a more sustainable city?</H2>
            <H5>San Diego is an amazing place to live, work, and visit. But like
              many cities, San Diego faces a number of difficult challenges—around
              mobility, climate, housing, public health, and economic development.
              D4SD is an initiative to address complex challenges in San Diego
              through design thinking and crowdsourcing.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn href="http://eepurl.com/c2kFon" target="_blank">Join Mailing List</Btn>
              <BtnSecondary left onClick={() => this.scrollToRef(this.mission)}>Learn More</BtnSecondary>
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
      </Bg>
      {/************************Second card***********************/}
      <Bg ref={this.mission}>
        <OuterContainer center full>
          <InnerContainer>
            <Br/><Br/>
            <H2>Contribute to Our Mission</H2>
            <H5>San Diego is an amazing place to live, work, and visit. But like many
              cities, San Diego faces a number of difficult challenges—around mobility,
              climate, housing, public health, and economic growth — that could affect
              the long-term sustainability of the region. Want to make a difference
              in our community? Join the Design for San Diego (D4SD) initiative to
              help address the city’s most pressing challenges using human-centered
              design. Scroll down to see some sample challenges for this year's theme.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn href="/involve">Join D4SD</Btn>
            </OuterFlexBox>
            <Br/>
            <OuterFlexBox>
              <InnerFlexBox>
              {roles.map(role => (
                <div>
                  <IconImgBig src={role.image}/>
                  <H5>{role.contents}</H5>
                  </div>
              ))}
              </InnerFlexBox>
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
      </Bg>
      {/************************Second card***********************/}
      <Relative>
      <Carousel defaultWait={3000}>
      {/**sampleChallenges.map((sampleChallenge, i) => (
          <Slide right>
            <Relative key={i} id={i}>
              <HomeStyle carousel>
                <Relative>
                  <Br/>
                  <H3>{sampleChallenge.header}</H3>
                  <H2>{sampleChallenge.title}</H2>
                  <H5 dangerouslySetInnerHTML={{ __html: sampleChallenge.txt }} />
                  <H5>{sampleChallenge.question}</H5>
                  <Br/>
                    <OuterFlexBox>
                      <BtnConditional left home href={sampleChallenge.link} target="_blank" isAction={sampleChallenge.isAction}>{sampleChallenge.action}</BtnConditional>
                      <BtnConditional center home href={sampleChallenge.link2} target="_blank" isAction={sampleChallenge.isAction2}>{sampleChallenge.action2}</BtnConditional>
                    </OuterFlexBox>
                </Relative>
               </HomeStyle>
              <FullImg src={sampleChallenge.src}/>
            </Relative>
        </Slide>
      ))**/}
      </Carousel>
      </Relative>

      <Bg>
        <OuterContainer center full>
          <InnerContainer>
            <Br/><Br/><Br/>
            <H2>D4SD in action</H2>
            <H5>In 2017, we started Design For San Diego, where hundreds of
              people were involved with generating concepts with the goal to
              create a San Diego where we all move freely. 23 teams ideated
              solutions using human-centered design principles to help solve
              the city’s problems regarding mobility. Visit our 2017 website
              to learn more about what we did in 2017 and to see some of the
              projects worked on during this time.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn left href="http://d4sd2017.ucsd.edu" target="_blank">See what happened in 2017</Btn>
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
      </Bg>

      <Bg>
        <OuterContainer center full>
          <InnerContainer>
            <Br/><Br/><Br/>
            <H2>Meet our community</H2>
            <H5>In 2017, we started Design For San Diego, where hundreds of
              people were involved with generating concepts with the goal to
              create a San Diego where we all move freely. 23 teams ideated
              solutions using human-centered design principles to help solve
              the city’s problems regarding mobility. Visit our 2017 website
              to learn more about what we did in 2017 and to see some of the
              projects worked on during this time.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn left href="/involve">Get Involved</Btn>
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
      </Bg>



      </div>
    );
  }
}

export default Home;
