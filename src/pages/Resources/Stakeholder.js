import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import FooterCard from '../../components/landing/FooterCard';
import HeaderCard from '../../components/landing/HeaderCard';
//CSS styles
import { Br, Bg } from '../../assets/css/others.js';
import { Btn, BtnSecondary, StyledButtonBack, StyledButtonNext, StyledDotGroup } from '../../assets/css/buttons.js';
import { FlexibleImg } from '../../assets/css/images.js';
import { H2, H3, H4, H5, H6, Styledh5 } from '../../assets/css/fonts.js';
import { Vl, Hl } from '../../assets/css/others.js';
import { Left, Grid, Card, OuterFlexBox, OuterContainer, InnerContainer, FlexibleWidth, StyledCarouselProvider } from '../../assets/css/containers.js';
//Contents
import { sampleChallenges, roles, actionImg, logos } from '../../assets/content.js';
import header from "../../assets/img/resource_header.svg";
import { stakeholderContent } from '../../assets/content.js';
import TimelineCard from '../../components/landing/TimelineCard';

class Stakeholder extends Component {

  constructor() {
    super();
    this.state = {
      hover: "",
      hoveredContent: "",
      click: "",
      clickedContent: ""
    }
  }

  // hover = e => {
  //   const target = e.target.id;
  //   const content = e.target.title;
  //   if (this.state.hover === target) {
  //     this.setState({ hover : "", hoveredContent: "" });
  //   }
  //   else {
  //     this.setState({ hover: target, hoveredContent: content });
  //   }
  // }

  hover = e => {
    const target = e.target.id;
    const content = e.target.title;
    this.setState({ hover: target, hoveredContent: content });
  }

  click = e => {
    const target = e.target.id;
    const content = e.target.title;
    this.setState({ click: target, clickedContent: content });
    console.log(this.state.click)
  }

  render() {
  return (
    <div>
      <Navbar/>
      <Br/>
      <HeaderCard title={stakeholderContent.title1} content={stakeholderContent.content1} bg={header} isAction="false"/>
      <OuterContainer>
        <InnerContainer>
          <Br/><Br/>
          <H2 center>{stakeholderContent.title2}</H2>
          <br/>
          {stakeholderContent.content2.map(content => (
            <div>
              <H4>{content.title}</H4>
              <H5 dangerouslySetInnerHTML={{ __html: content.txt }} />
              <br/><br/>
            </div>
          ))}
          <br/><br/><br/>
          <H2 center>{stakeholderContent.title3}</H2>
          <br/>
            {stakeholderContent.content3.map(content => (
              <div>
                <H4>{content.title}</H4>
                <H5 dangerouslySetInnerHTML={{ __html: content.txt }} />
                <br/><br/>
              </div>
            ))}
        </InnerContainer>
      </OuterContainer>
      <Br/><Br/>
      <FooterCard />
      </div>
    );
  }
}

export default Stakeholder;
