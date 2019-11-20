import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { OuterContainer, FlexibleWidth, InnerContainer, OuterFlexBox, InnerFlexBox, Card } from '../assets/css/containers.js';
import { H2, H3, H4, H5, IconTitle } from '../assets/css/fonts.js';
import { Bg, Br } from '../assets/css/others.js';
import { FlexibleImg } from '../assets/css/images.js';
// import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../components/landing/HeaderCard';
import FooterCard from '../components/landing/FooterCard';
import header from '../assets/img/involve_header.svg';
import { challengeContent } from '../assets/content.js';

class Challenge extends Component {
  constructor() {
    super();
    this.Mobility = React.createRef();
    this.Housing = React.createRef();
    this.Climate = React.createRef();
    this.Health = React.createRef();
  }

  scrollToRef = ref => {
    const position = ref.current.offsetTop - 90;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  }

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
              {challengeContent.nav.map(nav =>
              {console.log(nav.title);
                return (
                <FlexibleWidth theme={{ widthS: "50%", widthM: "25%"}} onClick={() => this.scrollToRef(this[nav.title])} key={nav.title}>
                  <FlexibleImg hover theme={{width: "70%"}} src={nav.img}/>
                  <IconTitle center>{nav.title}</IconTitle>
                </FlexibleWidth>
              )})}
            </OuterFlexBox>
            <Br/>
            <OuterFlexBox center>
              {challengeContent.contents.map((content, i) => (
                <React.Fragment>
                  <H3 ref={this[content.id]}>{content.subtitle}</H3>
                  <H4>{content.title}</H4>
                  <H5 style={{"paddingBottom":"50px"}}>{content.texts}</H5>
                  {/**content.problems.map((problem, i) => (
                    <InnerFlexBox half key={i}>
                      <Bg image={problem.img} style={{"width":"400px", "height":"150px"}}>
                        <H4>{problem.problem}</H4>
                      </Bg>
                    </InnerFlexBox>
                  ))**/}
                </React.Fragment>
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
