import React, { Component } from 'react';
import '../style.css';
import { H2, H5 } from '../../assets/css/fonts.js';
import { OuterContainer, InnerContainer } from '../../assets/css/containers.js';
import { Background } from '../../assets/css/others.js';
import { BtnConditional } from '../../assets/css/buttons.js';

class HeaderCard extends Component {

  render() {
    return (
      <Background image={this.props.bg}>
        <OuterContainer center>
            <InnerContainer>
              <br/><br/><br/>
              <H2>{this.props.title}</H2>
              <H5>{this.props.content}</H5>
              <br/>
              <BtnConditional href="http://eepurl.com/c2kFon" target="_blank" isAction={this.props.isAction}>Join our Mailing List</BtnConditional>
            </InnerContainer>
        </OuterContainer>
      </Background>
    );
  }
}

export default HeaderCard;
