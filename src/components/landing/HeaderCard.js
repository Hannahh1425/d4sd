import React, { Component } from 'react';
import '../style.css';
import { H2, H5 } from '../../assets/css/fonts.js';
import { OuterContainer, InnerContainer, InnerFlexBox } from '../../assets/css/containers.js';
import { Background, Br } from '../../assets/css/others.js';
import { BtnConditional } from '../../assets/css/buttons.js';

class HeaderCard extends Component {

  render() {
    return (
      <Background image={this.props.bg}>
        <OuterContainer>
            <InnerContainer>
              <br/><br/>
              <H2 center>{this.props.title}</H2>
              <H5 left>{this.props.content}</H5>
            </InnerContainer>
            <br/>
            <OuterContainer center>
            <BtnConditional href="http://eepurl.com/c2kFon" target="_blank" isAction={this.props.isAction}>Join our Mailing List</BtnConditional>
            </OuterContainer>
        </OuterContainer>
      </Background>
    );
  }
}

export default HeaderCard;
