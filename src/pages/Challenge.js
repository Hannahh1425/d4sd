import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { OuterContainer, FlexibleWidth, InnerContainer, OuterFlexBox, InnerFlexBox, Card } from '../assets/css/containers.js';
import { H2, H3, H4, H5, IconTitle, ChallengeH4, ChallengeH5 } from '../assets/css/fonts.js';
import { ChallengeBg, Br, Shade } from '../assets/css/others.js';
import { FlexibleImg } from '../assets/css/images.js';
// import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../components/landing/HeaderCard';
import FooterCard from '../components/landing/FooterCard';
import header from '../assets/img/challenge_header.svg';
import { challengeContent } from '../assets/content.js';

class Challenge extends Component {
  constructor() {
    super();
    this.Mobility = React.createRef();
    this.Housing = React.createRef();
    this.Climate = React.createRef();
    this.Health = React.createRef();
    this.state = {
      hover: ""
    }
  }

  scrollToRef = ref => {
    console.log(ref);
    const position = ref.current.offsetTop - 90;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  }

 onHover = e => {
   const target = e.target.id;
   console.log("target" + target);
   console.log(e.target);
   if (this.state.hover !== target) {
     this.setState({hover: target});
   }
   else {
     this.setState({hover: ""});
   }
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
                  <IconTitle center hover>{nav.title}</IconTitle>
                </FlexibleWidth>
              )})}
            </OuterFlexBox>
            <br/><br/>
            <H2 center>{challengeContent.title2}</H2>
            <br/>
            <H5 dangerouslySetInnerHTML={{ __html: challengeContent.content2 }} />
            <OuterFlexBox center>
              {challengeContent.contents.map((content, i) => (
                <React.Fragment>
                  <H4 ref={this[content.id]} style={{"paddingTop":"70px","paddingBottom":"30px"}}><span style={{"color":"#4496FF"}}>{content.subtitle}: </span>{content.title}</H4>
                  {content.problems.map((problem, i) => {
                    const target = problem.problem;
                    return (
                    <InnerFlexBox half key={i}>
                      <ChallengeBg id={problem.problem} onMouseEnter={this.onHover} onMouseLeave={this.onHover} image={problem.img}>
                        {(this.state.hover !== target) && <ChallengeH4 id={problem.problem}>{problem.problem}</ChallengeH4>}
                        {(this.state.hover === target) && <ChallengeH5>{problem.detail}</ChallengeH5>}
                      </ChallengeBg>
                    </InnerFlexBox>
                  )})}
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
