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
import { Left, Grid, Card, OuterFlexBox, OuterContainer, InnerContainer, FlexibleWidth, InnerFlexBox } from '../assets/css/containers.js';
//Contents
import { sampleChallenges, roles, actionImg, logos } from '../assets/content.js';
import header from "../assets/img/workspace_header.svg";
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
            <div><Vl style={{"overflow":"hidden"}}/></div>
            <div>
              {timelineContent.timeline.map(content => (
                <div>
                  <Hl image={content.img}/>
                  <Left>
                  <TimelineCard
                    stage={content.stage}
                    date={content.date}
                    detail={content.detail}
                    action1={content.action1}
                    action2={content.action2}
                    state1={content.state1}
                    state2={content.state2}
                    isAction1={content.isAction1}
                    isAction2={content.isAction2}
                    note={content.note}
                    newpage={content.newpage}
                    link1={content.link1}
                    link2={content.link2}
                    first={content.first}
                    img={content.img}
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
