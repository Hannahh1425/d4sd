import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
import HeaderCard from '../components/landing/HeaderCard';
//CSS styles
import { Br, Bg } from '../assets/css/others.js';
import { Btn, BtnSecondary, StyledButtonBack, StyledButtonNext, StyledDotGroup } from '../assets/css/buttons.js';
import { FlexibleImg } from '../assets/css/images.js';
import { H2, H3, H4, H5, H6, Styledh5 } from '../assets/css/fonts.js';
import { Vl, Hl } from '../assets/css/others.js';
import { Left, Grid, Card, OuterFlexBox, OuterContainer, InnerContainer, FlexibleWidth, StyledCarouselProvider } from '../assets/css/containers.js';
//Contents
import { sampleChallenges, roles, actionImg, logos } from '../assets/content.js';
import header from "../assets/img/involve_header.svg";
import { feedbackContent } from '../assets/content.js';
import TimelineCard from '../components/landing/TimelineCard';

class FeedbackProvider extends Component {

  render() {
  return (
    <div>
      <Navbar/>
      <Br/>
      <HeaderCard title={feedbackContent.title1} content={feedbackContent.content1} bg={header} isAction="false"/>
      <br/><br/>
      <OuterContainer>
        <InnerContainer>
          <H2 center>{feedbackContent.title2}</H2>
          <br/>
          <H5 dangerouslySetInnerHTML={{ __html: feedbackContent.content2 }} />
          <br/>
          <Btn style={{"marginLeft":"14px!important"}} href='https://docs.google.com/forms/d/e/1FAIpQLSdEcREjU4sMGjv9ZfNNL_Ljl1T7VjSqlgDlIla_HsVMRfB0ww/viewform?usp=sf_link' target='_blank'>Sign up as a feedback provider</Btn>
        </InnerContainer>
      </OuterContainer>
      <Br/><Br/>
      <FooterCard />
      </div>
    );
  }
}

export default FeedbackProvider;
