import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { FlexibleImg } from '../../assets/css/images.js';
import { H4, H5 } from '../../assets/css/fonts.js';
import { InnerFlexBox, Card } from '../../assets/css/containers.js';
import { SmallBtn } from '../../assets/css/buttons.js';

class RoleCard extends Component {
  render() {
    // let button;
    // if (this.props.show.includes(this.props.id)) {
    //   button = <i className="fas fa-chevron-up"></i>
    // } else {
    //   button = <i className="fas fa-chevron-down"></i>
    // }
    return (
      <Card id={this.props.id} ref={this.props.ref} theme={{padding: "20px", heightS:"auto", heightM:"auto", heightML:"440px", heightL:"400px"}}>
        <div>
        <InnerFlexBox center>
          {!this.props.involve&&<FlexibleImg theme={{width: "20%"}} src={this.props.image} alt={this.props.image}/>}
          <H4 left>{this.props.title}</H4>
        </InnerFlexBox>
        <br/>
        <H5 left>{this.props.txt}</H5>
        </div>
        <br/><br/>
        <SmallBtn isAction="true" state="active" href={this.props.link} target={this.props.new}>
          {this.props.action}
        </SmallBtn>
        <br/><br/>
      </Card>
    );
  }
}

export default RoleCard;
