import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox, Card } from '../assets/css/containers.js';
import { H2 } from '../assets/css/fonts.js';
import { Bg } from '../assets/css/others.js';
// import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../components/landing/HeaderCard';
import FooterCard from '../components/landing/FooterCard';
import header from '../assets/img/involve_header.svg';
import { challengeContent } from '../assets/content.js';

class Challenge extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <br/><br/>
        <HeaderCard title={challengeContent.title} content={challengeContent.content} bg={header} isAction="true"/>
        <br/><br/>
        <OuterContainer center>
          <InnerContainer>
            <OuterFlexBox>
              {challengeContent.contents.map((content, i) => (
                <InnerFlexBox half key={i}>
                  <Bg image={content.img} style={{"width":"400px", "height":"300px"}}>
                    <H2 white>{content.title}</H2>
                  </Bg>
                </InnerFlexBox>
              ))}
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
        <br/><br/>
        <FooterCard/>
      </div>
    );
  }
}

export default Challenge;
