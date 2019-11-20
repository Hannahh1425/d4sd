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
import header from "../assets/img/process_header.svg";
import { timelineContent } from '../assets/content.js';
import { ReactComponent as HCD } from "../assets/img/process_hcd.svg";
import TimelineCard from '../components/landing/TimelineCard';

class Workspace extends Component {

  render() {
  return (
    <div>
      <Navbar/>
      <Br/>
      <HeaderCard title={timelineContent.title1} content={timelineContent.content1} bg={header} isAction="false"/>
      <OuterContainer>
        <InnerContainer>
          <Br/><Br/>
          <H2 center>{timelineContent.title2}</H2>
          <br/>
          <H5 dangerouslySetInnerHTML={{ __html: timelineContent.content2 }} />
          <Br/><Br/>
          <H2 center>{timelineContent.title3}</H2>
          <br/>
          <H5 dangerouslySetInnerHTML={{ __html: timelineContent.content3 }} />
          <Br/>
          <Grid>
            <div/>
            <div><Vl/></div>
            <div>
              {timelineContent.timeline.map(content => (
                <div>
                  <Hl/>
                  <Left>
                  <TimelineCard
                    stage={content.stage}
                    date={content.date}
                    detail={content.detail}
                    action={content.action}
                    state={content.state}
                    isAction={content.isAction}
                    note={content.note}
                    newpage={content.newpage}
                    link={content.link}
                    first={content.first}
                  />
                  </Left>
                </div>
              ))}
            </div>
          </Grid>
        </InnerContainer>
      </OuterContainer>
      <Br/><Br/>
      <FooterCard />
      </div>
    );
  }
}

export default Workspace;
