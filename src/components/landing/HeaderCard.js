import React, { Component } from 'react';
import '../style.css';
import { H5, H1 } from '../../assets/css/fonts.js';
import { OuterContainer, InnerContainer } from '../../assets/css/containers.js';
import { Bg, Br } from '../../assets/css/others.js';

class HeaderCard extends Component {

  render() {
    return (
      <Bg image={this.props.bg} theme={{height:"350px"}}>
        <OuterContainer>
            <InnerContainer>
              <Br/>
              <H1 center>{this.props.title}</H1>
              <H5 left dangerouslySetInnerHTML={{ __html: this.props.content }} />
              <Br/>
            </InnerContainer>
            <Br/>
        </OuterContainer>
      </Bg>
    );
  }
}

export default HeaderCard;
