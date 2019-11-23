import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import { OuterContainer, InnerContainer } from '../../assets/css/containers.js';
import { H2, H4, H5 } from '../../assets/css/fonts.js';
import {StyledHCD} from '../../assets/css/buttons.js';
import {Br} from '../../assets/css/others.js';
// import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../../components/landing/HeaderCard';
import FooterCard from '../../components/landing/FooterCard';
import header from '../../assets/img/resource_header.svg';
import { processContent } from '../../assets/content.js';


class Process extends Component {
  constructor() {
    super();
    this.state = {
      hover: ""
    }
  }

  hover = e => {
    const target = e.target.id;
    console.log("target");
    console.log(target);

    if (target === 'discover') {
      console.log("heeeeeeee");
      this.setState({hover: target});
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
          <br/>
          <H5 dangerouslySetInnerHTML={{ __html: processContent.content2 }} />
          <StyledHCD onClick={this.hover}/>
          <br/><br/><br/>
          {processContent.content3.map(content => (
            <div>
              <H4 left dangerouslySetInnerHTML={{ __html: content.title }} />
              <H5 dangerouslySetInnerHTML={{ __html: content.txt }} />
              <br/><br/>
            </div>
          ))}
        </InnerContainer>
      </OuterContainer>
      <br/><br/>
      <FooterCard/>
    </div>
    );
  }
}

export default Process;
