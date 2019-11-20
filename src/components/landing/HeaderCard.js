import React, { Component } from 'react';
import '../style.css';
import { H5, H1 } from '../../assets/css/fonts.js';
import { OuterContainer, InnerContainer } from '../../assets/css/containers.js';
import { Bg, Br } from '../../assets/css/others.js';
import { BtnConditional } from '../../assets/css/buttons.js';

class HeaderCard extends Component {

  render() {
    return (
      <Bg image={this.props.bg}>
        <OuterContainer>
            <InnerContainer>
              <Br/><Br/>
              <H1 center>{this.props.title}</H1>
              <H5 left>{this.props.content}</H5>
              <Br/>              
            </InnerContainer>
            <Br/><Br/>
        </OuterContainer>
      </Bg>
    );
  }
}

export default HeaderCard;
