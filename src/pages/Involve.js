import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox } from '../assets/css/containers.js';
import { FullImg, IconImg } from '../assets/css/images.js';
import { H2, H4, H5 } from '../assets/css/fonts.js';
import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../components/landing/HeaderCard';
import RoleCard from '../components/landing/RoleCard';
import { involveContent } from './content.js';

import './style.css';


class Involve extends Component {
  constructor() {
    super();
    this.state = ({
      hovered: "",
      show: []
    })
    this.innovators = React.createRef();
    this.experts = React.createRef();
    this.educators = React.createRef();
    this.sponsors = React.createRef();
  }

  onHover = ref => {
    this.setState({hovered: ref.current.props.id});
    console.log("clalllll");
    console.log(ref.current.props.id);
  }

  onLeave = ref => {
    this.setState({hovered: "removed"});
    console.log("noo")
  }

  expand = ref => {
    let target = ref.current.props.id;
    if (!this.state.show.includes(target)) (
      this.setState({show: [...this.state.show, target]})
    )
    else {
      this.setState({show: this.state.show.filter(show => {
          return show !== target
      })});
    }
  }

  render() {
    return (
      <div id="involve">
        <Navbar/>
        <br/><br/>
        <HeaderCard title="Get Involved"/>
        <br/><br/>
        <OuterContainer center>
          <div>
            <H4>If you're interested in being part of D4SD, Join our Mailing List</H4>
            <br/>
            <Btn href="http://eepurl.com/c2kFon" target="_blank">Join our Mailing List</Btn>
          </div>
          <br/><br/>
        </OuterContainer>
        <OuterContainer>
          <InnerContainer>
            <OuterFlexBox>
              {involveContent.map(content => (
                <InnerFlexBox half>
                  <RoleCard
                    onClick={() => this.expand(this[content.id])}
                    ref={this[content.id]}
                    id={content.id}
                    show = {this.state.show}
                    title={content.title}
                    txt={content.txt}
                    image={content.image}
                    link={content.link}
                    action={content.action}
                    isAction={content.isAction}
                  />
                </InnerFlexBox>
              ))}
            </OuterFlexBox>
          </InnerContainer>
        </OuterContainer>
      </div>
    );
  }
}

export default Involve;
