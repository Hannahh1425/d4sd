import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
//CSS styles
import { Relative, HomeStyle, Br, Bg, Arrow } from '../assets/css/others.js';
import { Btn, BtnSecondary } from '../assets/css/buttons.js';
import { FullImg, IconImgBig } from '../assets/css/images.js';
import { H2, H5, H3, H4 } from '../assets/css/fonts.js';
import { OuterFlexBox, OuterContainer, InnerContainer, InnerFlexBox, FlexibleWidth } from '../assets/css/containers.js';
//Contents
import { sampleChallenges, roles, actionImg, communityLogo } from '../assets/content.js';
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
      <Bg image={home0}>
        <OuterContainer center full>
          <InnerContainer>
            <Br/><Br/><Br/>
            <H3>DESIGN FOR SAN DIEGO'S 2020 CIVIC DESIGN CHALLENGE</H3>
            <H2 half>How can we make San Diego a more sustainable city?</H2>
            <br/>
            <H5>San Diego is an amazing place to live, work, and visit. But
            like many cities, San Diego faces a number of difficult challenges
            around mobility, climate, housing, and public health. Design for
            San Diego (D4SD) is an initiative to address complex challenges
            through design thinking and crowdsourcing.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn href="http://eepurl.com/c2kFon" target="_blank">JOIN MAILING LIST</Btn>
              <BtnSecondary left home top onClick={() => this.scrollToRef(this.mission)}>LEARN MORE</BtnSecondary>
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
      </Bg>
      {/************************Second card***********************/}
      <Bg ref={this.mission}>
        <OuterContainer center>
          <InnerContainer>
            <Br/><Br/>
            <H2>Contribute to Our Mission</H2>
            <br/>
            <H5 left>D4SD seeks to connect young passionate designers to a
            network of industry, civic, and community leaders and to structure a
            process for collectively addressing civic challenges related to the
            sustainability of our region. We are exploring new models for collective
            innovation where the community works together to discover problem angles,
            explore possible solutions, and build prototypes that test ideas. <br/>
            D4SD 2020 will host a series of design events including speakers,
            studios, and desisgathons, starting in January 2020 and culminating
            in a summit where stakeholders can interact, pitch proposed solutions,
            discuss trade-offs, and build alliances to make change happen. Come
            to an event or form a team and submit your proposals!
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn href="/involve">Join D4SD</Btn>
            </OuterFlexBox>
            <Br/>
              <OuterFlexBox>
                {roles.map(role => (
                  <FlexibleWidth>
                    <IconImgBig role src={role.image}/>
                    <H5>{role.contents}</H5>
                  </FlexibleWidth>
                ))}
              </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
      </Bg>
      <Br/><Br/>
      {/************************Second card***********************/}
      <Relative>
        <Carousel defaultWait={4000}>
          {sampleChallenges.map((sampleChallenge, i) => (
              <Slide right>
                <Bg image={sampleChallenge.src} blue>
                  <OuterContainer center full>
                    <InnerContainer>
                      <Br/><Br/>
                      <H2>Learn about the challenges!</H2>
                      <H3>{sampleChallenge.header}</H3>
                      <H4>{sampleChallenge.title}</H4>
                      <H5 left dangerouslySetInnerHTML={{ __html: sampleChallenge.txt }} />
                      <H5>{sampleChallenge.question}</H5>
                      <Br/>
                      <OuterFlexBox center>
                        <Btn href="https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU" target="_blank">Join the discussion</Btn>
                      </OuterFlexBox>
                      <Br/>
                    </InnerContainer>
                  </OuterContainer>
                </Bg>
            </Slide>
          ))}
        </Carousel>
      </Relative>
      <Relative top>
      <Bg>
        <OuterContainer center>
          <InnerContainer>
            <Br/><Br/>
            <H2>D4SD in action</H2>
            <br/>
            <H5>In 2017, hundreds of people helped to generate ideas through the
             first D4SD challenge:  How to create a San Diego where we all can
             move freely.  Over a two month period, 23 teams used human-centered
             design principles to prototype solutions to address the city’s
             mobility challenges. Visit our 2017 website to learn more about
             what we did in 2017 and to see some of the prototypes.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn left href="http://d4sd2017.ucsd.edu" target="_blank">See what happened in 2017</Btn>
            </OuterFlexBox>
            </InnerContainer>
            <Br/><Br/>
            <OuterFlexBox>
              {actionImg.map(img => (
                <FlexibleWidth>
                  <IconImgBig src={img} />
                </FlexibleWidth>
              ))}
            </OuterFlexBox>
        </OuterContainer>
      </Bg>
      <Br/><Br/>
      <Bg>
        <OuterContainer center>
          <InnerContainer>
            <Br/><Br/>
            <H2>Meet our community</H2>
            <H5>The D4SD community includes talented and energetic people from
            across our region.  Through the online and in-person events, we help
            to foster collaboration and interaction among innovators, civic leaders,
            industry experts, and other community members.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn left href="/involve">Get Involved</Btn>
            </OuterFlexBox>
            </InnerContainer>
            <OuterFlexBox>
              {communityLogo.map(img => (
                <FlexibleWidth>
                  <IconImgBig role src={img} />
                </FlexibleWidth>
              ))}
            </OuterFlexBox>
        </OuterContainer>
      </Bg>
      <Br/><Br/><Br/>
      <FooterCard />
      </Relative>

      </div>
    );
  }
}

export default Home;
