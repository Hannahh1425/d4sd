import React, { Component } from 'react';
import '../style.css';
import { H2, H5 } from '../../assets/css/fonts.js';
import { OuterContainer, InnerContainer, InnerFlexBox } from '../../assets/css/containers.js';
import { Background, Bg, Br } from '../../assets/css/others.js';
import { BtnConditional } from '../../assets/css/buttons.js';

class HeaderCard extends Component {

  render() {
    return (
      <Bg image={this.props.bg}>
        <OuterContainer>
            <InnerContainer>
              <br/><br/>
              <H2 center>{this.props.title}</H2>
              <H5 left>{this.props.content}</H5>
              <OuterContainer center>
              <br/>
              <BtnConditional href="http://eepurl.com/c2kFon" target="_blank" isAction={this.props.isAction}>Join our Mailing List</BtnConditional>
              </OuterContainer>
            </InnerContainer>
            <br/>
        </OuterContainer>
      </Bg>
    );
  }
}

export default HeaderCard;
