import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox } from '../../assets/css/containers.js';
import { H2, H3, H4, H5, H6, Styledh5 } from '../../assets/css/fonts.js';
import {Br} from '../../assets/css/others.js';
// import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../../components/landing/HeaderCard';
import FooterCard from '../../components/landing/FooterCard';
import header from '../../assets/img/involve_header.svg';
import { ReactComponent as HCD } from "../../assets/img/process_hcd.svg";
import { processContent } from '../../assets/content.js';


class Process extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
  }

  hover = e => {
    const target = e.target.id;
    console.log(target)
    if (target === 'discover') {
      console.log("heeeeeeee");
      this.setState({hover: true});
    }
  }

  render() {
  return (
    <div>
      <Navbar/>
      <br/><br/>
      <HeaderCard title={processContent.title1} content={processContent.content1} bg={header} isAction="true"/>
      <OuterContainer>
        <InnerContainer>
          <Br/><Br/>
          <H2 center>{processContent.title2}</H2>
          <HCD onClick={this.hover}/>
        </InnerContainer>
      </OuterContainer>
    </div>
    );
  }
}

export default Process;
