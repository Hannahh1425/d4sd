import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
//CSS styles
import { Br, Bg } from '../assets/css/others.js';
import { Btn, BtnSecondary, StyledButtonBack, StyledButtonNext, StyledDotGroup } from '../assets/css/buttons.js';
import { FlexibleImg } from '../assets/css/images.js';
import { H2, H3, H5 } from '../assets/css/fonts.js';
import { OuterFlexBox, OuterContainer, InnerContainer, FlexibleWidth, StyledCarouselProvider } from '../assets/css/containers.js';
//Contents
import { sampleChallenges, roles, actionImg, logos } from '../assets/content.js';
import home0 from '../assets/img/home_landing.svg';

class Process extends Component {

  render() {
  return (
    <div>
      <Navbar/>
      <Br/>
      <FooterCard />
      </div>
    );
  }
}

export default Process;
