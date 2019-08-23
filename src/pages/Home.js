import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/landing/Button';
import styled from 'styled-components';

import home0 from '../img/home_landing.svg';
import home1 from '../img/home_mobility.svg';
import home2 from '../img/home_climate.svg';
import home3 from '../img/home_housing.svg';
import home4 from '../img/home_health.svg';
import home5 from '../img/home_about.svg';

import './style.css';

const content1 = {
  id: 0,
  src: home0,
  isAction: true,
  title: "How can we make San Diego a more sustainable city?",
  txt: "San Diego is an amazing place to live, but like many cities, faces a number of difficult questions around improving public access to transportation, affordable housing, and health services. Simultaneously, global temperatures continue to rise, adding another layer of complexity to these existing problems. As a result, the issue becomes how can we sustain these civic resources in the face of climate change? Design for San Diego (D4SD)is a city-wide initiative centered on using human-centered design to develop solutions to these vexing civic challenges.",
  action: "Join our Mailing List",
  link: "http://eepurl.com/c2kFon"
}

const content = [
  {
    id: 1,
    src: home1,
    isAction: false,
    title: "How might we help people move more easily through our city?",
    txt: "Mobility is an everyday problem as people commute to work, go to school, go out to eat and surf in the sea on a daily basis. As people are looking for a more efficient way to move around, the mission of reducing our emissions and increasing the inclusivity of transportation continues to be an essential topic/point of discussion in our urban environments.",
    action: "",
    link: "http://eepurl.com/c2kFon"
  },
  {
    id: 2,
    src: home2,
    isAction: false,
    title: "How can we help San Diego prepare for and mitigate climate change?",
    txt: "Climate change is one of the most complex issues facing the planet today. Scientists have high confidence that global temperatures will continue to rise for decades to come, largely due to greenhouse gases produced by human activities. As climate change involves many dimensions – science, economics, society, politics, and moral and ethical questions, it seems intimidating to resolve a problem of this scale and severity. What steps might people adopt to mitigate and adapt to climate change?  How might we help people to reduce greenhouse gas emissions?",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon"
  },
  {
    id: 3,
    src: home3,
    isAction: false,
    title: "How can we reimagine housing to meets the needs of all San Diegans?",
    txt: "After food and water, shelter is the most fundamental human need. As such, housing is an issue which extends into the lives of all San Diegans. However, housing is just limited to the building itself but extends to other areas such as  homelessness, IoT,affordability, material/resources, etc. Since housing is central to everyday life, everyday people should be able to join the conversation, and begin to generate solutions to some of their housing related problems. ",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon"
  },
  {
    id: 4,
    src: home4,
    isAction: false,
    title: "How can we help all San Diegans live healthy and active lives?",
    txt: "Many factors affect public health outcomes.  San Diego is one of the most populated regions in California, yet many people have limited access to preventative and restorative health services.  What steps might San Diego take to improve the availability of health care?  As our community continues to grow, how might we improve the capacity of existing health services to reach, treat, and follow up with more people?",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon"
  }
]

const content5 = {
  id: 5,
  src: home5,
  isAction: false,
  title: "What steps can we take to make San Diego a more sustainable?",
  txt: "Design for San Diego (D4SD) is a civic initiative that brings together innovators, designers, mentors and community leaders to address our region’s most challenging issues through human-centered design.  D4SD 2020 will tackle issues related to climate change and public access to transportation, housing, and health care. Our aim is to provide both online and in-person spaces for the San Diego community to discuss these critical civic issues, to prototype solutions, and to find ways to kickstart the most viable solutions by identifying resources, investors, and community partners.",
  action: "Explore your own Problem Space!",
  link: "https://docs.google.com/forms/d/1LyUHMOctPmt9wL9FhtSyKi3ZR-43G172RuPq4aQC6Y0/edit"
}

const Relative = styled.div `
  position: relative;
`
const Absolute = styled.div`
  position: absolute;
  width: 50%;
  top: 8em;
`

class Home extends Component {
  constructor() {
    super();
    this.state = ({
      loaded: false
    })
  }
  componentDidMount () {
    console.log("load?")
    console.log(this.state.loaded);
  }

  load = () => {
    this.setState({loaded: true});
    console.log(this.state.loaded);
  }
  render() {
  return (
    <div>
    <div id="home">
      <Navbar/>
      <div>
        <div className="position-relative">
          <div className="home-content">
            <div style={{"position":"relative"}}>
              <h2>{content1.title}</h2>
              <h5>{content1.txt}</h5>
              <br/>
              <div className="pl-3">
                <a href={content1.link} className="btn-style-big" target="_blank">{content1.action}</a>
              </div>
            </div>
          </div>
          <img src={content1.src} className="w-100" onLoad={this.load}/>
        </div>
        {content.map((content, i) => (
          <div key={i} id={i} style={{"position":"relative"}}>
            <div className="home-content">
              <div style={{"position":"relative"}}>
                <h2>{content.title}</h2>
                <h5>{content.txt}</h5>
              </div>
            </div>
            <img src={content.src} className="w-100" onLoad={this.load}/>
          </div>
        ))}
        <div style={{"position":"relative"}}>
          <div className="home-content">
            <div style={{"position":"relative"}}>
              <h2>{content5.title}</h2>
              <h5>{content5.txt}</h5>
              <br/>
              <div className="pl-3">
                <a href={content5.link} className="btn-style-big" target="_blank">{content5.action}</a>
              </div>
            </div>
          </div>
          <img src={content5.src} className="w-100" onLoad={this.load}/>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Home;
