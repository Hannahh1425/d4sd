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
  txt: "D4SD 2020 theme is Sustainable Cities, inspired by the United Nations 17 goals for a more inclusive, safe, resilient and sustainable world. Check out the challenge briefs to see the problem space that you could explore and sign up to be part of this innovative process for the city’s future!",
  action: "Join our Mailing List",
  link: "http://eepurl.com/c2kFon"
}

const content = [
  {
    id: 1,
    src: home1,
    isAction: false,
    title: "How can we create a San Diego where we all move freely?",
    txt: "Mobility is an everyday problem as people commute to work, go to school, go out to eat and surf in the sea on a daily basis. As people are looking for a more efficient way to move around, the mission of reducing our emissions and increasing the inclusivity of transportation continues to be an essential topic/point of discussion in our urban environments.",
    action: "",
    link: "http://eepurl.com/c2kFon"
  },
  {
    id: 2,
    src: home2,
    isAction: false,
    title: "How can we help San Diego prepare for and mitigate climate change?",
    txt: "Climate change is one of the most complex issues facing the planet today. Scientists have high confidence that global temperatures will continue to rise for decades to come, largely due to greenhouse gases produced by human activities. As climate change involves many dimensions – science, economics, society, politics, and moral and ethical questions, it seems intimidating to resolve a problem of this scale and severity. However, there are many solid actions that we can take on a local scale to mitigate and adapt to climate change, such as reducing sources of greenhouse gases and planning for heatwaves and higher temperatures.",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon"
  },
  {
    id: 3,
    src: home3,
    isAction: false,
    title: "How can we reimagine housing to make it more accessible to everyone?",
    txt: "We are all tied together by our need for some basic shelter. As such, housing is a wide-reaching issue which impacts the lives of all who live in San Diego County. Embedded in the topic of housing are a number of subsidiary problems such as homelessness, IoT, affordable housing, and materials/resources.",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon"
  },
  {
    id: 4,
    src: home4,
    isAction: false,
    title: "How can we help all San Diegans live healthy and active lives?",
    txt: "Health is determined by social and physical environments and is directly connected to how people live, learn, work, and play. San Diego is one of the most populated areas in the California region, with a population of 3,337,685. With such a wide population, meeting the residents of San Diego where they are and providing them with the necessary health care becomes difficult at scale, despite it being essential to a sustainable urban environment.",
    action: "Get Involved",
    link: "http://eepurl.com/c2kFon"
  }
]

const content5 = {
  id: 5,
  src: home5,
  isAction: false,
  title: "How can we work together to address these challenges?",
  txt: "Design for San Diego (D4SD) is a civic design initiative that brings together innovators, designers, mentors and experts to address the region’s most challenging issues through human-centered design. Our aim is to provide a space that allows for the community to engage key civic issues, prototype solutions to the problems they see, and link them to resources in their communities that can bring those solutions to life.",
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
