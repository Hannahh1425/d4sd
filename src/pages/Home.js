import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FooterCard from '../components/landing/FooterCard';
//CSS styles
import { Br, Bg } from '../assets/css/others.js';
import { Btn, BtnSecondary, StyledButtonBack, StyledButtonNext, StyledDotGroup } from '../assets/css/buttons.js';
import { FlexibleImg } from '../assets/css/images.js';
import { H2, H3, H4, H5, H6 } from '../assets/css/fonts.js';
import { Card, OuterFlexBox, OuterContainer, InnerContainer, InnerFlexBox, FlexibleWidth, StyledCarouselProvider, TempPadding } from '../assets/css/containers.js';
//Contents
import { sampleChallenges, roles, actionImg, communityLogo, logos } from '../assets/content.js';
import home0 from '../assets/img/home_landing.svg';
import test from '../assets/img/home_action1.png';
//Carousel
import { Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Home extends Component {
  constructor() {
    super();
    this.mission = React.createRef();
    console.log("screen");
    console.log(window.innerWidth);
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
      {/************************Mission***********************/}
      <Bg ref={this.mission}>
        <OuterContainer center>
          <InnerContainer>
            <Br/><Br/>
            <H2>Contribute to our mission</H2>
            <br/>
            <H5 left>D4SD seeks to connect young passionate designers to a network
            of industry professionals and to structure a process for collectively
            addressing civic challenges related to the sustainability of our
            region. We are exploring new models for collective innovation where
            the community works together to discover problems, explore solutions,
            and build prototypes to test ideas. <br/><br/>
            D4SD 2020 will host a series of design events including speakers,
            studios, and design-athons, starting in January. This will culminate
            into a summit in May where stakeholders can pitch proposed solutions,
            and build alliances to make change happen.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn href="/involve">JOIN D4SD</Btn>
            </OuterFlexBox>
            <Br/>
              <OuterFlexBox>
                {roles.map(role => (
                  <FlexibleWidth theme={{ widthS: "50%", widthM: "25%"}} key={role.image}>
                    <FlexibleImg theme={{width: "70%"}} src={role.image}/>
                    <H5 center>{role.contents}</H5>
                  </FlexibleWidth>
                ))}
              </OuterFlexBox>
              <Br/><Br/>
          </InnerContainer>
        </OuterContainer>
      </Bg>
      {/************************Problem topics**********************/}
      <StyledCarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={250}
        isPlaying={true}
        totalSlides={4}
        full
      >
        <Slider>
          {sampleChallenges.map((sampleChallenge, i) => (
            <Slide index={i} key={i}>
              <Bg image={sampleChallenge.src} theme={{color: "#EFF8FF"}}>
                <OuterContainer center full>
                  <InnerContainer>
                    <Br/><Br/>
                      <H3>LEARN ABOUT THE CHALLENGES!</H3>
                      <H2>{sampleChallenge.title}</H2>
                      <br/>
                      <H5 dangerouslySetInnerHTML={{ __html: sampleChallenge.txt }} />
                      <Br/>
                      <OuterFlexBox center>
                        <Btn href="https://join.slack.com/t/d4sd/shared_invite/enQtMjExMjA5MDY0MjkzLTk3NjY4NGM3MTE0N2M1NTJjODAxMGRiMDgxNmQ4ZDk1NTU4Mzk0OThjMTdkMzc0NTJmY2M1ZmNkZDA3NTdjYTU" target="_blank">JOIN THE DISCUSSION</Btn>
                      </OuterFlexBox>
                  </InnerContainer>
                </OuterContainer>
              </Bg>
            </Slide>
          ))}
        </Slider>
        <StyledButtonBack><i className="fas fa-angle-left"></i></StyledButtonBack>
        <StyledButtonNext><i className="fas fa-angle-right"></i></StyledButtonNext>
        <StyledDotGroup disableActiveDots={true} />

      </StyledCarouselProvider>

      <Br/><Br/>

      {/************************D4SD in action***********************/}
      <Bg>
        <OuterContainer center>
          <InnerContainer>
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
              <Btn left href="http://d4sd2017.ucsd.edu" target="_blank">SEE WHAT HAPPENED IN 2017</Btn>
            </OuterFlexBox>
            </InnerContainer>
            <Br/><Br/>
            <OuterFlexBox>
              {actionImg.map(img => (
                <FlexibleWidth theme={{ widthS: "50%", widthM: "25%"}} key={img}>
                  <FlexibleImg theme={{width: "98%", height:"auto"}} src={img} />
                </FlexibleWidth>
              ))}
            </OuterFlexBox>
        </OuterContainer>
      </Bg>

      <Br/><Br/>
      {/************************Community***********************/}
      <Bg>
        <OuterContainer center>
          <InnerContainer>
            <H2>Meet our community</H2>
            <br/>
            <H5>The D4SD community includes talented and energetic people from
            across our region.  Through the online and in-person events, we help
            to foster collaboration and interaction among innovators, civic leaders,
            industry experts, and other community members.
            </H5>
            <Br/>
            <OuterFlexBox center>
              <Btn left href="/involve">GET INVOLVED</Btn>
            </OuterFlexBox>
            <Br/>

            {/**<div style={{"display":"flex", "alignItems":"baseline", "justifyContent":"space-around", "flexWrap":"wrap"}}>
              {communityLogo.map(img => (
                  <FlexibleImg theme={{ width: "150px"}} src={img} key={img} />
              ))}
            </div>**/}
            </InnerContainer>
            <StyledCarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              isPlaying={true}
              interval={3000}
              totalSlides={7}
              visibleSlides={window.innerWidth < '768' ? 1:3}
            >
              <Slider>
              {logos.map((logo, i) => (
                <Slide index={i} key={i}>
                  <FlexibleImg src={logo} theme={{width: "100%"}}/>
                </Slide>
              ))}
              </Slider>
            </StyledCarouselProvider>
            <br/><br/>
            {/**<OuterFlexBox center>
              <FlexibleWidth theme={{ widthS: "70%", widthM: "38%"}}>
                <Card>
                  <InnerFlexBox start="true" center>
                  <FlexibleImg src={test} round theme={{width: "15%"}} />
                    <FlexibleWidth theme={{ widthS: "70%", widthM: "80%"}}>
                    <H6 left>"Loved the hackathons and the opportunity to talk
                      to mentors was a really great experience"
                    </H6>
                  </FlexibleWidth>
                  </InnerFlexBox>
                </Card>
              </FlexibleWidth>
              <FlexibleWidth theme={{ widthS: "70%", widthM: "38%"}}>
                <Card>
                  <InnerFlexBox start="true" center>
                  <FlexibleImg src={test} round theme={{width: "15%"}} />
                    <FlexibleWidth theme={{ widthS: "70%", widthM: "80%"}}>
                    <H6 left>"Loved the hackathons and the opportunity to talk
                      to mentors was a really great experience"
                    </H6>
                  </FlexibleWidth>
                  </InnerFlexBox>
                </Card>
              </FlexibleWidth>
            </OuterFlexBox>**/}
        </OuterContainer>
      </Bg>
      <Br/>
      <FooterCard />
      </div>
    );
  }
}

export default Home;
