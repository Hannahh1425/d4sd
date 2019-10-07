import React, { Component } from 'react';
import Navbar from '../components/Navbar';
//CSS styles
import { Relative, HomeStyle, Br } from '../assets/css/others.js';
import { BtnConditional } from '../assets/css/buttons.js';
import { FullImg } from '../assets/css/images.js';
import { H2, H5, H3 } from '../assets/css/fonts.js';
import { OuterFlexBox } from '../assets/css/containers.js';
import { Bg, Arrow } from '../assets/css/others.js';
//Contents
import { sampleChallenges } from '../assets/content.js';
import home0 from '../assets/img/home_landing.svg';
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
  render() {
  return (
    <div id="home">
      <Navbar/>
      <Bg blue>
      <Br/><Br/>
      {/************************First card***********************/}
      <Relative>
        <HomeStyle>
          <Relative>
            <Br/>
            <H3>DESIGN FOR SAN DIEGO'S 2020 CIVIC CHALLENGE</H3>
            <H2>How can we make San Diego a more sustainable city?</H2>
            <H5>San Diego is an amazing place to live, work, and visit. But like
            many cities, San Diego faces a number of difficult challenges—around
            mobility, climate, housing, public health, and economic development.
            D4SD is an initiative to address complex challenges in San Diego
            through design thinking and crowdsourcing.
            </H5>
            <Br/>
              <OuterFlexBox>
                <BtnConditional left home href="http://eepurl.com/c2kFon" target="_blank" isAction="true">Join Mailing List</BtnConditional>
                <BtnConditional center home href="http://d4sd.org" target="_blank" isAction="true">Learn More</BtnConditional>
              </OuterFlexBox>
          </Relative>
         </HomeStyle>
        <FullImg src={home0}/>
      </Relative>
      {/************************Second card***********************/}
      <Relative>
      <Carousel defaultWait={3000}>
      {sampleChallenges.map((sampleChallenge, i) => (
          <Slide right>
            <Relative key={i} id={i}>
              <HomeStyle>
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
      ))}
      </Carousel>
      </Relative>


        </Bg>
      </div>
    );
  }
}

export default Home;
