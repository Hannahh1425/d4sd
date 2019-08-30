import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox } from '../assets/css/containers.js';
import { FullImg, IconImg } from '../assets/css/images.js';
import { H2, H4, H5, A } from '../assets/css/fonts.js';
import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../components/landing/HeaderCard';
import FooterCard from '../components/landing/FooterCard';
import RoleCard from '../components/landing/RoleCard';
import header from '../img/involve_header.svg';
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
        <HeaderCard title="Get Involved" content="You can take part in D4SD in a variety of ways! Whether it be ideating solutions, giving feedback, teaching civic design in the classroom, or supporting the initiative, getting involved with D4SD can look a little different for each person. Below are a few ways to get involved." bg={header} isAction="true"/>
        <br/><br/>
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
        <br/><br/>
        <FooterCard/>
      </div>
    );
  }
}

export default Involve;
