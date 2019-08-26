import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Relative, HomeStyle } from '../assets/css/others.js';
import { Btn } from '../assets/css/buttons.js';
import { FullImg } from '../assets/css/images.js';
import { H2, H5 } from '../assets/css/fonts.js';
import { homeContent } from './content.js';
import styled from 'styled-components';

const BtnHome = styled(Btn) `
  display: ${props => props.isAction === "true" ? "inline":"none"}
`

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
      <br/><br/>
        {homeContent.map((homeContent, i) => (
          <Relative key={i} id={i}>
            <HomeStyle>
              <Relative>
                <H2>{homeContent.title}</H2>
                <H5>{homeContent.txt}</H5>
                <br/>
                <BtnHome left href={homeContent.link} target="_blank" isAction={homeContent.isAction}>{homeContent.action}</BtnHome>
              </Relative>
             </HomeStyle>
            <FullImg src={homeContent.src} onLoad={this.load}/>
          </Relative>
        ))}
      </div>
    );
  }
}

export default Home;
