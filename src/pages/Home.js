import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Relative, HomeStyle, Br } from '../assets/css/others.js';
import { BtnConditional } from '../assets/css/buttons.js';
import { FullImg } from '../assets/css/images.js';
import { H2, H5, H3 } from '../assets/css/fonts.js';
import { OuterFlexBox } from '../assets/css/containers.js';
import { Bg } from '../assets/css/others.js';
import { homeContent } from '../assets/content.js';
import './style.css';

// import styled from 'styled-components';

class Home extends Component {
  constructor() {
    super();
    this.state = ({
      loaded: false
    })
  }

  load = () => {
    this.setState({loaded: true});
    console.log(this.state.loaded);
  }

  render() {
  return (
    <div id="home">
      <Navbar/>
      <Bg blue>
      <Br/><Br/>
        {homeContent.map((homeContent, i) => (
          <Relative key={i} id={i}>
            <HomeStyle>
              <Relative>
                <Br/>
                <H3>{homeContent.header}</H3>
                <H2>{homeContent.title}</H2>
                <H5 dangerouslySetInnerHTML={{ __html: homeContent.txt }} />
                <H5>{homeContent.question}</H5>
                <Br/>
                {/* <div id="btn-set"> */}
                  <OuterFlexBox>
                    <BtnConditional left home href={homeContent.link} target="_blank" isAction={homeContent.isAction}>{homeContent.action}</BtnConditional>
                    <BtnConditional center home href={homeContent.link2} target="_blank" isAction={homeContent.isAction2}>{homeContent.action2}</BtnConditional>
                  </OuterFlexBox>
                  {/* <a id="learn-more">Learn More</a> */}
                {/* </div> */}

              </Relative>
             </HomeStyle>
            <FullImg src={homeContent.src} onLoad={this.load}/>
          </Relative>
        ))}
        </Bg>
      </div>
    );
  }
}

export default Home;
