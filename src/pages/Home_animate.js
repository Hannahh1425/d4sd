import React, { Component, useRef, useState } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import { Transition, animated } from 'react-spring/renderprops';
import Zoom from 'react-reveal/Zoom';
import 'intersection-observer';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import home0 from '../img/home_landing.png';
import home1 from '../img/home_mobility.png';
import home2 from '../img/home_climate.png';
import home3 from '../img/home_housing.svg';
import home4 from '../img/home_health.svg';
import home5 from '../img/home_about.png';
import './style.css';

const content = [
  {
    id: 0,
    src: home0,
    animate: false,
    title: "How can we make San Diego a more sustainable city?",
    txt: "San Diego is an amazing place to live, but like any city, faces some difficult challenges that we must face together. In order to address these complex problems, we introduce Design for San Diego (D4SD), -- which is a city-wide initiative centered on using human-centered design and crowdsourcing to explore solutions for issues related to mobility, housing, health, and climate."
  },
  {
    id: 1,
    src: home1,
    animate: false,
    title: "How can create a San Diego where we all move freely?",
    txt: "Mobility is an everyday problem as people commute to work, go to school, go out to eat and surf in the sea on a daily basis. As people are looking for a more efficient way to move around, the mission of reducing our emissions and increasing the inclusivity of transportation continues to be an essential topic/point of discussion in our urban environments."
  },
  {
    id: 2,
    src: home2,
    animate: false,
    title: "How can we help San Diego prepare for and mitigate climate change?",
    txt: "Climate change is one of the most complex issues facing the planet today. Scientists have high confidence that global temperatures will continue to rise for decades to come, largely due to greenhouse gases produced by human activities. As climate change involves many dimensions – science, economics, society, politics, and moral and ethical questions, it seems intimidating to resolve a problem of this scale and severity. However, there are many solid actions that we can take on a local scale to mitigate and adapt to climate change, such as reducing sources of greenhouse gases and planning for heatwaves and higher temperatures."
  },
  {
    id: 3,
    src: home3,
    animate: false,
    title: "How can we reimagine housing to make it more accessible to everyone?",
    txt: "We are all tied together by our need for some basic shelter. As such, housing is a wide-reaching issue which impacts the lives of all who live in San Diego County. Embedded in the topic of housing are a number of subsidiary problems such as homelessness, IoT, affordable housing, and materials/resources."
  },
  {
    id: 4,
    src: home4,
    animate: false,
    title: "How can we help all San Diegans live healthy and active lives?",
    txt: "Health is determined by social and physical environments and is directly connected to how people live, learn, work, and play. San Diego is one of the most populated areas in the California region, with a population of 3,337,685. With such a wide population, meeting the residents of San Diego where they are and providing them with the necessary health care becomes difficult at scale, despite it being essential to a sustainable urban environment."
  },
  {
    id: 5,
    src: home5,
    animate: false,
    title: "How can we work together to address these challenges?",
    txt: "Design for San Diego (D4SD) is a civic design initiative that brings together innovators, designers, mentors and experts to address the region’s most challenging issues through human-centered design. Our aim is to provide a space that allows for the community to engage key civic issues, prototype solutions to the problems they see, and link them to resources in their communities that can bring those solutions to life."
  }
]

class Home extends Component {
  constructor() {
    super();
    const images = [home0, home1, home2, home3, home4, home5];
    //Target element
    this.ref0 = React.createRef();
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();

    this.loadPolyfills = this.loadPolyfills.bind(this);

    this.state = ({
      currentImg: home0,
      animate: false
    });

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          console.log("calllled");
          console.log(entry);
          if (entry.isIntersecting === true) {
            console.log("is intersectiongggg");
            console.log("id: " + `home${entry.target.id}`);
            this.setState({currentImg: images[entry.target.id]});
            this.setState({animate: true});
            console.log(window);
            console.log(this[`ref${entry.target.id}`].current.scrollTop);
            window.scrollTo({
               top: this[`ref${entry.target.id}`].current.offsetTop,
               behavior: 'smooth'
           });
           console.log("insideloop");
           console.log(this.state.animate);
          }
          console.log("is noooooooooot intersectiongggg");
          this.setState({animate: false});
          console.log("outsideloop");
          console.log(this.state.animate);
        }
        );
      },
      {
        // root: this.rootRef.current,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
  }

  componentDidMount() {
    this.loadPolyfills();
    for (let i = 0; i < 6; i++) {
      console.log(this[`ref${i}`]);
      this.observer.observe(this[`ref${i}`].current);
    }
  }

  async loadPolyfills() {
    if (typeof window.IntersectionObserver === 'undefined') {
      await import('intersection-observer')
    }
  }

  render() {
  return (
      <div id="home">
        <Navbar/>
        <div>
          {content.map((content, i) => (
            <div className="vh-100" ref={this[`ref${i}`]} key={i} id={i} style={{"minHeight":"1px"}}>
              <br/><br/><br/><br/><br/>
              <h2 className="home-content">{content.title}</h2><br/>
              <h5 className="home-content">{content.txt}</h5>
            </div>
          ))}
          <Transition
            items={this.state.currentImg}
            from={{
              opacity: 0,
              transform: 'translate3d(100%,0,0)',
              position: 'fixed',
              width: '100%'
            }}
            enter={{
              opacity: 1,
              transform: 'translate3d(0%,0,0)',
              width: '100%',
              position: 'fixed',
              bottom: 0
            }}
            leave={{
              opacity: 0,
              transform: 'scale(3, 3)',
              position: 'fixed',
              bottom: -200,
              objectFit: 'cover',
              width: '200%'
            }}>
            {item => props => <animated.div style={props}><img src={item} className="w-100"/></animated.div>}
          </Transition>
        </div>
      </div>
    );
  }
}

export default Home;
