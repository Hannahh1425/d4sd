import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { OuterContainer, InnerContainer, OuterFlexBox, InnerFlexBox } from '../assets/css/containers.js';
// import { Btn } from '../assets/css/buttons.js';
import HeaderCard from '../components/landing/HeaderCard';
import FooterCard from '../components/landing/FooterCard';
import ResourcesCard from '../components/landing/ResourcesCard';
import header from '../assets/img/resource_header.svg';
import { resourcesContent, involveContent } from '../assets/content.js';



class Resources extends Component {
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
        <HeaderCard title={resourcesContent.title1} content={resourcesContent.content1} bg={header} isAction="true"/>
        <br/><br/>
        <OuterContainer>
          <InnerContainer>
            <OuterFlexBox>
              {resourcesContent.resource.map((resource, i) => (
                <InnerFlexBox half key={i}>
                  <ResourcesCard
                    involve="false"
                    title={resource.title}
                    txt={resource.content}
                    image={resource.image}
                    link={resource.link}
                    action={resource.action}
                    isAction={resource.isAction}
                    new={resource.new}
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

export default Resources;
