import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconImg } from '../../assets/css/images.js';
import { H4, H5 } from '../../assets/css/fonts.js';
import { InnerFlexBox, Card } from '../../assets/css/containers.js';
import { SmallBtn } from '../../assets/css/buttons.js';
import styled from 'styled-components';

const SmallBtnInvolve = styled(SmallBtn) `
  display: ${props => props.isAction === "true" ? "inline":"none"}
`

class RoleCard extends Component {
  render() {
    let button;
    if (this.props.show.includes(this.props.id)) {
      button = <i className="fas fa-chevron-up"></i>
    } else {
      button = <i className="fas fa-chevron-down"></i>
    }
    return (
      <Card id={this.props.id} ref={this.props.ref} className="h-100">
        <InnerFlexBox center>
          <IconImg src={this.props.image} />
          <H4>{this.props.title}</H4>
        </InnerFlexBox>
        <br/>
        <H5>{this.props.txt}</H5>
        <br/>
        <SmallBtnInvolve left href={this.props.link} target="_blank" isAction={this.props.isAction}>
          {this.props.action}
        </SmallBtnInvolve>
        <br/><br/>
      </Card>
    );
  }
}

export default RoleCard;
